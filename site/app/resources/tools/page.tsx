import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Tools & Calculators",
  description:
    "Interactive Maximo tools: MAS 9 readiness assessment and a deployment TCO calculator to plan migration and hosting decisions."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Maximo tools and calculators"
      intro="Self-service tools that help you scope a Maximo modernization before you talk to anyone. Score your readiness to migrate to MAS 9, then model the cost of each deployment option so you walk into planning with numbers."
      primaryCta="Get a guided assessment"
      primaryHref="/contact/"
      secondaryCta="Start a readiness assessment"
      secondaryHref="/services/mas9-migration/readiness-assessment/"
      cards={[
        {
          title: "MAS 9 readiness assessment",
          body: "Answer a short set of questions on your current version, customizations, and integrations to get a migration-readiness score.",
          href: "/services/mas9-migration/readiness-assessment/"
        },
        {
          title: "Deployment TCO calculator",
          body: "Compare SaaS, BYOL, and managed hosting costs across licensing, infrastructure, and operations over a multi-year horizon.",
          href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/"
        },
        {
          title: "AppPoints sizing helper",
          body: "Estimate AppPoint consumption from your mix of premium, base, and limited users before you buy.",
          href: "/resources/guides/maximo-apppoints-licensing/"
        },
        {
          title: "Storage consumption planner",
          body: "Model on-premises Storage as a Service capacity and growth against a traditional CAPEX purchase.",
          href: "/resources/comparisons/storage-as-a-service-vs-traditional-storage/"
        }
      ]}
      sections={[
        {
          title: "From estimate to plan",
          body: "These tools give directional numbers, not contractual quotes. They are designed to surface the variables that drive cost and risk, so your conversation with our team starts from a shared, realistic baseline."
        },
        {
          title: "Begin with readiness",
          body: "If you are evaluating MAS 9, start with the readiness assessment. It identifies the customizations, integrations, and data issues most likely to affect timeline and budget."
        }
      ]}
    />
  );
}
