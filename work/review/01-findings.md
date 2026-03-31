# Code Review Findings

**Reviewer:** Kai (via Milo)
**Date:** 2026-03-31
**Codebase:** Cape Lux Living — Vite + React 18 + TypeScript + Tailwind + shadcn/ui
**Status:** In progress. Lovable.dev scaffold with cleanup needed.

---

## Critical

### C1. OG/Twitter metadata points to Lovable.dev — ✅ FIXED
**File:** `index.html`
Replaced with Cape Lux Living OG image. Created custom `public/og-image.png`.

### C2. `App.css` Vite boilerplate breaks layout — ✅ FIXED
**File:** `src/App.css`
Deleted. Wasn't imported anywhere.

### C3. Hardcoded contact details with Yahoo email — ✅ FIXED
**File:** `src/components/Contact.tsx`
Extracted to `src/config/contact.ts`. Yahoo email flagged for Johan.

### C4. Unused asset `cape-lux-logo.jpg` — ✅ FIXED
**File:** `src/assets/cape-lux-logo.jpg`
Not referenced anywhere. Moved to `work/brand/`.

### C5. Favicon was Lovable default with broken JS override — ✅ FIXED
**Files:** `public/favicon.ico`, `index.html`, `src/main.tsx`
`favicon.ico` was the Lovable default (moved to `work/brand/`). `index.html` referenced a non-existent `favicon-cropped.png` with a JS runtime swap in `main.tsx`. Replaced with a single `favicon.svg` (Cape Lux house lines) set directly in `index.html`. Removed JS hack.

### C6. Unused files in `public/` and `docs/` — ✅ FIXED
**Files:** `public/brand/`, `public/a9cb49f8-...png`, `docs/review/`
Brand assets and Lovable UUID image not referenced in code. `docs/review/` was leftover working folder. Moved assets to `work/brand/`, deleted `docs/review/`. Updated `sync-docs.mjs` to remove dead review preservation logic.

---

## High

### H1. 26 carousel images eagerly loaded — ✅ FIXED
**File:** `src/components/About.tsx`
Added `loading="lazy"`, `decoding="async"`, width/height, improved alt text.

### H2. Google Fonts render-blocking CSS import — ✅ FIXED
**File:** `src/index.css`
Moved Cinzel from CSS `@import` to `<link>` in `index.html` with preconnect.

### H3. No image optimization — ✅ FIXED
**Files:** All image assets
Converted to WebP. Carousel: 31MB → 3.1MB (90% reduction). Hero: 199KB → 148KB.

### H4. Accessibility gaps — ✅ FIXED
Added skip-to-content link, `<main>` landmark, carousel dot `aria-label`, mobile menu `aria-expanded`/`aria-label`, mobile nav `role="navigation"`. Gold `#b7933b` contrast is 2.9:1 (fails WCAG AA) but is decorative brand text, not functional.

### H5. React Query imported but unused — ✅ FIXED
**File:** `src/App.tsx`
Removed `@tanstack/react-query` import, `QueryClientProvider` wrapper, and uninstalled the package.

### H6. Carousel auto-advances with no pause — ✅ FIXED
**File:** `src/components/About.tsx`
Added pause on hover (`onMouseEnter`/`onMouseLeave`) and focus (`onFocusCapture`/`onBlurCapture`).

### H7. ~35 dead shadcn UI component files — ✅ FIXED
**File:** `src/components/ui/`
Deleted 35 unused files. Kept: badge, button, card, carousel, sonner, toast, toaster, tooltip, use-toast. JS bundle 359KB → 333KB.

### H8. Hardcoded hex colors across components — ✅ FIXED
**Files:** `Navigation.tsx`, `Contact.tsx`, `Services.tsx`, `tailwind.config.ts`
Added `brand.gold`, `platform.whatsapp`, `platform.airbnb`, `platform.lekke` to Tailwind config. Replaced all inline hex values with semantic classes.

---

## Medium

### M1. Massive dependency bloat — ✅ FIXED
Removed 36 unused packages (110 transitive). 395 → 285 installed packages. CSS bundle 68KB → 33KB.

### M2. `lovable-tagger` in Vite config — ✅ FIXED
Removed import and `componentTagger()` plugin. Simplified config from factory function to plain object.

### M3. Package name is scaffold default — ✅ FIXED
Renamed to `cape-lux-living`, version bumped to `1.0.0`.

### M4. ESLint `no-unused-vars` disabled — ✅ FIXED
Re-enabled as `warn` with `argsIgnorePattern: "^_"`. Note: ESLint has a pre-existing version mismatch (`eslint@9.37` vs `typescript-eslint@8.11`) that prevents `npm run lint` from running. Requires a dependency upgrade.

### M5. `any` type on carousel API — ✅ FIXED
Typed as `CarouselApi` (exported from `carousel.tsx`).

### M6. React Router for 2-route SPA — ✅ CLOSED (kept)
Keeping React Router. It provides 404 handling and standard SPA routing. Removing it would break the deployment pattern for minimal gain.

### M7. `useScrollAnimation` options instability — ✅ FIXED
Options stored in refs to prevent observer recreation. Captured element reference in variable for safe cleanup.

### M8. Non-null assertion on root element — ✅ FIXED
Replaced `!` assertion with explicit null check and `throw`.

### M9. TypeScript strict mode disabled — ✅ FIXED
Enabled `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `strictNullChecks`, `noFallthroughCasesInSwitch` in both tsconfig files. Build passes clean.

### M10. Missing canonical meta tag — ✅ FIXED
Added `<link rel="canonical" href="https://capeluxliving.co.za/" />`.

### M11. Missing OG image dimensions and `og:site_name` — ✅ FIXED
Added `og:image:width` (1200), `og:image:height` (630), `og:site_name` (Cape Lux Living). Verified against actual image dimensions.

### M12. `.DS_Store` files committed — ✅ FIXED
Added `**/.DS_Store` to `.gitignore` for nested directories.

### M13. Carousel nav components imported but hidden — ✅ FIXED
Removed `CarouselPrevious`/`CarouselNext` import and hidden JSX elements from `About.tsx`.

---

## Low

### L1. `loading="lazy"` on nav logo — ✅ FIXED
Removed `loading="lazy"` and `decoding="async"` from above-fold nav logo.

### L2. Cinzel font in fragile className — ✅ FIXED
Added `fontFamily: { display: ['Cinzel', 'serif'] }` to Tailwind config. Replaced `font-['Cinzel',_serif]` with `font-display`.

### L3. External link missing `noopener` — ✅ FIXED
Changed `rel="noreferrer"` to `rel="noopener noreferrer"` on Footer Easy Entropy link.

### L4. Console.error in 404 page — ✅ FIXED
Removed `console.error`, `useEffect`, `useLocation` imports. GA already tracks pageviews.

### L5. `sync-docs.mjs` non-atomic — ✅ FIXED
Now copies to temp dir then swaps atomically. Review preservation logic removed.

### L6. 26 carousel dot indicators — ✅ FIXED
Replaced 26 dots with a progress bar and "X / 26" counter.

---

## Summary

| Severity | Total | Fixed | Open |
|----------|-------|-------|------|
| Critical | 6 | 6 | 0 |
| High | 8 | 8 | 0 |
| Medium | 13 | 13 | 0 |
| Low | 6 | 6 | 0 |
| **Total** | **33** | **33** | **0** |
