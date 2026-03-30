import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, password } = body;

  /* ── TODO: replace with Supabase auth when wired ──────────────
   *
   * const { data, error } = await supabase.auth.signInWithPassword({ email, password });
   * if (error) return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
   *
   * ─────────────────────────────────────────────────────────── */

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@amfire.in";
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "changeme";

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true }, { status: 200 });
  response.cookies.set("amfire_admin", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return response;
}
