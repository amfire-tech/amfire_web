/**
 * Shrink the public PNGs to the size the CSS actually paints them at.
 *
 * The exports were shipped at their full canvas size — pricing art at ~1050px
 * tall for a 130px slot, process icons at 600px for a 160px slot — so the
 * homepage and pricing page pulled megabytes to draw thumbnails. Each entry
 * below is capped at 2x its CSS height (retina) and re-encoded.
 *
 * Paths stay identical, so editable content already pointing at these files
 * keeps working. Run after adding or replacing art:
 *
 *   node --experimental-strip-types scripts/optimize-images.ts
 */
import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/** CSS height of the slot each group renders into — see amfire.css. */
const GROUPS = [
  { dir: "public/amfire-design/pricing", cssHeight: 130 }, // .pay-col img
  { dir: "public/amfire-design/process", cssHeight: 160 }, // .icon-slot
];

const RETINA = 2;
const kb = (n: number) => (n / 1024).toFixed(0).padStart(5) + " KB";

let before = 0;
let after = 0;

for (const { dir, cssHeight } of GROUPS) {
  const maxHeight = cssHeight * RETINA;

  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".png")) continue; // SVGs are already small
    const file = join(dir, name);
    const was = statSync(file).size;

    const source = await sharp(file).toBuffer(); // read fully: we overwrite in place
    const meta = await sharp(source).metadata();
    if (!meta.height) continue;

    const buffer = await sharp(source)
      .resize({ height: Math.min(meta.height, maxHeight), withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 85, effort: 10 })
      .toBuffer();

    // Never make a file bigger than it already was.
    if (buffer.length >= was) {
      console.log(`${kb(was)} → unchanged  ${file}`);
      before += was;
      after += was;
      continue;
    }

    await sharp(buffer).toFile(file);
    const now = statSync(file).size;
    before += was;
    after += now;
    console.log(`${kb(was)} → ${kb(now)}  ${file}`);
  }
}

console.log(`\nTotal ${kb(before)} → ${kb(after)}  (${(100 - (after / before) * 100).toFixed(0)}% smaller)`);
