import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Integration & Custom Development Services",
  description:
    "Maximo integration and custom development—OSLC, REST APIs, Maximo Integration Framework (MIF), automation scripts, ERP connectors, and workflow modernization."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Integration & Custom Development"
      title="Integration and custom development for IBM Maximo"
      intro="Maximo rarely runs alone. We connect it to ERP, EAM, and operational systems and extend it where the business needs more—using OSLC, REST APIs, the Maximo Integration Framework, automation scripts, and modern messaging to deliver integrations that are maintainable and upgrade-safe."
      primaryCta="Discuss your integration needs"
      primaryHref="/contact/"
      secondaryCta="See MAS 9 migration"
      secondaryHref="/services/mas9-migration/"
      cards={[
        {
          title: "MAS 9 migration",
          body: "Modernize integrations and customizations as part of a move to Maximo Application Suite 9.",
          href: "/services/mas9-migration/"
        },
        {
          title: "AI on Maximo",
          body: "Wire the data flows that AI applications like Predict, Health, and Monitor depend on.",
          href: "/services/ai-on-maximo/"
        }
      ]}
      sections={[
        {
          title: "OSLC and REST APIs",
          body: "We build integrations on Maximo's OSLC and REST APIs—exposing and consuming object structures cleanly so external systems exchange asset, work, and inventory data without brittle point-to-point hacks."
        },
        {
          title: "Maximo Integration Framework (MIF)",
          body: "Using MIF object structures, publish channels, enterprise services, and endpoints, we design reliable inbound and outbound data flows with proper error handling and reprocessing."
        },
        {
          title: "ERP and EAM connectors",
          body: "We connect Maximo to ERP and EAM platforms for finance, procurement, and asset master data—mapping fields, reconciling identifiers, and keeping systems of record consistent."
        },
        {
          title: "Automation scripts and extensions",
          body: "Automation scripting extends Maximo behavior without unsupported code changes. We use scripts and supported configuration to implement business rules that survive upgrades."
        },
        {
          title: "Messaging and event streaming",
          body: "For high-volume or event-driven needs, we integrate Maximo with Kafka and messaging platforms so data moves in near real time across the enterprise."
        },
        {
          title: "Workflow modernization",
          body: "We review and modernize Maximo workflows and processes—simplifying approval routing and automation so day-to-day operations are faster and easier to maintain."
        }
      ]}
    />
  );
}
