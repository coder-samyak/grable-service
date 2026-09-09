import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Leadership principles guiding Grable Services' IBM Maximo consulting, hosting, and managed services for federal and commercial clients."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Company"
      title="Leadership built around accountable Maximo delivery."
      intro="Grable's leadership model connects executive ownership, Maximo technical depth, delivery operations, and customer communication so complex programs have clear direction."
      primaryCta="Contact leadership"
      primaryHref="/contact/"
      secondaryCta="About the company"
      secondaryHref="/company/about/"
      cards={[
        {
          title: "Executive direction",
          body: "Company leadership keeps engagements focused on business outcomes, clear scope, responsible claims, and long-term customer relationships."
        },
        {
          title: "Maximo practice leadership",
          body: "Technical leadership guides MAS migration, hosting, integration, storage, mobile, and operational standards across delivery teams."
        },
        {
          title: "Delivery operations",
          body: "Operational leadership coordinates staffing, handoff, support routines, documentation, quality checks, and day-two ownership."
        },
        {
          title: "Federal and growth leadership",
          body: "Growth leadership supports procurement conversations, requirements mapping, capability materials, teaming, and customer alignment."
        }
      ]}
      sections={[
        {
          title: "How leadership shows up in delivery",
          body: "Customers should know who owns scope, technical decisions, delivery quality, support escalation, and executive communication. Grable structures projects around those ownership lines."
        },
        {
          title: "Experience that informs the work",
          body: "The leadership approach reflects experience across IBM Maximo, federal and commercial delivery, managed infrastructure, asset management, and operational support."
        },
        {
          title: "Current leadership details",
          body: "Names, biographies, media details, and speaking requests can be routed through the contact page when they are needed for an engagement, event, or procurement."
        }
      ]}
    />
  );
}
