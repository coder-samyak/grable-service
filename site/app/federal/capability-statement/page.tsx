import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "Grable Services capability statement: IBM Maximo migration, federal deployment planning, core competencies, differentiators, and credential block for federal buyers."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Capability statement"
      title="Grable Services federal capability statement."
      intro="A structured overview of Grable's federal Maximo modernization, migration, hosting, storage, integration, and compliance-aware planning capabilities. Current registration, certification, and procurement details are provided through direct request."
      primaryCta="Request our capability statement"
      primaryHref="/contact/"
      secondaryCta="Review contract vehicles"
      secondaryHref="/federal/contract-vehicles/"
      cards={[
        {
          title: "Maximo migration",
          body: "Planning and execution support for moving Maximo and Maximo Application Suite (MAS) workloads, including assessment, data migration, and cutover.",
          href: "/services/mas9-migration/"
        },
        {
          title: "Hosting and operations",
          body: "Maximo hosting and managed operations aligned to government security expectations, with documented controls and run-book based support.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "federal deployment planning",
          body: "Deployment planning that maps cloud, identity, control, documentation, and operating requirements to the appropriate federal environment.",
          href: "/services/maximo-on-fedramp/"
        }
      ]}
      sections={[
        {
          title: "Core competencies",
          body: "IBM Maximo and MAS migration; hosting and managed operations; federal deployment planning; asset and work management configuration; integration; reporting; storage; and operational support."
        },
        {
          title: "Differentiators",
          body: "Specialized Maximo focus, transparent compliance framing, and delivery practices that map technical work to documented requirements, acceptance criteria, and day-two operating responsibilities."
        },
        {
          title: "Credential block",
          body: "Current business identifiers, small-business details, SAM.gov information, NAICS codes, and other proposal-support fields are provided directly so contracting teams can verify them against official records."
        },
        {
          title: "Past performance summary",
          body: "Agency, scope, period of performance, and outcome for each relevant engagement. We do not assert specific customers or metrics until they are confirmed and releasable."
        },
        {
          title: "How to request the PDF",
          body: "Contact us to receive the current capability statement PDF and supporting credential block for your procurement file."
        }
      ]}
    />
  );
}
