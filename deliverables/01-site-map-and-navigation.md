# Site Map And Navigation

## Top Navigation

1. Hosting
2. MAS 9 Upgrade
3. Storage
4. AI Hosting
5. Federal
6. Resources
7. Book a briefing

## Navigation Principle

The primary navigation should reflect the four commercial priorities instead of a broad consulting taxonomy:

- **Hosting** points to Maximo Hosting / MaaS and regulated hosting options.
- **MAS 9 Upgrade** points to migration, readiness, upgrade services, and AppPoints/licensing guidance.
- **Storage** points to IBM Storage Services, Storage as a Service, Storage Defender, backup/recovery, and data resilience.
- **AI Hosting** points to AI infrastructure, GPU/data hosting, watsonx-aligned environments, and regulated AI workload operations.
- **Federal** stays top-level because SDVOSB procurement, capability statements, and FedRAMP-aware deployment language remain a major differentiator.

IBM reselling is an enablement layer across Hosting, MAS 9 Upgrade, Storage, and AI Hosting. It should be visible in dropdowns and CTAs, but not replace the primary buying motions.

## Canonical Ownership Rules

### Storage Pages

- `/services/storage-services/` is the canonical delivery-service page: sizing, procurement support, migration, implementation, backup/recovery, resilience design, and managed support.
- `/products/ibm-storage-services/` is the canonical IBM portfolio/resell page: IBM Storage as a Service, IBM Storage Defender, FlashSystem, and related product positioning.
- Product pages should link to the service page for implementation/support CTAs; service pages should link to product pages for specific IBM offering details.

### FedRAMP Pages

- `/services/maximo-on-fedramp/` is the canonical service-offering page for Grable delivery.
- `/federal/fedramp/` is the canonical procurement/compliance explainer.
- `/federal/fedramp-saas/` is the canonical IBM MAS Government / SaaS-specific explainer.
- Avoid duplicating the same FedRAMP claim copy across these pages; each page should point to a single approved claim source.

### Launch vs Planned Routes

The full sitemap below includes launch and planned routes. Phase 1 launch routes are defined in `08-build-specs-and-sequencing.md`; planned routes should not ship as thin placeholder pages.

## Utility Bar

Show on every page:

`UEI DJKXNKLXRAF7 [VERIFY] · CAGE 7CW57 [VERIFY] · SDVOSB [VERIFY] · IBM GOLD PARTNER [VERIFY] · FEDRAMP-ALIGNED [VERIFY]`

The utility bar should be compact, sticky, and styled as a credential strip rather than marketing copy.

## Primary Site Map

```text
/
/services/
/services/mas9-migration/
/services/mas9-migration/readiness-assessment/
/services/mas9-migration/upgrade-services/
/services/mas9-migration/free-upgrade/
/services/maximo-hosting/
/services/maximo-hosting/managed/
/services/maximo-hosting/iaas/
/services/maximo-hosting/paas/
/services/maximo-on-fedramp/
/services/maximo-on-fedramp/high/
/services/maximo-on-fedramp/moderate/
/services/maximo-on-fedramp/il-tiers/
/services/ibm-maximo-reselling/
/services/storage-services/
/services/storage-services/storage-as-a-service/
/services/storage-services/storage-defender/
/services/storage-services/backup-recovery/
/services/ai-hosting/
/services/ai-hosting/regulated-ai-workloads/
/services/ai-hosting/watsonx-infrastructure/
/services/ai-on-maximo/
/services/integration-custom-dev/
/services/maximo-mobile-field/

/industries/
/industries/federal/
/industries/federal/dod/
/industries/federal/navy/
/industries/federal/army/
/industries/federal/air-force/
/industries/federal/federal-civilian/
/industries/life-sciences/
/industries/gaming-hospitality/
/industries/manufacturing/
/industries/utilities/
/industries/transportation/
/industries/higher-education/

/products/
/products/ibm-storage-services/
/products/ibm-storage-as-a-service/
/products/ibm-storage-defender/
/products/acdc-mobile/
/products/maas-administration-toolbox/
/products/mas9-migration-kit/

/federal/
/federal/capability-statement/
/federal/sdvosb-certification/
/federal/contract-vehicles/
/federal/past-performance/
/federal/fedramp-saas/
/federal/fedramp/

/resources/
/resources/blog/
/resources/case-studies/
/resources/whitepapers/
/resources/tools/
/resources/webinars/
/resources/datasheets/
/resources/guides/maximo-apppoints-licensing/
/resources/guides/ibm-storage-as-a-service/
/resources/guides/ai-hosting-for-regulated-workloads/
/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/
/resources/comparisons/storage-as-a-service-vs-traditional-storage/

/company/
/company/about/
/company/leadership/
/company/careers/
/company/news/
/company/partners/

/contact/
/contact/sales/
/contact/support/
/contact/rfp/

/legal/privacy/
/legal/terms/
/legal/accessibility/
/legal/security/

/robots.txt
/sitemap.xml
/llms.txt
/ai.txt
```

## Launch Redirects

| Old URL | New URL |
|---|---|
| `/cloud-solutions/` | `/services/maximo-hosting/` |
| `/ibm-maximo-in-the-cloud/` | `/services/maximo-hosting/` |
| `/maximo-as-a-services/` | `/services/maximo-hosting/managed/` |
| `/saas-gxp-and-the-cloud/` | `/industries/life-sciences/gxp-validated-maximo/` |
| `/validated-maximo-solutions/` | `/industries/life-sciences/validated-maximo/` |
| `/fedramp-saas-fedramp-ias/` | `/federal/fedramp-saas/` |
| `/laas/` | `/services/maximo-hosting/iaas/` |
| `/paas/` | `/services/maximo-hosting/paas/` |
| `/ac-dc-mobile-solution/` | `/products/acdc-mobile/` |
| `/mobile-asset-data-collection/` | `/products/acdc-mobile/` |
| `/careers/` | `/company/careers/` |
| `/contact-us/` | `/contact/` |
| `/privacy-policy/` | `/legal/privacy/` |
| `/products-services/` | `/services/` |
| `/maximo-free-upgrade/` | `/services/mas9-migration/free-upgrade/` |
| `/fedramp/` | `/federal/` |
| `/blog/` | `/resources/blog/` |
| `/about/` | `/company/about/` |
| `/team/` | `/company/leadership/` |
| `/case-studies/` | `/resources/case-studies/` |
| `/news/` | `/company/news/` |
| `/feed/` | `/resources/blog/rss.xml` |
| `/wp-sitemap.xml` | `/sitemap.xml` |
| `/sitemap_index.xml` | `/sitemap.xml` |
