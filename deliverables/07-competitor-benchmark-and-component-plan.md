# Competitor Benchmark & Commercial Website Component Plan

Source competitors reviewed live: **trmgroup.com** (The Resource Management Group) and **mavenasset.com** (Maven Asset Management). This document turns that review into (A) what to adopt/counter, (B) a full commercial-website component inventory, (C) a gap analysis against the current build, (D) concrete details to update now, and (E) a prioritized roadmap.

## 2026-06 Strategy Addendum

The competitive lens is now narrowed around four primary buying motions:

1. **Maximo Hosting / MaaS**
2. **MAS 9 Upgrade / Migration**
3. **IBM Storage Services**
4. **AI Hosting / AI Infrastructure**

IBM reselling remains important, but it is an enablement layer across those four motions rather than a standalone headline. Storage and AI hosting expand the competitive set beyond Maximo-only boutiques: Grable should now be positioned as an IBM infrastructure partner for mission-critical Maximo, storage, and AI workloads.

Implications:

- TRM remains the closest federal/hosting benchmark.
- Maven remains a useful Maximo-depth benchmark, but Grable should counter with hosting + storage + AI infrastructure breadth.
- Naviam/Cohesive remain scale and enterprise transformation references, not direct positioning models.
- Future component and content plans should prioritize Hosting, MAS 9 Upgrade, Storage Services, and AI Hosting before lower-priority service taxonomy expansion.

---

## A. Competitor Benchmark — What They Have, What We Do

### A.1 Positioning summary

| | **TRM Group** | **Maven Asset** | **Grable (target)** |
|---|---|---|---|
| Core play | Vendor-agnostic EAM/APM advisory + FedRAMP Maximo hosting | Pure-play IBM Maximo boutique consultancy | SDVOSB IBM Maximo specialist: MAS 9 + hosting + FedRAMP |
| Federal | **Strong** — FedRAMP Authorized, DoD/NASA/US Mint logos | **None** — no federal positioning at all | **Differentiator** — SDVOSB + FedRAMP-aligned |
| Hosting | 3 tiers incl. FedRAMP high-security cloud | **None** — supports client-run only | **Differentiator** — managed MaaS/IaaS/PaaS |
| Maximo depth | Broad but generic MAS coverage | **Very deep** — 187 certs, 3 Champions, ISO 9001 | Deep MAS 9 install/HA/migration |
| Content engine | Mature — books, 70+ tags, self-assessments | Mature — Maximo Monday (220), hackathon, awards | **Thin today** — must build |
| Branded IP | OMNI, PredictNOW, RulesManager Studio | MavenCare, MavenScore | AC/DC Mobile, MaaS Toolbox, MAS 9 Kit |
| Conversion | Sales-led, single form, no chat/pricing | Low-friction, no demo/gated content | Opportunity to out-instrument both |

### A.2 What to ADOPT (proven patterns both/either competitor uses)

1. **Split "Solutions" (outcomes) from "Services" (technology/delivery)** — TRM's IA lets them sell outcomes independent of platform. We can mirror with Services (what we do) vs. Industries/Outcomes.
2. **Interest-routed contact form** — TRM's dropdown (Advisory / EAM / Cloud / Reliability / Training / Other) + "How did you hear about us?" Adopt for our Federal/Commercial/Support/RFP routing.
3. **Quantified credibility wall** — Maven's "187 certifications, 3 IBM Champions, 250 years combined experience, ISO 9001" is hard to out-claim. We need our own number set (certs, MAS 9 installs, sqft/assets, uptime).
4. **Named-author content with E-E-A-T** — both use named experts. Our blog/whitepapers must carry author bios.
5. **Resource library filterable by type + topic + industry** — TRM's filtered library is the SEO/credibility engine. Build this into `/resources/`.
6. **Self-assessment / interactive tools as lead magnets** — TRM's self-assessments, our planned MAS 9 Readiness Assessment + TCO/FedRAMP calculators. This is a conversion asset *neither competitor does well.*
7. **Tiered, named support packages** — Maven's MavenCare 3-tier model. Productize our managed support similarly.
8. **Community/brand assets** — Maven's MAStermind Hackathon + Maximo User Choice Awards build organic authority. Consider a signature Grable content franchise.

### A.3 Where to COUNTER-POSITION (their gaps = our openings)

1. **Federal vs. Maven** — Maven has zero federal story. Own SDVOSB + FedRAMP + contract vehicles hard; it's uncontested against them.
2. **Hosting vs. Maven** — Maven only *supports* client environments. Lead with managed hosting/MaaS as a clean differentiator.
3. **MAS 9 depth vs. TRM** — TRM lists MAS components generically with no install/upgrade/HA methodology. Publish a concrete MAS 9 migration + HA methodology (we have the engineering depth).
4. **IBM partner tier proof** — neither shows a named Gold/Platinum badge. If our IBM Gold Partner status verifies, display the official badge prominently — instant counter-authority.
5. **Self-serve conversion** — both are sales-form-only, no chat, no demo, no pricing transparency. Out-instrument with calculators, instant demos, transparent package tiers, and chat.
6. **Quantified case studies** — both have weak ROI storytelling (Maven shows *no* metrics). Publish quantified, logo-approved case studies with $ saved / % uptime / downtime reduction.

---

## B. Master Component Inventory — A Complete Commercial Website

This is the full list you asked for: every component a commercial B2B site like this needs, grouped by function. Status legend: ✅ exists · 🟡 stub/partial · ❌ missing.

### B.1 Global chrome (every page)
- 🟡 **Header / top nav** — exists, flat links only; needs **mega menu** for Services/Industries/Resources
- 🟡 **Utility credential strip** — exists with `[VERIFY]` placeholders (UEI, CAGE, SDVOSB, IBM Gold, FedRAMP)
- ❌ **Audience switcher** — Federal & DoD vs. Commercial Enterprise toggle
- ❌ **Sticky / persistent CTA bar** ("Book a briefing")
- 🟡 **Footer** — exists minimal; needs **mega footer** (Services, Industries, Resources, Company, Legal, contact block, social, newsletter)
- ❌ **Mobile navigation drawer**
- ❌ **Site search** (Pagefind planned) — neither competitor has on-site search; easy win
- ❌ **Cookie consent / privacy banner**
- ❌ **Skip-to-content + a11y landmarks** (accessibility)
- ❌ **Breadcrumbs** component
- ❌ **JSON-LD schema injector** component

### B.2 Conversion & lead-gen components
- ❌ **Routed contact form** (Federal / Commercial / Support / RFP-RFI / AC/DC / General) — HubSpot
- ❌ **RFP / RFI intake form** (separate, federal)
- ❌ **Newsletter signup**
- ❌ **Capability statement download** (gated PDF)
- ❌ **Demo request flow** (counter both competitors)
- ❌ **Gated whitepaper / lead-magnet wrapper** (email → PDF)
- ❌ **Interactive tools** (MAS 9 Readiness, Hosting TCO, FedRAMP Cost, License Optimization) — biggest differentiator
- ❌ **Booking / calendar embed** ("Book a briefing" → real scheduler)
- ❌ **Live chat / chatbot** (optional; out-instruments both rivals)
- ❌ **Conversion analytics** (GA4 + PostHog events, form tracking)

### B.3 Trust & credibility components
- 🟡 **Credential matrix** (UEI, CAGE, NAICS, SDVOSB, IBM tier, FedRAMP, ISO/SOC) — placeholders only
- ❌ **Partner / certification badge row** (IBM Gold, FedRAMP, ISO 27001, SOC 2 — verified assets)
- ❌ **Client logo wall** (logo-approved; Maven has none — beat them)
- ❌ **Stat / metrics band** (installs, certs, uptime, sqft/assets, years)
- ❌ **Testimonials / quotes** (approval-gated)
- ❌ **Case study cards + detail template** (quantified results)
- ❌ **Past performance** (federal — CPARS-style summaries)
- ❌ **Contract vehicles** (GSA/SEWP/contract listings — see B.5)
- ❌ **Awards / recognitions**

### B.4 Content engine (SEO + authority — currently the biggest gap)
- ❌ **Blog / insights index + post template** (`/resources/blog/`) — TOC, answer capsule, FAQ, author bio
- ❌ **Case studies index + detail** (`/resources/case-studies/`)
- ❌ **Whitepapers / eBooks library** (`/resources/whitepapers/`)
- ❌ **Datasheets** (`/resources/datasheets/`)
- ❌ **Webinars / on-demand videos** (`/resources/webinars/`)
- ❌ **Tools hub** (`/resources/tools/`)
- ❌ **Resource library filtering** (by type / topic / industry — TRM pattern)
- ❌ **Author profiles / bios** (E-E-A-T)
- ❌ **Pillar pages** (Maximo as a Service, AI on Maximo, FedRAMP Maximo, MAS 9 Migration)
- ❌ **FAQ blocks** (per service/industry/federal page → FAQPage schema)
- ❌ **RSS feed** (`/resources/blog/rss.xml` — redirect target exists)
- ❌ **News / press** (`/company/news/`)

### B.5 Federal & "contracts" components
> "Contracts" in this market means **contract vehicles + procurement assets**, plus standard legal contracts (B.7).
- ❌ **Federal hub** (`/federal/`) — credential matrix, FedRAMP/IL-tier explainer
- ❌ **Capability statement** page + downloadable PDF (`/federal/capability-statement/`)
- ❌ **Contract vehicles** page (`/federal/contract-vehicles/`) — GSA Schedule, SEWP, agency BPAs, NAICS, set-aside eligibility
- ❌ **SDVOSB certification** proof page (`/federal/sdvosb-certification/`)
- ❌ **Past performance** (`/federal/past-performance/`)
- ❌ **FedRAMP SaaS / IL-tier** pages (`/federal/fedramp-saas/`, IL2–IL6 guide)
- ❌ **RFP/RFI intake** workflow (`/contact/rfp/`)

### B.6 Commercial / company components
- 🟡 **Services hub + 6 service pillars** — hub exists, pillars are stubs via catch-all
- ❌ **Industries hub + 7 industry pages** (life sciences, gaming/hospitality, manufacturing, utilities, transportation, higher ed, federal)
- ❌ **Products** (AC/DC Mobile, MaaS Admin Toolbox, MAS 9 Migration Kit)
- ❌ **About / company story** (`/company/about/`)
- ❌ **Leadership** (`/company/leadership/`)
- ❌ **Careers** (`/company/careers/`) — both competitors have this
- ❌ **Partners / alliances** (`/company/partners/`) — IBM, AWS, etc.
- ❌ **Pricing / packaging** (optional — neither competitor shows it; transparency = differentiator)

### B.7 Legal & compliance components
- 🟡 **Privacy policy** (`/legal/privacy/`) — page exists
- ❌ **Terms of service / use** (`/legal/terms/`)
- ❌ **Accessibility statement** (`/legal/accessibility/`)
- ❌ **Security / trust page** (`/legal/security/` — SOC2/ISO/data handling)
- ❌ **Cookie policy**
- ❌ **MSA / SOW templates** (sales/legal contract artifacts — if client-facing downloads desired)
- ❌ **SLA documentation** (for hosting/MaaS tiers)

### B.8 Technical / SEO foundation
- ✅ **robots.ts, sitemap.ts, llms.txt route** — exist
- ❌ **301 redirect map** (24 WordPress URLs → new IA; documented, not implemented)
- ❌ **Per-page metadata + Open Graph** (currently generic)
- ❌ **JSON-LD schema** (Organization, WebSite, Service, BreadcrumbList, FAQPage, Article, ContactPage, GovernmentService, WebApplication)
- ❌ **Design tokens + Tailwind** (package.json has neither Tailwind nor a CSS system yet)
- ❌ **CMS (Sanity)** — 10 content models planned, none built
- ❌ **Forms backend (HubSpot)** + analytics (GA4, PostHog)
- ❌ **Quality gates** (redirect tests, schema validation, Playwright smoke, Lighthouse, a11y)

---

## C. Gap Analysis — Current Build vs. Target

**What actually exists in `site/`:**
- Next.js App Router project (no Tailwind, no design tokens — only `globals.css`)
- One generic `PageShell` component reused for every page (hero + cards + sections)
- ~11 real page files; the rest of the 45-route IA resolves via `[...slug]` / `[[...slug]]` catch-alls
- `Header` (flat nav + `[VERIFY]` credential strip), minimal `Footer`
- `robots.ts`, `sitemap.ts`, `llms.txt` route, `site.ts` data (routes + 6 service cards)

**The core gaps, in priority order:**
1. **Every credibility claim is a `[VERIFY]` placeholder** — nothing is real yet. This blocks launch more than code does.
2. **No content engine** — blog, case studies, whitepapers, tools all missing. This is where both competitors win and we're at zero.
3. **No conversion instrumentation** — no working forms, no CRM, no analytics, no tools.
4. **No real design system** — generic shell, no Tailwind/tokens, no mega menu, no mobile drawer.
5. **Service/industry/federal pages are stubs** — structure planned (templates in `02-page-template-system.md`) but not built as distinct pages.
6. **No schema/metadata/redirects implemented** — SEO foundation documented but not in code.

---

## D. Concrete Details to Update Now (high-value, low-dependency)

These are specific edits to make on what already exists:

1. **Resolve the `[VERIFY]` credential strip** (`components/Header.tsx`, `PageShell.tsx`) — confirm and lock: UEI `DJKXNKLXRAF7`, CAGE `7CW57`, SDVOSB status, IBM partner tier (Gold?), FedRAMP-aligned language. Replace placeholders with verified values or remove unverifiable claims before launch. *(See `05-proof-data-request.md` for the data list.)*
2. **Upgrade Header to a mega menu** with Services / Industries / Resources columns (match TRM/Maven depth) + mobile drawer.
3. **Add the audience switcher** (Federal & DoD / Commercial) to the home hero — it's in the template spec but not built.
4. **Replace home "Launch proof placeholders"** panel with a real stat band once numbers are approved (counter Maven's quantified wall).
5. **Build the routed contact form** with the 6 routing options from `03-core-page-copy-skeletons.md` (adopt TRM's "How did you hear about us?" field).
6. **Add per-page metadata + Open Graph** — currently generic; every page needs unique title/description.
7. **Implement the 24 redirects** from `01-site-map-and-navigation.md` in `next.config.ts`.
8. **Add IBM Gold Partner + FedRAMP badge assets** to the trust strip (verified) — neither competitor displays a partner tier badge.
9. **Stand up `/federal/contract-vehicles/`** with GSA/SEWP/NAICS/set-aside details — uncontested vs. Maven.
10. **Add FAQ blocks + FAQPage schema** to each service page for AI-citation / GEO (per `04-content-and-seo-backlog.md`).

---

## E. Prioritized Roadmap (maps to existing phases in `00-launch-roadmap.md`)

**Phase 1 — Foundation (credibility + conversion first):**
- Resolve all `[VERIFY]` claims (data gathering — gates everything)
- Design system: Tailwind + tokens, mega menu, mobile drawer, mega footer, audience switcher, sticky CTA
- Build 12 core pages as real templated pages (not catch-all): Home, Services hub + 3 priority pillars, Federal hub, Industries hub + Life Sciences, AC/DC Mobile, About, Contact, Privacy
- Routed contact form (HubSpot) + GA4/PostHog
- Metadata, OG, JSON-LD, 24 redirects, sitemap/robots/llms verified
- Trust strip with verified badges + client logo wall + stat band

**Phase 2 — Authority content (close the engine gap):**
- Resource library with type/topic/industry filtering
- Blog index + post template (named authors, FAQ, TOC)
- 4 pillar pages (MaaS, AI on Maximo, FedRAMP Maximo, MAS 9 Migration)
- 2 quantified case studies (logo-approved, with metrics — beat both rivals)
- Capability statement page + PDF; contract vehicles page
- 6–8 FAQ-rich supporting posts

**Phase 3 — Lead engines (out-instrument competitors):**
- MAS 9 Readiness Assessment, Hosting TCO Calculator, FedRAMP Cost Estimator, License Optimization Estimator
- Gated lead-magnet wrapper, demo request flow, booking embed
- HubSpot segmentation + Federal/Commercial MQL routing

**Phase 4 — CMS & scale:**
- Sanity (10 models: page, service, industry, case study, blog, whitepaper, tool, author, FAQ, navigation)
- Governance cadence (quarterly llms.txt/credentials, monthly content, case-study approval)

---

## F. Open questions / data needed before build accelerates
- IBM partner tier: confirmed **Gold**? (badge asset + proof)
- SDVOSB certification: active? (cert PDF / SAM.gov)
- FedRAMP: "aligned" vs. "authorized" — exact approved language (TRM claims *Authorized*; we must not overclaim)
- Approved client names + logos + metrics for case studies / logo wall
- Real credential numbers for the quantified stat band (installs, certs, uptime, sqft/assets)
- Contract vehicles actually held (GSA Schedule #, SEWP, BPAs)

See `05-proof-data-request.md` for the full data request checklist.
