import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Maximo FedRAMP SaaS",
  description:
    "How IBM Maximo Application Suite SaaS for government relates to FedRAMP, and how Grable Services supports planning and adoption."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="FedRAMP SaaS"
      title="IBM Maximo Application Suite SaaS for government."
      intro="IBM offers Maximo Application Suite as a managed SaaS offering, including options aimed at government. This page explains how the SaaS model relates to FedRAMP and how Grable supports adoption planning."
      primaryCta="Plan a SaaS adoption"
      primaryHref="/contact/"
      secondaryCta="Maximo on FedRAMP service"
      secondaryHref="/services/maximo-on-fedramp/"
      cards={[
        {
          title: "What MAS SaaS is",
          body: "IBM Maximo Application Suite delivered as a vendor-managed SaaS, where IBM operates the underlying platform and the agency consumes the application."
        },
        {
          title: "SaaS vs self-hosted",
          body: "In a SaaS model the cloud service provider carries more of the control responsibility; in self-hosted models more responsibility sits with the agency and its hosting partner."
        },
        {
          title: "FedRAMP relationship",
          body: "A FedRAMP authorization applies to a specific cloud service offering and baseline. Buyers should confirm MAS government SaaS authorization scope and status directly with IBM and the FedRAMP Marketplace."
        }
      ]}
      sections={[
        {
          title: "FedRAMP baselines for SaaS",
          body: "FedRAMP defines Low, Moderate, and High baselines built on NIST SP 800-53 controls. The applicable baseline for a given workload depends on its data sensitivity and impact level, which the agency determines."
        },
        {
          title: "DoD impact levels",
          body: "For Department of Defense workloads, the DoD Cloud Computing SRG defines Impact Levels IL2, IL4, IL5, and IL6. Whether a SaaS offering meets a specific IL must be confirmed against its authorization."
        },
        {
          title: "Shared responsibility",
          body: "Even with SaaS, the agency retains responsibilities such as identity, access, configuration, and data governance. We help document where those boundaries fall for a given deployment."
        },
        {
          title: "How Grable helps",
          body: "We support requirements mapping, adoption planning, configuration, and migration onto MAS SaaS, while pointing agencies to IBM's authoritative authorization details for compliance decisions."
        }
      ]}
    />
  );
}
