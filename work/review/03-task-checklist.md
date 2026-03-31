# Task Checklist

**Project:** Cape Lux Living — Code Review Remediation
**Date:** 2026-03-31

Mark tasks with `[x]` as completed. Run `npm run build` after each phase.

---

## Phase 1: Critical (~30 min)

- [x] **C1** — Fix OG/Twitter metadata in `index.html` — replace Lovable.dev references
- [x] **C2** — Delete `src/App.css` and remove its import
- [x] **C3** — Extract contact details to `src/config/contact.ts`, flag Yahoo email for Johan
- [x] **C4** — Remove unused `src/assets/cape-lux-logo.jpg` (moved to `work/brand/`)
- [x] **C5** — Fix favicon: replace Lovable default with `favicon.svg`, remove JS override in `main.tsx`
- [x] **C6** — Clean unused files from `public/` (`brand/`, UUID image) and `docs/` (`review/`), update `sync-docs.mjs`

## Phase 2: High (~2 hours)

- [x] **H1** — Add `loading="lazy"` + `decoding="async"` + dimensions to carousel images in `About.tsx`
- [x] **H2** — Move Cinzel font from CSS `@import` to `<link>` in `index.html`
- [x] **H3** — Convert images to WebP, optimize file sizes (hero < 100KB, carousel < 50KB each)
- [x] **H4** — Add skip-to-content link, fix carousel alt text, check gold contrast, add focus management
- [x] **H5** — Remove `@tanstack/react-query` and related boilerplate from `App.tsx`
- [x] **H6** — Add pause-on-hover/focus to carousel auto-advance in `About.tsx`
- [x] **H7** — Delete ~35 unused shadcn UI component files from `src/components/ui/` (JS bundle 359KB → 333KB)
- [x] **H8** — Centralize hardcoded hex colors to `tailwind.config.ts` (`brand.gold`, `platform.whatsapp`, `platform.airbnb`, `platform.lekke`)

## Phase 3: Medium (~1.5 hours)

- [x] **M1** — Removed 36 unused packages (110 transitive deps). 395 → 285 packages. CSS 68KB → 33KB.
- [x] **M2** — Remove `lovable-tagger` from `vite.config.ts`
- [x] **M3** — Rename package to `cape-lux-living` v1.0.0 in `package.json`
- [x] **M4** — Re-enabled `no-unused-vars` as warn (note: ESLint has pre-existing version mismatch, needs dep upgrade)
- [x] **M5** — Typed carousel API as `CarouselApi`, removed `any`
- [x] **M6** — Keeping React Router (provides 404 handling, removal not worth the risk)
- [x] **M7** — Fixed `useScrollAnimation` options stability with refs, safe cleanup
- [x] **M8** — Guarded root element with explicit null check and throw
- [x] **M9** — Enabled TypeScript strict mode in both tsconfig files, build passes clean
- [x] **M10** — Added `<link rel="canonical">` to `index.html`
- [x] **M11** — Added `og:image:width` (1200), `og:image:height` (630), `og:site_name`
- [x] **M12** — Added `**/.DS_Store` to `.gitignore`
- [x] **M13** — Removed hidden `CarouselPrevious`/`CarouselNext` from `About.tsx`

## Phase 4: Low (~30 min)

- [x] **L1** — Removed `loading="lazy"` from above-fold nav logo
- [x] **L2** — Defined Cinzel in Tailwind config as `font-display`, updated Navigation.tsx
- [x] **L3** — Added `noopener` to Footer external link
- [x] **L4** — Removed `console.error` and unused imports from NotFound
- [x] **L5** — Make `sync-docs.mjs` atomic (copy to temp, then swap)
- [x] **L6** — Replaced 26 dots with progress bar and counter

## Post-Fix Verification

- [ ] `npm run build` succeeds
- [ ] `npm run lint` passes
- [ ] Bundle size reduced (check `dist/assets/`)
- [ ] Lighthouse: Performance > 80, Accessibility > 90, SEO > 90
- [ ] Social sharing previews show Cape Lux Living branding
- [ ] Mobile tested: carousel, nav, contact buttons
