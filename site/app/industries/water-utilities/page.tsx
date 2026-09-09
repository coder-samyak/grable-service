import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Maximo for Water Utilities",
  description:
    "Grable Services applies IBM Maximo and MAS 9 to water and wastewater asset management—linear pipeline assets, GIS-aligned spatial data, and regulatory reporting."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Water Utilities"
      title="IBM Maximo for Water and Wastewater Asset Management"
      intro="Water and wastewater utilities manage geographically distributed, regulated networks on constrained budgets. Specializing in IBM Maximo and MAS 9, Grable Services helps water utilities apply Maximo to linear pipeline assets, spatial data, and the regulatory reporting their programs depend on."
      primaryCta="Talk to a water utility asset expert"
      primaryHref="/contact/"
      secondaryCta="See the Utilities overview"
      secondaryHref="/industries/utilities/"
      route="/industries/water-utilities/"
      template="standard"
      cards={[
        {
          title: "Linear pipeline assets",
          body: "Maximo Linear models water and wastewater mains as continuous linear assets, so condition, breaks, and work are tracked along the pipeline rather than as isolated points.",
          href: "/industries/utilities/"
        },
        {
          title: "GIS and spatial alignment",
          body: "Maximo Spatial aligns the asset register with Esri ArcGIS, giving operations and maintenance teams a map-based view of distributed network assets.",
          href: "/contact/"
        },
        {
          title: "Work and maintenance management",
          body: "Preventive and corrective work management in Maximo standardizes job plans and PM schedules across treatment plants, pump stations, and the distribution network.",
          href: "/services/maximo-mobile-field/"
        },
        {
          title: "Regulatory reporting",
          body: "Maximo maintains the inspection and maintenance records that support reporting under the EPA and Safe Drinking Water Act framework, keeping documentation audit-ready.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "Why Maximo for water utilities",
          body: "IBM Maximo is a proven EAM platform for distributed, linear, regulated infrastructure. Its linear asset and spatial capabilities fit the way water and wastewater networks are actually operated and maintained."
        },
        {
          title: "Regulatory and budget drivers",
          body: "Water utilities operate under EPA and Safe Drinking Water Act requirements while balancing aging infrastructure and limited capital. Maximo provides a single system of record for the asset, inspection, and compliance data those mandates require."
        },
        {
          title: "How Grable helps",
          body: "Grable Services brings IBM Maximo and MAS 9 platform depth, including spatial asset management. We help water utilities assess asset data, plan the Maximo footprint, and operate the platform across their network."
        }
      ]}
    />
  );
}
