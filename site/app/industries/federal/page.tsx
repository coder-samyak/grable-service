import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "Federal & Public Sector IBM Maximo Services",
  description: "IBM Maximo and EAM services for federal agencies and DoD branches: installation, mission asset management, hosting, and compliance-aware planning."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Industries / Federal"
      title="IBM Maximo asset management for federal and public sector missions."
      intro="Grable Services helps federal agencies and DoD branches deploy, modernize, and operate IBM Maximo for mission-critical real property, installation, and equipment assets under strict compliance regimes."
      primaryCta="Schedule a federal consultation"
      primaryHref="/contact/"
      secondaryCta="Explore federal capabilities"
      secondaryHref="/federal/"
      cards={[
        { title: "Department of Defense", body: "Mission asset and installation management across DoD organizations, aligned to RMF, IL tiers, and DoD compliance baselines.", href: "/industries/federal/dod/" },
        { title: "Navy", body: "NAVFAC-style facility, real property, and shore installation asset management on Maximo.", href: "/industries/federal/navy/" },
        { title: "Army", body: "Installation, facility, and equipment lifecycle management for Army garrisons and commands.", href: "/industries/federal/army/" },
        { title: "Air Force", body: "Base civil engineering, real property, and equipment asset management on Maximo.", href: "/industries/federal/air-force/" },
        { title: "Federal Civilian", body: "Civilian agency facilities, fleet, and equipment EAM with federal deployment planning.", href: "/industries/federal/federal-civilian/" },
        { title: "Federal program overview", body: "Procurement paths, capability materials, credential requests, and our federal delivery model.", href: "/federal/" }
      ]}
      sections={[
        { title: "Mission asset management", body: "Federal Maximo programs span real property inventory, mission-critical equipment, fleet, and linear infrastructure. We configure asset hierarchies, work management, and preventive maintenance to mirror agency operating doctrine and audit needs." },
        { title: "Compliance and authorization", body: "Federal EAM lives inside agency risk decisions and authorization boundaries. We help map deployments to RMF, NIST 800-53 controls, FedRAMP considerations, and agency security requirements." },
        { title: "Modernization and migration", body: "Many agencies run aging Maximo 7.6 or legacy maintenance systems. We plan and execute migrations to current IBM Maximo Application Suite while preserving asset history, work orders, and reporting continuity." },
        { title: "Sustainment and support", body: "After authorization, we provide ongoing operations, patching, and enhancement support so mission systems stay current, secure, and aligned to evolving agency requirements." }
      ]}
    />
  );
}
