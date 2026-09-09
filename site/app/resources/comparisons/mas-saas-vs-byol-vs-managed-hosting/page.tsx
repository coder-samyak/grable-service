import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "MAS SaaS vs BYOL vs Managed Hosting",
  description:
    "Compare the three IBM Maximo Application Suite deployment models, SaaS, BYOL, and managed hosting, across control, cost, compliance, and operations."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Comparison"
      title="MAS SaaS vs. BYOL vs. managed hosting"
      intro="IBM Maximo Application Suite can be consumed three ways: IBM-managed SaaS, Bring Your Own License (BYOL) on infrastructure you control, or partner-managed hosting. Each trades control, cost, compliance fit, and operational burden differently. This comparison helps you choose."
      primaryCta="Get a deployment recommendation"
      primaryHref="/contact/"
      secondaryCta="See Maximo hosting"
      secondaryHref="/services/maximo-hosting/"
      cards={[
        {
          title: "SaaS: IBM runs everything",
          body: "IBM hosts and operates MAS as a subscription. You get fast onboarding and predictable OPEX, but the least control over infrastructure, version timing, and customization depth. Best when standardization and speed matter more than control."
        },
        {
          title: "BYOL: you own and operate",
          body: "You own the AppPoints entitlement and deploy MAS on OpenShift infrastructure you control, on-premises or in your cloud. Maximum control and potentially lower long-run cost, but you carry full platform operations."
        },
        {
          title: "Managed hosting: partner operates",
          body: "A partner deploys your licensed MAS on dedicated infrastructure and runs day-two operations for you. You keep control over environment and compliance boundary while offloading the operational load. A middle path between SaaS and BYOL."
        },
        {
          title: "Control",
          body: "BYOL gives the most control over infrastructure, network, and upgrade timing; managed hosting preserves most of that control through a partner; SaaS gives the least because IBM standardizes the platform."
        },
        {
          title: "Cost shape",
          body: "SaaS is pure subscription OPEX. BYOL mixes license cost with infrastructure CAPEX/OPEX you manage. Managed hosting bundles license, infrastructure, and operations into a predictable managed fee."
        },
        {
          title: "Compliance fit",
          body: "When data residency, GovCloud boundaries, or specific control baselines are required, BYOL and managed hosting let you place MAS inside your authorization boundary. SaaS depends on IBM's offering meeting your specific requirements."
        }
      ]}
      sections={[
        {
          title: "Operations and staffing",
          body: "The biggest practical difference is who runs the platform. SaaS removes nearly all operational work but limits how far you can tune the environment. BYOL demands an OpenShift-capable team to handle upgrades, scaling, backups, and incident response. Managed hosting lets a partner carry that burden while you retain a dedicated environment, which suits organizations that need control but lack a dedicated platform team."
        },
        {
          title: "How to choose",
          body: "Choose SaaS when speed and standardization win and your compliance needs are met by IBM's offering. Choose BYOL when you have the team and the control or cost requirements to justify operating it yourself. Choose managed hosting when you need a controlled, compliant, dedicated environment but want to offload day-two operations. Many federal and regulated buyers land on managed hosting for exactly this reason."
        },
        {
          title: "Licensing is constant across models",
          body: "AppPoints math does not change by deployment model; what changes is who operates the suite and how cost is structured. Read our AppPoints licensing guide alongside this comparison so you size the entitlement correctly regardless of the model you pick."
        },
        {
          title: "Next step",
          body: "Our Maximo hosting team can map these trade-offs to your control, cost, and compliance requirements and recommend a model. Explore the Maximo hosting page to see how we deliver managed and BYOL environments."
        }
      ]}
    />
  );
}
