/**
 * Homepage content data.
 *
 * Edit this file to update text, links, icons, and ordering for every
 * section on the homepage — no component files need to change.
 */

import {
  Globe, Smartphone, Brain, Zap, Cloud, Palette,
  Shield, Target, Users, Clock,
  GraduationCap, HeartPulse, ShoppingCart, Building2, TrendingUp, Rocket,
} from "lucide-react";

import type {
  Stat, ServiceItem, Differentiator, ProcessStep, IndustryItem, Testimonial,
} from "@/types";

/* ── Hero stats strip ───────────────────────────────────────────────── */

export const stats: Stat[] = [
  { value: "50+",  label: "Projects delivered" },
  { value: "98%",  label: "On-time delivery" },
  { value: "5+",   label: "Years building" },
  { value: "100%", label: "IP transferred" },
];

/* ── Services (What We Build section) ──────────────────────────────── */

export const services: ServiceItem[] = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Marketing sites, SaaS platforms, admin dashboards — pixel-perfect and production-ready.",
    href: "/services#web",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native iOS + Android apps with offline support, push notifications, and app store delivery.",
    href: "/services#mobile",
  },
  {
    icon: Brain,
    title: "AI Agents",
    description: "Autonomous agents that perform tasks, coordinate, and make decisions 24/7 without human intervention.",
    href: "/services#ai",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Eliminate manual workflows — data pipelines, WhatsApp automation, no-code integrations.",
    href: "/services#automation",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "CI/CD pipelines, containerised deployments on AWS/GCP/Hetzner with full SSL and DNS management.",
    href: "/services#cloud",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Figma-based, user-tested design systems. We design before a single line of code is written.",
    href: "/services#design",
  },
];

/* ── Why amfire (differentiators) ──────────────────────────────────── */

export const differentiators: Differentiator[] = [
  {
    icon: Zap,
    title: "Speed to Launch",
    description: "Milestone-driven delivery with transparent scope — no surprise invoices, no 'that's extra' conversations.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Clean architecture, documented APIs, automated tests. Code you can maintain years after we're done.",
  },
  {
    icon: Brain,
    title: "AI-Native by Default",
    description: "We don't bolt AI onto finished products. Intelligence is designed into the architecture from day one.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    description: "We're judged on your growth metrics, not lines of code delivered. Your success is our success.",
  },
  {
    icon: Users,
    title: "One Dedicated Team",
    description: "The team you meet in discovery is the team that builds. No outsourcing, no junior substitutes.",
  },
  {
    icon: Clock,
    title: "Post-Launch Support",
    description: "60-day support window after go-live. Bug fixes and minor updates included — no extra invoice.",
  },
];

/* ── How We Work (process steps) ───────────────────────────────────── */

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discovery & Scoping" },
  { step: "02", title: "Architecture" },
  { step: "03", title: "UI / UX Design" },
  { step: "04", title: "Frontend Build" },
  { step: "05", title: "Backend & APIs" },
  { step: "06", title: "AI Integration" },
  { step: "07", title: "Deploy & Handover" },
];

/* ── Industries we serve ────────────────────────────────────────────── */

export const industries: IndustryItem[] = [
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    href: "/industries/edtech",
    useCases: ["LMS platforms", "AI tutoring systems", "Student portals"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare & MedTech",
    href: "/industries/healthcare",
    useCases: ["Patient portals", "Appointment booking", "Teleconsult apps"],
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-Commerce",
    href: "/industries/retail",
    useCases: ["Custom storefronts", "Inventory systems", "AI recommendations"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    href: "/industries/real-estate",
    useCases: ["Listing portals", "Agent CRM", "AI valuation tools"],
  },
  {
    icon: TrendingUp,
    name: "Finance & Fintech",
    href: "/industries/fintech",
    useCases: ["Trading dashboards", "KYC automation", "Wallet apps"],
  },
  {
    icon: Rocket,
    name: "Startups & SaaS",
    href: "/industries/saas",
    useCases: ["MVP builds", "Multi-tenant SaaS", "AI feature sprints"],
  },
];

/* ── Testimonials ───────────────────────────────────────────────────── */

export const testimonials: Testimonial[] = [
  {
    quote: "amfire delivered our construction SaaS platform in 10 weeks — full AI document processing, multi-tenant architecture, and a polished UI. Best dev engagement we've had.",
    name: "Arjun Mehta",
    role: "CEO, Clearpath",
    stars: 5,
  },
  {
    quote: "They understood exactly what we needed for our EdTech platform. The AI tutor they built has dramatically improved student engagement. Genuinely impressed.",
    name: "Priya Sharma",
    role: "Founder, EduForge",
    stars: 5,
  },
  {
    quote: "The WhatsApp automation they built for our sales team saves us 15 hours a week. The delivery was on schedule and on budget — rare in this industry.",
    name: "Rohan Kapoor",
    role: "Head of Ops, Ridgeflow",
    stars: 5,
  },
  {
    quote: "amfire rebuilt our entire backend with a RAG system that reads contracts and flags risks automatically. It's become our most-loved internal tool.",
    name: "Sneha Rao",
    role: "CTO, NexaHealth",
    stars: 5,
  },
];
