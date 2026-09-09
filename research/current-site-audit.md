# Grable Services — Current Site Baseline Audit

**Site audited:** https://grableservices.com/
**Audit date:** 2026-05-26
**Auditor:** Pre-revamp baseline; input to Next.js redesign

---

## 0. Executive Verdict (one paragraph)

The current Grable Services site is a WordPress + Astra + Elementor + Slider Revolution stack hosted on a Newfold Digital "website-pro" builder behind a CDN at `websitepro-cdn.com`. **Every public page is served with `<meta name="robots" content="noindex, nofollow">`, so the entire site is invisible to Google and every other search engine.** No page has an actual `<h1>` tag — visual "headings" are Elementor `.elementor-heading-title` elements at H2/H3 only. There is no XML sitemap (the standard WP locations are all soft-404s), no JSON-LD structured data, no Open Graph or Twitter Card tags, no meta description, no blog, no case studies, no team page, no MAS 9 migration content (one passing mention on `/maximo-free-upgrade/`), no FedRAMP-April-2026 announcement, and the only image directory referenced is `wp-content/uploads/2019/`. The site reads as a 2018–2019 era Maximo brochure with a 2026 copyright. **For SEO purposes, this site does not exist.** A clean Next.js rebuild is the right call, and the technical migration risk is essentially zero — there is no organic equity to preserve.

---

## 1. Crawl + IA Inventory

| # | URL | HTTP | Page Title | Real \<h1\> | Top H2/visual heading 1 | Top H2/visual heading 2 | Top H2/visual heading 3 | Word count | Notes |
|---|-----|------|------------|------------|-------------------------|-------------------------|-------------------------|-----------|-------|
| 1 | / | 200 | Grable Consulting Services – Your Software Solutions Superstore | **none (no H1 tag)** | Custom Software Solutions | We work with | Enterprise Asset or Inventory Management | ~400 | "Managed Solutions for IBM Maximo Enterprise Asset Management" is a Slider Revolution caption, not an H1 |
| 2 | /cloud-solutions/ | 200 | Cloud Solutions – Grable Consulting Services | **none** | IBM Maximo Cloud Solutions- the Leading Enterprise Asset Solutions (H2) | IBM Maximo Cloud Solutions: | Our Cloud Offering Includes: | ~900 | All headings are H2; no semantic H1 |
| 3 | /ibm-maximo-in-the-cloud/ | 200 | IBM Maximo In The Cloud – Grable Consulting Services | **none** | IBM Maximo in the Cloud | Reduce IBM Maximo license costs 20-50% | Downtime reduced 5-20% | ~475 | No MAS 8 / MAS 9 / AI / Assistant mention |
| 4 | /maximo-as-a-services/ | 200 | Maximo As A Service – Grable Consulting Services | **none** | IBM Maximo As A Service | IBM Maximo Cloud Solutions: | Security? We not only pass, but exceed the rest because that is what we are built on: | ~850 | URL has typo: "services" should be "service"; copy is duplicated from /cloud-solutions/ |
| 5 | /saas-gxp-and-the-cloud/ | 200 | SaaS, GxP and The Cloud – Grable Consulting Services | **none** | SaaS, GxP and The Cloud | (no second H2) | (no third H2) | ~650 | Single-section page; reads as a blog post placed on a service URL |
| 6 | /validated-maximo-solutions/ | 200 | Validated Maximo Solutions – Grable Consulting Services | **none** | Validated IBM Maximo Solutions | IBM Maximo GxP Compliant Cloud Solutions | With IBM Maximo GxP, you can: | ~550 | 21 CFR Part 11, SOC 2, ISO 27001 mentioned; no validation package detail |
| 7 | /fedramp-saas-fedramp-ias/ | 200 | FedRAMP SaaS FedRAMP IAS – Grable Consulting Services | **none** | FedRAMP SaaS | FedRAMP SaaS (duplicate) | (none) | ~450 | URL typo "IAS" should be "IaaS"; no ATO date, no impact level, no April 2026 |
| 8 | /laas/ | 200 | IaaS – Grable Consulting Services | **none** | IaaS | Executive Summary | DISA Unclassified Authorizations | ~1,100 | URL slug says "laas" but title is "IaaS" — slug typo; densest copy on site |
| 9 | /paas/ | 200 | PaaS – Grable Consulting Services | **none** | PaaS | Executive Summary | DISA Unclassified Authorizations | ~850 | Copy near-duplicate of /laas/ |
| 10 | /ac-dc-mobile-solution/ | 200 | AC DC Mobile Solution – Grable Consulting Services | **none** | Your Asset Management workforce is on the move… | AC DC is: | Want to learn more? See what others have to say about AC DC: | ~850 | Brand name "AC DC" reads as the rock band; consider renaming |
| 11 | /mobile-asset-data-collection/ | 200 | Mobile Asset Data Collection – Grable Consulting Services | **none** | ASSET DATA COLLECTION SERVICES WITH AC DC MOBILE SOFTWARE | AC DC Has a variety of prompts | The Data Validation Process | ~750 | All-caps headings; dated feel |
| 12 | /careers/ | 200 | Careers – Grable Consulting Services | **none** | Interested in Working With Us? | Custom Engineered Solutions | Government Agencies | ~1,200 | 4 stale job listings (Facility Inventory Person, Tech Service Manager, Sr Maximo Consultant, Maximo Developer) |
| 13 | /contact-us/ | 200 | Contact Us – Grable Consulting Services | **none** | Contact Us | Get Started With Us | Email Us Today! | ~350 | CF7 form; 1242 SW Pine Island Rd Suite 215, Cape Coral, FL 33991; 844-859-9243, 239-220-6848; Info@GrableServices.com; no social links |
| 14 | /privacy-policy/ | 200 | Privacy Policy – Grable Consulting Services | **none** | Privacy Policy | Website Visitors | Gathering of Personally-Identifying Information | ~1,050 | No "last updated" date; generic template |
| 15 | /products-services/ | 200 | Products & Services – Grable Consulting Services | **none** | Products & Services | (only H2 on page) | (none) | ~180 | Pure link hub; no copy |
| 16 | /maximo-free-upgrade/ | 200 | Maximo Free Upgrade – Grable Consulting Services | **none** | IBM Maximo Free Upgrade To MAS 9 | So just to recap: | (none) | ~650 | The ONLY page that mentions "MAS 9" |
| 17 | /fedramp/ | 200 | FedRAMP – Grable Consulting Services | **none** | FedRAMP | (only H2 on page) | (none) | ~550 | Duplicate of GxP/SaaS post copy; no real FedRAMP detail |

**Soft-404 confirmed on (HTTP 200 + `noindex, nofollow` + `<title>Page not found</title>` body):**
`/blog/`, `/about/`, `/team/`, `/case-studies/`, `/news/`, `/wp-sitemap.xml`, `/sitemap_index.xml`, `/llms.txt`, `/ai.txt`, `/feed/` (RSS — also soft-404).

---

## 2. Technical SEO

| Check | Result |
|-------|--------|
| **robots.txt** | Present (HTTP 200). Content: `User-agent: *` / `Disallow: /wp-admin/` / `Allow: /wp-admin/admin-ajax.php`. No `Sitemap:` directive. |
| **sitemap.xml** | **MISSING.** `/sitemap.xml`, `/sitemap_index.xml`, `/wp-sitemap.xml` all return HTTP 200 with a "Page not found" `noindex` body (soft-404). No discoverable XML sitemap. |
| **canonical tags** | Present on every audited page, self-referential and well-formed (`<link rel="canonical" href="https://grableservices.com/...">`). One of the few things done correctly. |
| **meta robots** | `<meta name='robots' content='noindex, nofollow' />` on **every page tested** including the homepage. **The entire production site is excluded from search.** This is the single most damaging defect. |
| **hreflang** | None. Site is English-only (no `en-US` declaration, no language alternates). |
| **structured data (JSON-LD)** | **Zero** `application/ld+json` blocks on homepage, cloud-solutions, or any other audited page. No Organization, LocalBusiness, Service, BreadcrumbList, FAQPage, or WebSite schema. |
| **Open Graph tags** | **Zero** `og:*` tags on homepage. No `og:title`, `og:description`, `og:image`, `og:url`. Links shared to LinkedIn/Slack/Teams will not unfurl. |
| **Twitter Cards** | None. |
| **Meta description** | **Missing on homepage and cloud-solutions** (and presumed missing site-wide). |
| **viewport** | Present (`width=device-width, initial-scale=1`). |
| **Real `<h1>` tag** | **Absent on every audited page.** All visual "H1s" are Elementor or Slider Revolution H2/H3 elements styled to look like H1. |
| **HTTPS** | OK. HSTS header set (`max-age=31536000`). HTTP/2 + ALT-SVC H3 (HTTP/3). |
| **Headers** | Strong: HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` configured. `X-XSS-Protection: 1; mode=block` is deprecated but harmless. No CSP header. |

---

## 3. CMS / Stack Identification

| Layer | Identified |
|-------|-----------|
| **CMS** | WordPress 6.9.4 (latest) |
| **Theme** | Astra (parent) + Astra-child (custom child theme), Astra core CSS 4.12.1 |
| **Page builder** | Elementor 3.35.1 (free version; no `elementor-pro` markers seen) |
| **Slider** | **Slider Revolution 5.4.8** — released ~2018; multiple known CVEs including CVE-2024-34444. This is a P1 security finding independent of the redesign. |
| **Forms** | Contact Form 7 |
| **Other plugins detected** | `wp-logo-showcase-responsive-slider-slider` (carousel of client logos) |
| **Uploads vintage** | Only `wp-content/uploads/2019/` referenced on homepage — no images uploaded in 5+ years |
| **Host / CDN** | Newfold Digital "WebsitePro" builder. Origin: `Server: website-pro/9.1.21`, response `Via: 1.1 google` (Google Cloud), origin IP `104.154.100.138` (Google Cloud `us-central1`). Static assets served from `grable-services-llc-v1770280351.websitepro-cdn.com` (Newfold-managed CDN). DNS at `name-services.com` (Newfold/Network Solutions). |
| **Cache** | Custom srcache on the website-pro layer (`X-Srcache-Fetch-Status: HIT/BYPASS`) — sub-200ms HTML responses observed. |
| **Analytics** | Only `google.com` (likely reCAPTCHA for CF7) seen in script sources; no GA4 / GTM / Plausible / PostHog detected on homepage. |

---

## 4. Performance Signals

Measured via `curl` (origin response only; no full waterfall, no LCP/CLS):

| Page | HTTP HTML response time | HTML bytes (uncompressed) | `<link rel=stylesheet>` external CSS | `<script src=…>` external JS | `<img>` tags in markup | Inline `<style>` blocks |
|------|------------------------|--------------------------|--------------------------------------|------------------------------|------------------------|------------------------|
| / | 152 ms | 175 KB | 1 (Astra main.min.css) | 21 | 12 | 11 |
| /cloud-solutions/ | 163 ms | 156 KB | 0 (all CSS inlined) | 19 | 5 | (multiple) |

**Observations:**
- HTML transfer is fast (Google Cloud + srcache) but uncompressed HTML payload of **175 KB on the homepage** is heavy for a brochure page — driven by 11 inline `<style>` blocks (Elementor per-widget CSS) plus repeated Slider Revolution markup.
- 19–21 external JS files on a brochure page is bloat. Slider Revolution, Elementor frontend, jQuery, Contact Form 7, logo-showcase carousel, and Astra theme JS all load on every page.
- All assets are pulled from a single CDN host (`websitepro-cdn.com`) — good for connection reuse but means a Newfold/Web.com platform dependency.
- No HTTP/3 push, no critical-CSS inlining strategy, no lazy-loading attributes visible on the audited `<img>` tags (Astra normally adds them, but the 2019-era images are mostly decorative).
- 2019-vintage JPG/PNG uploads — no WebP/AVIF served.

A modern Next.js rebuild with App Router + next/image + native lazy loading should land the homepage under 80 KB of HTML and ~5 JS bundles, with LCP under 1.5 s.

---

## 5. Content Gap Analysis (what a 2026 Maximo consulting site MUST have, and Grable does not)

| Modern requirement | Present today? | Notes |
|--------------------|----------------|-------|
| MAS 9 migration content (8.x → 9.x upgrade playbook, pricing tiers, OCP/RH dependencies) | **No.** Only one passing mention on `/maximo-free-upgrade/`. No technical depth, no comparison, no MAS 9.1 / 9.1.131 specifics. | Critical gap — this is the dominant Maximo buying motion in 2026 |
| AI / watsonx / Maximo Assistant content | **No mention anywhere.** | This is the #1 search-trending Maximo topic right now |
| FedRAMP April 2026 announcement (IBM Maximo Application Suite achieved FedRAMP High) | **No.** `/fedramp/`, `/fedramp-saas-fedramp-ias/`, and `/laas/` all reference DISA IL2/IL5 and "pending FedRAMP High" — copy is years old | This is the single biggest news hook the firm has, and it's not on the site |
| Case studies / customer stories with logos, KPIs, quotes | **No.** Two carousel logos appear on the homepage (via wp-logo-showcase plugin) but no dedicated page, no PDFs, no testimonial pages | Federal/regulated buyers require named customer references |
| Blog / news / insights | **No.** `/blog/`, `/news/` both soft-404. RSS feed soft-404s too. | No content marketing motion exists |
| Capability statement / federal procurement assets (SAM.gov UEI, NAICS codes, SDVOSB cert PDF, GSA schedule, past performance, DUNS) | **No.** Homepage claims "Disabled Veteran Owned and Operated" but offers no downloadable capability statement, no UEI, no SDVOSB verification link | Mandatory for federal sales motion |
| Team / leadership pages with bios, photos, LinkedIn | **No.** `/team/`, `/about/` soft-404. No people are named anywhere on the site. | Federal buyers + GxP buyers need named accountability |
| Pricing or assessment / sizing tools | **No.** No interactive tools, no calculators, no "request a sizing" CTA tied to a structured form | Modern SaaS expectation |
| Industry-vertical pages (Federal, Life Sciences/Pharma, Utilities, Oil & Gas, Manufacturing, Transportation) | **Partially.** GxP and FedRAMP topics appear, but no industry-vertical landing pages with use cases. | Missed long-tail SEO and AE-ready pages |
| Partner / certification badges (IBM Gold/Platinum Partner, Red Hat partner, FedRAMP marketplace, AWS/Azure) | **No.** | Trust signal gap |
| Resources / datasheets / whitepapers gated downloads | **Single PDF** ("IBM Maximo Cloud Datasheet") linked from `/fedramp/`. No resource library. | No lead-gen funnel |
| Search-engine-readable About / Company / History page | **No.** | |
| Schema.org Organization + LocalBusiness JSON-LD | **No.** | Search-ranking and AI-citation gap |

---

## 6. Dated-Feel Signals (why the site feels old)

1. **Font stack defaults to system fonts** (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto…`) — no brand typography, no Google Fonts, no custom display face. Reads as default WordPress.
2. **All-caps section headings** (e.g., `ASSET DATA COLLECTION SERVICES WITH AC DC MOBILE SOFTWARE`) — 2014-era styling.
3. **Slider Revolution 5.4.8 hero slider** on the homepage — animated multi-slide carousels are a tell of 2016–2018 design and demonstrably hurt conversion in 2026 testing.
4. **Stock-photo imagery from `/uploads/2019/`** — generic businessperson-pointing-at-screen photos with no human warmth or product authenticity.
5. **wp-logo-showcase carousel** for client logos — auto-scrolling logo carousel is a dated trust pattern; static grids perform better.
6. **Inline Elementor widget classes leak everywhere** (`elementor-heading-title elementor-size-default`) — visible code smell when inspecting; signals "WordPress page builder site, not a product."
7. **Copy tone is brochure-third-person and US-government-procurement-heavy** ("our offerings include," "we exceed the rest because that is what we are built on") — no first-person founder voice, no specifics, no proof.
8. **Footer says "©2026"** but every page is otherwise from a 2018–2019 content cycle — the copyright auto-updates while the body never has.
9. **Heading hierarchy is broken** (no H1; H2/H3 used decoratively) — feels like a builder export, not a designed site.
10. **Branding inconsistency** — "Grable Consulting Services" in `<title>` but "Grable Services" in the URL and footer logo. "AC DC" product name + all-caps treatment reads as the rock band.
11. **Footer has no social icons, no newsletter signup, no sitemap, no trust badges** — 2010-era footer.
12. **Contact page form is Contact Form 7 vanilla styling** with no field validation polish, no progressive disclosure, no Calendly/Cal.com booking option.
13. **Two phone numbers, two URL slugs with typos (`/laas/` for IaaS, `/maximo-as-a-services/`, `/fedramp-saas-fedramp-ias/`)** — operational sloppiness visible to buyers.
14. **No dark mode, no responsive imagery (srcset usage minimal), no motion design** beyond the slider.

---

## 7. SEO Equity Inventory & Recommended 301 Mapping

**Equity reality check:** Because the entire site has been `noindex, nofollow` for (at minimum) the duration of the current WordPress install, **the organic search equity to preserve is effectively zero.** Google has not been allowed to index any of these URLs. Backlink equity, if any, still resolves through 301s — so we should still redirect properly. Pages with real, unique copy worth migrating are starred ⭐.

| Old URL | Has real content? | Recommended Next.js path | Redirect type | Rationale |
|---------|-------------------|--------------------------|---------------|-----------|
| / | ⭐ Yes (positioning + services teaser) | `/` | n/a (root) | Full rewrite |
| /cloud-solutions/ | ⭐ Yes | `/solutions/maximo-cloud/` | 301 | Consolidate with /ibm-maximo-in-the-cloud/ and /maximo-as-a-services/ |
| /ibm-maximo-in-the-cloud/ | ⭐ Yes | `/solutions/maximo-cloud/` | 301 | Same target — duplicate content today |
| /maximo-as-a-services/ | ⭐ Yes | `/solutions/maximo-as-a-service/` | 301 | Fix typo, separate "MaaS" page |
| /saas-gxp-and-the-cloud/ | ⭐ Yes (essay-style) | `/insights/saas-gxp-and-the-cloud/` | 301 | Move to blog/insights — it's an article, not a service |
| /validated-maximo-solutions/ | ⭐ Yes | `/industries/life-sciences/validated-maximo/` | 301 | Promote to industry vertical |
| /fedramp-saas-fedramp-ias/ | ⭐ Yes | `/industries/federal/fedramp/` | 301 | Fix URL typo (IAS→IaaS) |
| /laas/ | ⭐ Yes (dense DISA copy) | `/industries/federal/iaas/` | 301 | Fix slug typo (laas→iaas) |
| /paas/ | ⭐ Yes | `/industries/federal/paas/` | 301 | |
| /ac-dc-mobile-solution/ | ⭐ Yes | `/products/mobile/` (consider renaming product) | 301 | "AC DC" brand reconsideration recommended |
| /mobile-asset-data-collection/ | ⭐ Yes | `/products/mobile/data-collection/` | 301 | Subpage of mobile product |
| /careers/ | Thin | `/company/careers/` | 301 | Refresh roles before relaunch |
| /contact-us/ | Thin | `/contact/` | 301 | Modernize form |
| /privacy-policy/ | Boilerplate | `/legal/privacy/` | 301 | Replace with current template |
| /products-services/ | ⭐ Hub (links only) | `/solutions/` | 301 | New solutions index |
| /maximo-free-upgrade/ | ⭐ Yes (only MAS 9 page) | `/offers/mas-9-upgrade/` | 301 | Promote heavily — anchor of MAS 9 motion |
| /fedramp/ | Thin (duplicate of GxP) | `/industries/federal/` redirect | 301 | Consolidate FedRAMP story |

**New pages to add (no 301 source — net new):**
- `/insights/` (blog index)
- `/insights/mas-9-migration-playbook/`
- `/insights/maximo-fedramp-high-april-2026/`
- `/insights/maximo-assistant-watsonx-ai/`
- `/industries/` (vertical hub)
- `/industries/federal/`, `/industries/life-sciences/`, `/industries/utilities/`, `/industries/manufacturing/`, `/industries/oil-and-gas/`, `/industries/transportation/`
- `/case-studies/` (index) + individual case studies
- `/company/about/`, `/company/team/`, `/company/sdvosb-capability-statement/`
- `/resources/` (datasheets, whitepapers, PDFs)
- `/partners/` (IBM, Red Hat, FedRAMP marketplace)
- `/contact/sizing/` (interactive sizing/assessment form)

---

## 8. Recommendations Priority Stack

| P | Finding | Action |
|---|---------|--------|
| **P0** | Site-wide `noindex, nofollow` | Remove on day 1 of relaunch; verify in Search Console |
| **P0** | No `<h1>` on any page | Architect every Next.js page with exactly one semantic `<h1>` |
| **P0** | No XML sitemap | Generate `/sitemap.xml` + reference in `robots.txt` |
| **P0** | No MAS 9 / no FedRAMP-April-2026 / no AI content | Three flagship pillar pages by launch |
| **P1** | Slider Revolution 5.4.8 — known CVEs | Replaced naturally by Next.js rebuild; do not migrate plugin |
| **P1** | No JSON-LD / OG / meta description | Add to every page template |
| **P1** | URL typos (`/laas/`, `/maximo-as-a-services/`, `/fedramp-saas-fedramp-ias/`) | Fix in new IA + 301 |
| **P1** | No case studies, no team page, no blog | Add as core sections |
| **P1** | No capability statement / UEI / SDVOSB asset | Add PDF + landing page for federal procurement |
| **P2** | Inline carousel + 2019 stock photos | Replace with original photography or branded illustrations |
| **P2** | All-caps headings, dated typography | New brand system in design phase |
| **P2** | 19–21 JS files per page | Resolved by Next.js architecture |

---

*End of audit.*
