import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Past Performance",
  description:
    "How Grable Services presents relevant federal Maximo, hosting, integration, and infrastructure past performance."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Past performance"
      title="Federal past performance, presented conservatively."
      intro="Grable provides relevant engagement summaries, references, scope details, and outcomes directly when they are appropriate for an evaluation and releasable for the procurement."
      primaryCta="Request references"
      primaryHref="/contact/"
      secondaryCta="Read case studies"
      secondaryHref="/resources/case-studies/"
      cards={[
        {
          title: "Migration and modernization",
          body: "Relevant summaries can cover Maximo upgrades, MAS migration planning, configuration, data readiness, testing, cutover, and post-go-live support."
        },
        {
          title: "Hosting and operations",
          body: "Relevant summaries can cover managed environments, backup and recovery, administration, monitoring, patching, and operational support responsibilities."
        },
        {
          title: "Integration and reporting",
          body: "Relevant summaries can cover system interfaces, reporting, data movement, automation, mobile workflows, and enterprise asset-management process support."
        }
      ]}
      sections={[
        {
          title: "How we present past performance",
          body: "Each releasable entry follows the same fields so contracting officers can compare consistently: customer, scope of work, period of performance, role, and outcome."
        },
        {
          title: "References on request",
          body: "Point-of-contact details and reference letters are provided directly to evaluators on request and are not published here. We confirm each reference is current and willing before sharing."
        },
        {
          title: "Metrics policy",
          body: "Performance metrics, contract values, ratings, and named customers are shared only when they are accurate, relevant, and releasable for the procurement context."
        },
        {
          title: "Next step",
          body: "Tell us the evaluation criteria and we will map relevant, verifiable engagements to your requirements and provide supporting references."
        }
      ]}
    />
  );
}
