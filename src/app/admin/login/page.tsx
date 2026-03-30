"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Invalid credentials.");
      }

      router.push("/admin/leads");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <span className="text-3xl font-bold tracking-tight">
            <span className="text-foreground">am</span>
            <span className="gradient-text">fire</span>
          </span>
          <p className="text-sm text-muted-foreground mt-2">Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl border border-border bg-card">
          <div>
            <h1 className="text-xl font-bold text-foreground mb-1">Sign in</h1>
            <p className="text-sm text-muted-foreground">Access your admin dashboard.</p>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
            <input
              id="email" name="email" type="email" required autoComplete="email"
              placeholder="admin@amfire.in"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
            <div className="relative">
              <input
                id="password" name="password" type={showPassword ? "text" : "password"} required autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 pr-11 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-bg text-white font-medium hover:opacity-90 active:scale-[0.97] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in…" : (<><LogIn size={16} /> Sign In</>)}
          </button>
        </form>
      </div>
    </div>
  );
}
