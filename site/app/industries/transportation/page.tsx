import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "IBM Maximo for Transportation & Transit Assets",
  description: "IBM Maximo EAM for transportation: linear infrastructure, transit, and fleet asset maintenance with AI-driven reliability and predictive insight."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Industries / Transportation"
      title="IBM Maximo for linear, transit, and fleet asset maintenance."
      intro="Grable Services configures IBM Maximo for transit authorities, transportation agencies, and fleet operators, managing linear infrastructure, rolling stock, and vehicle fleets with maintenance and AI-driven reliability that keep service running safely."
      primaryCta="Plan your transportation program"
      primaryHref="/contact/"
      secondaryCta="See AI on Maximo"
      secondaryHref="/services/ai-on-maximo/"
      cards={[
        { title: "Linear infrastructure", body: "Roads, track, bridges, and tunnels modeled by segment so inspections and condition track along physical extent." },
        { title: "Transit and rolling stock", body: "Rail cars, buses, and signaling systems maintained on regulated inspection and overhaul cycles." },
        { title: "Fleet asset maintenance", body: "Vehicle fleets managed across their lifecycle with usage-based preventive maintenance." },
        { title: "AI-driven reliability", body: "Predictive insight on Maximo surfaces emerging failures before they disrupt service.", href: "/services/ai-on-maximo/" }
      ]}
      sections={[
        { title: "Transportation asset types", body: "Transportation Maximo programs span linear assets such as track, roadway, and bridges; transit rolling stock and signaling; stations and facilities; and vehicle fleets, each with distinct inspection and overhaul regimes." },
        { title: "Linear asset maintenance", body: "We model linear infrastructure by segment so condition assessments, defects, and work orders are located precisely along the asset, supporting inspection programs and capital planning." },
        { title: "Transit and fleet reliability", body: "Usage-based preventive maintenance and overhaul scheduling keep rolling stock and fleets available and safe, aligning maintenance to mileage, hours, and regulatory inspection requirements." },
        { title: "Predictive maintenance with AI", body: "AI and condition data on Maximo help agencies anticipate failures in critical assets such as signals and vehicles, shifting from scheduled to predictive intervention and improving service reliability." }
      ]}
    />
  );
}
