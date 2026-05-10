# Glorda – غلوردا

Premium bilingual (Arabic RTL / English LTR) marketing landing page for Glorda, a Saudi marketplace for flowers, cakes, gifts, and sweets.

## Run & Operate

- `pnpm --filter @workspace/glorda-landing run dev` — run the landing page dev server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4
- Animations: Framer Motion
- Routing: Wouter
- i18n: custom React Context (AR default, EN toggle)
- Icons: react-icons + custom SVG paths

## Where things live

- `artifacts/glorda-landing/src/` — main landing page source
- `artifacts/glorda-landing/src/pages/` — Home, About, Privacy, Terms, Support, FAQ
- `artifacts/glorda-landing/src/components/sections/` — Hero, About, Features, HowItWorks, Merchants, AppScreenshots, Testimonials, Download, Footer
- `artifacts/glorda-landing/src/lib/i18n.tsx` — bilingual content (AR/EN)
- `artifacts/glorda-landing/src/index.css` — Tailwind + custom CSS tokens
- `artifacts/glorda-landing/src/assets/` — brand images and screenshots

## Architecture decisions

- Arabic-first RTL design; language toggle switches dir and all text
- Tailwind v4 with custom color tokens: primary `#A51245` (crimson), secondary `#C8963E` (gold)
- Wouter for client-side routing with lazy-loaded pages
- All icons are custom SVG or react-icons (no emoji)

## Product

Glorda landing page with full marketing sections: hero with phone mockup, about/categories, features, how-it-works, merchant dashboard preview, app screenshots carousel, testimonials, download CTA (App Store + Google Play), and footer. Fully bilingual AR/EN with RTL support.

## User preferences

_Populate as you build._

## Gotchas

- The app is a static Vite SPA — no backend or API required
- `BASE_URL` env var is wired by workflow; always use `import.meta.env.BASE_URL` for routing base

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
