import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "FedRAMP for Procurement",
  description:
    "A procurement-focused FedRAMP explainer: baselines, the ATO process, and agency authorization for cloud services supporting IBM Maximo deployments."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="FedRAMP"
      title="FedRAMP for federal procurement and compliance."
      intro="A plain-language overview of FedRAMP for buyers evaluating cloud-hosted Maximo: what the baselines mean, how authorization works, and what agencies are responsible for. We point to authoritative sources for any offering-specific status."
      primaryCta="Talk through your requirements"
      primaryHref="/contact/"
      secondaryCta="Maximo on FedRAMP service"
      secondaryHref="/services/maximo-on-fedramp/"
      cards={[
        {
          title: "What FedRAMP is",
          body: "FedRAMP is the U.S. government program that standardizes security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies."
        },
        {
          title: "Baselines",
          body: "FedRAMP defines Low, Moderate, and High baselines built on NIST SP 800-53 controls, selected according to the impact level of the data and system."
        },
        {
          title: "SaaS authorization",
          body: "For Maximo SaaS specifically, see how the IBM MAS government offering relates to these baselines.",
          href: "/federal/fedramp-saas/"
        }
      ]}
      sections={[
        {
          title: "The authorization path",
          body: "A cloud service offering is assessed by an accredited third-party assessor (3PAO) and authorized either through an agency authorization or the FedRAMP program board. Each authorization covers a specific offering at a specific baseline."
        },
        {
          title: "ATO and agency authorization",
          body: "An Authority to Operate (ATO) is the agency's risk-based decision to operate a system. Agencies may issue their own ATO or reuse an existing FedRAMP authorization package, then add a control implementation for their environment."
        },
        {
          title: "DoD impact levels",
          body: "Department of Defense workloads are also governed by the Cloud Computing SRG, which defines Impact Levels IL2, IL4, IL5, and IL6. The required level depends on data sensitivity and mission impact."
        },
        {
          title: "Shared responsibility and verification",
          body: "Authorization covers the provider's scope; agencies remain responsible for their configuration, data, and access. Confirm any specific offering's status directly in the FedRAMP Marketplace before relying on it."
        }
      ]}
    />
  );
}
