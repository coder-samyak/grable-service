import { PageShell } from "../../components/PageShell";

export default function MaximoFedrampPage() {
  return (
    <PageShell
      eyebrow="Maximo on FedRAMP"
      title="Maximo deployment planning for regulated federal environments."
      intro="Grable supports public-sector buyers who need Maximo expertise, cloud alignment, documented control expectations, and clear compliance-aware deployment planning."
      primaryCta="Start an inquiry"
      secondaryCta="Explore services"
      secondaryHref="/services/"
      sections={[
        { title: "Compliance framing", body: "Map requirements to the correct federal context, including FedRAMP baselines, agency authorization, DoD impact levels, identity, data, and shared-responsibility boundaries." },
        { title: "Deployment planning", body: "Document hosting, controls, integrations, access, monitoring, recovery, and operational requirements before the environment is selected or configured." },
        { title: "Procurement support", body: "Support buyer conversations with direct intake for capability materials, credential details, and requirements mapping." }
      ]}
    />
  );
}
