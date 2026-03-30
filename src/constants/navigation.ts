import type { NavLink } from "@/types";

/** Desktop "Solutions" dropdown */
export const solutionsLinks: NavLink[] = [
  { label: "Web & App Development", href: "/services#web" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "AI Agents & Automation", href: "/services#ai" },
  { label: "Cloud & DevOps", href: "/services#cloud" },
  { label: "UI / UX Design", href: "/services#design" },
];

/** Desktop "About" dropdown */
export const aboutLinks: NavLink[] = [
  { label: "Our Story", href: "/about" },
  { label: "Work & Case Studies", href: "/work" },
  { label: "Careers", href: "/careers" },
];

/** Top-level nav links (not dropdowns) */
export const mainNavLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Footer — Services column */
export const footerServicesLinks: NavLink[] = [
  { label: "Web Development", href: "/services#web" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "AI Agents", href: "/services#ai" },
  { label: "Automation", href: "/services#automation" },
  { label: "Cloud & DevOps", href: "/services#cloud" },
];

/** Footer — Company column */
export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];
