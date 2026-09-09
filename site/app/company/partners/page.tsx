import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Technology ecosystem relationships that support Grable Services' IBM Maximo, hosting, storage, and AI infrastructure work."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Company"
      title="Technology ecosystem behind our Maximo delivery."
      intro="Grable Services builds, hosts, integrates, and operates Maximo across a practical ecosystem of enterprise software, cloud, infrastructure, storage, security, and implementation technologies."
      primaryCta="Discuss a partnership"
      primaryHref="/contact/"
      secondaryCta="IBM Maximo reselling"
      secondaryHref="/services/ibm-maximo-reselling/"
      cards={[
        {
          title: "IBM ecosystem",
          body: "IBM Maximo, Maximo Application Suite, IBM Storage, and related IBM technologies sit at the center of Grable's delivery and advisory work."
        },
        {
          title: "Red Hat and OpenShift",
          body: "MAS 9 depends on Red Hat OpenShift, so platform planning, administration, and support are part of the migration and hosting conversation."
        },
        {
          title: "Cloud and infrastructure",
          body: "Cloud, compute, network, identity, backup, and monitoring choices are aligned to the customer's security, performance, and operating requirements."
        },
        {
          title: "Implementation partners",
          body: "When an engagement calls for teaming, Grable can coordinate with primes, subcontractors, software vendors, and customer-selected delivery partners."
        }
      ]}
      sections={[
        {
          title: "Why partners matter",
          body: "Maximo programs rarely succeed on application configuration alone. The partner ecosystem affects licensing, OpenShift, hosting, integration, storage, identity, security, and long-term support."
        },
        {
          title: "How Grable works with partners",
          body: "We keep partner participation tied to the delivery outcome: what needs to be licensed, deployed, integrated, operated, documented, and supported."
        },
        {
          title: "Current relationship details",
          body: "Program tiers, authorizations, resale paths, and partner-specific credentials are provided directly when they are relevant to a procurement or engagement."
        }
      ]}
    />
  );
}
