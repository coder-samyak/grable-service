import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "AI Hosting for Regulated Workloads",
  description:
    "A guide to hosting AI under compliance: security controls, data residency, GovCloud boundaries, and running watsonx in regulated environments."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Guide"
      title="Hosting AI workloads under compliance and regulation"
      intro="Running AI in a regulated environment is less about the model and more about where the data lives, who can touch it, and how every action is controlled and logged. This guide covers the controls, data residency boundaries, and platform choices, including IBM watsonx, that make AI hosting defensible for federal and regulated workloads."
      primaryCta="Plan a compliant deployment"
      primaryHref="/contact/"
      secondaryCta="See regulated AI hosting"
      secondaryHref="/services/ai-hosting/regulated-ai-workloads/"
      cards={[
        {
          title: "Data residency comes first",
          body: "Regulated data often must stay within defined geographic or facility boundaries. Choose a hosting location and AI platform that keep training data, prompts, and outputs inside the controlled boundary rather than sending them to a general public endpoint."
        },
        {
          title: "GovCloud and authorization boundaries",
          body: "For US federal workloads, government cloud, Azure Government, and equivalent boundaries provide isolation aligned to FedRAMP and DoD requirements. The AI service and its data stores must sit inside the same authorization boundary as the rest of the system."
        },
        {
          title: "Access control and least privilege",
          body: "Enforce strong identity, role-based access, and least privilege for anyone, human or service, that can reach the model, its data, or its outputs. AI components must inherit the same access governance as the surrounding system."
        },
        {
          title: "Auditability and logging",
          body: "Compliance frameworks require traceability. Log prompts, responses, data access, and model changes so you can answer who did what, when, and with which data. Retain logs per your control baseline."
        },
        {
          title: "Private model hosting with watsonx",
          body: "IBM watsonx lets you deploy and govern foundation models within your own boundary rather than calling a public API. That keeps sensitive data inside controlled infrastructure and supports model governance and lineage requirements."
        },
        {
          title: "Network isolation",
          body: "Place AI services in private subnets with controlled egress. Inference endpoints, vector stores, and data pipelines should not be reachable from the public internet unless explicitly required and authorized."
        }
      ]}
      sections={[
        {
          title: "Controls map to your framework",
          body: "Whether you are aligning to FedRAMP, NIST 800-53, CMMC, or an agency-specific baseline, AI hosting must inherit the same control families as the rest of the system: access control, audit and accountability, configuration management, system and communications protection, and supply-chain risk. Treating the AI tier as exempt is the most common compliance gap we see."
        },
        {
          title: "Data lifecycle is the hard part",
          body: "The riskiest moments are at the data boundaries: ingesting regulated data for training or retrieval, sending prompts that may contain sensitive content, and storing outputs. Define what data may enter the model context, mask or tokenize where required, and ensure prompts and embeddings are stored under the same protections as the source data."
        },
        {
          title: "watsonx in a regulated stack",
          body: "watsonx supports deploying foundation models and governing them with lineage, evaluation, and policy controls inside infrastructure you operate. For federal and regulated programs this is often preferable to public model APIs because data residency, isolation, and auditability stay within your authorization boundary."
        },
        {
          title: "Next step",
          body: "Our regulated AI hosting service designs the boundary, controls, and operations so your AI initiative passes review the first time. Explore the regulated AI workloads page to see how we deliver it."
        }
      ]}
    />
  );
}
