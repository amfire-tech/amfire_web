import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Globe, Monitor, Code2, Palette, ShoppingCart, Plug,
  Smartphone, Bot, Brain, MessageSquare, FileSearch, Sparkles,
  Workflow, Link2, Cog, BarChart3,
  Cloud, Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | amfire",
  description:
    "End-to-end digital products — web platforms, mobile apps, AI agents, automation, cloud infrastructure, and UI/UX design.",
};

const serviceCategories = [
  {
    id: "web",
    title: "Web & Digital Products",
    items: [
      {
        icon: Globe,
        title: "Custom Website Development",
        description:
          "Marketing sites, landing pages, company portals — pixel-perfect, fast-loading, and SEO-optimised.",
      },
      {
        icon: Monitor,
        title: "Web Application Development",
        description:
          "Complex multi-user platforms, dashboards, and SaaS tools with full authentication and role-based access.",
      },
      {
        icon: Code2,
        title: "SaaS Product Development",
        description:
          "End-to-end SaaS builds: subscription billing, multi-tenant architecture, onboarding flows, and scalable APIs.",
      },
      {
        icon: Palette,
        title: "UI / UX Design",
        description:
          "Figma-based, user-tested design systems. We build the design before a single line of code is written.",
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce & Marketplace",
        description:
          "Buy/sell platforms, course marketplaces, product stores with payment gateway integration and analytics.",
      },
      {
        icon: Plug,
        title: "API Integration & Development",
        description:
          "Connect any third-party service — payments, messaging, ERP, CRM — into a unified backend.",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    items: [
      {
        icon: Smartphone,
        title: "React Native Apps (iOS + Android)",
        description:
          "Single codebase, dual platform. Production-grade mobile apps with offline support and push notifications.",
      },
      {
        icon: Monitor,
        title: "Mobile-First Web Apps (PWA)",
        description:
          "Progressive Web Apps that install like native apps — no app store required. Ideal for school and B2B tools.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    items: [
      {
        icon: Bot,
        title: "AI Agents & Agentic Workflows",
        description:
          "Autonomous AI agents that perform tasks, make decisions, and coordinate with each other 24/7 without human intervention.",
      },
      {
        icon: Brain,
        title: "LLM Integration (GPT / Gemini / Claude)",
        description:
          "Embed large language model capabilities into any product — content generation, Q&A, summarisation, classification.",
      },
      {
        icon: MessageSquare,
        title: "AI Chatbots & Conversational AI",
        description:
          "Custom chatbots trained on your data — for customer support, internal tools, lead generation, or student tutoring.",
      },
      {
        icon: Smartphone,
        title: "WhatsApp Business Automation",
        description:
          "Automated WhatsApp workflows: lead follow-ups, order updates, appointment reminders, and AI-powered replies.",
      },
      {
        icon: FileSearch,
        title: "RAG Systems (Document AI)",
        description:
          "Upload PDFs, manuals, or docs and let an AI answer questions from them — powered by Retrieval-Augmented Generation.",
      },
      {
        icon: Sparkles,
        title: "Adaptive & Intelligent Systems",
        description:
          "ML models that learn user behaviour — adaptive quizzes, personalised recommendations, risk detection, anomaly alerts.",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation & Integrations",
    items: [
      {
        icon: Workflow,
        title: "Business Process Automation",
        description:
          "Eliminate manual workflows — automated reporting, data pipelines, scheduled tasks, and notification systems.",
      },
      {
        icon: Link2,
        title: "No-Code / Low-Code Integrations",
        description:
          "Connect tools like Notion, Google Workspace, Airtable, and Zapier into automated business workflows.",
      },
      {
        icon: Cog,
        title: "CRM & ERP Integrations",
        description:
          "Sync sales pipelines, inventory, and customer data across platforms with real-time two-way integration.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Reporting Dashboards",
        description:
          "Live data dashboards with charts, exports, and scheduled AI-generated insight reports for decision-makers.",
      },
    ],
  },
  {
    id: "cloud",
    title: "Infrastructure & Cloud",
    items: [
      {
        icon: Cloud,
        title: "Cloud Setup & DevOps",
        description:
          "Deployment on AWS, GCP, Hetzner, or DigitalOcean with CI/CD pipelines, SSL, and DNS configuration.",
      },
      {
        icon: Database,
        title: "Database Architecture",
        description:
          "Scalable schema design, multi-tenant isolation, query optimisation for high-performance applications.",
      },
    ],
  },
];

const phases = [
  { step: "01", title: "Discovery & Architecture", description: "Tech stack, DB schema, AI service design, project kickoff" },
  { step: "02", title: "UI / UX Development", description: "All screens — responsive, pixel-perfect, Figma-accurate" },
  { step: "03", title: "Backend & Core APIs", description: "Auth, roles, core modules, APIs, database" },
  { step: "04", title: "AI Integration Sprint", description: "Every intelligent feature built, tested, and production-tuned" },
  { step: "05", title: "QA & Performance", description: "End-to-end testing, role validation, load testing, AI accuracy" },
  { step: "06", title: "Staging Delivery", description: "Live staging URL, client walkthrough, feedback loop" },
  { step: "07", title: "Production Launch", description: "Deployment, DNS, SSL, handover docs, AI model tuning" },
];

const techTags = [
  "LLMs", "RAG", "Multi-Agent Systems", "Computer Vision", "NLP",
  "React", "React Native", "Next.js", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "Redis", "Vector DBs", "LangChain",
  "AWS", "GCP", "Docker", "CI/CD",
  "GPT-4o", "Gemini", "Claude", "TensorFlow",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              What We Do
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl leading-[1.1]">
              Complete software.{" "}
              <span className="gradient-text">Real intelligence.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              amfire delivers end-to-end digital products — from the first pixel to the deployed AI agent running in production.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Categories ────────────────────────────────────── */}
      {serviceCategories.map((category, catIdx) => (
        <section
          key={category.id}
          id={category.id}
          className={catIdx % 2 === 1 ? "py-16 md:py-24 bg-secondary/30" : "pb-16 md:pb-24"}
        >
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10">
                {category.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.06}>
                  <div className="group p-7 rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full active:scale-[0.98]">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                      <service.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Development Approach ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Milestone-Driven. No Surprises.
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mb-16">
              Every project follows a structured pipeline. You see progress at every stage — not just at the end.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-border hidden md:block" />
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.step} delay={i * 0.08}>
                <div className="flex items-start gap-6 py-5">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0 text-white text-xs font-bold relative z-10">
                    {phase.step}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-foreground">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{phase.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <p className="mt-10 text-sm text-primary font-medium max-w-lg">
              Phase 04 — the AI Integration Sprint — is unique to amfire's pipeline. No other vendor in this space includes it as a standalone milestone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tech Capabilities ─────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Tech Capabilities
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Tools and frameworks we work with daily.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-secondary text-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Ready to build with{" "}
              <span className="gradient-text">amfire?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Tell us what you're building. We'll put together a detailed proposal within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-white font-medium hover:opacity-90 active:scale-[0.97] transition-all"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
