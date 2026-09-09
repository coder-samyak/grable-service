import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "Air Force Base & Asset Management on Maximo",
  description: "IBM Maximo EAM for Air Force bases: civil engineering, real property, and equipment lifecycle management with DoD-aligned compliant hosting."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Federal / Air Force"
      title="IBM Maximo for Air Force base, real property, and equipment management."
      intro="Grable Services configures IBM Maximo to support Air Force base civil engineering and asset operations, covering real property, airfield and utility infrastructure, and equipment maintenance within DoD compliance and authorization boundaries."
      primaryCta="Discuss your Air Force requirement"
      primaryHref="/contact/"
      secondaryCta="See DoD asset management"
      secondaryHref="/industries/federal/dod/"
      cards={[
        { title: "Civil engineering operations", body: "Base civil engineer work management, service requests, and preventive maintenance on a unified Maximo platform." },
        { title: "Real property and infrastructure", body: "Buildings, airfield pavements, and utility systems managed as authoritative real property assets." },
        { title: "Equipment maintenance", body: "Ground support, facility, and mission equipment tracked across their full maintenance lifecycle." },
        { title: "DoD compliance baseline", body: "Air Force deployments inherit the DoD authorization and Impact Level posture we apply department-wide.", href: "/industries/federal/dod/" }
      ]}
      sections={[
        { title: "Base civil engineering", body: "We align Maximo to base civil engineer operations so squadrons can intake service requests, schedule and execute work, and maintain real property condition data in one system." },
        { title: "Airfield and linear assets", body: "Airfield pavements, utility distribution, and other linear infrastructure are modeled by segment so inspections, condition, and repairs are tracked along physical extent." },
        { title: "Maintenance and sustainment", body: "Preventive and condition-based maintenance regimes support mission availability and help bases manage deferred maintenance and recapitalization planning." },
        { title: "Compliant federal hosting", body: "Air Force Maximo operates within FedRAMP and Impact Level boundaries consistent with DoD security requirements for base and asset data." }
      ]}
    />
  );
}
