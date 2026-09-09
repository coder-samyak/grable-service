import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "Regulated AI Workloads Hosting & Compliance",
  description:
    "Host AI workloads in regulated, compliance-heavy environments—data residency, GovCloud, encryption, and security controls engineered by Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="AI Hosting"
      title="Running AI in regulated and compliance-heavy environments"
      intro="When AI handles sensitive or controlled data, hosting choices become compliance decisions. We design environments where data residency, access controls, encryption, and auditability are engineered in—so your AI initiatives can move forward without compromising your security posture."
      primaryCta="Discuss your compliance requirements"
      primaryHref="/contact/"
      secondaryCta="See watsonx infrastructure"
      secondaryHref="/services/ai-hosting/watsonx-infrastructure/"
      cards={[
        {
          title: "Maximo on FedRAMP",
          body: "Pair regulated AI hosting with our federal deployment planning Maximo hosting approach for federal asset management programs.",
          href: "/services/maximo-on-fedramp/"
        },
        {
          title: "AI hosting overview",
          body: "Return to the full AI hosting picture—GPU compute, storage, backup, monitoring, and security.",
          href: "/services/ai-hosting/"
        }
      ]}
      sections={[
        {
          title: "Data residency and sovereignty",
          body: "We keep data within the boundaries your policies and regulations require, selecting regions, GovCloud options, and isolation models so training and inference data never crosses an unauthorized line."
        },
        {
          title: "Security controls and baselines",
          body: "Hardened operating images, least-privilege identity and access management, network segmentation, and encryption in transit and at rest form a defensible baseline for AI workloads in regulated settings."
        },
        {
          title: "Auditability and evidence",
          body: "We instrument environments to produce the logs, access records, and configuration evidence that auditors and authorizing officials expect, reducing the effort to demonstrate continuous compliance."
        },
        {
          title: "GovCloud-aligned hosting",
          body: "For federal and public-sector AI, we align deployments to GovCloud and equivalent controlled environments. specific accreditations, impact levels, and authorizations before representing them to stakeholders."
        }
      ]}
    />
  );
}
