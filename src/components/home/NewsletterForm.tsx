"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Placeholder — wire to real endpoint when backend is ready
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return <p className="text-xs text-green-500 py-2">You&apos;re on the list. We&apos;ll be in touch.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="shrink-0 px-3 py-2 rounded-lg gradient-bg text-white hover:opacity-90 active:scale-[0.97] transition-all disabled:opacity-50 flex items-center justify-center"
      >
        {status === "loading" ? (
          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <ArrowRight size={14} />
        )}
      </button>
    </form>
  );
}
