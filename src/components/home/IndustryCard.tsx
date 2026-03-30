"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Props = {
  icon: React.ReactNode;
  name: string;
  href: string;
  useCases: string[];
};

export function IndustryCard({ icon, name, href, useCases }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close when tapping outside on mobile
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | TouchEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        className="group p-4 sm:p-5 md:p-6 rounded-xl border border-border bg-card text-center hover:shadow-md hover:border-primary/25 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col items-center justify-center gap-2 md:gap-3"
      >
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">{name}</p>
      </Link>

      {/* ℹ button — shown only on touch/mobile */}
      <button
        className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-secondary border border-border flex items-center justify-center text-[10px] font-bold text-muted-foreground md:hidden z-20 leading-none"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        aria-label="Show use cases"
        aria-expanded={open}
      >
        i
      </button>

      {/* Tooltip — state-controlled for both desktop hover and mobile tap */}
      <div
        style={{
          opacity: open ? 1 : 0,
          transform: open
            ? "translateY(0) translateX(-50%)"
            : "translateY(4px) translateX(-50%)",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          pointerEvents: "none",
        }}
        className="absolute bottom-[calc(100%+8px)] left-1/2 w-44 rounded-xl border border-border bg-card shadow-lg p-3 z-50 text-left"
        role="tooltip"
      >
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Use cases
        </p>
        <ul className="space-y-1.5">
          {useCases.map((uc) => (
            <li key={uc} className="flex items-start gap-1.5 text-xs text-foreground">
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              {uc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
