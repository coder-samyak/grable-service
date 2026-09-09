import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Datasheets",
  description:
    "One-page datasheets summarizing Grable Services Maximo migration, hosting, AI, and IBM storage offerings for quick evaluation."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Service and product datasheets"
      intro="Concise, one-page references that summarize each Grable Services offering: what it includes, who it is for, and how engagement works. Datasheets are built for fast evaluation and easy sharing inside your organization."
      primaryCta="Request a datasheet pack"
      primaryHref="/contact/"
      secondaryCta="Browse all services"
      secondaryHref="/services/"
      cards={[
        {
          title: "MAS 9 migration",
          body: "Scope, phases, and deliverables for moving from Maximo 7.6 to MAS 9.",
          href: "/services/mas9-migration/"
        },
        {
          title: "Maximo hosting",
          body: "Managed hosting tiers, SLAs, and the operations we run on your behalf.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "AI hosting",
          body: "Compliant hosting for AI and watsonx workloads in regulated environments.",
          href: "/services/ai-hosting/"
        },
        {
          title: "IBM storage services",
          body: "Consumption-based and traditional storage options with implementation support.",
          href: "/services/storage-services/"
        }
      ]}
      sections={[
        {
          title: "What is on each sheet",
          body: "Every datasheet states the problem it solves, what is in and out of scope, typical timelines, and the next step to engage. They mirror the detail on our service pages in a format that is easy to forward to stakeholders and approvers."
        },
        {
          title: "Need more depth",
          body: "For technical detail beyond a single page, pair a datasheet with the matching service page or one of our whitepapers and guides."
        }
      ]}
    />
  );
}
