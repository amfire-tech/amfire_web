"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ServiceCard({ href, icon, title, description }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 8;    // –4 to +4 deg
    const y = ((e.clientY - top) / height - 0.5) * -8;   // –4 to +4 deg
    el.style.transition = "box-shadow 0.15s ease";
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
    el.style.boxShadow = "0 0 0 1px rgba(249,115,22,0.25), 0 8px 32px rgba(249,115,22,0.10)";
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
    el.style.transform = "";
    el.style.boxShadow = "";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group flex flex-col p-4 sm:p-5 md:p-6 lg:p-7 rounded-xl border border-border bg-card active:scale-[0.98] h-full"
      style={{ willChange: "transform" }}
    >
      <div className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-lg gradient-bg flex items-center justify-center mb-3 md:mb-4 lg:mb-5 shrink-0">
        {icon}
      </div>
      <h3 className="text-sm md:text-base lg:text-xl font-semibold text-foreground mb-1.5 md:mb-2">{title}</h3>
      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1">{description}</p>
      <div className="mt-3 md:mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        Explore <ArrowRight size={11} />
      </div>
    </Link>
  );
}
