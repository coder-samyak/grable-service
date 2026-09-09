import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Contract Vehicles",
  description:
    "How to contract with Grable Services for IBM Maximo work through direct, teaming, subcontract, and vehicle-based pathways."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Contract vehicles"
      title="Ways to contract with Grable Services."
      intro="Federal buyers can work with Grable through the procurement path that fits the agency, scope, funding, timing, and contracting strategy. Current vehicle details are confirmed during intake."
      primaryCta="Discuss a procurement path"
      primaryHref="/contact/"
      secondaryCta="View capability statement"
      secondaryHref="/federal/capability-statement/"
      cards={[
        {
          title: "Direct award path",
          body: "For scoped work that fits the agency's authority, Grable can support direct procurement discussions with the necessary capability and pricing information."
        },
        {
          title: "Teaming and subcontracting",
          body: "When a prime contractor or partner holds the preferred vehicle, Grable can support the Maximo, hosting, storage, or integration portion of the work."
        },
        {
          title: "Vehicle-based buying",
          body: "Where a governmentwide, IDIQ, agency, or partner vehicle applies, Grable can help map the requirement to the right path and provide current supporting details."
        }
      ]}
      sections={[
        {
          title: "Direct and teaming options",
          body: "Where a listed vehicle is not available, we can support work through direct award, subcontracting, or teaming with a prime contractor that holds the appropriate vehicle."
        },
        {
          title: "Small business set-asides",
          body: "Eligible opportunities may be pursued through small-business or other set-aside pathways when the contracting officer confirms the applicable status and procurement route."
        },
        {
          title: "How to contract with Grable",
          body: "Share your agency, the work scope, and any preferred vehicle. We confirm the appropriate pathway and provide the verified vehicle details and credentials your contracting officer needs."
        },
        {
          title: "Verification commitment",
          body: "Contracting details change over time. We provide current vehicle, teaming, registration, and credential information directly so your team can verify it against the applicable source."
        }
      ]}
    />
  );
}
