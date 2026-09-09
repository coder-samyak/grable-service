# Grable Services — Website Architecture Blueprint

**Prepared by:** Enterprise Web Architecture (synthesis of four parallel research streams)
**Date:** 2026-05-26
**Source inputs:** `current-site-audit.md` · `competitor-analysis.md` · `perplexity-market-research.md` · `visual-direction.md` · `GCS_Capabilities_2025.md` · `MAS9_Market_Research.md`
**Scope:** Single, decisive architecture covering IA, taxonomy, tech stack, redirect map, content clusters, conversion architecture, and 12-week phased build plan.
**Decision posture:** One option per decision, justified in 1-3 sentences. No multiple choice.

---

## Architectural Thesis (read this first)

**2026-06 update:** The launch focus has been narrowed from a broad six-pillar Maximo consulting taxonomy to four primary buying motions: **Maximo Hosting / MaaS**, **MAS 9 Upgrade / Migration**, **IBM Storage Services**, and **AI Hosting / AI Infrastructure**. Federal/SDVOSB positioning still matters, but it supports these motions rather than replacing them. IBM reselling is now treated as a procurement enablement layer across the four lanes.

Grable Services is rebuilding from a SEO-dead WordPress brochure into a **dual-audience (Federal + Commercial) Maximo-as-a-Service authority site** that wins on three plays no competitor currently runs together:

1. **Visible SDVOSB credentials** (UEI DJKXNKLXRAF7 / CAGE 7CW57 / SDVOSB / IBM Gold / FedRAMP / IL2-IL6) in the header strip of every page.
2. **Interactive tools** (MAS 9 Readiness Assessment, Hosting TCO Calculator, FedRAMP Cost Estimator) — a category-wide gap.
3. **Comparison + FAQ schema everywhere** — the highest-leverage GEO/AI-citation tactic available, and Maximo competitors have not adopted it.

The site stack is **Next.js 15 App Router on Vercel + Sanity (headless CMS) + Pagefind (search) + HubSpot CRM (forms) + GA4 + PostHog (analytics)**. Visual direction is locked: Mission-Grade Engineering — Hangar Navy `#0B1A2B` / Signal Cyan `#22D3EE` / Mission Gold `#E0B43A`, Space Grotesk + Inter + JetBrains Mono.

Because the current site is sitewide `noindex,nofollow`, **there is no organic equity to preserve**. The 301 map exists for backlink hygiene and slug cleanup, not for SEO equity transfer. This is a near-greenfield rebuild and the redirect risk is essentially zero.

---

## 1. Information Architecture (Sitemap + Navigation)

### Top-level navigation (7 items max — verb-led where the buyer's job-to-be-done is verbable)

Cohesive's verb-led nav pattern is the cleanest in the field, but pure verbs lose to nouns for Industries, Resources, and Federal. We use a **hybrid verb-noun nav**:

| # | Top-level | Type | Style |
|---|-----------|------|-------|
| 1 | **Services** | Mega-menu | Verb-led inside ("Migrate · Host · Modernize · Integrate · Mobilize · Validate") |
| 2 | **Industries** | Mega-menu | Noun (Federal + 6 commercial verticals) |
| 3 | **Products** | Simple dropdown | Noun (AC/DC Mobile, MaaS Toolbox, MAS 9 Migration Kit) |
| 4 | **Federal** | Top-level link (no dropdown) | Dedicated federal page — high-priority SDVOSB signal |
| 5 | **Resources** | Mega-menu | Blog · Case Studies · Whitepapers · Tools · Webinars |
| 6 | **Company** | Simple dropdown | About · Team · Careers · Contact · News |
| 7 | **Book a briefing** | Sticky CTA button (Signal Cyan) | Calendly modal |

**Decision:** Federal gets its own top-level slot (not buried under Industries) because it is a **first-class audience** in the dual-audience model, and the SDVOSB credential is the sharpest differentiator in the entire category. Putting it under "Industries" would bury Grable's biggest competitive moat.

### Audience signposting placement

- **Top utility bar (32px, sticky):** mono credential strip — `UEI DJKXNKLXRAF7 · CAGE 7CW57 · SDVOSB · IBM GOLD · FEDRAMP` — visible on every page.
- **Hero audience switcher:** two pill-tabs `[ Federal & DoD ]  [ Commercial Enterprise ]` directly above the headline. Selection persists via cookie + localStorage `grable.audience`. Default state derived from referrer (`.gov`/`.mil` → Federal; otherwise Commercial). The switcher re-themes the hero headline, hero proof points, primary CTA destination, and any audience-tagged content blocks server-side via a Next.js layout cookie.
- **No separate audience landing pages.** The shared global nav + audience switcher pattern outperforms "For Federal / For Commercial" splits per the 2026 B2B research, and avoids duplicate-content SEO drag.

### Mega-menu vs simple dropdown decision

| Nav item | Pattern | Rationale |
|---|---|---|
| Services | **Mega-menu** | 6 pillars × 3 sub-pages = 18 destinations. Mega-menu shows them all without 3-level drilldown. |
| Industries | **Mega-menu** | 12 verticals split into Federal (7) and Commercial (5–6). Two-column mega. |
| Products | **Simple dropdown** | 3 items only. A mega-menu would feel empty. |
| Federal | **No dropdown** | Direct link to `/federal/` hub page. |
| Resources | **Mega-menu** | 5 sub-types × featured content slot per type. Used as a discovery surface. |
| Company | **Simple dropdown** | 5 items, low engagement nav. Dropdown is enough. |
| Book a briefing | **Modal trigger** | Calendly inline modal, no drilldown. |

### Mobile nav pattern

**Progressive disclosure drawer (right-side slide-in, 88vw width).** Top-level items as 56px tappable rows. Tapping a parent expands an inline accordion of sub-items beneath the parent — never a second screen (no nested drilldown). Audience switcher pinned to the top of the drawer. Sticky bottom CTA bar (`Book a briefing` in Signal Cyan) appears once the hero scrolls out, persistent across pages.

### Full sitemap (3 levels deep)

```
/
├── /services/                              [Services hub — verb-led grid of 6 pillars]
│   ├── /services/mas9-migration/           [Pillar 1]
│   │   ├── /services/mas9-migration/readiness-assessment/
│   │   ├── /services/mas9-migration/upgrade-services/
│   │   ├── /services/mas9-migration/free-upgrade/      [301 from /maximo-free-upgrade/]
│   ├── /services/maximo-hosting/           [Pillar 2 — consolidates /cloud-solutions/, /ibm-maximo-in-the-cloud/]
│   │   ├── /services/maximo-hosting/managed/           [MaaS — 301 from /maximo-as-a-services/]
│   │   ├── /services/maximo-hosting/iaas/              [301 from /laas/]
│   │   ├── /services/maximo-hosting/paas/              [301 from /paas/]
│   ├── /services/maximo-on-fedramp/        [Pillar 3]
│   │   ├── /services/maximo-on-fedramp/high/
│   │   ├── /services/maximo-on-fedramp/moderate/
│   │   ├── /services/maximo-on-fedramp/il-tiers/       [IL2-IL6 reference]
│   ├── /services/ai-on-maximo/             [Pillar 4]
│   │   ├── /services/ai-on-maximo/maximo-assistant/
│   │   ├── /services/ai-on-maximo/predict-health-monitor/
│   │   ├── /services/ai-on-maximo/visual-inspection/
│   ├── /services/integration-custom-dev/   [Pillar 5]
│   │   ├── /services/integration-custom-dev/oslc-integrations/
│   │   ├── /services/integration-custom-dev/automation-scripts/
│   │   ├── /services/integration-custom-dev/erp-connectors/   [SAP, Oracle, Workday]
│   ├── /services/maximo-mobile-field/      [Pillar 6]
│   │   ├── /services/maximo-mobile-field/ibm-maximo-mobile/
│   │   ├── /services/maximo-mobile-field/ac-dc-mobile/         [301 from /ac-dc-mobile-solution/]
│   │   ├── /services/maximo-mobile-field/data-collection/      [301 from /mobile-asset-data-collection/]
│
├── /industries/                            [Industries hub]
│   ├── /industries/federal/                [Federal vertical landing]
│   │   ├── /industries/federal/dod/
│   │   ├── /industries/federal/navy/                   [NAVFAC]
│   │   ├── /industries/federal/army/                   [USACE]
│   │   ├── /industries/federal/air-force/
│   │   ├── /industries/federal/federal-civilian/
│   │   ├── /industries/federal/usace/
│   │   ├── /industries/federal/navfac/
│   ├── /industries/life-sciences/                      [Genentech proof point]
│   │   ├── /industries/life-sciences/gxp-validated-maximo/    [301 from /saas-gxp-and-the-cloud/]
│   │   ├── /industries/life-sciences/validated-maximo/        [301 from /validated-maximo-solutions/]
│   ├── /industries/gaming-hospitality/                 [Caesars proof point]
│   ├── /industries/manufacturing/                      [Xerox, Sony, Mattress Firm proof points]
│   ├── /industries/utilities/
│   ├── /industries/transportation/                     [State of Colorado proof point]
│   ├── /industries/higher-education/
│
├── /products/                              [Products index]
│   ├── /products/acdc-mobile/                          [301 from /ac-dc-mobile-solution/]
│   ├── /products/maas-administration-toolbox/
│   ├── /products/mas9-migration-kit/
│
├── /federal/                               [Federal trust hub — see Section 5]
│   ├── /federal/capability-statement/                  [PDF download]
│   ├── /federal/sdvosb-certification/
│   ├── /federal/contract-vehicles/                     [GSA, SEWP, set-aside]
│   ├── /federal/past-performance/
│   ├── /federal/fedramp-saas/                          [301 from /fedramp-saas-fedramp-ias/]
│   ├── /federal/fedramp/                               [301 from /fedramp/]
│
├── /resources/                             [Resources hub]
│   ├── /resources/blog/
│   │   ├── /resources/blog/category/{slug}/
│   │   ├── /resources/blog/tag/{slug}/
│   │   ├── /resources/blog/author/{slug}/
│   │   ├── /resources/blog/{post-slug}/
│   ├── /resources/case-studies/
│   │   ├── /resources/case-studies/caesars/
│   │   ├── /resources/case-studies/xerox/
│   │   ├── /resources/case-studies/sony/
│   │   ├── /resources/case-studies/genentech/
│   │   ├── /resources/case-studies/mattress-firm/
│   │   ├── /resources/case-studies/state-of-colorado/
│   ├── /resources/whitepapers/
│   │   ├── /resources/whitepapers/mas9-migration-playbook/
│   │   ├── /resources/whitepapers/fedramp-april-2026-brief/
│   │   ├── /resources/whitepapers/maximo-hosting-tco-model/
│   ├── /resources/tools/
│   │   ├── /resources/tools/mas9-readiness-assessment/
│   │   ├── /resources/tools/license-optimization/
│   │   ├── /resources/tools/hosting-tco/
│   │   ├── /resources/tools/fedramp-cost/
│   ├── /resources/webinars/
│   ├── /resources/datasheets/
│
├── /company/                               [Company hub]
│   ├── /company/about/
│   ├── /company/leadership/                            [bios: Cleveland + SMEs]
│   ├── /company/careers/                               [301 from /careers/]
│   ├── /company/news/
│   ├── /company/partners/                              [IBM, Red Hat, AWS, FedRAMP marketplace]
│
├── /contact/                               [301 from /contact-us/]
│   ├── /contact/sales/
│   ├── /contact/support/
│   ├── /contact/rfp/                                   [Federal RFP submission]
│
├── /legal/
│   ├── /legal/privacy/                                 [301 from /privacy-policy/]
│   ├── /legal/terms/
│   ├── /legal/accessibility/
│   ├── /legal/security/
│
└── /llms.txt, /robots.txt, /sitemap.xml, /ai.txt
```

---

## 2. Services Taxonomy (Six Pillars)

Six pillars matches the buyer's mental model and the competitor consensus (Cohesive runs 5, Naviam 6, Projetech 3 — six is the sweet spot for a category-defining position). Each pillar is a deep page with sub-pages.

### Pillar 1 — MAS 9 Migration

**50-word descriptor:** Maximo 7.6.1.x reaches end-of-support September 30, 2025. We migrate enterprises and federal agencies from MAS 7.6 or MAS 8.x to MAS 9.1 on Red Hat OpenShift, with zero data loss, predictable downtime windows, and Java-17/PostgreSQL/OpenShift-readiness baked into a 6-month delivery plan.

**Target buyer:** Maximo administrator, IT Director, or CIO sponsoring the platform modernization line item in FY26 budget.

**Sub-pages:**
- `/services/mas9-migration/readiness-assessment/` — free 5-minute interactive tool that produces a personalized PDF readiness report.
- `/services/mas9-migration/upgrade-services/` — paid full-service migration with fixed-fee tier matrix.
- `/services/mas9-migration/free-upgrade/` — IBM-funded MAS 9 upgrade offer (preserved from current site, modernized).

**Expected page count:** 1 pillar + 3 sub + 8-12 supporting blog posts + 2 case studies + 1 whitepaper = **~16-18 pages**.

### Pillar 2 — Maximo Hosting / MaaS

**50-word descriptor:** Run Maximo as a managed service on AWS, Azure, or IBM Cloud — single-tenant or multi-tenant — with 99.99% SLA, dedicated DBA coverage, OS-and-app patching, daily backups, and quarterly DR tests included. Three tiers (Starter, Standard, Enterprise) priced by Maximo authorized-user count and asset volume.

**Target buyer:** Operations VP or IT Director who wants to eliminate Maximo infrastructure overhead and predictable, opex-only billing.

**Sub-pages:**
- `/services/maximo-hosting/managed/` — full MaaS with bundled MaaS Administration Toolbox.
- `/services/maximo-hosting/iaas/` — bring-your-own-license infrastructure hosting.
- `/services/maximo-hosting/paas/` — platform-tier with OpenShift management included.

**Expected page count:** 1 pillar + 3 sub + 6 supporting posts + 2 case studies + TCO calculator = **~14 pages**.

### Pillar 3 — Maximo on FedRAMP

**50-word descriptor:** IBM achieved FedRAMP Moderate for MAS-as-a-Service on AWS GovCloud in April 2026. Grable layers FedRAMP-aligned hosting up to FedRAMP High, with IL2/IL4/IL5/IL6 environments, NIST 800-53/171 control mappings, CAP-routed connectivity, and SECRET-cleared personnel where required. Authorized for Navy, Army, Air Force, USACE, NAVFAC, and Federal Civilian deployments.

**Target buyer:** Federal contracting officer, agency CIO, or DoD program manager writing a Maximo RFP that requires "FedRAMP authorized or equivalent."

**Sub-pages:**
- `/services/maximo-on-fedramp/high/` — FedRAMP High control mappings, ATO support.
- `/services/maximo-on-fedramp/moderate/` — FedRAMP Moderate (IBM baseline + Grable services on top).
- `/services/maximo-on-fedramp/il-tiers/` — IL2/IL4/IL5/IL6 matrix (lifted from current capability statement).

**Expected page count:** 1 pillar + 3 sub + 5 posts + 1 case study + FedRAMP Cost Calculator = **~12 pages**.

### Pillar 4 — AI on Maximo

**50-word descriptor:** Deploy Maximo Assistant (watsonx-powered), Maximo Predict (failure probability, RUL, anomaly detection), Maximo Health (asset risk scoring), and Maximo Visual Inspection (computer vision for defect detection) into production Maximo environments. We integrate watsonx.ai, train pmlib models on your historical maintenance data, and operationalize the predictions into work-order automation.

**Target buyer:** Operations leader pursuing predictive maintenance ROI; CIO with a 2026 AI mandate; Reliability Engineering lead.

**Sub-pages:**
- `/services/ai-on-maximo/maximo-assistant/` — watsonx + Granite LLM rollout playbook.
- `/services/ai-on-maximo/predict-health-monitor/` — APM trio deployment.
- `/services/ai-on-maximo/visual-inspection/` — computer-vision MVI engagements.

**Expected page count:** 1 pillar + 3 sub + 8 posts (heaviest content cluster) + 1 case study = **~13 pages**.

### Pillar 5 — Maximo Integration & Custom Dev

**50-word descriptor:** Build OSLC/REST integrations between Maximo and SAP, Oracle, Workday, ServiceNow, GIS, and SCADA. Write automation scripts that replace clunky workflows. Develop custom applications inside Maximo using Application Designer and the App Points license model. Maintain a published integration catalog so your IT team knows exactly what's wired where.

**Target buyer:** Enterprise architect, IT integration lead, or Maximo developer who has been told "make these systems talk."

**Sub-pages:**
- `/services/integration-custom-dev/oslc-integrations/`
- `/services/integration-custom-dev/automation-scripts/`
- `/services/integration-custom-dev/erp-connectors/`

**Expected page count:** 1 pillar + 3 sub + 6 posts + 1 case study = **~11 pages**.

### Pillar 6 — Maximo Mobile / Field

**50-word descriptor:** Modernize the field workforce on IBM Maximo Mobile (PWA, replaces Anywhere + Work Centers) or extend it with Grable's AC/DC Mobile data-collection suite. Offline-capable inspection routes, barcode/RFID scanning, GPS-tagged photos, predictive prompts, and direct sync to Maximo Manage. Deployed across utility plants, refineries, gaming venues, and federal facilities.

**Target buyer:** Maintenance director, field-service manager, technician supervisor.

**Sub-pages:**
- `/services/maximo-mobile-field/ibm-maximo-mobile/`
- `/services/maximo-mobile-field/ac-dc-mobile/` (rebrand consideration noted in audit; keep slug for now, rename "AC/DC" in body copy to avoid the rock-band read).
- `/services/maximo-mobile-field/data-collection/`

**Expected page count:** 1 pillar + 3 sub + 4 posts + 1 case study = **~9 pages**.

**Services taxonomy totals:** 6 pillars × ~13 pages average = **~78 pages of services content**.

---

## 3. Industries Pages (12 verticals)

Federal gets seven sub-verticals because the Federal book is the SDVOSB moat. Commercial gets five focused on the actual proof points in Grable's portfolio (Caesars, Xerox, Sony, Genentech, Mattress Firm, State of Colorado).

| # | Industry | URL | Audience | Grable Proof Point | Headline Promise |
|---|---|---|---|---|---|
| 1 | Federal — DoD overall | /industries/federal/dod/ | Federal | (8) IL2-IL6 capability stack | "Maximo at mission tempo on AWS GovCloud, FedRAMP Moderate baseline" |
| 2 | Federal — Navy / NAVFAC | /industries/federal/navy/ | Federal | NAICS 541512 / 541519 | "MAS 9 for naval shore facilities and shipyards" |
| 3 | Federal — Army / USACE | /industries/federal/army/ | Federal | NAICS aligned | "MAS 9 for Corps of Engineers civil works" |
| 4 | Federal — Air Force | /industries/federal/air-force/ | Federal | IL5 capable | "MAS 9 for AF installation infrastructure" |
| 5 | Federal — USACE | /industries/federal/usace/ | Federal | overlaps Army | (subset of Army page; cross-links) |
| 6 | Federal — NAVFAC | /industries/federal/navfac/ | Federal | overlaps Navy | (subset of Navy page; cross-links) |
| 7 | Federal — Federal Civilian | /industries/federal/federal-civilian/ | Federal | IL2/IL4 | "Maximo for civilian agencies — VA, DOI, GSA, DOE" |
| 8 | Life Sciences (Pharma/Biotech) | /industries/life-sciences/ | Commercial | **Genentech** | "GxP-validated Maximo on FedRAMP-aligned hosting" |
| 9 | Gaming & Hospitality | /industries/gaming-hospitality/ | Commercial | **Caesars Entertainment** | "23M sqft of casino floor, BoH, and resort assets managed since 2014" |
| 10 | Manufacturing | /industries/manufacturing/ | Commercial | **Xerox, Sony, Mattress Firm** | "Maximo for plant floor, distribution, and finished-goods assets" |
| 11 | Utilities | /industries/utilities/ | Commercial | SMRP / ISO 55000 frameworks | "MAS 9 + Maximo Health + Predict for utility asset reliability" |
| 12 | Transportation | /industries/transportation/ | Commercial | **State of Colorado** | "Maximo Linear for roads, rail, and transit infrastructure" |
| 13 | Higher Education | /industries/higher-education/ | Commercial | GSA/IFMA/BOMA frameworks | "Facilities management for campus-scale operations" |

**Page template (each vertical):**
- H1 with audience-specific value prop
- 3-tile capability stack (which Maximo applications/services apply)
- One proof point (logo, KPI band, case-study card linking to /resources/case-studies/{customer}/)
- Industry-specific compliance block (21 CFR Part 11 for LS, NERC CIP for Utilities, NIST for Federal, etc.)
- 2-3 supporting blog post cards
- FAQ block (with FAQPage JSON-LD schema)
- Audience-correct primary CTA (Federal → Book a federal briefing; Commercial → See deployment options)

---

## 4. Resources Hub Architecture

### 4a. Blog (`/resources/blog/`)

**Taxonomy:**
- **Categories** (top-level, exclusive — one per post): MAS 9 Migration, Maximo Hosting, AI on Maximo, FedRAMP & Federal, Maximo Mobile, Integration, Industry Insights
- **Tags** (multi-per-post, freeform): mas9, watsonx, fedramp-high, aws-govcloud, oslc, java17, openshift, asset-health, gxp, il5, sdvosb, etc.
- **Author pages** (`/resources/blog/author/{slug}/`): SME profiles with photo, bio, role, LinkedIn, RSS of their posts. Six initial authors (Cleveland + 5 SMEs).
- **URL pattern:** `/resources/blog/{post-slug}/` (flat, no date in URL — avoids "feels stale" decay).

**Launch seed:** 12 posts across the 5 content clusters (see Section 8).

### 4b. Case Studies (`/resources/case-studies/`)

**Template structure** (each case study uses identical scaffolding for AI-citation consistency):
- Hero: customer logo, industry chip, headline result ("23M sqft managed, 99.97% uptime, 11 years"), 1-line context.
- The Challenge (3 paragraphs, ~250 words).
- The Approach (4 paragraphs + capability diagram).
- The Results (KPI grid — 4 quantified outcomes minimum).
- Customer voice (named quote with title and photo if permitted).
- Capability stack used (pill row).
- Related case studies (3 cards).
- FAQPage schema for the "What did Grable deliver?" / "How long did it take?" / "Was the project FedRAMP-aligned?" questions.

**Four starter case studies for launch:**
1. **Caesars Entertainment** — Gaming & Hospitality. 23M sqft, 11 years, Maximo Hosting (MaaS), 99.97% uptime. Source: existing Maximo Hosting Agreement.
2. **Xerox** — Manufacturing. Plant-floor + distribution Maximo, 7+ years.
3. **Sony** — Manufacturing. Asset lifecycle management.
4. **Genentech** — Life Sciences. GxP-validated Maximo, 21 CFR Part 11 compliant SaaS deployment.

**Phase 2 case studies (launch +30 days):**
5. **Mattress Firm** — Manufacturing / Distribution.
6. **State of Colorado** — Transportation / Federal Civilian-adjacent.

### 4c. Whitepapers / eBooks (`/resources/whitepapers/`)

Three flagship gated downloads at launch:

1. **MAS 9 Migration Playbook (40 pages)** — 7.6.1.x → 9.1.131 upgrade plan: Java 17, OpenShift readiness, DB migration, license tier mapping, risk register, 6-month timeline.
2. **FedRAMP April 2026 Brief (12 pages)** — what IBM's FedRAMP Moderate authorization means for federal Maximo procurement, how to write a "FedRAMP authorized or equivalent" RFP, and where SDVOSBs fit.
3. **Maximo Hosting TCO Model (16 pages + Excel)** — on-prem vs IaaS vs PaaS vs MaaS, 5-year TCO breakdown with editable model, hidden costs of self-hosting.

Gating: HubSpot form (email + company + role + audience-switcher state). Email triggers MQL workflow in CRM.

### 4d. Tools / Calculators (`/resources/tools/`)

Four interactive tools — the **single largest opportunity** in the competitive landscape (no competitor has any):

1. **MAS 9 Readiness Assessment** (`/resources/tools/mas9-readiness-assessment/`) — 12-question wizard, scores readiness across 5 dimensions (license, infrastructure, integrations, custom code, data), generates personalized PDF with recommended next steps. 5 minutes to complete. Email-gated to receive the PDF.
2. **License Optimization Estimator** (`/resources/tools/license-optimization/`) — input current user count, asset volume, and modules; output recommended MAS 9 App Points subscription tier with savings vs current spend.
3. **Hosting TCO Calculator** (`/resources/tools/hosting-tco/`) — slider-based 5-year TCO model: self-hosted vs IaaS vs PaaS vs MaaS. Outputs cost-curve chart and a downloadable PDF.
4. **FedRAMP Cost Estimator** (`/resources/tools/fedramp-cost/`) — for agencies sizing a FedRAMP Moderate or High deployment: ATO support cost, hosting cost delta, personnel-cleared-coverage estimate.

All four tools built as React Server Components with client-side interactivity via React Hook Form + Zod validation. PDFs generated server-side via `@react-pdf/renderer` and emailed via HubSpot transactional API.

### 4e. Webinars (`/resources/webinars/`) and Datasheets (`/resources/datasheets/`)

Standard hub patterns. Webinars use the `VideoObject` + `Event` schema. Datasheets are gated PDFs (capability statement, FedRAMP datasheet, MAS 9 migration datasheet, GxP validation datasheet).

### 4f. `/llms.txt` (root)

Single file at `/llms.txt` declaring site structure for AI crawlers. Includes pillar pages, case studies, whitepapers, FAQ entry points, and quoted entity definitions ("What is Maximo as a Service?", "What is FedRAMP High Maximo?", "What is an SDVOSB Maximo partner?"). Updated quarterly. This is the cheapest GEO move available and almost no Maximo competitor has adopted it.

---

## 5. Federal Trust Page (`/federal/`)

One canonical federal hub, structured to load every federal contracting officer's mental checklist on a single screen.

**Above-the-fold:**
- Mission Gold credential strip: `UEI DJKXNKLXRAF7 · CAGE 7CW57 · SDVOSB · IBM GOLD PARTNER · FEDRAMP`
- H1: "Maximo, deployed at mission tempo."
- Sub: "SDVOSB IBM Gold Partner running MAS 9 on AWS GovCloud — FedRAMP Moderate baseline, FedRAMP High capable, IL2 through IL6."
- Two primary CTAs: `Download capability statement (PDF)` + `Book a federal briefing` (Calendly).

**Sections (in order):**
1. **Credentials block** — table of certifications (SDVOSB via VetBiz/VA, IBM Gold Partner, ISO 27001, FedRAMP, NIST 800-171, NIST 800-53).
2. **UEI/CAGE/NAICS matrix** — UEI, CAGE, NAICS primary (541512) + secondaries (541519, 541611), DUNS legacy, SAM.gov registration link.
3. **IL-tier matrix** — IL2/IL4/IL5/IL6 with information sensitivity, security controls, connectivity, personnel requirements (lifted from capability statement, formatted as compliance table).
4. **Past performance** — DoD agency types served (Navy, Army, Air Force, USACE, NAVFAC, Federal Civilian) with redacted descriptions where required.
5. **Contract vehicles** — current and planned (GSA Schedule status, SEWP applicability, 8(a) status if applicable, SDVOSB set-aside eligibility).
6. **Capability statement download** — single-page PDF, regenerated quarterly, version-stamped.
7. **Primary federal contact** — Cleveland (or designated federal lead): name, photo, title, clearance level (if disclosable), direct email, direct phone, Calendly link.
8. **Federal RFP submission** — link to `/contact/rfp/` form (RFP attachment + capability requirements + due date + agency).
9. **FAQ block** — FAQPage schema covering: "Are you SDVOSB-certified?", "What is your CAGE code?", "Can you support FedRAMP High?", "Do you have a GSA Schedule?", "What IL tiers do you support?", "Are your personnel cleared?"

**Downloads:**
- Capability statement PDF (one page, federal-blue/navy palette, all 8 blocks from the federal capability statement guide in market research).
- FedRAMP datasheet PDF.
- SDVOSB certification PDF.
- Past performance summary PDF.

---

## 6. Tech Stack Specification

| Layer | Decision | Rationale (1-3 sentences) |
|---|---|---|
| **Frontend** | Next.js 15 App Router | Already decided. Server Components reduce client JS by 60%+ vs Pages Router; aligns with 2026 industry standard; native streaming + partial prerendering for the audience-switcher cookie pattern. |
| **Hosting** | **Vercel** | Native Next.js integration (zero-config ISR, redirects, Image Optimization, OpenTelemetry traces). Cloudflare Pages is cheaper but lags on App Router edge features and ISR semantics; Vercel's free tier covers Grable's traffic for the first 12 months and the upgrade path is linear. |
| **Headless CMS** | **Sanity** | Real-time collaborative editing (a six-person content team needs it for blog cadence), portable text for clean blog migration, GROQ + Sanity Image Pipeline, Sanity Live for instant preview. Payload is excellent for self-hosted but adds Postgres ops burden; Contentful is more expensive at our seat count; MDX-only loses non-technical editors. |
| **Search** | **Pagefind** | Static-site search compiled at build time — zero ops, zero monthly cost, ships in the bundle, indexes all pages including blog/case studies/whitepapers, weighs ~3KB per page indexed. Algolia at this content volume is overkill and adds vendor cost; Typesense requires hosted infra. We can switch to Algolia at 10x content scale. |
| **Forms + lead capture** | **HubSpot** (forms embedded as React components via HubSpot Forms API, posting to CRM) | CRM and marketing automation already standard in B2B consulting; forms hand off to MQL workflows immediately; native Calendly integration; capability statement + tool downloads can trigger sequenced nurture without custom plumbing. Native API → CRM is more flexible but doubles engineering hours for marginal benefit. |
| **Analytics** | **GA4 + PostHog** | GA4 for marketing/SEO attribution (universal expectation); PostHog for product-style funnels on the interactive tools (session replay, feature flags for A/B testing the audience switcher and CTAs), open-source self-host fallback if cost spikes. Plausible/Fathom are great for simple sites but lack the funnel + replay + feature-flag stack the tools page needs. |
| **Image pipeline** | next/image + Sanity Image CDN + Vercel Image Optimization | Sanity ships AVIF/WebP/JPEG auto-format with focal-point crops; next/image lazy-loads + provides responsive `srcset`; Vercel adds last-mile edge transformation. No separate CDN needed. |
| **Schema.org JSON-LD** | Per-template strategy via a `<Schema>` server component | See JSON-LD schema map below. |
| **Performance budget** | LCP <2.0s · INP <200ms · CLS <0.05 · TBT <300ms · TTFB <600ms | App Router with RSC + Vercel edge + next/image + system fonts fallback chain. Hero 3D element falls back to static SVG on Save-Data and `prefers-reduced-motion`. |
| **Accessibility floor** | WCAG 2.2 AA (AAA on body text contrast) | Mission-Grade Engineering palette already passes AAA for body. Storybook + axe-core in CI; manual screen-reader audit (NVDA + VoiceOver) at end of each phase. |
| **Hosting + edge strategy** | Static-by-default (`generateStaticParams` for all marketing pages, blog, case studies). ISR after CMS/resource publishing is active. Manual audience switcher first; use an audience cookie only after explicit visitor choice. Server Components for HubSpot form rendering. | Maximizes Vercel edge cache hit rate, minimizes cold-start exposure, and avoids geo/referrer-based content changes that could create SEO or claims-governance risk. |

### Schema.org JSON-LD strategy (per template)

| Page template | Schema types emitted |
|---|---|
| Home (/) | `Organization` + `WebSite` + `WebPage` |
| Services pillar | `Service` + `BreadcrumbList` + `FAQPage` |
| Service sub-page | `Service` + `BreadcrumbList` + `FAQPage` + `HowTo` (where applicable) |
| Industry page | `Service` + `BreadcrumbList` + `FAQPage` |
| Federal hub | `Organization` (extended) + `GovernmentService` + `FAQPage` |
| Blog post | `Article` + `BreadcrumbList` + `Person` (author) + `FAQPage` (when applicable) |
| Case study | `Article` + `Organization` (customer) + `BreadcrumbList` |
| Whitepaper | `Article` + `BreadcrumbList` |
| Tool page | `WebApplication` + `BreadcrumbList` + `FAQPage` |
| Webinar | `Event` + `VideoObject` |
| Contact | `Organization` + `ContactPage` |

`Organization` schema on every page carries the SDVOSB credentials, NAICS codes, and federal identifiers — making them quotable by AI engines.

---

## 7. URL Strategy + 301 Redirect Map

**URL conventions:**
- Lowercase, hyphen-separated, no trailing dates, no `.html`.
- Plural noun for hubs (`/services/`, `/industries/`, `/case-studies/`), singular noun for products (`/products/acdc-mobile/`).
- Verb-led sub-slugs where the buyer's intent is a verb (`/services/mas9-migration/readiness-assessment/`).
- No `/blog/` in URL — use `/resources/blog/` (singular content-type prefix under the Resources hub).
- Trailing slash mandatory (Next.js config: `trailingSlash: true`) for SEO consistency.

### Full 301 redirect map

| Old URL | New URL | Type | Notes |
|---|---|---|---|
| /cloud-solutions/ | /services/maximo-hosting/ | 301 | Consolidate with /ibm-maximo-in-the-cloud/ |
| /ibm-maximo-in-the-cloud/ | /services/maximo-hosting/ | 301 | Same target |
| /maximo-as-a-services/ | /services/maximo-hosting/managed/ | 301 | Fix URL typo |
| /saas-gxp-and-the-cloud/ | /industries/life-sciences/gxp-validated-maximo/ | 301 | Promote to industry sub-page |
| /validated-maximo-solutions/ | /industries/life-sciences/validated-maximo/ | 301 | Promote to industry sub-page |
| /fedramp-saas-fedramp-ias/ | /federal/fedramp-saas/ | 301 | Fix URL typo + relocate under /federal/ |
| /laas/ | /services/maximo-hosting/iaas/ | 301 | Fix slug typo (laas→iaas) |
| /paas/ | /services/maximo-hosting/paas/ | 301 | |
| /ac-dc-mobile-solution/ | /products/acdc-mobile/ | 301 | |
| /mobile-asset-data-collection/ | /products/acdc-mobile/ | 301 | Consolidate (was sub-page of same product) |
| /careers/ | /company/careers/ | 301 | |
| /contact-us/ | /contact/ | 301 | |
| /privacy-policy/ | /legal/privacy/ | 301 | |
| /products-services/ | /services/ | 301 | New services hub |
| /maximo-free-upgrade/ | /services/mas9-migration/free-upgrade/ | 301 | |
| /fedramp/ | /federal/ | 301 | Consolidate FedRAMP story under federal hub |
| /blog/ (soft-404 today) | /resources/blog/ | 301 | |
| /about/ (soft-404 today) | /company/about/ | 301 | |
| /team/ (soft-404 today) | /company/leadership/ | 301 | |
| /case-studies/ (soft-404 today) | /resources/case-studies/ | 301 | |
| /news/ (soft-404 today) | /company/news/ | 301 | |
| /feed/ | /resources/blog/rss.xml | 301 | New RSS feed at canonical URL |
| /wp-sitemap.xml | /sitemap.xml | 301 | |
| /sitemap_index.xml | /sitemap.xml | 301 | |

Implemented via Next.js `next.config.js` `redirects()` (permanent: true, statusCode: 301). Tested via integration tests on every PR.

### Net-new URLs (no 301 source)

All URLs under `/services/mas9-migration/`, `/services/maximo-on-fedramp/`, `/services/ai-on-maximo/`, `/services/integration-custom-dev/`, `/services/maximo-mobile-field/`, all `/industries/federal/*` sub-pages, all `/industries/{commercial-vertical}/` pages, all `/resources/tools/*` pages, all `/federal/*` sub-pages, all `/resources/blog/*` posts, all `/resources/case-studies/*` pages, all `/company/*` pages, and `/llms.txt`.

---

## 8. Content Clusters (Pillar + Supporting)

Five clusters, each anchored by a pillar service page and surrounded by 5-8 supporting posts. Internal linking is hub-and-spoke: every supporting post links **up** to the pillar, **across** to two sibling posts, and **out** to a related industry or case study.

### Cluster 1 — MAS 9 Migration

**Pillar:** `/services/mas9-migration/`
**Primary keywords:** `mas 9 migration`, `maximo 7.6 to mas 9`, `mas 9 migration services`, `maximo 7.6 end of support`, `maximo java 17 transition`, `maximo openshift migration`
**Supporting pieces (8):**
1. "Maximo 7.6.1.x end of support: what September 30, 2025 actually means" (top-funnel, informational)
2. "MAS 8 vs MAS 9: the 7 changes that break your customizations" (mid-funnel, technical)
3. "Java 17 upgrade in MAS 9.1: what to test before you migrate" (technical deep-dive)
4. "MAS 9 license tier mapping — App Points explained" (commercial intent)
5. "OpenShift readiness checklist for MAS 9" (technical)
6. "MAS 9 migration timeline: realistic 6-month plan" (commercial intent)
7. "Free MAS 9 upgrade: the IBM offer + Grable's coverage" (transactional, links to /services/mas9-migration/free-upgrade/)
8. "MAS 9 migration cost benchmarks 2026" (commercial intent, comparison table)

**Internal link structure:** Pillar links to all 8 + readiness assessment tool. Each post links up to pillar + across to 2 siblings + out to /resources/tools/mas9-readiness-assessment/.

### Cluster 2 — FedRAMP Maximo

**Pillar:** `/services/maximo-on-fedramp/`
**Primary keywords:** `fedramp maximo`, `maximo fedramp high`, `maximo on aws govcloud`, `mas 9 fedramp`, `dod maximo`, `il5 maximo`
**Supporting pieces (6):**
1. "IBM Maximo achieves FedRAMP Moderate (April 2026): what it means for federal buyers" (top-funnel, news hook — this is THE highest-priority post)
2. "FedRAMP Moderate vs FedRAMP High: which does your Maximo deployment need?" (mid-funnel, comparison)
3. "IL2 through IL6 explained: a Maximo buyer's guide" (technical reference)
4. "How to write a 'FedRAMP authorized or equivalent' Maximo RFP" (procurement guide)
5. "AWS GovCloud Maximo architecture reference" (technical)
6. "SDVOSB Maximo: the FY26 federal procurement opportunity" (links to /industries/federal/ and /federal/)

### Cluster 3 — AI on Maximo

**Pillar:** `/services/ai-on-maximo/`
**Primary keywords:** `maximo ai`, `maximo assistant`, `watsonx maximo`, `maximo predict`, `maximo health`, `maximo visual inspection`
**Supporting pieces (8):**
1. "What is Maximo Assistant? The watsonx-powered chatbot for asset management" (top-funnel, definitional)
2. "Maximo Predict deep dive: how the four model templates actually work" (technical)
3. "Maximo Health vs Maximo Monitor: when to use which" (comparison)
4. "Visual Inspection in Maximo: training a defect-detection model in 4 weeks" (case-study-style)
5. "watsonx + Granite LLM for Maximo: integration architecture" (technical)
6. "Predictive maintenance ROI: a worked example with real numbers" (commercial intent)
7. "AI on Maximo in regulated industries: GxP + 21 CFR Part 11 considerations" (vertical)
8. "Tribal knowledge capture: using AI to preserve graybeard expertise" (workforce angle)

### Cluster 4 — Maximo Hosting / MaaS

**Pillar:** `/services/maximo-hosting/`
**Primary keywords:** `maximo as a service`, `maas`, `maximo cloud hosting`, `maximo on aws`, `maximo managed services`, `maximo dedicated saas`
**Supporting pieces (6):**
1. "What is Maximo as a Service? A 2026 definition" (definitional, GEO-optimized)
2. "MaaS vs IaaS vs PaaS for Maximo: a comparison table" (comparison, FAQPage schema)
3. "Maximo TCO: self-hosted vs hosted — a real 5-year model" (commercial, links to TCO calculator)
4. "Maximo SLAs: what 99.99% actually means" (mid-funnel, trust-building)
5. "Disaster recovery for Maximo: lessons from a real wildfire event" (storytelling, links to Naviam/Projetech-style narrative)
6. "Maximo on AWS GovCloud vs commercial AWS: when to choose which" (technical + federal)

### Cluster 5 — SDVOSB Federal Procurement

**Pillar:** `/federal/`
**Primary keywords:** `sdvosb maximo`, `sdvosb it consulting`, `veteran owned maximo`, `federal maximo consultant`, `gsa schedule maximo`
**Supporting pieces (5):**
1. "What is an SDVOSB and why does it matter for federal Maximo procurement?" (definitional, GEO-quotable)
2. "Maximo NAICS codes: 541512 vs 541519 vs 541611 explained" (procurement reference)
3. "How to write a Maximo capability statement that wins" (downloadable template)
4. "FY26 SDVOSB set-aside opportunities in IT services" (commercial intent)
5. "Grable vs ITS (webuildits.com): SDVOSB Maximo comparison" (comparison page — GEO-optimized; the single most AI-citable asset)

**Total content cluster volume at launch:** 5 pillars + 33 supporting posts + 5 tools + 3 whitepapers + 4 case studies = **50 high-quality content surfaces by Week 12**.

---

## 9. Conversion Architecture (4-Tier Ladder)

Mixed conversion model — federal and commercial buyers self-select. The ladder lets a visitor commit at the friction level they're ready for, on the same page.

### Tier 1 — Lowest friction (zero commitment, single field or click)

| Asset | Trigger placement | Copy | Expected CVR | Downstream |
|---|---|---|---|---|
| **Capability statement download (PDF)** | Sticky top-bar CTA (federal audience), every federal page, every /federal/* page, footer | "Download capability statement" | 6-9% of federal visitors | HubSpot list `MQL-Federal-CapStmt`. Triggers 4-email nurture (FedRAMP brief, federal case study, RFP template, Calendly invite). |
| **Newsletter signup** | Footer of every page; inline at end of every blog post | "Maximo intelligence — once a month. No spam." | 1.5-2.5% of all visitors | HubSpot list `Newsletter`. Triggers welcome email + monthly digest. |
| **Blog post subscribe (RSS / category)** | Below each blog post + sidebar | "Get new posts in {category}" | 0.8-1.2% | RSS or HubSpot list per category. |

### Tier 2 — Interactive tools (5 minutes, name + email + role)

| Asset | Trigger placement | Copy | Expected CVR | Downstream |
|---|---|---|---|---|
| **MAS 9 Readiness Assessment** | Homepage hero secondary CTA, /services/mas9-migration/ pillar primary CTA, every MAS 9 blog post | "Take the 5-minute MAS 9 Readiness Assessment" | 12-18% of pillar page visitors | HubSpot list `MQL-MAS9-Readiness`. Trigger: SDR follow-up within 48 hours. PDF emailed instantly. |
| **Hosting TCO Calculator** | /services/maximo-hosting/ primary CTA, TCO whitepaper landing | "Calculate your 5-year Maximo hosting TCO" | 8-12% | HubSpot list `MQL-Hosting-TCO`. Same SDR follow-up workflow. |
| **FedRAMP Cost Estimator** | /federal/ secondary CTA, /services/maximo-on-fedramp/ pillar | "Estimate your FedRAMP Moderate or High cost" | 10-14% of federal visitors | HubSpot list `MQL-FedRAMP-Cost`. Routed to Federal SDR. |
| **License Optimization Estimator** | /services/maximo-hosting/managed/ + blog cluster posts | "See if you're over-licensed on Maximo" | 7-10% | HubSpot list `MQL-License-Opt`. Routed to commercial SDR. |

### Tier 3 — Consultation (sales-qualified, 30 minutes)

| Asset | Trigger placement | Copy | Expected CVR | Downstream |
|---|---|---|---|---|
| **Book a federal briefing** | Top-bar CTA (federal audience), every federal page, /federal/, case studies | "Book a 30-minute federal briefing with Cleveland" | 1.2-1.8% of federal visitors | Calendly with Federal SDR / Cleveland. Auto-create HubSpot deal at stage "SQL-Federal." |
| **Book a deployment consultation** | Top-bar CTA (commercial audience), homepage hero, every pillar page | "See how we deploy Maximo" / "Schedule a consultation" | 1.0-1.5% | Calendly with commercial SDR. Auto-create HubSpot deal at stage "SQL-Commercial." |
| **Talk to an SME** | End of every blog post and case study | "Have a Maximo question? Talk to one of our SMEs" | 0.4-0.6% | Calendly with rotating SME. |

### Tier 4 — RFP / capability statement request (highest commitment, federal procurement)

| Asset | Trigger placement | Copy | Expected CVR | Downstream |
|---|---|---|---|---|
| **Submit RFP / RFI** | /federal/ + /contact/rfp/ + Federal capability page | "Submit a federal RFP / RFI for Grable response" | 0.2-0.4% of federal visitors | HubSpot deal at stage "RFP-Received". Multi-page form: agency, contract vehicle, due date, attachments. Auto-routes to Federal SDR + Cleveland. SLA: response confirmation within 24 business hours. |
| **Custom capability statement request** | /federal/ secondary | "Request a tailored capability statement" | 0.5-0.8% | HubSpot form. Federal lead reviews requirements, sends tailored PDF within 48 hours. |

### CTA placement rules (sitewide)

1. **One primary CTA per page** above the fold — audience-dependent (Federal → "Book a federal briefing"; Commercial → "See deployment options").
2. **One secondary CTA per page** above the fold — usually Tier 2 (interactive tool) or Tier 1 (capability statement download).
3. **Sticky CTA bar** appears after hero scrolls out on mobile.
4. **End-of-page CTA block** on every content page — Tier 3 ("Book a briefing") plus Tier 1 ("Subscribe to newsletter").
5. **Footer CTAs** — Tier 1 always present (newsletter, capability statement).

### Conversion forecast (steady state, post-launch month 6)

Assumes 8,000 monthly sessions, 60/40 commercial/federal split.

- Tier 1 (capstmt + newsletter): ~180 captures / mo
- Tier 2 (tools): ~60 MQLs / mo
- Tier 3 (consultations): ~24 SQLs / mo
- Tier 4 (RFPs): ~3-5 / mo

Total: ~270 lead-touches / month → ~30 SQL/month → ~5-8 closed-won/quarter (at industry-standard 8-15% SQL-to-close).

---

## 10. Build Phasing (12 weeks)

Four phases of 3 weeks each. Each phase ships to production and is reviewed at end of week; the goal is for the site to be production-quality at the end of Phase 1, not just at Week 12.

### Phase 1 — Foundation (Weeks 1-3)

**Goal:** Next.js scaffold live with the visual system applied to 5 core pages. Site is publishable Day 22.

**Deliverables:**
- Next.js 15 App Router scaffold deployed to Vercel (preview + production environments).
- Tailwind v4 + design tokens (Hangar Navy / Signal Cyan / Mission Gold) implemented as CSS variables.
- Typography pipeline (Space Grotesk + Inter + JetBrains Mono via `next/font/google` with `display: swap`).
- Component primitives library (Storybook): `<Hero>`, `<AudienceSwitcher>`, `<StatBlock>`, `<ServiceCard>`, `<CaseStudyCard>`, `<TrustStrip>`, `<CredentialBadge>`, `<FooterMega>`, `<CTABar>`, `<DisclosureGroup>`, `<JumpNav>`.
- Sanity Studio set up, content models for: Page, ServicePillar, ServiceSubPage, Industry, CaseStudy, BlogPost, Whitepaper, Tool, Author, NavItem, FooterColumn.
- 5 core pages live: `/`, `/services/`, `/federal/`, `/contact/`, `/company/about/`.
- Top-utility bar with credential strip + audience switcher implemented.
- 301 redirect map fully implemented in `next.config.js` and tested.
- `robots.txt` (allowing all crawlers + sitemap reference), initial `sitemap.xml`, `/llms.txt` v1.
- HubSpot forms integration on `/contact/` and footer newsletter.
- GA4 + PostHog instrumented.
- WCAG 2.2 AA audit pass on the 5 core pages.

**Roles needed:**
- **Frontend Lead** (full-time): Next.js architecture, design system primitives, audience-switcher logic.
- **Designer** (50%): translating Mission-Grade Engineering direction into Figma components → Storybook handoff.
- **CMS Modeler** (50%): Sanity schema design and migrations.
- **Copywriter** (50%): core page copy (Home, Services hub, Federal hub, About, Contact).
- **SEO** (25%): redirect map QA, sitemap config, schema implementation review.

**Exit criteria:**
- 5 core pages pass Lighthouse Performance ≥90 / Accessibility ≥95 / SEO 100.
- All 23 redirects (from Section 7) tested via Playwright; zero broken.
- Sanity Studio is editable by a non-engineer on the marketing side without engineering help.
- Audience switcher persists across page navigation and re-themes hero copy/CTAs.

### Phase 2 — Content depth (Weeks 4-6)

**Goal:** All 12 industries pages, 4 case studies, and 2 pillar pages live. Site has real depth.

**Deliverables:**
- 12 industries pages (7 federal sub-verticals + 5-6 commercial verticals) live with full template (capability stack, proof point, FAQ block, audience-correct CTA).
- 4 starter case studies (Caesars, Xerox, Sony, Genentech) live with case-study template + Article schema.
- 2 pillar pages built end-to-end: MAS 9 Migration (`/services/mas9-migration/`) + Maximo on FedRAMP (`/services/maximo-on-fedramp/`).
- All sub-pages under those 2 pillars (6 sub-pages total).
- Resources hub shell live (`/resources/`, `/resources/blog/`, `/resources/case-studies/`, `/resources/whitepapers/`, `/resources/tools/`, `/resources/webinars/`).
- Whitepaper #1 (MAS 9 Migration Playbook) gated behind HubSpot form.
- Pagefind search compiled and integrated.
- `/federal/` full content build with capability statement PDF, IL-tier matrix, NAICS matrix, past performance, contract vehicles, FAQ.
- Phase 2 case studies (Mattress Firm, State of Colorado) drafted.

**Roles needed:**
- Frontend Lead (full-time).
- Designer (50%): case study template + industries template polish, illustration of capability diagrams.
- CMS Modeler (25%): case study schema refinement, whitepaper gating workflow.
- **Content team** (full-time, 2 writers): industries copy, case studies, pillar pages.
- SEO (50%): schema implementation, internal linking audit, JSON-LD validation.

**Exit criteria:**
- All 12 industries pages indexed in Google Search Console.
- 4 case studies pass Article + Organization schema validation.
- Whitepaper #1 download workflow tested end-to-end (form submit → HubSpot list → PDF emailed → nurture sequence triggered).
- Federal hub passes a federal-procurement-officer review (Cleveland sign-off).

### Phase 3 — Tools (Weeks 7-9)

**Goal:** The two highest-value interactive tools live and converting.

**Deliverables:**
- **MAS 9 Readiness Assessment** live at `/resources/tools/mas9-readiness-assessment/`. 12-question wizard, scoring engine, PDF generator (`@react-pdf/renderer`), HubSpot integration, email delivery, completion analytics in PostHog.
- **Hosting TCO Calculator** live at `/resources/tools/hosting-tco/`. Slider-based 5-year TCO with cost-curve chart, PDF export, HubSpot integration.
- License Optimization Estimator scoped + designed but build deferred to post-launch.
- FedRAMP Cost Estimator scoped + designed but build deferred to post-launch.
- 4 remaining service pillars built: Maximo Hosting, AI on Maximo, Integration & Custom Dev, Maximo Mobile/Field — each with their 3 sub-pages.
- Whitepaper #2 (FedRAMP April 2026 Brief) + Whitepaper #3 (Hosting TCO Model + Excel) launched.
- A/B test framework live in PostHog: test hero headline variants per audience.
- Case studies 5 + 6 (Mattress Firm, State of Colorado) published.

**Roles needed:**
- Frontend Lead (full-time).
- **Tools Engineer** (full-time): wizard logic, scoring engine, PDF generator, HubSpot transactional integration.
- Designer (25%): tool wizard UX, results PDF layout.
- CMS Modeler (25%): whitepaper schema.
- Content team (full-time, 2 writers): remaining pillar copy + sub-pages + whitepapers #2 #3.
- SEO (25%): schema validation, internal linking, tool page meta-data.

**Exit criteria:**
- MAS 9 Readiness Assessment completion rate ≥40% (visitors who start → finish).
- Hosting TCO Calculator completion rate ≥30%.
- Both tools fire HubSpot lead events and deliver PDFs within 60 seconds of completion.
- All 6 service pillars and 18 sub-pages live.

### Phase 4 — Polish + Launch (Weeks 10-12)

**Goal:** Blog seeded with 12 posts, GEO assets in place, all schema validated, launch day clean.

**Deliverables:**
- 12 launch blog posts published (3 per cluster minimum, weighted to MAS 9 + FedRAMP + AI clusters which are the highest-priority searches):
  - Cluster 1 (MAS 9): 3 posts including the EOL post.
  - Cluster 2 (FedRAMP): 3 posts including the IBM FedRAMP April 2026 announcement.
  - Cluster 3 (AI on Maximo): 3 posts including the Maximo Assistant definitional post.
  - Cluster 4 (Hosting): 2 posts.
  - Cluster 5 (SDVOSB Federal): 1 post (the Grable vs ITS comparison).
- `/llms.txt` v2 with all 12 posts + 4 case studies + 4 tools + 3 whitepapers indexed.
- Sitemap.xml fully populated and submitted to Google Search Console + Bing Webmaster Tools.
- All schema.org JSON-LD validated against Schema Markup Validator + Google Rich Results Test.
- Author pages built for the 6 launch authors.
- Webinar #1 scheduled (FedRAMP April 2026 briefing) with Event + VideoObject schema.
- Sticky bottom CTA bar on mobile tested.
- Final WCAG 2.2 AA audit (NVDA + VoiceOver manual passes).
- Performance audit: LCP <2.0s, INP <200ms, CLS <0.05 verified across desktop + 3G mobile.
- Launch announcement: PR/social distribution, LinkedIn post by Cleveland, optional press release for the federal/SDVOSB angle.
- Old site (WordPress) replaced via DNS cutover.
- Search Console URL inspection: confirm noindex,nofollow is removed and key pages are indexed within 7 days post-launch.

**Roles needed:**
- Frontend Lead (50%): polish, bug fixes, performance optimization.
- Tools Engineer (25%): tool bug fixes.
- Designer (25%): launch graphics, social cards, PR assets.
- Content team (full-time, 2 writers): 12 blog posts + author bios.
- SEO (full-time): GEO audit, schema final pass, llms.txt v2, sitemap submission, Search Console setup, indexing verification, Bing setup.
- **Marketing/launch lead** (50%): launch communications, PR distribution, internal enablement.

**Exit criteria:**
- 100% of launch URLs return 200 OK and pass schema validation.
- Old → new redirects: 100% pass rate on a 50-URL random sample.
- Search Console shows ≥10 indexed URLs within 7 days of cutover.
- All 4 conversion-ladder tiers fire HubSpot events correctly.
- Lighthouse mobile median ≥85 Performance, ≥95 Accessibility, 100 SEO.
- Cleveland + executive sponsor formally signs off.

---

## Quick reference — the 10 most consequential architectural decisions

1. **Verb-led Services nav with a hybrid mega-menu** (Migrate · Host · Modernize · Integrate · Mobilize · Validate) — borrowed from Cohesive, sharpened with 6 pillars.
2. **Federal as a top-level nav item, not buried under Industries** — the SDVOSB credential is Grable's single biggest moat.
3. **Audience switcher (Federal/Commercial) as a sitewide cookie-persisted toggle**, not separate audience landing pages — matches 2026 B2B best practice for dual-audience sites.
4. **Vercel + Next.js 15 App Router + Sanity + Pagefind + HubSpot + PostHog** — chosen for editor experience, edge performance, and lowest ops overhead.
5. **Six service pillars** (MAS 9 Migration, Maximo Hosting, Maximo on FedRAMP, AI on Maximo, Integration & Custom Dev, Maximo Mobile/Field) — covers 100% of Grable's capability surface and the dominant 2026 search clusters.
6. **Four interactive tools** (MAS 9 Readiness Assessment, Hosting TCO, FedRAMP Cost, License Optimization) — the single largest competitive gap in the Maximo category.
7. **FAQPage + Service + Organization JSON-LD on every applicable page** — the highest-leverage GEO/AI-citation tactic.
8. **`/llms.txt` published at launch** — almost zero adoption among competitors; one-week project, multi-quarter compounding citation lift.
9. **12 launch blog posts weighted to MAS 9 + FedRAMP + AI clusters** — the three search clusters with the steepest 2026 demand curves.
10. **Schema-validated comparison page (Grable vs ITS / vs Naviam / vs IBM MaaS)** — the single most AI-citable asset in the entire content strategy.

---

## Five quick wins for Week 1

1. **Strip `noindex,nofollow` and publish a valid `sitemap.xml`** — the P0 defect on the current site. Day 1 of the Next.js scaffold should ship a Search Console–verified sitemap.
2. **Ship the `/federal/` page first** — even before the homepage. Federal is the highest-margin audience, the SDVOSB credential is the sharpest differentiator, and one well-built federal page outweighs ten generic services pages.
3. **Publish the capability statement PDF and put a download CTA in the top utility bar** — single download asset, sitewide visibility, instant federal-buyer trust signal.
4. **Implement the audience switcher with cookie persistence** — even on a near-empty site it signals dual-audience seriousness; both federal contracting officers and commercial CIOs will notice within 5 seconds of arriving.
5. **Publish the MAS 9 Migration Playbook whitepaper gated behind a HubSpot form** — single asset, ungates the MQL pipeline before any other content is live, gives sales something to pitch from Day 1.

---

*End of architecture document.*
