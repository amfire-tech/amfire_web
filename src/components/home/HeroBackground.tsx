"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary orange blob — top right (animates the existing static glow) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "-25%",
          right: "-18%",
          background: "radial-gradient(circle, hsl(5 77% 57% / 0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.12, 0.94, 1], x: [0, 40, -20, 0], y: [0, -30, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary accent blob — mid-left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          top: "30%",
          left: "-8%",
          background: "radial-gradient(circle, hsl(25 87% 58% / 0.07) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{ scale: [1, 1.2, 0.9, 1], x: [0, 30, -15, 0], y: [0, 40, -25, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Subtle blue blob — bottom right (AI accent) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 380,
          height: 380,
          bottom: "5%",
          right: "15%",
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ scale: [1, 1.15, 0.92, 1], x: [0, -25, 15, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
    </div>
  );
}
