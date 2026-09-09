# Technical Architecture & Project Code Structure

The build-engineering blueprint. Confirms the stack (from `research/architecture.md` §6), decides the backend posture, and defines the complete component list, directory structure, data models, integrations/API contracts, and delivery details.

**Business focus update:** the site architecture is now centered on four primary buying motions: **Maximo Hosting / MaaS**, **MAS 9 Upgrade / Migration**, **IBM Storage Services**, and **AI Hosting / AI Infrastructure**. IBM reselling is treated as a cross-cutting procurement enablement layer across these motions, not as a separate brand direction.

---

## 1. Stack (confirmed)

| Layer | Decision |
|---|---|
| Framework | **Next.js 15**, App Router, React Server Components, TypeScript (strict) |
| Styling | **Tailwind CSS v4** + design tokens (`lib/tokens.ts`) — Hangar Navy / Signal Cyan / Mission Gold |
| Hosting / edge | **Vercel** — static-by-default, ISR, redirects, optional manual audience cookie |
| CMS (content backend) | **Sanity, Phase 2 unless publishing workflow requires it at launch** — GROQ, portable text, image CDN, live preview |
| Search | **Pagefind, Phase 2 once resources have meaningful volume** — build-time static index, zero ops |
| Forms + CRM | **HubSpot** — Forms API + CRM, MQL workflows, Meetings scheduler |
| Analytics | **GA4** (attribution) + **PostHog** (tool funnels, replay, feature flags) |
| Email (notifications) | **Resend** (transactional: form alerts, gated-asset delivery) |
| PDF generation | **Phase 2/3: @react-pdf/renderer** on serverless (capability statement, tool results) |
| Bot protection | **Cloudflare Turnstile** (privacy-friendly, no Google dependency) |
| Fonts | Space Grotesk / Inter / JetBrains Mono via `next/font` (self-hosted) |

---

## 1.1 Launch vs Future-State Boundary

The launch architecture is intentionally narrower than the full future-state blueprint.

### Launch Architecture (Phase 1)

Required for launch:

- Static-first Next.js App Router marketing pages.
- HubSpot-backed route handlers for contact, RFP/RFI, and newsletter forms.
- Static approved-claims source of truth (`lib/claims.ts` or `data/claims.json`) for IBM reseller authorization, IBM Storage claims, SDVOSB, FedRAMP wording, AI hosting claims, contract vehicles, and customer metrics.
- Static metadata, Open Graph, JSON-LD, sitemap, robots, redirects, and `/llms.txt`.
- Manual Federal / Commercial audience switcher only; no geo/referrer-based routing.
- GA4 + PostHog event capture for page views, CTAs, and form starts/submits.

Explicitly not required for launch:

- Sanity CMS.
- Pagefind search.
- Tool calculators.
- Dynamic PDF generation.
- On-demand revalidation.
- Saved user accounts, dashboards, portals, or persistent user-owned data.

### Future-State Architecture (Phase 2+)

Add after launch when content volume and publishing workflow justify it:

- Sanity CMS and content schemas.
- Pagefind static search.
- Resource library, blog, case studies, whitepapers, webinars, and datasheets.
- Tool calculators and `/api/tools/*`.
- PDF generation via `/api/pdf`.
- Sanity webhook → `/api/revalidate` → `revalidatePath`.

This boundary prevents Phase 2 infrastructure from becoming a Phase 1 blocker.

---

## 2. System Architecture

```
                          ┌─────────────────────────────────────────┐
   Browser ──────────────►│  VERCEL EDGE                             │
   (Federal / Commercial) │  • Redirects + optional manual audience  │
                          │    cookie                                │
                          │  • Static/ISR cache (RSC payloads)       │
                          └───────────────┬─────────────────────────┘
                                          │
                ┌─────────────────────────┼─────────────────────────┐
                │ Next.js App Router (RSC + Route Handlers)          │
                │                                                    │
                │  Server Components ──────► render marketing pages  │
                │  Route Handlers (/api/*) ─► server logic:          │
                │     /api/contact   /api/newsletter   /api/rfp      │
                │     Phase 2+: /api/tools/* /api/pdf blog/rss       │
                └──────┬──────────┬──────────┬──────────┬───────────┘
                       │          │          │          │
              ┌────────▼──┐  ┌────▼─────┐ ┌──▼──────┐ ┌─▼────────┐
              │  Claims   │  │ HubSpot  │ │ Resend  │ │ PostHog/ │
              │ source    │  │ (forms+  │ │ (email) │ │ GA4      │
              │ Phase 1   │  │  CRM)    │ │         │ │(analytics)│
              └───────────┘  └──────────┘ └─────────┘ └──────────┘
                       │
              ┌────────▼──────────┐
              │ Sanity + Pagefind │  (Phase 2)
              └───────────────────┘
```

**Principle:** *Serverless-first, content-headless when needed.* No always-on backend server. All dynamic logic lives in Next.js Route Handlers on Vercel; all stateful data lives in managed SaaS (HubSpot CRM, Sanity content when activated). This is the lowest-ops posture and matches the team size.

> **DECISION LOCKED:** Backend posture = **Serverless-first** (Option A in §3). No standalone server for launch.

---

## 3. Backend Decision (the "we will decide" part)

You don't need a standalone backend for launch. Recommendation and decision matrix:

| Option | What it is | Use when | Verdict |
|---|---|---|---|
| **A. Serverless-first (LOCKED ✅)** | Next.js Route Handlers on Vercel + HubSpot; Sanity when content publishing scales | Marketing site, forms, tools, PDF, RSS — all of Phase 1–3 | ✅ **Chosen — launch with this** |
| B. Dedicated API service | Separate Node (Fastify/Nest) or Python (FastAPI) service | Heavy compute, a customer/partner portal, auth'd dashboards, long-running jobs | Add **only** if a portal or heavy tooling appears (Phase 4+) |
| C. BaaS (Supabase/Convex) | Hosted Postgres + auth + realtime | Need user accounts, saved tool runs, gated portal data | Add when accounts are required |

**Trigger to revisit:** the first feature that needs (a) authenticated users, (b) persistent user-owned data, or (c) compute >10s/request. Until then, Route Handlers + SaaS cover everything. The architecture is intentionally backend-pluggable: all server access goes through `lib/` adapters, so swapping in option B/C later touches only those files.

---

## 4. Rendering & Caching Strategy (per route)

| Route group | Strategy | Revalidate |
|---|---|---|
| `/`, `/services/*`, `/products/*`, `/industries/*`, `/federal/*`, `/company/*`, `/legal/*` | **Static** (`generateStaticParams`) | On deploy; on-demand after Sanity activation |
| `/resources/blog/*`, `/resources/case-studies/*`, `/resources/whitepapers/*` | **Phase 2: Static + ISR** | 1 h + webhook after Sanity activation |
| `/resources/`, `/resources/tools/` (hubs) | **Launch: static hub; Phase 2: ISR** | On deploy at launch; 1 h after content engine activation |
| `/resources/tools/[tool]` (calculators) | **Phase 2/3: Client islands** in static shell; calc via `/api/tools/*` | — |
| `/api/*` (route handlers) | **Dynamic** (serverless) | no cache |
| Audience routing | **Manual switcher first** (cookie only after explicit choice) | per request if enabled |

On-demand revalidation is Phase 2: Sanity publish → webhook → `/api/revalidate` → `revalidatePath`.

Avoid automatic geo/referrer-based content changes at launch. Federal/commercial personalization should not obscure crawlable content or create claim/governance risk. Use explicit CTAs and a manual audience switcher first.

---

## 5. Full Project Directory Structure

```
site/
├── app/
│   ├── (marketing)/                  # route group — marketing pages share layout
│   │   ├── layout.tsx                # marketing shell (Header, Footer, providers)
│   │   ├── page.tsx                  # Home
│   │   ├── services/
│   │   │   ├── page.tsx              # Services hub
│   │   │   ├── mas9-migration/page.tsx
│   │   │   ├── maximo-hosting/page.tsx
│   │   │   ├── maximo-on-fedramp/page.tsx
│   │   │   ├── ibm-maximo-reselling/page.tsx
│   │   │   ├── storage-services/page.tsx
│   │   │   ├── storage-services/storage-as-a-service/page.tsx
│   │   │   ├── storage-services/storage-defender/page.tsx
│   │   │   ├── ai-hosting/page.tsx
│   │   │   ├── ai-hosting/regulated-ai-workloads/page.tsx
│   │   │   ├── ai-hosting/watsonx-infrastructure/page.tsx
│   │   │   ├── ai-on-maximo/page.tsx
│   │   │   ├── integration-custom-dev/page.tsx
│   │   │   └── maximo-mobile-field/page.tsx
│   │   ├── industries/[vertical]/page.tsx   # Phase 2 dynamic from Sanity
│   │   ├── federal/
│   │   │   ├── page.tsx
│   │   │   ├── capability-statement/page.tsx
│   │   │   ├── contract-vehicles/page.tsx
│   │   │   ├── sdvosb-certification/page.tsx
│   │   │   └── past-performance/page.tsx
│   │   ├── products/
│   │   │   ├── [product]/page.tsx
│   │   │   ├── ibm-storage-services/page.tsx
│   │   │   ├── ibm-storage-as-a-service/page.tsx
│   │   │   └── ibm-storage-defender/page.tsx
│   │   ├── company/{about,leadership,careers,news,partners}/page.tsx
│   │   ├── contact/{page.tsx,rfp/page.tsx,hosting/page.tsx,storage/page.tsx,ai-hosting/page.tsx}
│   │   └── legal/{privacy,terms,accessibility,security}/page.tsx
│   │
│   ├── resources/                    # Phase 1 static hub; Phase 2 content engine
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # library + FilterBar
│   │   ├── blog/{page.tsx,[slug]/page.tsx,rss.xml/route.ts}
│   │   ├── case-studies/{page.tsx,[slug]/page.tsx}
│   │   ├── whitepapers/{page.tsx,[slug]/page.tsx}
│   │   └── tools/{page.tsx,[tool]/page.tsx}
│   │
│   ├── api/                          # ◄ BACKEND (route handlers)
│   │   ├── contact/route.ts
│   │   ├── rfp/route.ts
│   │   ├── newsletter/route.ts
│   │   ├── turnstile/route.ts        # bot verification
│   │   ├── tools/[tool]/route.ts     # Phase 2/3: calculator compute
│   │   ├── pdf/route.ts              # Phase 2/3: capability stmt / tool-result PDF
│   │   └── revalidate/route.ts       # Phase 2: Sanity webhook → ISR
│   │
│   ├── components/
│   │   ├── ui/                       # atomic primitives
│   │   │   ├── CredentialBadge.tsx   StatBlock.tsx   ServiceCard.tsx
│   │   │   ├── CaseStudyCard.tsx     TrustStrip.tsx  DisclosureGroup.tsx
│   │   │   ├── Button.tsx  Chip.tsx  AnswerCapsule.tsx  Breadcrumbs.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx  MegaMenu.tsx  MobileDrawer.tsx
│   │   │   ├── UtilityStrip.tsx  FooterMega.tsx  StickyCTA.tsx
│   │   ├── sections/                 # composite page sections
│   │   │   ├── Hero.tsx  StatBand.tsx  LogoWall.tsx  CredentialMatrix.tsx
│   │   │   ├── ProcessTimeline.tsx  ComplianceBlock.tsx  FAQ.tsx
│   │   │   ├── ContractVehicles.tsx  PastPerformance.tsx  FinalCTA.tsx
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx  RFPIntakeForm.tsx  NewsletterForm.tsx
│   │   │   ├── GatedDownload.tsx  FormField.tsx
│   │   ├── content/                  # Phase 2: Sanity portable-text renderers
│   │   │   ├── PortableBody.tsx  TableOfContents.tsx  AuthorBio.tsx
│   │   ├── tools/                    # Phase 2/3: interactive calculators
│   │   │   ├── ToolWizard.tsx  Mas9Readiness.tsx  HostingTco.tsx
│   │   │   ├── StorageSizing.tsx  AiHostingReadiness.tsx
│   │   │   ├── FedrampEstimator.tsx  LicenseOptimizer.tsx
│   │   ├── audience/AudienceSwitcher.tsx
│   │   └── Schema.tsx                # JSON-LD injector (server)
│   │
│   ├── providers/AudienceProvider.tsx
│   ├── lib/                          # ◄ adapters + helpers (backend-pluggable)
│   │   ├── tokens.ts   seo.ts   schema.ts   analytics.ts
│   │   ├── claims.ts   hubspot.ts   resend.ts
│   │   ├── sanity.ts   groq.ts      # Phase 2
│   │   ├── audience.ts  turnstile.ts  pdf.ts  utils.ts
│   │   ├── env.ts                    # zod-validated env
│   │   └── nav.ts                    # nav + footer config
│   ├── types/{content.ts, forms.ts, schema.ts}
│   ├── styles/globals.css            # Tailwind v4 entry + token CSS vars
│   ├── robots.ts   sitemap.ts   llms.txt/route.ts   layout.tsx (root)
│
├── sanity/                           # ◄ Phase 2 CMS backend (schemas + studio)
│   ├── sanity.config.ts
│   ├── schemas/
│   │   ├── documents/{page,service,industry,product,caseStudy,
│   │   │   blogPost,whitepaper,tool,author,navigation,siteSettings}.ts
│   │   ├── objects/{faq,seo,cta,credential,stat,portableBody}.ts
│   │   └── index.ts
│   └── lib/{client.ts, queries.ts, image.ts}
│
├── public/{badges/, logos/, fonts/, og/, capability-statement.pdf}
├── data/claims.json                  # Phase 1 alternative to lib/claims.ts
├── tests/{redirects.test.ts, schema.test.ts, e2e/*.spec.ts (Playwright)}
├── tailwind.config.ts   postcss.config.mjs   next.config.ts
├── .env.example   package.json   tsconfig.json
└── .github/workflows/ci.yml
```

---

## 6. Complete Component List (with delivery details)

`RSC` = React Server Component · `C` = Client Component (needs `"use client"`). Schema = JSON-LD emitted.

### 6.1 Layout / chrome
| Component | File | Type | Key deps | Notes |
|---|---|---|---|---|
| UtilityStrip | `layout/UtilityStrip.tsx` | RSC | — | renders only verified credentials |
| Header | `layout/Header.tsx` | RSC | — | composes MegaMenu + MobileDrawer |
| MegaMenu | `layout/MegaMenu.tsx` | C | Radix NavigationMenu | keyboard + focus trap |
| MobileDrawer | `layout/MobileDrawer.tsx` | C | Radix Dialog | a11y |
| StickyCTA | `layout/StickyCTA.tsx` | C | IntersectionObserver | audience-aware dest |
| FooterMega | `layout/FooterMega.tsx` | RSC | — | 5-col → accordion mobile |

### 6.2 Atomic UI
| Component | File | Type | Notes |
|---|---|---|---|
| Button | `ui/Button.tsx` | RSC | variants: primary/ghost/link |
| Chip / CredentialBadge | `ui/Chip.tsx`, `ui/CredentialBadge.tsx` | RSC | mono pill, category color |
| StatBlock | `ui/StatBlock.tsx` | C | count-up, reduced-motion gated |
| ServiceCard / CaseStudyCard | `ui/*.tsx` | RSC | hover lift, cyan border |
| TrustStrip / LogoWall | `ui/TrustStrip.tsx`, `sections/LogoWall.tsx` | C/RSC | scroll-snap mobile |
| DisclosureGroup | `ui/DisclosureGroup.tsx` | C | Radix Accordion; FAQ + compliance |
| Breadcrumbs | `ui/Breadcrumbs.tsx` | RSC | + BreadcrumbList schema |
| AnswerCapsule | `ui/AnswerCapsule.tsx` | RSC | GEO 40–60w box |

### 6.3 Sections (composite)
Hero (audience-aware), StatBand, CredentialMatrix, ProcessTimeline, ComplianceBlock, FAQ (FAQPage schema), ContractVehicles, PastPerformance, FinalCTA, JumpNav, CapabilityDiagram (SVG).

### 6.4 Forms (all → HubSpot via `/api/*`)
ContactForm (routed), RFPIntakeForm, NewsletterForm, GatedDownload, FormField. Client components; submit to Route Handlers; Turnstile-protected.

### 6.5 Phase 2 Content renderers
PortableBody (Sanity portable text → typed React), TableOfContents (IntersectionObserver), AuthorBio (Person schema).

### 6.6 Phase 2/3 Tools (client islands + `/api/tools/*`)
ToolWizard shell + calculators/checklists: Mas9Readiness, HostingTco, StorageSizing, AiHostingReadiness, FedrampEstimator, LicenseOptimizer. Each emits WebApplication schema where appropriate; results gate behind email → PDF.

### 6.7 Infrastructure components
Schema (JSON-LD server injector), AudienceProvider/AudienceSwitcher, Analytics bootstrap.

---

## 7. Data Models

### 7.1 Phase 1 Static Data

| File | Purpose |
|---|---|
| `lib/claims.ts` or `data/claims.json` | Approved claims source of truth for IBM reseller authorization, IBM Storage claims, FedRAMP wording, SDVOSB status, AI hosting claims, contract vehicles, partner badge usage, and customer metrics. |
| `lib/nav.ts` | Header/footer navigation, primary buying motions, and CTA destinations. |
| `types/content.ts` | TypeScript mirrors for static content and future CMS models. |

The claims file should be treated as governed content: every claim carries `claimText`, `category`, `approvedWording`, `sourceFile` or `sourceUrl`, `owner`, `reviewDate`, and optional `expirationDate`.

### 7.2 Phase 2 Sanity Models

| Document | Key fields |
|---|---|
| `siteSettings` | credentials[], navItems, footerColumns, social, defaultSeo |
| `service` | title, slug, primaryLane(hosting\|mas9-upgrade\|storage\|ai-hosting\|support), outcome, features[], process[], compliance, faqs[], seo |
| `procurementOffering` | title, slug, productFamily(Maximo\|Storage\|AI infrastructure), buyerType(federal\|commercial), availability(new purchase\|renewal\|expansion\|BYOL), deploymentModels[], approvedResellerWording, sourceProof, ctaOwner, reviewDate |
| `storageOffering` | title, slug, IBM product family, useCases[], sizingInputs[], resilienceFeatures[], deploymentModels[], supportModel, faqs[], seo |
| `aiHostingOffering` | title, slug, workloadTypes[], infrastructureNeeds[], storageNeeds[], complianceNotes[], supportedIBMStack[], readinessCriteria[], faqs[], seo |
| `approvedClaim` | Phase 2 CMS version of the Phase 1 static claims source: claimText, category(IBM\|SDVOSB\|FedRAMP\|Storage\|AI\|Customer\|Contract), sourceFile, sourceUrl, approvedWording, owner, reviewDate, expirationDate |
| `industry` | title, slug, vertical, challenge, serviceStack[], proof, faqs[], seo |
| `product` | title, slug, summary, features[], media[], datasheet, faqs[] |
| `caseStudy` | customer, logo, industry, audience, result{value,label}, challenge, approach, results[], quote, services[], seo |
| `blogPost` | title, slug, answerCapsule, body(portable), author→, cluster, faqs[], seo, publishedAt |
| `whitepaper` | title, slug, summary, asset(file), gated(bool), seo |
| `tool` | title, slug, type, config(json), faqs[], seo |
| `author` | name, role, avatar, bio, links[] |
| `navigation` | header[], footer[] (overrides settings) |
| Objects | `faq{q,a}`, `seo{title,desc,ogImage,canonical,noindex}`, `cta{label,href,audience}`, `credential{type,value,verified}`, `stat{value,label,source}` |

TS mirrors live in `types/content.ts`.

---

## 8. Integrations & API Contracts

| Integration | Purpose | Server entry | Env |
|---|---|---|---|
| **Static claims source** | Phase 1 governed claims | `lib/claims.ts` or `data/claims.json` | — |
| **Sanity** | Phase 2 content read | `lib/sanity.ts` (GROQ via `@sanity/client`), `/api/revalidate` webhook | `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_READ_TOKEN`, `SANITY_REVALIDATE_SECRET` |
| **HubSpot** | form submit → CRM, routed by buying motion | `lib/hubspot.ts`; `/api/contact`, `/api/rfp`, `/api/newsletter` | `HUBSPOT_PORTAL_ID`, `HUBSPOT_ACCESS_TOKEN`, form GUIDs |
| **Resend** | transactional email | `lib/resend.ts` (called from form routes) | `RESEND_API_KEY`, `LEAD_NOTIFY_TO` |
| **Turnstile** | bot protection | `lib/turnstile.ts`, `/api/turnstile` | `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` |
| **GA4** | attribution | `lib/analytics.ts` (gtag) | `NEXT_PUBLIC_GA4_ID` |
| **PostHog** | funnels/replay/flags | `lib/analytics.ts` (posthog-js) | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| **HubSpot Meetings** | "Book a briefing" | embed in BookingEmbed | meeting link |
| **Pagefind** | Phase 2 search | postbuild script indexes `out/` | — |
| **PDF** | Phase 2/3 cap stmt / tool result | `lib/pdf.ts`, `/api/pdf` | — |

### API route contracts (request → response)
```
POST /api/contact      { route, name, email, company, phone?, message, source?, token }
                       → 200 {ok:true} | 400 {error} | 429 (rate-limited)
                       route values include hosting, mas9-upgrade, storage, ai-hosting,
                       ibm-reselling, federal, commercial, support, rfp
POST /api/rfp          { agency, vehicle?, naics?, dueDate?, scope, contact{...}, token }
POST /api/newsletter   { email, audience?, token } → 200 {ok}
POST /api/tools/:tool  Phase 2/3: { inputs:{...} } → 200 {result:{...}} (pure compute, no PII)
POST /api/pdf          Phase 2/3: { kind:'capability'|'tool-result', payload } → 200 application/pdf
POST /api/revalidate   Phase 2: { secret, path|type } → 200 {revalidated}
GET  /resources/blog/rss.xml Phase 2: application/rss+xml
```
All mutating routes: Turnstile-verify → validate (zod) → rate-limit (edge KV or in-memory) → HubSpot upsert → Resend notify → respond.

---

## 9. Environment Variables

See `.env.example` (scaffolded). Public (`NEXT_PUBLIC_*`): site URL, GA4, PostHog, Turnstile site key. Server-only: HubSpot token + form GUIDs, Resend key, Turnstile secret. Validated at boot in `lib/env.ts` (zod) — fail fast on missing required launch keys.

Phase 2 env keys only become required when Sanity/Pagefind/revalidation are activated: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_READ_TOKEN`, `SANITY_REVALIDATE_SECRET`.

HubSpot routing properties must include primary buying motion (`hosting`, `mas9-upgrade`, `storage`, `ai-hosting`, `ibm-reselling`, `federal-rfp`) so storage and AI hosting leads do not land in a generic Maximo-only workflow.

---

## 10. Dependencies (package.json additions)

```
Phase 1 dependencies:  next react react-dom
                       @radix-ui/react-navigation-menu @radix-ui/react-accordion
                       @radix-ui/react-dialog posthog-js zod clsx

Phase 1 devDependencies: tailwindcss @tailwindcss/postcss postcss typescript
                         @types/* playwright @playwright/test vitest
                         eslint eslint-config-next @axe-core/playwright

Phase 2 dependencies:  @sanity/client @sanity/image-url next-sanity
                       @react-pdf/renderer

Phase 2 devDependencies: pagefind
```
(Current `package.json` pins everything to `latest` — replace with explicit versions during Sprint 0.)

---

## 11. Foundation Code — Status: PLAN-ONLY (not yet built)

> **DECISION:** Repo is kept **plan-only** until the build is green-lit. No application code has been written. The directory structure in §5 and the component/integration specs above are the contract for Sprint 0 (`08-build-specs-and-sequencing.md` §4).

**First files to create on go-ahead** (Sprint 0 — foundation, no UI):
- `app/lib/{tokens,seo,schema,analytics,claims,hubspot,audience,env}.ts` + `app/types/content.ts`
- `app/components/Schema.tsx` (JSON-LD injector)
- `app/api/{contact,newsletter,rfp,turnstile}/route.ts` (serverless handlers)
- `tailwind.config.ts`, `postcss.config.mjs`, `.env.example`, redirect map in `next.config.ts`

Everything else (UI components, sections, forms UI, tests) follows the sequenced backlog. Sanity studio + schemas, search, calculators, PDF generation, and revalidation are Phase 2+ unless explicitly pulled forward.

---

## 12. Cross-cutting standards
- **Security:** server-only secrets never in `NEXT_PUBLIC_*`; Turnstile on all forms; zod validation; rate-limit mutating routes; CSP header; no client-side CRM tokens.
- **Performance:** budgets LCP<2.0s / INP<200ms / CLS<0.05; RSC-default, client islands only for interactivity; `next/font` self-host; `next/image` for launch assets; Sanity Image CDN after CMS activation.
- **Accessibility:** WCAG 2.2 AA; Radix primitives; axe-core in CI; keyboard + SR audit per phase.
- **Testing:** vitest (redirects, schema, calc logic) + Playwright (16 launch pages, form flows) + Lighthouse CI.
- **CI/CD:** Phase 1 GitHub Actions → typecheck, lint, test, build → Vercel preview per PR → production on main. Phase 2 adds Pagefind indexing and CMS revalidation tests.
- **Claims governance:** IBM reseller authorization, IBM Storage claims, FedRAMP wording, SDVOSB status, AI hosting claims, contract vehicles, and customer metrics must resolve from approved source records with owner + review date. Do not hard-code sensitive claims in page copy without a source record.
```
