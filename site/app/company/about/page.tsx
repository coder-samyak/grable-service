import { PageShell } from "../../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Company"
      title="Maximo specialists with federal accountability and enterprise operating depth."
      intro="Grable Services works with asset-intensive organizations that need practical help modernizing IBM Maximo, operating managed environments, planning resilient infrastructure, and supporting regulated delivery paths."
      primaryCta="Talk to Grable"
      sections={[
        { title: "Maximo depth", body: "The team focuses on Maximo modernization, MAS 9 migration, managed hosting, mobile workflows, integrations, and the operational practices needed after go-live." },
        { title: "Practical delivery", body: "Engagements start with environment facts, stakeholder priorities, constraints, and risk. Recommendations are built to become scoped work, not abstract roadmaps." },
        { title: "Federal and commercial alignment", body: "Grable supports both public-sector and commercial buyers with careful language, direct intake for sensitive details, and implementation plans that reflect procurement and operating realities." }
      ]}
    />
  );
}
