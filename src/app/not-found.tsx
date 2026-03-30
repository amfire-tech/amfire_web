import Link from "next/link";
import { ArrowRight, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Big 404 */}
        <div className="text-[120px] md:text-[160px] font-bold leading-none gradient-text mb-4 select-none">
          404
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          This page doesn't exist
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-10">
          The page you're looking for may have moved, been deleted, or never existed. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 active:scale-[0.97] transition-all"
          >
            <Home size={15} /> Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 hover:border-primary/30 active:scale-[0.97] transition-all"
          >
            <Mail size={15} /> Contact Us
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Our Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
