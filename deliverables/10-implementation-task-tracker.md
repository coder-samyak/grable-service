# Implementation Task Tracker

Last updated: 2026-06-15

This tracker summarizes the website build work completed in `website_revamp/site`, what was verified, and what remains open before launch. Public pages must continue to use neutral language until the proof data in `05-proof-data-request.md` is approved.

## Status Legend

- `Done` - Implemented and build-verified.
- `Partial` - Implemented as a shell or safe placeholder; needs approved data or integration.
- `Blocked` - Waiting on business proof, credentials, assets, or external configuration.
- `Not started` - Planned but not yet implemented.

## Foundation

| Task | Status | Notes |
|---|---|---|
| Add Tailwind and PostCSS config | Done | Added Tailwind v4 dependencies, `tailwind.config.ts`, and `postcss.config.mjs`. |
| Add design tokens and responsive CSS | Done | Updated `app/globals.css` for restrained IT consulting styling, responsive menus, forms, cards, and CTAs. |
| Add claim gating source | Done | Added `app/lib/claims.ts`; all sensitive claims currently default to pending/neutral output. |
| Add SEO metadata helper | Done | Added `app/lib/seo.ts`; applied to home, services, federal, resources, and contact. |
| Add JSON-LD helper | Done | Added `app/lib/schema.tsx`; organization, website, and breadcrumb schema are available. |
| Add analytics helper | Partial | `app/lib/analytics.ts` no-ops until GA4/PostHog IDs are approved. |

## Global UI

| Task | Status | Notes |
|---|---|---|
| Header with mega menu | Done | `Header` now renders primary nav groups and hover/focus mega panels. |
| Mobile drawer | Done | Added `MobileDrawer` client component. |
| Utility credential strip | Done | Added `UtilityStrip`; renders neutral pending language, not IDs or unapproved claims. |
| Audience switcher | Done | Added local storage and cookie persistence. |
| Mega footer | Done | Added grouped footer navigation and newsletter shell. |
| Sticky CTA | Done | Added persistent CTA component. |
| Breadcrumbs | Done | Added breadcrumb component with JSON-LD. |
| Cookie/privacy banner shell | Done | Added local preference banner; no marketing integrations active. |

## Core Components

| Task | Status | Notes |
|---|---|---|
| Hero and CTA patterns | Done | Existing home hero retained and `PageShell` expanded for launch templates. |
| Service cards and feature/card grids | Done | Reused across services/resources and existing route files. |
| Process timeline | Done | Added standard assessment-to-operations process section in `PageShell`. |
| FAQ accordion | Done | Added details/summary FAQ section support. |
| Federal credential matrix/gated block | Partial | Public text states details are gated. Real identifiers remain blocked pending approval. |
| Trust/logo/badge rows | Partial | Neutral market/trust strips exist; no logos or partner badges render until approved. |
| Content engine primitives | Partial | Resource cards and hubs exist; rich blog/case-study templates remain future work. |

## Conversion Components

| Task | Status | Notes |
|---|---|---|
| Contact form shell | Done | Renders locally with labels and routing options; submission disabled. |
| RFP intake shell | Partial | Existing RFP route remains; shared form supports RFP/RFI route option. |
| Newsletter shell | Done | Footer/newsletter form shell renders without external IDs. |
| Gated download shell | Done | Capability statement shell added; no PDF or CRM workflow connected. |
| Booking CTA shell | Partial | CTA links route to `/contact/`; no scheduler embed connected. |
| HubSpot integration | Blocked | Waiting on approved portal/form IDs and routing rules. |
| GA4/PostHog instrumentation | Blocked | Waiting on approved env vars and event taxonomy. |

## Pages And Routing

| Task | Status | Notes |
|---|---|---|
| Home page | Done | Added audience switcher and metadata; no unapproved proof claims. |
| Services hub | Done | Uses service template mode, cards, FAQs, and metadata. |
| Priority service pages | Partial | Existing pages build and render; many still rely on shared `PageShell` content. |
| Federal hub | Done | Uses federal template mode with gated public credential language. |
| Resources hub | Done | Uses resource template mode and metadata. |
| Contact page | Done | Uses contact template mode and form shell. |
| Full route inventory | Done | Build generated 83 app routes from current files/catch-all. |
| Redirect map | Done | Existing `next.config.ts` contains documented redirects. |
| Robots, sitemap, llms.txt | Done | All return 200 in smoke check. |

## Claim Governance

| Task | Status | Notes |
|---|---|---|
| Remove public `[VERIFY]` markers | Done | Source scan found no rendered placeholder markers outside sanitizer code after cleanup. |
| Remove hardcoded UEI/CAGE-style values | Done | Sensitive scan found no hardcoded public identifiers in app/config/public scan scope. |
| Remove direct email placeholders | Done | Replaced `name@organization.com` placeholder with neutral work email text. |
| Gate partner tier and badge claims | Done | IBM partner tier/status is not asserted publicly. |
| Gate federal certification/authorization claims | Partial | Public content has been neutralized broadly; final legal/proof review still required. |
| Gate client names, logos, and metrics | Done | No approved logo wall, named client, or metric output was added. |

## Verification Completed

| Check | Status | Result |
|---|---|---|
| Production build | Done | `npm run build` passed. |
| Static route generation | Done | Build generated 83 pages/routes. |
| Required route smoke check | Done | `/`, `/services/`, `/services/maximo-hosting/`, `/services/mas9-migration/`, `/services/storage-services/`, `/services/ai-hosting/`, `/federal/`, `/resources/`, `/contact/`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt` returned 200. |
| H1 smoke check | Done | `/`, `/services/`, `/federal/`, and `/contact/` each rendered one H1. |
| Sensitive scan | Done | No UEI/CAGE values, direct emails, obvious secrets, `[VERIFY]`, named scanned customers, or hardcoded public credential IDs were found in the app/config/public scan scope. |

## Open Before Launch

| Task | Status | Owner/Input Needed |
|---|---|---|
| Approve exact procurement identifiers | Blocked | Business/legal approval and source documents. |
| Approve small-business/certification language | Blocked | Current official record and approved wording. |
| Approve IBM partner/reseller language | Blocked | IBM authorization proof and public wording. |
| Approve federal/FedRAMP/authorization language | Blocked | Current authoritative source and legal review. |
| Provide approved logos, badges, and metrics | Blocked | Logo permissions, badge assets, metrics source, and release approval. |
| Provide capability statement PDF | Blocked | Final approved PDF and download workflow. |
| Configure HubSpot forms | Blocked | Portal IDs, form IDs, routing rules, privacy review. |
| Configure analytics | Blocked | GA4/PostHog IDs, event taxonomy, consent posture. |
| Add automated Playwright/a11y tests | Not started | Recommended next engineering task. |
| Legal copy review | Blocked | Privacy, terms, accessibility, and security pages need legal review before launch. |

## Review Checklist

- Confirm the neutral claim posture is acceptable for public preview.
- Review the top navigation labels and dropdown destinations.
- Review the homepage/service/federal/resource/contact page copy.
- Decide which pending claims can move from `pending` to `approved` in `app/lib/claims.ts`.
- Decide whether to prioritize Playwright tests, CRM integration, or content polish next.
