import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "watsonx Infrastructure: GPU, Storage & Governance",
  description:
    "Infrastructure for IBM watsonx-aligned environments—watsonx.ai, watsonx.data, and watsonx.governance—with GPU compute, storage, and governance foundations."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="AI Hosting"
      title="Infrastructure for watsonx-aligned AI environments"
      intro="IBM watsonx spans model building (watsonx.ai), data (watsonx.data), and governance (watsonx.governance). We build the GPU compute, storage, and governance-ready infrastructure those workloads depend on, so your teams can focus on models and outcomes rather than plumbing."
      primaryCta="Scope your watsonx environment"
      primaryHref="/contact/"
      secondaryCta="See regulated AI workloads"
      secondaryHref="/services/ai-hosting/regulated-ai-workloads/"
      cards={[
        {
          title: "Regulated AI workloads",
          body: "Layer data residency, security controls, and GovCloud-aligned hosting onto your watsonx-aligned environment.",
          href: "/services/ai-hosting/regulated-ai-workloads/"
        },
        {
          title: "AI hosting overview",
          body: "See how watsonx infrastructure fits the broader AI hosting picture—compute, storage, backup, monitoring, and security.",
          href: "/services/ai-hosting/"
        }
      ]}
      sections={[
        {
          title: "GPU compute for watsonx.ai",
          body: "Model training, tuning, and inference for watsonx.ai need accelerated compute. We provision and schedule GPU capacity sized to your foundation-model and machine-learning workloads."
        },
        {
          title: "Storage and data for watsonx.data",
          body: "watsonx.data benefits from scalable, performant storage. We design the storage and data-access layer that supports lakehouse-style analytics and feeds AI pipelines reliably."
        },
        {
          title: "Governance-ready foundations",
          body: "watsonx.governance depends on consistent, well-instrumented infrastructure. We build environments where lineage, access, and configuration are captured so governance and risk tooling has the signals it needs."
        },
        {
          title: "Security and operations",
          body: "Hardened baselines, identity controls, encryption, and observability keep watsonx-aligned environments secure and supportable in production. specific IBM partnership tier and certifications before publishing."
        }
      ]}
    />
  );
}
