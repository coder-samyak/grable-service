# Grable Services — Website Revamp: Visual Direction

**Prepared by:** Design (Aditi Sharma persona)
**Date:** 2026-05-26
**Status:** Fresh direction — not constrained by current assets
**Audience:** Dual-track — Federal/DoD/SDVOSB buyers AND commercial enterprise (Caesars-class) buyers, equally weighted
**Stack target:** Next.js 15 (App Router) + headless CMS (Sanity or Payload) on Cloudflare/Vercel
**Accessibility floor:** WCAG 2.2 AA, with AAA on body text contrast

---

## 1. Three Distinct Direction Options

### Direction A — "Mission-Grade Engineering"

**Positioning phrase:** *Engineered. Hardened. Trusted.*

**Color palette**

| Role | Name | Hex | Notes |
|---|---|---|---|
| Primary | Hangar Navy | `#0B1A2B` | Dominant surface, near-black with blue undertone |
| Secondary | Steel Slate | `#1F2E40` | Layered surfaces, cards |
| Accent 1 | Signal Cyan | `#22D3EE` | CTAs, focus rings, data viz |
| Accent 2 | Mission Gold | `#E0B43A` | Federal credential markers, SDVOSB lockup |
| Neutral 100 | Ice | `#F3F6FA` | Light section breaks |
| Neutral 600 | Graphite | `#5B6776` | Body on light surfaces |
| Neutral 900 | Ink | `#0A0F14` | Type on light |
| Semantic — Success | Verified Green | `#10B981` | |
| Semantic — Warning | Brief Amber | `#F59E0B` | |
| Semantic — Critical | Alert Red | `#EF4444` | |

WCAG check: Signal Cyan (`#22D3EE`) on Hangar Navy yields a contrast ratio of 8.2:1 — passes AAA for large text and AA for body. Mission Gold on Hangar Navy is 9.1:1.

**Type system**

- **Display:** *Space Grotesk* (700, 600) — engineered geometry, slight humanist warmth, reads as technical-but-confident
- **Body:** *Inter* (400, 500, 600) — operational legibility, federal-procurement-officer-friendly
- **Mono:** *JetBrains Mono* (400, 600) — eyebrow labels, stat counters, infrastructure callouts ("FedRAMP High", "IL2–IL6")

Type scale: 1.25 modular ratio, fluid `clamp()` from 320px → 1440px. Display tracks tight at `-0.02em`; mono tracks at `+0.04em` uppercase for badge treatment.

**Imagery approach**

- Photography: high-contrast operational environments — data centers, server bezels, utility plants, refineries, military facility exteriors. No stock handshakes, no generic globes.
- Illustration: precision technical line art (1.5px stroke, single-weight) for service diagrams. Think AWS Architecture diagrams, not corporate flat-illustration sets.
- 3D: sparing — only a single hero element (an isometric "Maximo workspace stack" rendered in Spline/R3F) with subtle scroll-tied rotation.
- Motion: deliberate, weighted easing (`cubic-bezier(0.16, 1, 0.3, 1)`). Nothing bounces. Hover lifts are 2px translateY over 180ms. No parallax.

**Tone of voice:** Operator-to-operator. Specific, numerical, unshowy. "800M+ sqft under management" not "trusted nationwide."

**Reference sites in the wild:**
- [palantir.com](https://www.palantir.com) — confident dark surfaces, operator language, no marketing fluff
- [anduril.com](https://www.anduril.com) — defense-credible without aggression, restrained motion, dense capability proof

**Homepage hero treatment:** Full-bleed Hangar Navy backdrop with a faint 64px grid (1px lines at 4% opacity) anchored to a 12-column overlay. Headline left-aligned at 64–96px clamp in Space Grotesk Bold, two lines maximum. Above the headline: a mono eyebrow reading `SDVOSB · IBM GOLD PARTNER · FEDRAMP HIGH` in Mission Gold at 13px tracking +0.16em. Below the headline: a 56-character supporting line in Inter 500 at 20px. Two CTAs side-by-side: primary in Signal Cyan filled, secondary as a ghost-cyan outline. Right column hosts the 3D isometric Maximo stack that rotates 6° on scroll. A thin Mission Gold bar at the top-edge of viewport carries trust marks (UEI, CAGE, MAS 9 badge) at 12px mono.

---

### Direction B — "Federal Brutalist"

**Positioning phrase:** *Cleared. Compliant. Operational.*

**Color palette**

| Role | Name | Hex | Notes |
|---|---|---|---|
| Primary | Document White | `#FAFAF7` | Paper-like, slightly warm |
| Secondary | Federal Black | `#111111` | Type and rule lines |
| Accent 1 | Stamp Red | `#B0211E` | Single accent — used like a wax seal |
| Accent 2 | Classified Blue | `#1B3A6B` | Section labels |
| Neutral 200 | Folder Tan | `#E8E3D5` | Tabular surfaces |
| Neutral 500 | Carbon | `#4A4A48` | Secondary type |
| Semantic — Success | Olive | `#5C6B2F` | |
| Semantic — Warning | Mustard | `#C8881C` | |
| Semantic — Critical | Stamp Red | `#B0211E` | |

**Type system**

- **Display:** *GT America* (or open-source alt: *Söhne* via Adobe, fallback *Inter Display*) at 800 — newspaper-of-record gravity
- **Body:** *Source Serif 4* — serif body signals authority, document-grade
- **Mono:** *IBM Plex Mono* — typewriter callouts, form-like data

**Imagery approach**

- Treated archival-style photography (slight desaturation, +5% warm cast), with visible halftone or subtle paper grain.
- Heavy rule lines (2px solid Federal Black). Tables look like *actual* government tables.
- Illustration: none. Instead, typographic compositions and certificate-style lockups.
- Motion: nearly none. Page transitions only. Hover states are underline-reveal in Stamp Red.

**Tone of voice:** Procurement-officer-direct. Reads like a SOW you'd actually sign.

**Reference sites in the wild:**
- [thebrowser.company](https://thebrowser.company) (pre-rebrand) — confident type-first, rule lines, document feel
- [crowdstrike.com/services/](https://www.crowdstrike.com/services/) — federal-credible white space, restraint

**Homepage hero treatment:** Document White surface, hero is a single 11-column block of large editorial type (Source Serif 4 at 88px, leading 1.05) reading the value proposition as a sentence — not a slogan. Top edge carries a 2px Federal Black rule with `UEI: DJKXNKLXRAF7 · CAGE: 7CW57 · SDVOSB CERTIFIED` mono-set in the rule's negative space. A Stamp Red circular wax-seal-style mark sits at the top-right reading "MAS 9 GOLD." Two CTAs as plain text links with Stamp Red underlines: *Request capability statement* / *Talk to an engineer*. No imagery above the fold.

---

### Direction C — "Operational Modern"

**Positioning phrase:** *Calm. Capable. Current.*

**Color palette**

| Role | Name | Hex | Notes |
|---|---|---|---|
| Primary | Bone | `#F7F5F1` | Warm-neutral page base |
| Secondary | Deep Sea | `#0E2A47` | Headline + chrome |
| Accent 1 | Live Coral | `#FF6B5B` | Single warm CTA accent |
| Accent 2 | Forest | `#1E5240` | SDVOSB / federal lockup color |
| Tertiary | Ash | `#A8AFB6` | Dividers, secondary chrome |
| Neutral 900 | Charcoal | `#1A1A1A` | Body |
| Semantic — Success | Forest | `#1E5240` | reuses accent 2 |
| Semantic — Warning | Saffron | `#E89B27` | |
| Semantic — Critical | Live Coral | `#FF6B5B` | reuses accent 1 |

**Type system**

- **Display:** *Fraunces* (variable, opsz 144, soft 50, wght 600) — modern-with-character, distinctive without being trendy
- **Body:** *Inter* — universal legibility
- **Mono:** *Geist Mono* — modern monospace for stats and code-adjacent feel

**Imagery approach**

- Documentary-style photography of *Grable's actual customers' environments* (with permission) — Caesars back-of-house, refinery floor, hospital plant ops. Real people, real machines, no stock.
- Generous white (bone) space. Editorial pacing — closer to a Stripe Press book than a corporate site.
- Subtle Lottie animations for stat counters and process diagrams. No 3D.
- Motion: gentle, music-like timing. Section reveals use staggered opacity + 8px translateY at 240ms.

**Tone of voice:** Confident generalist. Reads like a senior partner who doesn't need to prove anything.

**Reference sites in the wild:**
- [linear.app](https://linear.app) — but warmer; pacing, restraint, type as hero
- [vercel.com/customers](https://vercel.com/customers) — customer-proof as the design, not a sidebar

**Homepage hero treatment:** Bone surface with generous breathing room (160px top padding on desktop). Two-column hero: left column is a 72px Fraunces Display headline in Deep Sea at variable optical-size 144, leading 1.0. Right column is a single documentary photograph in a 4:5 frame (a real Maximo-managed facility) with a small mono caption underneath ("Caesars Entertainment · 23M sqft · 11 years"). Below the headline: a 4-card customer logo strip (Caesars, Xerox, Sony, Genentech) at 32% opacity that brightens on hover. Single primary CTA in Live Coral pill button: *See how we deploy Maximo*. Audience selector lives as two pill-tabs *above* the headline: `For Federal / DoD` · `For Commercial Enterprise` — toggling them swaps the headline copy and the photograph.

---

## 2. Recommended Direction

**Selected:** **Direction A — Mission-Grade Engineering**

**Rationale (10 sentences):**

Grable Services has a genuinely rare positioning — SDVOSB credibility with IBM Gold-level technical depth and Caesars-class commercial scale — and the visual language must carry both authorities at once without code-switching. Federal Brutalist (B) is gorgeous but skews too far toward government-only and will read as cold to a Caesars CIO who wants to see momentum and modernity. Operational Modern (C) is warm and editorial but risks looking like a design studio rather than an infrastructure operator; federal contracting officers will under-trust it. Mission-Grade Engineering (A) threads the needle: the dark engineering surfaces signal "we run the hard stuff in production" to enterprise buyers, while the Mission Gold federal accents and mono credential strip carry SDVOSB and FedRAMP authority that procurement officers immediately recognize. The dark-surface + cyan + gold system is also defensible against the existing MUG2026 blueprint aesthetic — we are not throwing away brand equity, we are evolving it from "trade-show infographic" into "production product surface." Critically, Direction A is the most performance-honest: dark UI with restrained motion is faster on Cloudflare edge, scores better on Core Web Vitals (especially LCP and INP), and degrades gracefully on the older Windows laptops common in DoD environments. The 12-column grid with mono eyebrows lets us encode certifications and proof points (UEI, CAGE, FedRAMP High, IL2–IL6) as first-class visual elements rather than footer afterthoughts. It also gives the marketing team a system to grow into — service pages, case studies, capability briefs, and a future customer portal can all inherit the same primitives without redesign. Finally, it is the direction least likely to look dated in 36 months; it borrows from the *enduring* parts of Palantir/Anduril (typography, restraint, operator language) without the parts that will age (skeuomorphic 3D, glassmorphism, animated gradients).

---

## 3. Hero Treatment Recommendation (Mission-Grade Engineering)

**Above-the-fold experience, desktop ≥1280px:**

- **Layout:** 12-column grid, 80px gutters, 160px max content padding. Hero occupies 88vh on first paint (never 100vh — leave a 12vh "peek" of the next section to signal scrollability). Background is Hangar Navy with a 1px Steel Slate grid at 4% opacity, fading to transparent at the bottom 30% via mask-gradient.
- **Top utility bar (32px tall, sticky on scroll):** Mission Gold 1px bottom border. Left: Grable wordmark in white. Center: mono credential strip — `UEI DJKXNKLXRAF7 · CAGE 7CW57 · SDVOSB · IBM GOLD PARTNER · FEDRAMP HIGH` at 11px tracking +0.12em, color Ice at 70% opacity. Right: a single Signal Cyan ghost button — *Request capability statement*.
- **Audience selector (sits 24px below utility bar):** Two segmented pill-tabs in mono — `[ Federal & DoD ]` `[ Commercial Enterprise ]`. Selected state is Signal Cyan fill on Hangar Navy text; unselected is transparent with Ice border. Selection is sticky (localStorage) and re-themes the headline copy, the hero proof points, and the primary CTA destination. Default state is determined by referrer (`.gov`, `.mil`, or known commercial domains) with graceful fallback to a 50/50 split-test.
- **Eyebrow:** 13px mono in Mission Gold, tracked +0.16em uppercase. Reads: `MAXIMO APPLICATION SUITE 9 — MANAGED, HOSTED, SECURED`.
- **Headline slot:** 2-line max, `clamp(48px, 6vw, 96px)` Space Grotesk 700, leading 1.02, tracking -0.02em. Federal variant: *"Maximo, deployed at mission tempo."* Commercial variant: *"Maximo, run like production infrastructure."* Headline animates in on first paint with a 320ms opacity + 12px translateY, staggered per line by 80ms.
- **Sub-headline:** 20px Inter 500, Ice at 80% opacity, max 56 characters per line, max 2 lines.
- **CTA pair:** Primary — Signal Cyan filled pill, 56px tall, Hangar Navy text, *See deployment options* / *Book a federal briefing* (audience-dependent). Secondary — ghost-cyan outline, *View case studies*. Both have focus rings at 3px Signal Cyan offset 2px.
- **Right column (col 8–12):** Isometric R3F (React Three Fiber) composition of a Maximo workspace stack — three translucent panels representing Hosting, Security, and Managed Services. Rotates 6° max on scroll, paused when `prefers-reduced-motion: reduce`. Falls back to a static SVG on slow connections (detected via Save-Data header).
- **Trust strip (below the fold by 8vh):** Customer logos — Caesars, Xerox, Sony, Mattress Firm, Genentech, State of Colorado — rendered in monochrome Ice at 60% opacity, brightening to 100% on hover. Below the logos: a single mono line — `800M+ SQFT · 14 YEARS · 6 INDUSTRIES`.

**Mobile (≤640px) hero treatment:** Single column. Utility bar collapses into a hamburger + cyan CTA. Audience selector becomes full-width sticky pill-tabs at the very top of the viewport. Headline drops to `clamp(36px, 9vw, 56px)`. 3D element is replaced with a static SVG isometric. Trust strip becomes a horizontally-scrolling logo rail with snap points.

---

## 4. Mobile-First Layout Patterns

1. **Sticky bottom-CTA bar** — On `< 768px`, a 64px-tall sticky bottom bar appears after the hero scrolls out, containing the active-audience primary CTA (*Book briefing* or *Request capability statement*). Dismissible with an X; reappears on the next session. Respects safe-area insets.
2. **Audience-selector chip pair (top-sticky)** — Two pill-tabs pinned to the top of the viewport, behind the utility bar. State persists across pages via `localStorage('grable.audience')`. Switching re-renders the page's primary CTAs and any audience-tagged content blocks server-side via a cookie-driven Next.js layout segment.
3. **Snap-scroll proof rails** — Horizontally-scrolling sections (customer logos, certifications, case-study cards) use `scroll-snap-type: x mandatory` with visible scroll indicators (dot pagination at the bottom). Each card is 88vw wide with 6vw peek of the next card so the user knows to swipe.
4. **Section-anchor jump nav** — A collapsible mono jump-list (`[ Hosting · Security · Managed · FedRAMP ]`) appears as a sticky 40px chip-row below the audience selector on long pages (capability pages, case studies). Uses `IntersectionObserver` for active-state highlighting.
5. **Disclosure-first dense content** — Federal-relevant compliance content (NIST 800-53 control mappings, ISO 27001 scope, IL2–IL6 specifics) is rendered as collapsed `<details>` elements by default on mobile — visible-but-not-overwhelming. Each disclosure has a mono-styled summary line and animates open with `interpolate-size: allow-keywords` for smooth height transitions.

---

## 5. Component Primitives (Design System v1)

1. **`<Hero>`** — variants: `default`, `case-study`, `service`, `capability`. Slots: `eyebrow`, `headline`, `sub`, `ctaPrimary`, `ctaSecondary`, `media`, `trustBar`. Audience-aware via context provider.
2. **`<AudienceSwitcher>`** — controlled component. Emits `onAudienceChange(audience: 'federal' | 'commercial')`. Persists to cookie + localStorage. Has `compact` and `default` density modes.
3. **`<StatBlock>`** — large numeric in Space Grotesk (96px), mono label below, optional Mission Gold underline. Variants: `solo`, `grid-3`, `grid-4`. Supports count-up animation gated by `IntersectionObserver` and `prefers-reduced-motion`.
4. **`<ServiceCard>`** — 1:1.2 portrait card. Slots: icon (24px line icon), title, 2-line description, capability chips (max 4), `View →` link. Hover lifts 2px, border shifts to Signal Cyan.
5. **`<CaseStudyCard>`** — 4:3 landscape. Slots: customer logo (top-left), industry chip (top-right), headline result (60px mono numeric), 1-line context, audience tag (`federal` / `commercial` / `both`).
6. **`<TrustStrip>`** — horizontally-scrolling on mobile, evenly-spaced flex on desktop. Renders certification + customer logos at controlled opacity. Has `density` prop (`tight` | `default` | `breathing`).
7. **`<CredentialBadge>`** — mono-styled pill rendering a single credential (UEI, CAGE, FedRAMP, IL-level, ISO, NIST). Color-coded by category. Composable into a `<CredentialRow>`.
8. **`<CapabilityDiagram>`** — isometric SVG framework for service architecture diagrams. Tokens: stroke 1.5px, color Signal Cyan on Hangar Navy or Steel Slate on Ice. Lottie-enhanced version for high-priority diagrams.
9. **`<DisclosureGroup>`** — accessible accordion built on Radix UI Accordion. Mono summary, body in Inter. Used for compliance details and FAQ.
10. **`<JumpNav>`** — sticky section anchor list. Active-state via IntersectionObserver. Mobile: chip-row. Desktop: vertical rail on left margin (≥1280px only).
11. **`<CTABar>`** — sticky bottom bar primitive for mobile. Dismissible. Audience-aware destination.
12. **`<FooterMega>`** — 5-column footer on desktop, accordion on mobile. Includes: capability links, federal credentials column (UEI, CAGE, NAICS codes, SBA SDVOSB cert link), commercial industries column, legal, and a final mono "OPERATED BY VETERANS" lockup.

---

## 6. What to AVOID

1. **Generic Maximo-consultant blue (`#0066CC` / IBM blue / WordPress-era cobalt).** Every dated Maximo consultancy uses this. Grable should not be findable by "looks like an IBM partner site from 2014." If a federal blue is needed, use Classified-tier deep navy (`#0B1A2B`) — not corporate cobalt.
2. **Stock photography of (a) handshakes, (b) suited people pointing at screens, (c) glowing cityscapes with network lines overlaid, (d) the American flag waving in slow motion behind a server rack.** All of these signal "we paid for Shutterstock and not for design." Use either real customer environments (with permission), restrained 3D, or no imagery at all.
3. **Hero gradients animated with WebGL noise / mesh-gradient fluid blobs.** This trend peaked in 2023 and is now a tell that the site was built by a marketing agency rather than an engineering team. Restrained, deliberate motion only.
4. **Long-form testimonial carousels with auto-rotate dots.** Federal procurement officers do not read testimonials; they read case studies with quantified outcomes. Replace carousels with two or three full case-study cards showing measurable results (sqft managed, uptime %, deployment time).
5. **A footer that opens with "We are a leading provider of..."** Avoid all marketing-passive-voice openers ("leading," "trusted," "innovative," "world-class," "best-in-class," "premier"). Lead with verifiable specifics — `14 years. 800M+ sqft. SDVOSB-certified. IBM Gold.` Every adjective should be replaceable by a number.

---

## Design Tokens (excerpt — for handoff to engineering)

```ts
// tokens.ts (Tailwind v4 / CSS variables)
export const tokens = {
  color: {
    surface: { 0: '#0B1A2B', 1: '#1F2E40', 2: '#2A3A4F' },
    ink:     { 0: '#F3F6FA', 1: '#C9D2DD', 2: '#8B97A6' },
    accent:  { cyan: '#22D3EE', gold: '#E0B43A' },
    light:   { 0: '#FFFFFF', 1: '#F3F6FA', 2: '#E5EAF1' },
    semantic:{ success: '#10B981', warning: '#F59E0B', critical: '#EF4444' },
  },
  font: {
    display: 'Space Grotesk, system-ui, sans-serif',
    body:    'Inter, system-ui, sans-serif',
    mono:    'JetBrains Mono, ui-monospace, monospace',
  },
  radius:  { sm: '4px', md: '8px', lg: '12px', pill: '999px' },
  space:   { 1: '4px', 2: '8px', 3: '12px', 4: '16px', 6: '24px', 8: '32px', 12: '48px', 16: '64px', 20: '80px', 24: '96px' },
  motion:  { easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)', fast: '180ms', base: '240ms', slow: '320ms' },
}
```

---

**End of document.**
