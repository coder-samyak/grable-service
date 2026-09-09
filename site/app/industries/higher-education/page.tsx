import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "IBM Maximo for Higher Education Campuses",
  description: "IBM Maximo EAM for higher education: campus facilities, space management, deferred maintenance, and central plant operations on managed hosting."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Industries / Higher Education"
      title="IBM Maximo for campus facilities and space management."
      intro="Grable Services configures IBM Maximo for colleges and universities, managing campus facilities, central plant, and space so facilities teams can control deferred maintenance backlogs and keep academic, research, and residential buildings running."
      primaryCta="Discuss your campus program"
      primaryHref="/contact/"
      secondaryCta="Explore managed hosting"
      secondaryHref="/services/maximo-hosting/"
      cards={[
        { title: "Campus facilities", body: "Academic, research, residential, and athletic buildings managed as one authoritative asset inventory." },
        { title: "Space management", body: "Room and space data tied to assets and work so facilities and planning teams share one source of truth." },
        { title: "Central plant and utilities", body: "Chilled water, steam, electrical, and distribution systems maintained for campus-wide reliability." },
        { title: "Managed hosting", body: "Maximo operated and maintained for lean campus IT teams on managed infrastructure.", href: "/services/maximo-hosting/" }
      ]}
      sections={[
        { title: "Campus asset types", body: "Higher education Maximo programs cover classroom and lab buildings, residence halls, central plant utilities, athletics and event venues, and grounds, each with maintenance regimes shaped by the academic calendar and occupancy." },
        { title: "Deferred maintenance", body: "Aging campuses carry significant deferred maintenance. We use facility condition data and work history in Maximo to quantify backlog and prioritize capital renewal across the portfolio." },
        { title: "Space and work integration", body: "Linking space data to assets and work orders gives facilities, planning, and registrar functions a shared view of how buildings and rooms are used and maintained." },
        { title: "Lean operations and hosting", body: "Campus IT teams are often small. Managed hosting lets us run, patch, and support Maximo so facilities staff focus on maintaining the campus rather than the platform." }
      ]}
    />
  );
}
