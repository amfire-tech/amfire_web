import type { LucideIcon } from "lucide-react";

export type { LucideIcon };

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
}

export interface IndustryItem {
  icon: LucideIcon;
  name: string;
  href: string;
  useCases: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stars: number;
}
