import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "IBM Maximo for Manufacturing & Plant Operations",
  description: "IBM Maximo EAM for manufacturing: plant-floor preventive maintenance, OEE, spare parts optimization, and integration with plant-floor systems."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Industries / Manufacturing"
      title="IBM Maximo for plant-floor maintenance, OEE, and spares."
      intro="Grable Services helps manufacturers cut unplanned downtime with IBM Maximo, aligning plant-floor preventive maintenance, overall equipment effectiveness, and spare parts strategy while integrating Maximo with the systems that run the plant."
      primaryCta="Plan your plant modernization"
      primaryHref="/contact/"
      secondaryCta="See integration & custom dev"
      secondaryHref="/services/integration-custom-dev/"
      cards={[
        { title: "Plant-floor preventive maintenance", body: "Time-, usage-, and condition-based PM regimes that keep production lines and critical equipment running." },
        { title: "OEE and reliability", body: "Downtime tracking and reliability analysis that connect maintenance performance to overall equipment effectiveness." },
        { title: "Spare parts optimization", body: "Inventory, reorder, and criticality strategy so the right spares are available without overstocking." },
        { title: "Integration and custom development", body: "Connect Maximo to ERP, MES, SCADA, and historian systems for end-to-end plant data.", href: "/services/integration-custom-dev/" }
      ]}
      sections={[
        { title: "Plant asset types", body: "Manufacturing Maximo programs manage production lines, motors and drives, conveyors, utilities, tooling, and material handling equipment, each with maintenance regimes tied to throughput and criticality." },
        { title: "Downtime and OEE", body: "We configure failure capture and downtime coding so maintenance data feeds OEE analysis, helping plants distinguish availability, performance, and quality losses and target the biggest reliability gains." },
        { title: "Spares and inventory", body: "Criticality-driven spare parts strategy balances carrying cost against the risk of a stockout halting a line, with reorder points and storeroom processes built into Maximo." },
        { title: "Process modernization", body: "We modernize legacy maintenance practices and integrate Maximo with MES, ERP, historians, and IoT data so condition signals and production context drive maintenance decisions." }
      ]}
    />
  );
}
