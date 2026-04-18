# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Glorda Landing Page (`artifacts/glorda-landing`)

Premium bilingual (Arabic RTL / English LTR) marketing landing page for "Glorda – غلوردا", a Saudi marketplace for flowers, cakes, gifts, and sweets.

### Sections
- **Navbar** — Scroll-aware fixed top bar, white logo, language toggle (AR/EN), App Store CTA, mobile drawer
- **Hero** — Full-viewport crimson background, phone mockup with app UI, stat row, bottom wave
- **About** — 4 category cards (flowers, cakes, gifts, sweets) with custom SVG icons, feature checklist, info cards
- **Features** — 5 feature cards in 3-2 layout with custom SVG icons and gradient accents
- **HowItWorks** — 5-step numbered flow with custom step icons
- **Merchants** — Split layout: feature list + browser dashboard mockup (stats, chart, orders)
- **AppScreenshots** — 5 phone mockups with varied in-app screen designs
- **Testimonials** — Featured crimson review card + 4-card review grid with star ratings
- **Download** — Crimson CTA card with App Store / Google Play buttons and QR code visual
- **Footer** — Dark footer with logo, quick links, legal links, social icons, app download buttons

### Key Tech
- React + Vite + TypeScript
- Framer Motion animations
- Tailwind CSS with custom primary (#A51245) and secondary (#C8963E) color tokens
- i18n system via React Context (default: Arabic, RTL)
- Brand assets: white logo, dark logo, app icon favicon
- No emoji policy — all icons are custom SVG paths or react-icons
