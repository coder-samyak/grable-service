# Build Specs & Sequencing

Refinement of `07-competitor-benchmark-and-component-plan.md`. This is the build-ready layer: wireframes, a component spec sheet, page-by-page specs for Phase 1, and a dependency-sequenced engineering backlog. Pair with the templates in `02-page-template-system.md` and copy in `03-core-page-copy-skeletons.md`.

---

## 1. Wireframes (key templates)

### 1.1 Home

```
┌──────────────────────────────────────────────────────────────┐
│ UTILITY STRIP:  UEI · CAGE · SDVOSB · IBM GOLD · FEDRAMP      │  ← sticky, mono
├──────────────────────────────────────────────────────────────┤
│ [Grable]   Hosting MAS 9 Upgrade Storage AI Hosting Federal    │  ← priority nav
│            Resources▾                         [Book ▸]         │
│            [Federal|Commercial]                                │  ← audience switch
├──────────────────────────────────────────────────────────────┤
│  HERO (audience-aware headline)            ┌───────────────┐  │
│  Eyebrow: HOSTING · MAS 9 · STORAGE · AI   │  STAT BAND    │  │
│  H1: Host, upgrade, and operate IBM        │  verified     │  │
│      Maximo, storage, and AI workloads.    │  IBM partner  │  │
│  Lead paragraph                            │  X MAS9 installs│ │
│  [Book a briefing ▸] [Explore services]    │  99.9% uptime │  │
│                                            └───────────────┘  │
├──────────────────────────────────────────────────────────────┤
│  CREDENTIAL + LOGO WALL:  [IBM Gold] [FedRAMP] [SOC2] [ISO]   │
│                           client logos →  ▢ ▢ ▢ ▢ ▢ ▢        │
├──────────────────────────────────────────────────────────────┤
│  PRIMARY PATHS (4 cards): Maximo Hosting · MAS 9 Upgrade      │
│                          IBM Storage Services · AI Hosting     │
├──────────────────────────────────────────────────────────────┤
│  FEDERAL TRUST BAND        │   COMMERCIAL PROOF BAND          │
├──────────────────────────────────────────────────────────────┤
│  FEATURED CASE STUDIES (2-3 cards w/ quantified result)       │
├──────────────────────────────────────────────────────────────┤
│  TOOL TEASERS: MAS 9 Readiness · Hosting TCO · Storage Sizing │
│                AI Hosting Readiness · FedRAMP Estimator        │
├──────────────────────────────────────────────────────────────┤
│  FINAL CTA band                                               │
├──────────────────────────────────────────────────────────────┤
│  MEGA FOOTER: Services|Industries|Resources|Company|Legal     │
│  contact block · newsletter · social · credential line        │
└──────────────────────────────────────────────────────────────┘
```

### 1.2 Priority Service Pillar (Hosting / MAS 9 Upgrade / Storage / AI Hosting)

```
Breadcrumb: Home / {Priority Lane}
HERO: H1 promise + outcome subhead + lane-specific CTA + [Book briefing]
PROOF CHIPS: credential badges inline
WHO THIS IS FOR: 2-3 audience callouts
WHAT GRABLE DELIVERS: feature grid (4-6)
PROCESS / TIMELINE: numbered steps (migration timeline, hosting onboarding, storage deployment, or AI hosting readiness)
COMPLIANCE / SECURITY block
RELATED SERVICES: cards
FAQ (FAQPage schema) — 5-8 Q&A
CTA + secondary tool/resource link
```

### 1.3 Federal Hub

```
HERO: "Maximo, deployed at mission tempo."
CREDENTIAL MATRIX (table): UEI | CAGE | NAICS | SDVOSB | IBM tier | FedRAMP
FEDRAMP + IL-TIER explainer (IL2–IL6)
PAST PERFORMANCE: project summary cards
CONTRACT VEHICLES: GSA Schedule | SEWP | BPAs | set-aside eligibility
CAPABILITY STATEMENT: inline summary + [Download PDF ▸] (gated)
RFP/RFI INTAKE CTA → /contact/rfp/
FEDERAL FAQ (FAQPage schema)
```

### 1.4 Resource Library (index)

```
H1: Resources
FILTER BAR: [Type ▾] [Topic ▾] [Industry ▾] [Search]   ← TRM pattern
GRID of resource cards (type badge, title, author, date, read-time)
  ▢ Blog  ▢ Case study  ▢ Whitepaper  ▢ Datasheet  ▢ Webinar  ▢ Tool
[Load more]
NEWSLETTER CTA
```

### 1.5 Blog Post

```
Breadcrumb · H1 (search-intent match)
ANSWER CAPSULE (40-60 words, boxed) ← GEO/AI-citation
TABLE OF CONTENTS (sticky)
H2 body … comparison tables … inline CTAs
FAQ block (FAQPage schema)
AUTHOR BIO (named, E-E-A-T)
RELATED SERVICE + TOOL links
```

### 1.6 Interactive Tool

```
H1 (tool outcome) + short promise
WIZARD / CALCULATOR (multi-step or inputs)
RESULTS SUMMARY (visual)
[Email me the PDF] (gated capture → HubSpot)
FOLLOW-UP CTA (Book briefing)
FAQ
```

---

## 2. Component Spec Sheet

Each component: purpose · key props · variants/states · schema/notes.

| Component | Props (key) | Variants / States | Schema / Notes |
|---|---|---|---|
| **UtilityStrip** | credentials[] | verified / placeholder | Hide unverified items in prod |
| **Header / MegaMenu** | nav[], audience | open/closed per menu; mobile drawer | Keyboard + focus trap (a11y) |
| **AudienceSwitcher** | value, onChange | federal / commercial | Persists in cookie; swaps hero copy + CTAs |
| **StickyCTA** | label, href | visible after scroll N px | Hidden on contact pages |
| **Hero** | eyebrow, h1, lead, ctas[], audienceAware | default / federal / commercial | One semantic H1 only |
| **StatBand** | stats[{value,label,source}] | 3 / 4 / 6 up | Each stat carries `[VERIFY]` source until approved |
| **CredentialMatrix** | rows[] | table / inline chips | Federal hub uses full table |
| **BadgeRow** | badges[] (img,alt,href) | mono / color | IBM Gold, FedRAMP, SOC2, ISO assets |
| **LogoWall** | logos[] | grayscale / color; marquee / grid | Approval-gated; alt text required |
| **ServiceCard** | title, body, href, icon | default / featured | Links to pillar |
| **Section** | eyebrow, h2, body, children | light / dark / accent | Generic band wrapper |
| **ProcessTimeline** | steps[{n,title,body}] | vertical / horizontal | Numbered; week band optional |
| **ComplianceBlock** | items[] | federal / commercial | FedRAMP/IL language |
| **FAQ / Disclosure** | items[{q,a}] | single / accordion | **FAQPage JSON-LD** |
| **Breadcrumbs** | trail[] | — | **BreadcrumbList JSON-LD** |
| **CaseStudyCard** | logo, result, href | default | Links to detail |
| **TestimonialQuote** | quote, name, title, logo | — | Approval-gated |
| **ResourceCard** | type, title, author, date, readTime, href | per-type badge color | Used in library grid |
| **FilterBar** | type, topic, industry, query | — | Client-side filter; Pagefind for search |
| **AnswerCapsule** | text (40-60w) | — | GEO — place near top |
| **TableOfContents** | headings[] | sticky / inline | Auto from H2s |
| **AuthorBio** | name, role, avatar, bio, links | — | **Person** schema; E-E-A-T |
| **ContactForm** | routingOptions[], fields | federal / commercial / support / rfp | HubSpot; "How did you hear?" field |
| **RFPIntakeForm** | fields | — | Separate federal workflow |
| **NewsletterForm** | — | inline / footer | HubSpot list |
| **GatedDownload** | asset, formId | capability stmt / whitepaper | Email → PDF |
| **ToolWizard** | steps[], calcFn | per-tool | Results → gated PDF; **WebApplication** schema |
| **BookingEmbed** | calendarUrl | — | Replaces "Book a briefing" stub |
| **SchemaInjector** | type, data | Org/WebSite/Service/Article/etc. | One per page template |
| **MegaFooter** | columns[], contact, social | — | Newsletter + credential line |
| **CookieConsent** | — | — | Privacy compliance |

---

## 3. Page-by-Page Build Spec — Phase 1 (16 pages)

For each: components used · schema · primary content source · key CTA.

These are the only pages required for Phase 1. Routes listed elsewhere in the sitemap are planned routes and should not ship as thin placeholder pages.

| Page | Template | Components | Schema | CTA |
|---|---|---|---|---|
| `/` | Home | Hero(audience), StatBand, BadgeRow, LogoWall, 4×PriorityPathCard, Federal/Commercial bands, CaseStudyCard, ToolTeaser, FinalCTA | Organization, WebSite | Book a briefing |
| `/services/` | Services hub | Hero, priority paths, support service cards, FAQ | Service, Breadcrumb | Explore / Book |
| `/services/mas9-migration/` | Pillar | Hero, ProofChips, FeatureGrid, ProcessTimeline, ComplianceBlock, FAQ | Service, FAQPage, Breadcrumb | Readiness assessment |
| `/services/maximo-hosting/` | Pillar | + tier comparison table | Service, FAQPage | Compare hosting / TCO calc |
| `/services/maximo-on-fedramp/` | Pillar | + IL-tier block | Service, FAQPage | Federal briefing / cap stmt |
| `/services/storage-services/` | Pillar | Hero, IBM Storage portfolio, sizing/resilience blocks, deployment model table, FAQ | Service, FAQPage, Breadcrumb | Storage assessment |
| `/services/ai-hosting/` | Pillar | Hero, AI workload fit, GPU/data/storage/security blocks, readiness checklist, FAQ | Service, FAQPage, Breadcrumb | AI hosting readiness |
| `/services/ibm-maximo-reselling/` | Pillar | Hero, procurement paths, AppPoints explainer, SaaS/BYOL/managed table, FAQ | Service, FAQPage, Breadcrumb | Request quote / licensing review |
| `/federal/` | Federal hub | CredentialMatrix, FedRAMP block, PastPerformance, ContractVehicles, GatedDownload, FAQ | GovernmentService*, FAQPage | RFP/RFI intake |
| `/industries/` | Industries hub | Hero, IndustryCards, FAQ | Breadcrumb | Book |
| `/industries/life-sciences/` | Industry | Hero, challenge, service stack, ComplianceBlock(GxP), FAQ | Service, FAQPage | Book |
| `/products/ibm-storage-services/` | Product/solution | Storage portfolio, Storage as a Service, Storage Defender, backup/recovery, FAQ | Product*, FAQPage | Storage consult |
| `/products/acdc-mobile/` | Product | Hero, features, screenshots, FAQ | Product*, FAQPage | Demo / datasheet |
| `/company/about/` | About | Hero, story, StatBand, leadership teaser | AboutPage, Org | Contact |
| `/contact/` | Contact | ContactForm(routed), map/contact block | ContactPage | Submit |
| `/legal/privacy/` | Legal | prose, ToC | WebPage | — |

\* schema only if claim language approved (don't overclaim GovernmentService/Product).

---

## 4. Dependency-Sequenced Engineering Backlog

Ordered so nothing is blocked. Each sprint ships something verifiable.

**Sprint 0 — Foundation (no UI yet)**
1. Add Tailwind + design tokens (Hangar Navy, Signal Cyan, Mission Gold, Space Grotesk / Inter / JetBrains Mono)
2. Metadata helper + per-page `generateMetadata`
3. SchemaInjector helper (typed JSON-LD)
4. Static approved-claims source (`lib/claims.ts` or `data/claims.json`) + claim type definitions
5. Redirect map in `next.config.ts` (24 URLs) + unit test
6. Trailing-slash + robots/sitemap/llms verified

**Sprint 1 — Global chrome** (depends on S0 tokens)
6. Header → MegaMenu + mobile drawer (a11y)
7. UtilityStrip (verified-only rendering)
8. AudienceSwitcher (cookie-persisted)
9. MegaFooter + NewsletterForm
10. StickyCTA, Breadcrumbs, CookieConsent

**Sprint 2 — Trust + Home** (depends on S1 + approved proof data)
11. StatBand, BadgeRow, LogoWall, CredentialMatrix
12. Hero (audience-aware), Section bands, CaseStudyCard
13. Build real Home page (replace generic PageShell)

**Sprint 3 — Conversion** (parallel-able with S2)
14. ContactForm (HubSpot, routed) + RFPIntakeForm
15. Static capability statement download link if PDF is available; dynamic PDF generation stays Phase 2/3
16. GA4 + PostHog + conversion events

**Sprint 4 — Core pages** (depends on S1–S3 components)
17. Priority service pillars (Hosting, MAS 9 Upgrade, Storage Services, AI Hosting) with ProcessTimeline, ComplianceBlock, FAQ
18. IBM Maximo Reselling page + procurement/AppPoints content blocks
19. Federal hub + ContractVehicles + PastPerformance
20. Industries hub + Life Sciences
21. Products/IBM Storage Services, Products/AC/DC, About, Contact, Privacy as real templated pages

**Sprint 5 — Quality gates**
22. Schema validation + metadata snapshot tests
23. Playwright smoke tests (16 launch pages)
24. Lighthouse (LCP/INP/CLS/SEO/a11y) + a11y audit
25. Mobile visual checks

**Phase 2+ (post-launch):** Resource library + FilterBar, blog/case-study/whitepaper templates, AuthorBio, pillar pages, ToolWizard calculators, dynamic PDF generation, Sanity CMS (10 models), Pagefind search, and on-demand revalidation.

---

## 5. Critical-path note

The build is **not** the bottleneck — **offer and proof governance is.** Sprints 0–1 and 3 can proceed immediately. Sprints 2 and 4 (anything with credibility claims) are gated by resolving the `[VERIFY]` items in `05-proof-data-request.md`: IBM tier, SDVOSB cert, FedRAMP language, IBM reseller authorization, IBM Storage authorization, AI hosting claims, client logos/metrics, and contract vehicles. Recommend maintaining an approved-claims source of truth in parallel with Sprint 0.
