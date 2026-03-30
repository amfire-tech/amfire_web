# amfire — Website

Marketing website for **amfire** — an AI-First digital solutions agency.

Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

---

## Tech stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.2.1 | Framework (App Router) |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Styling (CSS-first, no config file) |
| Framer Motion | 12 | Scroll animations, hero blobs |
| Lucide React | latest | Icons |
| clsx + tailwind-merge | latest | Conditional class merging (`cn()`) |
| Zod | 4 | Form validation (ready to wire up) |

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev        # http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## Project structure

```
src/
├── app/                    # Next.js App Router — pages & global config
│   ├── globals.css         # Design tokens (colors, fonts, theme), Tailwind setup
│   ├── layout.tsx          # Root layout: Navbar, metadata, dark-mode script
│   └── page.tsx            # Homepage — assembles sections, imports from data/
│
├── components/
│   ├── layout/             # Site-wide layout pieces
│   │   ├── Navbar.tsx      # Top nav: dropdowns, mobile menu, dark/light toggle
│   │   └── Footer.tsx      # Footer: newsletter, social links, nav columns
│   │
│   ├── ui/                 # Reusable utility components (used across any page)
│   │   ├── ScrollReveal.tsx    # Framer Motion scroll-aware fade-in wrapper
│   │   └── FloatingButtons.tsx # WhatsApp + back-to-top floating buttons
│   │
│   └── home/               # Homepage section components
│       ├── AnimatedTagline.tsx     # Cycling hero tagline phrases
│       ├── HeroBackground.tsx      # Animated gradient mesh behind hero
│       ├── ServiceCard.tsx         # Single service card with 3D tilt effect
│       ├── ServicesCarousel.tsx    # Mobile-only auto-sliding services carousel
│       ├── WhyAmfireCards.tsx      # Auto-rotating "Why amfire" cards (3 at a time)
│       ├── IndustryCard.tsx        # Industry card with hover/tap tooltip
│       ├── TestimonialsCarousel.tsx # Client testimonials with auto-advance + controls
│       ├── TrustedBy.tsx           # Auto-scrolling logo marquee
│       └── NewsletterForm.tsx      # Email signup form (stub — wire to API)
│
├── data/
│   └── home.ts             # ← ALL homepage content lives here
│                           #   Edit to update stats, services, testimonials, etc.
│
├── constants/
│   └── navigation.ts       # ← Nav links and footer links
│
├── types/
│   └── index.ts            # Shared TypeScript interfaces
│
└── lib/
    └── utils.ts            # cn() utility for merging Tailwind classes
```

---

## Common tasks

### Edit homepage content
All copy, icons, and data for the homepage lives in **`src/data/home.ts`**.
No component changes needed — just edit the arrays in that file.

### Edit nav / footer links
Edit **`src/constants/navigation.ts`**.

### Add a new page
Create `src/app/your-page/page.tsx`. Navbar and Footer appear automatically from the root layout.

### Change brand colors
Edit CSS variables in **`src/app/globals.css`** under `:root` (light) and `.dark` (dark mode).

### Add a new homepage section
1. Create `src/components/home/MySection.tsx`
2. Add any data it needs to `src/data/home.ts`
3. Import and place it in `src/app/page.tsx`

### Add environment variables
Copy `.env.example` to `.env.local` and fill in values. Never commit `.env.local`.

---

## Important notes for contributors

- **Tailwind v4** is CSS-first — no `tailwind.config.ts`. Theme tokens live in `globals.css` inside `@theme inline {}`.
- **Server vs Client components**: Components with `useState`, event handlers, or browser APIs need `"use client"` at the top. Icons passed from Server → Client must be pre-rendered JSX (`<Icon size={20} />`), not component references.
- **Dark mode**: Toggled by adding/removing the `dark` class on `<html>`. Persisted in `localStorage`. An inline `<script>` in `layout.tsx` prevents flash on reload.
- **Path alias**: `@/` maps to `src/`. Always use `@/` imports, not relative paths like `../../`.
