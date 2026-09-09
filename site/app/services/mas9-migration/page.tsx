import { PageShell } from "../../components/PageShell";

export default function Mas9MigrationPage() {
  return (
    <PageShell
      eyebrow="MAS 9 Migration"
      title="MAS 9 migration with the risk removed before cutover."
      intro="Move from Maximo 7.6 or MAS 8 to MAS 9 with a readiness plan covering OpenShift, Java 17, integrations, customizations, licensing, and downtime windows."
      primaryCta="Take the readiness assessment"
      secondaryCta="Book a migration briefing"
      sections={[
        { title: "Readiness", body: "Assess infrastructure, data, custom code, integrations, licensing, reporting, security, and operational constraints before scheduling cutover." },
        { title: "Delivery", body: "Plan the migration in phases with environment preparation, test cycles, remediation, user acceptance, and rollback planning." },
        { title: "Handoff", body: "Close the migration with documented acceptance criteria, support ownership, administrator guidance, and a clear path for post-go-live stabilization." }
      ]}
    />
  );
}
