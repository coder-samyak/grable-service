import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "DoD IBM Maximo Asset Management",
  description: "IBM Maximo EAM for Department of Defense missions: installation and equipment lifecycle management on FedRAMP and IL-aligned hosting with RMF compliance."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Federal / Department of Defense"
      title="IBM Maximo for Department of Defense asset and installation management."
      intro="Grable Services delivers IBM Maximo EAM for DoD organizations, managing real property, mission equipment, and installation assets within Risk Management Framework boundaries and the security baselines defined by DoD Impact Levels."
      primaryCta="Discuss your DoD requirement"
      primaryHref="/contact/"
      secondaryCta="Review FedRAMP IL tiers"
      secondaryHref="/services/maximo-on-fedramp/il-tiers/"
      cards={[
        { title: "Impact Level alignment", body: "Hosting and data handling mapped to the appropriate DoD Impact Level for your workload and CUI classification.", href: "/services/maximo-on-fedramp/il-tiers/" },
        { title: "Installation asset management", body: "Real property inventory, facility condition, and equipment lifecycle tracking on a single Maximo platform." },
        { title: "Mission readiness", body: "Preventive maintenance and reliability programs that keep mission-essential assets available." },
        { title: "RMF and ATO support", body: "Configuration and documentation aligned to NIST 800-53 controls supporting the authorization process." }
      ]}
      sections={[
        { title: "Asset types we manage", body: "DoD Maximo programs cover buildings and real property, utility infrastructure, ground support and mission equipment, fleet, and linear assets such as roads and utilities across installations." },
        { title: "Maintenance and reliability", body: "We implement preventive, predictive, and condition-based maintenance regimes so commands can sustain readiness, control deferred maintenance backlogs, and forecast recapitalization needs." },
        { title: "Compliance and security", body: "Deployments are engineered for RMF, CMMC-relevant safeguards, and the correct Impact Level so that asset and maintenance data is protected to DoD standards." },
        { title: "Hosting on FedRAMP", body: "DoD workloads run on federally reviewed and IL-aligned infrastructure. See our IL tier breakdown for the security posture that matches your mission data." }
      ]}
    />
  );
}
