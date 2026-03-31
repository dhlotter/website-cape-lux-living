# Implementation Plan

**Project:** Cape Lux Living — Code Review Remediation
**Date:** 2026-03-31
**Reviewer:** Kai (via Milo)
**Estimated total effort:** 4-6 hours

---

## Execution Strategy

Work through tasks in severity order: Critical → High → Medium → Low.
Each task is independently committable unless noted.
After each severity tier, run `npm run build`.

---

## Phase 1: Critical (~30 min) — COMPLETE

### C1 — Fix OG/Twitter metadata ✅
### C2 — Delete `App.css` boilerplate ✅
### C3 — Extract contact details to config ✅
### C4 — Remove unused `cape-lux-logo.jpg` ✅
### C5 — Fix favicon (Lovable default + broken JS override) ✅
### C6 — Clean unused files from `public/` and `docs/` ✅

---

## Phase 2: High (~2 hours) — IN PROGRESS

### H1 — Lazy-load carousel images ✅
### H2 — Fix Google Fonts render blocking ✅
### H3 — Image optimization (WebP conversion) ✅
### H4 — Accessibility fixes (next task)
- Skip-to-content link
- Carousel alt text
- Gold contrast check
- Mobile menu focus management

### H5 — Remove unused React Query
### H6 — Add carousel pause-on-hover/focus
### H7 — Delete ~31 unused shadcn UI component files
### H8 — Centralize hardcoded hex colors to config

---

## Phase 3: Medium (~1.5 hours)

### M1 — Remove unused dependencies
Run `npx depcheck`. Likely removals: 20+ unused Radix packages, caniuse-lite, cmdk, date-fns, input-otp, next-themes, react-day-picker, react-hook-form, react-resizable-panels, recharts, vaul, zod.

### M2 — Remove `lovable-tagger` from Vite config
### M3 — Rename package to `cape-lux-living`
### M4 — Re-enable `no-unused-vars` in ESLint
### M5 — Type carousel API as `EmblaCarouselType`
### M6 — Evaluate React Router necessity
### M7 — Fix `useScrollAnimation` options stability with refs
### M8 — Guard `root` element in `main.tsx`
### M9 — Enable TypeScript strict mode
### M10 — Add canonical meta tag to `index.html`
### M11 — Add OG image dimensions and `og:site_name`
### M12 — Remove `.DS_Store` files and add to `.gitignore`
### M13 — Remove hidden carousel nav components (dead code)

---

## Phase 4: Low (~30 min)

### L1 — Remove `loading="lazy"` from nav logo (above-fold)
### L2 — Define Cinzel in Tailwind config as `font-display`
### L3 — Add `noopener` to external link in Footer
### L4 — Replace `console.error` in NotFound
### L5 — Make `sync-docs.mjs` atomic ✅
### L6 — Improve 26-dot carousel indicator

---

## Post-Fix Verification

1. `npm run build` — must succeed
2. `npm run lint` — no errors, minimal warnings
3. Bundle size check in `dist/assets/`
4. Lighthouse: Performance > 80, Accessibility > 90, SEO > 90
5. Social sharing preview test (WhatsApp, LinkedIn, Twitter, Facebook)
6. Mobile test: carousel, nav, contact buttons
