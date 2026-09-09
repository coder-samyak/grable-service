import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "MAS 9 Readiness Assessment",
  description:
    "A structured readiness assessment for IBM Maximo Application Suite 9: audit your Maximo 7.6 or MAS 8 environment, OpenShift and Java 17 prerequisites, AppPoints licensing, integrations, and cutover planning."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="MAS 9 Migration"
      title="Know exactly what your move to IBM Maximo Application Suite 9 requires."
      intro="A MAS 9 readiness assessment gives you a clear, evidence-based picture of your current Maximo 7.6.x or MAS 8 environment and everything that must be true before you upgrade — from Red Hat OpenShift and Java 17 prerequisites to AppPoints licensing, integrations, and downtime windows."
      primaryCta="Take the readiness assessment"
      primaryHref="/contact/"
      secondaryCta="See upgrade delivery services"
      secondaryHref="/services/mas9-migration/upgrade-services/"
      cards={[
        {
          title: "Current environment audit",
          body: "We inventory your existing Maximo 7.6.x or MAS 8 deployment — version and fix-pack levels, add-ons and industry solutions, database platform and size, server topology, and the customizations layered on top — to establish the true starting point for a MAS 9 upgrade.",
          href: "/services/mas9-migration/upgrade-services/"
        },
        {
          title: "OpenShift & Java 17 prerequisites",
          body: "MAS 9 runs on Red Hat OpenShift and requires Java 17. We assess whether you have a supported OpenShift cluster (on-prem, ROSA, or other), validate node sizing and storage classes, and map the dependencies — cert-manager, MongoDB, and the supporting operators — needed before any workspace install.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "AppPoints & licensing impact",
          body: "MAS 9 uses AppPoints-based licensing rather than the named/concurrent user model of Maximo 7.6. We help you model expected AppPoints consumption across Manage, Monitor, Health, and other applications so your entitlement matches real usage on day one."
        },
        {
          title: "Integrations inventory",
          body: "We catalog every inbound and outbound integration — OSLC and REST/JSON API consumers, MIF/MEA interfaces, enterprise services, and external systems — and flag endpoints, authentication, and payload changes that the move to the MAS Manage API and container networking will require."
        },
        {
          title: "Customizations & automation scripts",
          body: "Automation scripts, conditional expressions, escalations, custom screens in Application Designer, and Java/class extensions are reviewed for MAS 9 compatibility. We identify what carries forward cleanly, what needs remediation, and what is better re-platformed as configuration."
        },
        {
          title: "Reporting: BIRT & Cognos",
          body: "We assess your BIRT report library and any Cognos Analytics footprint for MAS 9 compatibility, including report design changes, data source bindings, and where ad-hoc reporting or Maximo Application Suite reporting tooling should replace legacy artifacts."
        }
      ]}
      sections={[
        {
          title: "Security, identity & access review",
          body: "MAS 9 centralizes identity through Suite Administration and supports enterprise SSO via SAML/OIDC. We review your current security groups, application authorizations, and user provisioning so role mappings, conditional security, and federated login are designed before migration rather than reverse-engineered afterward."
        },
        {
          title: "Data quality & migration scope",
          body: "The upgrade is only as clean as the data it carries. We review database health, orphaned and obsolete records, schema customizations, and configuration that must be preserved, so the migration scope is explicit and the upgraded environment starts on a sound foundation."
        },
        {
          title: "Downtime-window & cutover planning",
          body: "We estimate realistic upgrade and validation durations, identify the maintenance window your operations can absorb, and outline the sequencing of database upgrade, environment build, and cutover — including the rollback position — so business stakeholders can plan around a predictable outage."
        },
        {
          title: "Findings, risks & a costed roadmap",
          body: "The assessment concludes with a prioritized findings report: prerequisites to satisfy, remediation effort by area, licensing implications, and a phased roadmap with effort and risk ratings — giving you a defensible basis to plan, budget, and schedule the full MAS 9 upgrade."
        }
      ]}
    />
  );
}
