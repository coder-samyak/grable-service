# Plan: "Maximo Journey" Scroll-Timeline Homepage

## Context

Grable Services wants a homepage that no Maximo competitor has: an interactive, scroll-driven journey through 30 years of IBM Maximo — from 1990s MAXIMO 4/5 client-server era to MAS 9 + agentic AI maintenance — positioning Grable as "we've run every era in production; the next one we'll run with you." A vertical timeline rail sits on the **right** of the viewport with 6 era markers and a scroll progress line.

Decisions already made with Swetansh:
- **Visuals:** live era-accurate UI mockups in DOM/CSS (the differentiator) + AI-generated video loops as backdrops. Page must ship and work **before** any media exists (gradient fallbacks).
- **Placement:** replaces the homepage (`site/app/page.tsx`), with conversion protected: compact hero + CTAs above the fold, strong CTA at the end.
- Branch: `surendra-develop`. Design follows `research/visual-direction.md` Direction A (Hangar Navy `#0B1A2B`, Signal Cyan `#22D3EE`, Mission Gold `#E0B43A`, Space Grotesk/Inter/JetBrains Mono, weighted easing, nothing bounces).

Verified codebase facts: App Router root is `site/app/` (no `src/`); homepage content is hardcoded (site pattern = `app/data/*.ts`); no animation libs or `prefers-reduced-motion` handling exist; no `next/font`; Tailwind v4 with plain `:root` vars in a 1122-line `globals.css`; `layout.tsx` wraps everything with Header/Footer/StickyCTA (bottom-center, z-40)/CookieBanner + JSON-LD; `html { scroll-behavior: smooth }` exists in globals.css (must be overridden for Lenis).

## Architecture (key decisions)

| Decision | Choice |
|---|---|
| Scroll engine | `gsap` + `ScrollTrigger` (scrub-only) + `lenis`, integrated via `gsap.ticker` |
| Pinning | CSS `position: sticky` scenes inside 180vh sections — no GSAP pin (avoids Lenis jitter + pin-spacer CLS); degrades to stacked sections without JS |
| Effect lifecycle | `@gsap/react` `useGSAP({ scope })` + `gsap.matchMedia()` — React 19 StrictMode-safe; reduced-motion is a first-class branch |
| Styling | New `site/app/journey.css`, all classes `.mj-*`, tokens `--mj-*` — `globals.css` untouched (zero regression risk on 60+ pages) |
| Content | Hardcoded `site/app/data/journey.ts` (matches site pattern; Sanity renders no page content today) |
| Header | Keep existing light header as-is for v1 (transparent variant = v2) |
| SEO | `page.tsx` stays a server component (metadata via `pageMetadata()`); all era copy is real SSR'd text; hidden-until-scroll states applied only via `gsap.set()` in JS, never CSS |

## The 6 eras (`app/data/journey.ts`)

1. **1994–2001 — MAXIMO 4/5** (PSDI → MRO Software) · mockup: green-CRT terminal typing a 1995 work order
2. **2002–2007 — Maximo goes web** (Maximo 6/MXES; IBM acquires MRO 2006) · mockup: IE6-ish retro browser
3. **2008–2019 — Maximo 7.x workhorse** (7.1/7.5/7.6, mobile) · mockup: Start Center with KPI portlets
4. **2020–2022 — MAS 8** (OpenShift; Monitor/Health/Predict) · mockup: dark dashboard, sparkline health cards
5. **2023–2025 — MAS 9 + AI** (Maximo Copilot; 7.6 EOS migration wave) · mockup: copilot chat typing an answer
6. **2026→ — Agentic AI maintenance** (Grable positioning) · mockup: autonomous agent activity feed

## Files

**New:**
- `site/app/data/journey.ts` — `JourneyEra[]` (id, years, eyebrow, title, body, facts, grableNote, mockup key, media base, accent) + hero/final-CTA copy
- `site/app/lib/gsapConfig.ts` — one-time `gsap.registerPlugin(useGSAP, ScrollTrigger)`
- `site/app/components/journey/MaximoJourney.tsx` — root client orchestrator: Lenis setup (`autoRaf:false`, gsap.ticker loop, full cleanup), `useGSAP` + `matchMedia` ScrollTriggers (rail progress scaleY scrub; per-era `onToggle` → `activeIndex` state; scrubbed enter/exit + backdrop parallax, transform/opacity only); reduced-motion fallback = IntersectionObserver for rail state
- `site/app/components/journey/JourneyHero.tsx` — above-fold hero: mono eyebrow, keyword h1, 2 CTAs (`/contact/`, services), scroll hint; navy gradient only, **LCP = h1 text**
- `site/app/components/journey/TimelineRail.tsx` — fixed right `<nav>` (z-30, under StickyCTA), 6 anchor markers with `aria-current`, Lenis `scrollTo` on click; <900px → 3px top progress bar instead
- `site/app/components/journey/EraSection.tsx` — 180vh section with 100svh sticky scene: backdrop + copy-left/mockup-right grid (right padding clears rail)
- `site/app/components/journey/EraBackdrop.tsx` — gradient base + lazy `<video muted loop playsInline preload="none">` (`.webm`+`.mp4`+poster from `/public/journey/era-N.*`), mounts on first activation, `onError` → gradient only, pause off-screen, never mounted under reduced-motion
- `site/app/components/journey/FinalCTA.tsx` — conversion block + compact services strip reusing `serviceCards` from `app/data/site.ts` (restores internal-link parity)
- `site/app/components/journey/mockups/` — `CrtTerminal`, `RetroBrowser`, `StartCenter`, `MasDashboard`, `CopilotChat`, `AgentFeed` + `index.ts` registry + shared `useTypewriter`; all take `{active}`, CSS-driven micro-animations gated by `data-active`, final frame under reduced-motion, deterministic SSR output (no hydration mismatch)
- `site/app/journey.css` — `--mj-*` tokens, `.mj-*` layout/type/buttons/focus rings, keyframes, `html.lenis { scroll-behavior: auto !important }` override, `prefers-reduced-motion` branch (static stacked), <900px branch
- `site/public/journey/` — empty dir now; media dropped in later with zero code changes

**Modified:**
- `site/package.json` — add `gsap`, `@gsap/react`, `lenis`
- `site/app/layout.tsx` — `next/font/google`: Space Grotesk (`--font-display`), Inter (`--font-body`), JetBrains Mono (`--font-mono`) as html classNames; nothing else changes
- `site/app/page.tsx` — replaced: server component, `pageMetadata()` (Maximo/MAS-9 keyword title + description), renders `<MaximoJourney/>`
- `site/app/globals.css` — **untouched** (dead `.home-hero` classes left in place; optional cleanup ticket later)

## Build order (page works at every step)

1. Deps + fonts (`npm i gsap @gsap/react lenis`; layout fonts) — regression-check existing pages
2. Data + static skeleton (journey.ts, journey.css, static sections, gradient backdrops, swap page.tsx) — commit checkpoint: crawlable dark narrative page
3. Six mockups rendering final frames + registry
4. Scroll engine: sticky scenes, Lenis + ScrollTrigger wiring, rail sync, scrollTo
5. Scene choreography: scrubbed enter/exit, parallax, `active`-gated micro-animations
6. Video path: lazy `<video>` + onError fallback; test with a dummy mp4 AND with empty dir
7. Reduced-motion + mobile (375px) pass
8. A11y + perf polish (focus order, heading outline, contrast, targeted `will-change`)
9. **Media phase (after page verified):** `apt install ffmpeg`; generate 6 era stills (nanobanana/Gemini — key present) → image-to-video loops (Replicate token present; Veo via Gemini if billing enabled); ffmpeg → ≤2MB webm/mp4 + posters → drop into `/public/journey/`

## Verification

- `npm run dev` → `/` with zero console errors incl. hydration
- `curl localhost:3000/ | grep "MAXIMO 4"` — era copy + h1 in initial HTML; JSON-LD still emitted
- Playwright: wheel-scroll full journey (each era scene reaches viewport, rail progress grows, `aria-current` walks 1→6); click marker "2020" lands in era 4; Tab reaches rail links + CTAs with visible cyan focus rings
- Playwright `emulateMedia({reducedMotion:"reduce"})`: static stacked sections, no `<video>`, anchors jump natively
- 375×812: no horizontal overflow, top progress bar shown, StickyCTA unobstructed
- Empty `public/journey/`: gradients render, no user-facing errors
- Perf: LCP = hero h1 (<2.5s), CLS ≈ 0, transform/opacity-only animation frames
- Regression: `/services/`, `/contact/`, `/federal/`, Studio route unchanged

## Risks & mitigations (top)

- Lenis/pin jitter → sticky+scrub-only design
- StrictMode double-effects → `useGSAP` auto-revert + full Lenis cleanup
- `scroll-behavior: smooth` in globals vs Lenis → `html.lenis` override
- Crawler-invisible content → hidden states only via JS
- Conversion regression → hero CTAs above fold + FinalCTA + services strip + site-wide StickyCTA
- Mobile URL-bar thrash → `svh` units + `ScrollTrigger.config({ignoreMobileResize:true})`
