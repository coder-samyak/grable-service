import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Whitepapers",
  description:
    "In-depth Maximo whitepapers on MAS 9 migration, federal deployment planning, and hosting TCO for federal and commercial buyers."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Maximo and IBM infrastructure whitepapers"
      intro="Long-form references for technical evaluators and decision-makers. Our whitepapers go deep on MAS 9 migration strategy, federal deployment planning, and the total cost of ownership of different Maximo deployment models."
      primaryCta="Request a briefing"
      primaryHref="/contact/"
      secondaryCta="Read the AppPoints guide"
      secondaryHref="/resources/guides/maximo-apppoints-licensing/"
      cards={[
        {
          title: "MAS 9 migration strategy",
          body: "Architecture, sequencing, and risk controls for moving from Maximo 7.6 to MAS 9 on OpenShift.",
          href: "/services/mas9-migration/"
        },
        {
          title: "Federal deployment planning",
          body: "How to map MAS hosting to federal authorization requirements and GovCloud boundaries.",
          href: "/services/ai-hosting/regulated-ai-workloads/"
        },
        {
          title: "Hosting TCO",
          body: "A model comparing SaaS, BYOL, and managed hosting across licensing, infrastructure, and operations.",
          href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/"
        },
        {
          title: "AppPoints licensing",
          body: "A reference companion to our AppPoints guide for sizing and budgeting MAS user tiers.",
          href: "/resources/guides/maximo-apppoints-licensing/"
        }
      ]}
      sections={[
        {
          title: "Who these are for",
          body: "Whitepapers are written for solution architects, ITAM leaders, and federal evaluators who need defensible detail rather than marketing summaries. Each one is reviewed for technical accuracy against current IBM documentation before release."
        },
        {
          title: "Pair with our guides",
          body: "Whitepapers set the strategic frame; our guides give step-by-step operational depth. Start with the AppPoints licensing guide to understand how MAS consumption is metered before you read the hosting TCO whitepaper."
        }
      ]}
    />
  );
}
