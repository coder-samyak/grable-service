import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "AI Hosting Infrastructure for Regulated Workloads",
  description:
    "Grable Services designs and operates AI hosting infrastructure—GPU compute, storage, backup, monitoring, and security—for regulated enterprise and federal workloads."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="AI Hosting"
      title="AI hosting infrastructure for regulated enterprise workloads"
      intro="We architect and operate the compute, storage, and security foundation that AI workloads need—GPU infrastructure, resilient storage, backup, observability, and a defensible security posture for regulated and federal environments."
      primaryCta="Plan your AI hosting environment"
      primaryHref="/contact/"
      secondaryCta="Explore Maximo hosting"
      secondaryHref="/services/maximo-hosting/"
      cards={[
        {
          title: "Regulated AI workloads",
          body: "Run AI in compliance-heavy environments with data residency controls, security baselines, and GovCloud-aligned hosting options.",
          href: "/services/ai-hosting/regulated-ai-workloads/"
        },
        {
          title: "watsonx-aligned infrastructure",
          body: "GPU compute, storage, and governance foundations built for IBM watsonx.ai, watsonx.data, and watsonx.governance environments.",
          href: "/services/ai-hosting/watsonx-infrastructure/"
        },
        {
          title: "Storage services",
          body: "Performant, resilient storage and data services that back AI training, inference, and analytics pipelines.",
          href: "/services/storage-services/"
        }
      ]}
      sections={[
        {
          title: "GPU and accelerated compute",
          body: "We size and provision GPU and accelerated compute for model training, fine-tuning, and inference—matching node types, interconnect, and scheduling to each workload so you pay for the capacity you actually use."
        },
        {
          title: "Storage, data, and backup",
          body: "AI pipelines depend on fast, durable storage. We design tiered storage, snapshot and backup strategies, and recovery procedures so datasets, checkpoints, and model artifacts are protected and recoverable."
        },
        {
          title: "Monitoring and observability",
          body: "We instrument infrastructure and workloads with metrics, logging, and alerting so GPU utilization, throughput, and failures are visible—keeping AI services healthy and costs under control."
        },
        {
          title: "Security posture and compliance",
          body: "Hardened baselines, identity and access controls, network segmentation, and encryption are built in from the start so AI hosting meets the security expectations of regulated and federal buyers. specific authorizations and accreditations."
        }
      ]}
    />
  );
}
