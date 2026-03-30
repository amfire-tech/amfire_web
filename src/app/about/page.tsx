import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Zap, Code2, Globe, FileText, Network, HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | amfire",
  description:
    "One team, full accountability. We are an AI engineering team that builds intelligent digital products end-to-end.",
};

const values = [
  {
    icon: Zap,
    title: "Real AI, Not a Dashboard",
    description:
      "We build adaptive engines, autonomous agents, and ML models running in production — not a static graph relabelled 'AI Insights'.",
  },
  {
    icon: Code2,
    title: "Full-Stack Ownership",
    description:
      "Frontend, backend, AI, deployment. One team, one point of contact. No vendor-blaming, no handoff gaps, no 'that's out of scope'.",
  },
  {
    icon: Globe,
    title: "India-First Engineering",
    description:
      "We understand Indian workflows, business hierarchies, and the reality of Indian IT infrastructure. Not a Western SaaS forced into an Indian context.",
  },
  {
    icon: FileText,
    title: "Transparent Scope",
    description:
      "What is written in our proposals is exactly what gets built. No hidden charges. No 'that feature is extra' surprises after signing.",
  },
  {
    icon: Network,
    title: "Agentic Architecture",
    description:
      "We build multi-agent systems where specialised AI agents coordinate autonomously 24/7 — enterprise-grade AI, packaged for real businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Launch Partnership",
    description:
      "Every project includes dedicated support post-delivery. We stay. Not a ticket queue — a real team that monitors and improves your product.",
  },
];

const paymentMilestones = [
  { percent: "20%", label: "Project kickoff and contract sign" },
  { percent: "30%", label: "UI + core backend delivery on staging" },
  { percent: "25%", label: "AI integration complete and tested" },
  { percent: "25%", label: "Production launch and handover" },
];

const transparency = [
  "Scope is agreed in writing before development begins",
  "Scope changes are quoted and agreed in writing — never billed silently",
  "Server, hosting, domain, and AI API costs are paid directly by you — zero vendor lock-in",
  "All code and IP is transferred to you on final payment",
];

const support = [
  "Bug fixes and deployment support during free support period",
  "Monthly maintenance available at a fixed monthly fee",
  "Priority support and dedicated account management on request",
  "Monthly review calls for larger ongoing partnerships",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Mission ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              About Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.08]">
              One team.{" "}
              <span className="gradient-text">Full accountability.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We are an AI engineering team that builds intelligent digital products. Every platform we ship has machine
              intelligence woven into its core — not added as a dashboard after the fact. From custom web platforms and
              mobile apps to autonomous AI agents and agentic workflows — we build complete, production-grade software
              for businesses that want to move faster with AI.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why amfire ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why amfire
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mb-16">
              Six commitments that shape every engagement.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.07}>
                <div className="p-8 rounded-xl border border-border bg-card h-full">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-5">
                    <value.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Model ─────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Payment milestones */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                  How we engage
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Every project uses a milestone-based payment model. You pay as value is delivered — not upfront in full.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {paymentMilestones.map((m, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                      <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                        <span className="text-white text-sm font-bold">{m.percent}</span>
                      </div>
                      <p className="text-sm text-foreground font-medium">{m.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Transparency + support */}
            <div>
              <ScrollReveal delay={0.15}>
                <h3 className="text-xl font-bold text-foreground mb-6">What's always transparent</h3>
                <ul className="space-y-4">
                  {transparency.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <h3 className="text-xl font-bold text-foreground mb-6 mt-10">Support after launch</h3>
                <ul className="space-y-4">
                  {support.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
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
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
