import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "Federal Civilian Agency Maximo Services",
  description: "IBM Maximo EAM for federal civilian agencies: facilities, fleet, and equipment management on FedRAMP Moderate authorized hosting with FISMA compliance."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Federal / Civilian"
      title="IBM Maximo for federal civilian agency facilities and equipment."
      intro="Grable Services helps federal civilian agencies deploy and operate IBM Maximo for facilities, fleet, and equipment assets, with federal deployment planning and FISMA-conscious configuration aligned to agency security and reporting requirements."
      primaryCta="Schedule a civilian agency consultation"
      primaryHref="/contact/"
      secondaryCta="Review FedRAMP Moderate hosting"
      secondaryHref="/services/maximo-on-fedramp/moderate/"
      cards={[
        { title: "Facilities and real property", body: "Buildings, leased space, and infrastructure managed as an authoritative asset inventory for sustainment planning.", href: "/services/maximo-on-fedramp/moderate/" },
        { title: "Fleet and equipment", body: "Vehicle fleet, lab equipment, and operational assets tracked across their maintenance lifecycle." },
        { title: "Work and service management", body: "Service requests, work orders, and preventive maintenance configured to agency operating processes." },
        { title: "FedRAMP Moderate hosting", body: "Authorization-aligned hosting suited to the controlled but non-classified data most civilian agencies manage." }
      ]}
      sections={[
        { title: "Civilian agency asset operations", body: "Civilian agencies manage diverse portfolios of facilities, fleet, and specialized equipment. We configure Maximo to consolidate these into one inventory with consistent work management and reporting." },
        { title: "Compliance and authorization", body: "Deployments can be mapped to FISMA, NIST 800-53 controls, FedRAMP considerations, and agency authorization needs for systems handling sensitive operational information." },
        { title: "Maintenance and sustainment", body: "Preventive and condition-based maintenance regimes help agencies control deferred maintenance, extend asset life, and justify sustainment and recapitalization budgets." },
        { title: "Modernization and migration", body: "We migrate aging maintenance systems and legacy Maximo instances to current IBM Maximo Application Suite while preserving asset history and reporting continuity." }
      ]}
    />
  );
}
