# Deep Review + Pending Activities + Sanity Status

Generated: 2026-06-17. Scope: `website_revamp/site` (Next.js 16 App Router). Method: 4 parallel
read-only review agents (architecture/routing, components/a11y, Sanity, SEO/claims/security) +
direct `next build` and source verification. Every "critical/high" below was re-verified by grep/read.

---

## 0. Headline

- **Build is GREEN.** `npm run build` exits 0; 120 static pages generated (the tracker's "83 routes"
  is stale — the site grew). No TS or build errors.
- **The claim-gating posture is BROKEN in page copy.** The gating *system* is sound, but pages
  hardcode "SDVOSB IBM Gold Partner" as fact, bypassing the gate. This contradicts the task
  tracker's "Done — IBM partner tier/status is not asserted publicly." **Tracker is wrong here.**
- **A botched global find/replace mangled customer-facing copy** ("As an qualified small business…",
  "federal deployment planning hosting"). Reads as broken English on live pages.
- **Sanity is fully installed and configured but DORMANT** — placeholder projectId, no `.env.local`,
  CLI not logged in, and **zero pages consume Sanity data**. Going live needs an interactive login
  (user account) + a real project + page wiring.

---

## 1. CRITICAL — must fix before any public preview

### C1. Unapproved claims hardcoded as fact (claim-gating bypassed) — ✅ FIXED 2026-06-17
Neutralized "SDVOSB"/"IBM Gold Partner"/"set-aside" assertions across all 8 pages (kept factual
"specializing in IBM Maximo and MAS 9" capability language); build re-verified green (120 pages).
Residual `industries/federal/page.tsx:23` ("our qualified small business federal delivery model")
is collateral from the H1 botched-replace and should be fixed with H1.

Original finding (for record) — VERIFIED
"As an **SDVOSB IBM Gold Partner**…" and similar are written directly into JSX intro/body copy,
never routed through `app/lib/claims.ts` (where `ibm-relationship` and `small-business` are `pending`).

- `IBM Gold Partner` hardcoded in 8 files: `industries/electric-utilities`, `industries/water-utilities`,
  `industries/oil-gas`, `industries/maintenance-service-providers`, `solutions/business-process-consulting`,
  `solutions/assessments-benchmarking`, `resources/self-assessments`, `company/become-a-partner`.
- `SDVOSB` asserted as fact in the same 8 files.
- Irony: `services/maximo-on-fedramp/*` pages correctly say "IBM partner tier … not asserted here" —
  the site contradicts itself.
- **Fix:** strip "SDVOSB" / "IBM Gold Partner" from page copy; source that wording only from `claims.ts`
  until approved. This is a legal/compliance exposure, not just copy.

### C2. `/solutions/` landing page missing — VERIFIED
`/solutions/` is in `siteRoutes` and linked in nav, but has no `app/solutions/page.tsx`. It falls
through to the `[...slug]` scaffold ("Replace this scaffold with final copy"), so a primary nav
destination renders a placeholder. **Fix:** create `app/solutions/page.tsx`.

---

## 2. HIGH

### H1. Botched find/replace corrupted public copy — VERIFIED
An over-broad neutralization sed (apparently "FedRAMP"→"federal deployment planning" and
"SDVOSB"→"qualified small business") broke grammar in shipped copy:
- `"As an qualified small business…"` in 7 files (storage-services, blog, contact/rfp, company,
  company/careers, products/ibm-storage-services, maximo-on-fedramp/high).
- `"federal deployment planning hosting"` across services, whitepapers, capability-statement,
  federal pages, **and `app/data/site.ts:147`**; `llms.txt/route.ts:7` doubles it
  ("federal deployment planning federal deployments").
- **Fix:** audit and rewrite these strings by hand; the sed damaged the disclaimers meant to protect
  the company.

### H2. `/studio` (Sanity admin) is crawlable/indexable — VERIFIED
`app/robots.ts` returns `allow: "/"` with no disallow. The admin Studio should not be indexed.
**Fix:** add `disallow: ["/studio/"]` to the robots rules.

### H3. Sanity wired but no page consumes it — VERIFIED (agent)
Grep of `app/` finds no `sanityFetch`/`client.fetch`/`urlFor` usage outside the lib definitions.
Even after a live project, the site renders zero CMS content until pages are wired. (Consistent with
"Phase 2" intent, but worth an explicit decision.)

### H4. Redirects point to non-existent routes — VERIFIED (agent)
`next.config.ts:13-14` redirect to `/industries/life-sciences/gxp-validated-maximo/` and
`/validated-maximo/`, which don't exist (only `life-sciences/page.tsx`). `/feed/` → `/resources/blog/rss.xml`
with no RSS route. **Fix:** create targets or repoint redirects.

### H5. MobileDrawer accessibility — VERIFIED (agent)
No focus trap, no `aria-modal`, no Escape-to-close, no body scroll lock, toggle lacks `aria-label`.
**Fix:** add focus trap + Escape + `aria-modal` + scroll lock.

---

## 3. MEDIUM

- **M1. SEO metadata covers ~6 of ~120 pages.** Only home/services/resources/contact/federal call
  `pageMetadata()`. All `industries/*`, `solutions/*`, `products/*` and the catch-all share the root
  title/description with no per-page canonical/OG. `[...slug]/page.tsx` exports no metadata.
- **M2. Sitemap lists ~18 unbuilt scaffold routes** — thin/placeholder pages submitted to Google.
  Remove from `sitemap.ts`/`site.ts` or noindex the scaffold.
- **M3. `sitemap.ts` uses `lastModified: new Date()`** — every URL always "just modified." Use real dates.
- **M4. Mega-menu ARIA** — Header dropdowns lack `aria-haspopup`/`aria-expanded`; hover/`:focus-within`
  only. Keyboard users get weak signaling.
- **M5. Form semantics** — `Forms.tsx` inputs use implicit labels (no `id`/`htmlFor`), no `required`/
  `aria-required`, buttons are `type="button"` and not `disabled` despite "submission disabled" note.
- **M6. Hydration risk** — `AudienceSwitcher`/`CookieBanner` read localStorage post-mount without a
  hydration guard → flash of wrong state. Add a `mounted` guard.
- **M7. Sanity Studio `force-static`** — `dynamic = "force-static"` on the Studio route is unusual for
  an interactive app; drop unless intentional. Studio also can't connect until projectId is real.
- **M8. `useCdn: true` + no token** — blocks drafts/preview; `SANITY_API_READ_TOKEN` is never read.

---

## 4. LOW / INFO (positives)

- **Security/leak scan CLEAN:** no secrets, API keys, tokens, real UEI/CAGE/DUNS, real emails, client
  logos, or named customers. Only committed env file is the example (placeholders).
- **Analytics CLEAN:** `trackEvent` is a hard no-op; nothing fires without env vars.
- **Sanity schema CLEAN:** all 17 types registered, no duplicates, no dangling type refs; all GROQ
  projected fields match schema. `serverExternalPackages` workaround is correct.
- **Architecture mostly sound:** trailingSlash consistent; nav links resolve; `PageShell` (238 lines)
  is a clean template, not a god-component.
- Empty dead dirs: `app/[[...slug]]/` (empty, shadowed by `[...slug]`) and `app/Plans/` (empty,
  capitalized — case-sensitivity risk). Safe to delete (confirm first).
- JSON-LD is XSS-safe and free of unapproved claims (but `organizationSchema` has empty `sameAs`/no logo).

---

## 5. PENDING ACTIVITIES (consolidated & prioritized)

### A. Engineering — doable now (no business input needed)
1. Remove hardcoded "SDVOSB"/"IBM Gold Partner" from 8 pages; route via `claims.ts`. *(C1)*
2. Revert botched find/replace strings across ~12 files + `site.ts` + `llms.txt`. *(H1)*
3. Create `app/solutions/page.tsx`. *(C2)*
4. Add `/studio/` disallow to robots. *(H2)*
5. Fix/repoint broken redirects + `/feed/` RSS. *(H4)*
6. MobileDrawer a11y (focus trap/Escape/aria-modal/scroll lock). *(H5)*
7. Per-page SEO metadata + real sitemap dates + drop scaffold routes from sitemap. *(M1–M3)*
8. Mega-menu + form ARIA; hydration guards. *(M4–M6)*
9. Delete dead `[[...slug]]/` and `Plans/` dirs (after confirm).
10. **Add Playwright + a11y tests** — still "Not started" per tracker.

### B. Sanity — to go live (needs user's account)
11. `npx sanity login` (interactive, account-bound — user action). 
12. Create project + `production` dataset (web UI or `npx sanity init --env .env.local`).
13. Create `.env.local` with real `NEXT_PUBLIC_SANITY_PROJECT_ID` (+ dataset/apiVersion); add same to Vercel.
14. `npx sanity cors add` for localhost + Vercel domain.
15. Decide: wire pages to GROQ queries now, or keep Phase-2 dormant. *(H3)*
16. (Optional) add token-auth preview client if drafts/preview needed. *(M8)*

### C. Business-blocked (unchanged from tracker — need proof/approval)
17. Procurement identifiers (UEI/CAGE), small-business/SDVOSB language, IBM partner/reseller language,
    FedRAMP/authorization language, logos/badges/metrics, capability-statement PDF.
18. HubSpot form IDs + routing; GA4/PostHog IDs + event taxonomy + consent.
19. Legal review of privacy/terms/accessibility/security pages.

---

## 6. Sanity install — exact remaining commands
```
cd /root/Grable_Services/website_revamp/site
npx sanity login                 # interactive; USER must authorize the account
npx sanity init --env .env.local # or create at sanity.io/manage, then fill .env.local
# .env.local:
#   NEXT_PUBLIC_SANITY_PROJECT_ID="<real-id>"
#   NEXT_PUBLIC_SANITY_DATASET="production"
#   NEXT_PUBLIC_SANITY_API_VERSION="2026-06-01"
npx sanity cors add http://localhost:3000 --credentials
npx sanity cors add https://<vercel-domain> --credentials
npm run dev   # open /studio
```
GraphQL deploy is NOT needed (integration uses GROQ via `client.fetch`).
```
