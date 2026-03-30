"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const logos = [
  "Clearpath",
  "Stackbloom",
  "Ridgeflow",
  "NexaHealth",
  "EduForge",
  "Finova",
  "BuildIQ",
  "TalentOS",
];

// Repeat enough times so one "set" always overflows any viewport
const SETS = 4;
const items = Array.from({ length: SETS }, () => logos).flat();

export function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);
  const x = useMotionValue(0);

  // Measure one set's pixel width after mount
  useEffect(() => {
    if (trackRef.current) {
      setWidthRef.current = trackRef.current.scrollWidth / SETS;
    }
  }, []);

  // Frame-perfect loop: move left, reset instantly when one set is consumed
  useAnimationFrame((_, delta) => {
    if (!setWidthRef.current) return;
    const next = x.get() - delta * 0.055; // px per ms → ~80px/s
    x.set(next <= -setWidthRef.current ? 0 : next);
  });

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-center">
          Trusted by teams shipping real products
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <motion.div ref={trackRef} className="flex whitespace-nowrap" style={{ x }}>
          {items.map((name, i) => (
            <span
              key={i}
              className="text-lg font-bold text-muted-foreground tracking-tight select-none shrink-0 mr-16"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
