import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "IBM Maximo for Utilities & Linear Assets",
  description: "IBM Maximo EAM for utilities: linear asset management, reliability, asset health, mobile inspections, and compliance-driven maintenance for regulated networks."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Industries / Utilities"
      title="IBM Maximo for utility reliability, asset health, and field operations."
      intro="Grable Services configures IBM Maximo for electric, water, and gas utilities, managing linear and distributed assets with reliability programs, asset health insight, mobile inspections, and the compliance-driven maintenance regulators require."
      primaryCta="Discuss your utility program"
      primaryHref="/contact/"
      secondaryCta="See Maximo Mobile field"
      secondaryHref="/services/maximo-mobile-field/"
      cards={[
        { title: "Linear asset management", body: "Distribution and transmission networks modeled by segment so condition, work, and failures track along physical extent." },
        { title: "Reliability and asset health", body: "Condition-based maintenance and asset health scoring that prioritize the assets most likely to fail." },
        { title: "Mobile field inspections", body: "Crews capture inspections, meter reads, and work in the field, even in disconnected areas.", href: "/services/maximo-mobile-field/" },
        { title: "Compliance maintenance", body: "Regulatory inspection and maintenance programs documented with audit-ready records." }
      ]}
      sections={[
        { title: "Utility asset types", body: "Utility Maximo programs cover substations, transformers, poles and lines, pipes and mains, pumps, valves, and meters, with linear assets representing the distribution networks that define the business." },
        { title: "Reliability and asset health", body: "We implement reliability-centered and condition-based maintenance so utilities move from reactive repair to predictive intervention, using asset health and risk to prioritize limited crew capacity." },
        { title: "Mobile and storm response", body: "Maximo Mobile equips field crews for routine inspections and surge events such as outages and storm restoration, with offline capability for work in areas without connectivity." },
        { title: "Regulatory compliance", body: "Utilities face inspection, vegetation, and safety mandates from agencies and commissions. We configure compliance maintenance and audit trails so utilities can demonstrate regulatory adherence." }
      ]}
    />
  );
}
