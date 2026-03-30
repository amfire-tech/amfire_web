"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-[100px] md:text-[140px] font-bold leading-none gradient-text mb-4 select-none">
          500
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          An unexpected error occurred. Our team has been notified. Please try again or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 active:scale-[0.97] transition-all"
          >
            <RefreshCw size={15} /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 hover:border-primary/30 active:scale-[0.97] transition-all"
          >
            <Home size={15} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
