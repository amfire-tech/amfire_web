import { NextRequest, NextResponse } from "next/server";

/* ── Simple in-memory rate limiter (per IP, resets on server restart) ─ */
const rateLimit = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, company, buildType, budget, timeline, message } = body;

  if (
    typeof name !== "string" || name.trim().length < 2 ||
    typeof email !== "string" || !email.includes("@") ||
    typeof message !== "string" || message.trim().length < 10
  ) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 422 });
  }

  const submission = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: typeof phone === "string" ? phone.trim() : null,
    company: typeof company === "string" ? company.trim() : null,
    buildType: typeof buildType === "string" ? buildType : null,
    budget: typeof budget === "string" ? budget : null,
    timeline: typeof timeline === "string" ? timeline : null,
    message: message.trim(),
    submittedAt: new Date().toISOString(),
    ip,
  };

  /* ── TODO: wire Supabase when env vars are set ──────────────────
   *
   * import { createClient } from "@supabase/supabase-js";
   * const supabase = createClient(
   *   process.env.NEXT_PUBLIC_SUPABASE_URL!,
   *   process.env.SUPABASE_SERVICE_ROLE_KEY!,
   * );
   * await supabase.from("contact_submissions").insert(submission);
   *
   * ── TODO: wire Resend email notification ─────────────────────────
   *
   * import { Resend } from "resend";
   * const resend = new Resend(process.env.RESEND_API_KEY);
   * await resend.emails.send({
   *   from: "website@amfire.in",
   *   to: "contact@amfire.in",
   *   subject: `New lead: ${submission.name} — ${submission.buildType}`,
   *   text: JSON.stringify(submission, null, 2),
   * });
   *
   * ─────────────────────────────────────────────────────────────── */

  console.log("[contact] new submission:", submission);

  return NextResponse.json({ ok: true }, { status: 200 });
}
