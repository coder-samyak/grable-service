import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "Army Installation & Asset Management on Maximo",
  description: "IBM Maximo EAM for Army installations and garrisons: real property, facility, and equipment lifecycle management with DoD-aligned compliant hosting."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Federal / Army"
      title="IBM Maximo for Army installation, facility, and equipment management."
      intro="Grable Services deploys IBM Maximo to manage Army installation real property, facilities, utilities, and equipment, helping garrisons and commands plan maintenance, control backlogs, and sustain mission-essential assets under DoD compliance."
      primaryCta="Plan your Army Maximo program"
      primaryHref="/contact/"
      secondaryCta="See DoD asset management"
      secondaryHref="/industries/federal/dod/"
      cards={[
        { title: "Installation real property", body: "Buildings, ranges, utilities, and infrastructure managed as a single authoritative asset inventory." },
        { title: "Facility maintenance", body: "Service orders, work management, and preventive maintenance aligned to directorate of public works operations." },
        { title: "Equipment lifecycle", body: "Ground support, materiel handling, and facility equipment tracked from acquisition through disposal." },
        { title: "DoD compliance baseline", body: "Army deployments inherit the DoD authorization and Impact Level posture we apply department-wide.", href: "/industries/federal/dod/" }
      ]}
      sections={[
        { title: "Garrison asset operations", body: "We structure Maximo around garrison operations so directorates can manage real property inventory, facility condition, and work execution from one platform, reducing reliance on disconnected legacy systems." },
        { title: "Maintenance and backlog control", body: "Preventive and condition-based maintenance regimes help installations reduce deferred maintenance backlog and forecast sustainment and recapitalization funding requirements." },
        { title: "Linear and utility infrastructure", body: "Roads, utility distribution, and other linear assets are modeled by segment so inspections and repairs are tracked along their physical extent." },
        { title: "Compliant federal hosting", body: "Army Maximo runs within FedRAMP and Impact Level boundaries consistent with DoD security requirements for installation and asset data." }
      ]}
    />
  );
}
