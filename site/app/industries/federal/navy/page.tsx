import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "Navy IBM Maximo Facility & Asset Management",
  description: "IBM Maximo EAM for Navy shore installations and facilities: real property inventory, NAVFAC-style work management, and federal deployment planning compliant hosting."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Federal / Navy"
      title="IBM Maximo for Navy facility, real property, and shore installation assets."
      intro="Grable Services configures IBM Maximo to support NAVFAC-style facility and asset management for Navy shore installations, covering real property inventory, work and maintenance management, and condition assessment under federal compliance."
      primaryCta="Talk to a Navy Maximo team"
      primaryHref="/contact/"
      secondaryCta="See DoD asset management"
      secondaryHref="/industries/federal/dod/"
      cards={[
        { title: "Shore facility management", body: "Buildings, piers, utilities, and waterfront infrastructure tracked as real property assets on Maximo." },
        { title: "Real property inventory", body: "Authoritative facility inventory with condition indices to support sustainment and recapitalization planning." },
        { title: "Work and maintenance management", body: "Service requests, work orders, and preventive maintenance aligned to public works operating models." },
        { title: "DoD compliance baseline", body: "Navy deployments inherit the DoD security and authorization posture we apply across the department.", href: "/industries/federal/dod/" }
      ]}
      sections={[
        { title: "NAVFAC-style asset model", body: "We mirror the public works model many Navy installations use, structuring real property, collateral equipment, and utility systems so facilities engineers can plan, schedule, and execute maintenance efficiently." },
        { title: "Condition and sustainment", body: "Facility condition assessments and asset health data feed sustainment, restoration, and modernization decisions, helping commands prioritize limited maintenance funding." },
        { title: "Linear and utility assets", body: "Waterfront and utility distribution systems are modeled as linear assets so inspections, segments, and failures can be tracked along their physical extent." },
        { title: "Federal hosting and security", body: "Navy Maximo runs within the same FedRAMP and Impact Level framework as the broader DoD program, keeping facility and asset data compliant." }
      ]}
    />
  );
}
