import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "MAS 9 Upgrade Services",
  description:
    "End-to-end IBM Maximo Application Suite 9 upgrade delivery: phased planning, OpenShift environment build, 7.6-to-MAS 9 and MAS 8-to-MAS 9 paths, test cycles, customization remediation, UAT, cutover, rollback, and hypercare."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="MAS 9 Migration"
      title="A phased, low-risk delivery path to IBM Maximo Application Suite 9."
      intro="We deliver the full upgrade — from OpenShift environment build through cutover and hypercare — on both the Maximo 7.6.x-to-MAS 9 and MAS 8-to-MAS 9 paths, with structured test cycles, customization remediation, and a rehearsed rollback so the move to production is predictable."
      primaryCta="Plan your MAS 9 upgrade"
      primaryHref="/contact/"
      secondaryCta="Start with a readiness assessment"
      secondaryHref="/services/mas9-migration/readiness-assessment/"
      cards={[
        {
          title: "Phased delivery plan",
          body: "We work from the readiness findings into a sequenced plan — environment build, data migration, configuration, remediation, test cycles, UAT, and cutover — with defined entry and exit criteria at each gate so progress is measurable and decisions are made on evidence.",
          href: "/services/mas9-migration/readiness-assessment/"
        },
        {
          title: "OpenShift environment build",
          body: "MAS 9 runs on Red Hat OpenShift with Java 17. We stand up the cluster prerequisites and supporting operators (cert-manager, MongoDB, pipelines), install IBM Maximo Operator Catalog and the Suite, and provision the Manage workspace and database connectivity for a clean target environment.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "7.6.x → MAS 9 path",
          body: "For Maximo 7.6.x clients, we handle the database upgrade and schema migration into the MAS Manage layer, re-platforming configuration and reconciling the shift from named/concurrent licensing to the MAS AppPoints model along the way."
        },
        {
          title: "MAS 8 → MAS 9 path",
          body: "For clients already on MAS 8, we manage the in-suite upgrade — OpenShift and operator version alignment, catalog update, and Manage component versioning — to bring the workspace to MAS 9 with minimal reconfiguration."
        },
        {
          title: "Customization remediation",
          body: "Automation scripts, conditional expressions, escalations, Application Designer screens, integrations, and class extensions flagged in assessment are remediated and unit-validated against MAS 9, with re-platforming to configuration where it reduces long-term maintenance."
        },
        {
          title: "Structured test cycles",
          body: "We run iterative system and integration test cycles against the rebuilt environment — functional regression, integration round-trips over the Manage API, reporting validation, and performance checks — logging and triaging defects to closure before UAT begins."
        }
      ]}
      sections={[
        {
          title: "User acceptance testing (UAT)",
          body: "We prepare UAT scripts mapped to your real business processes, support your testers through structured cycles, and manage defect triage and re-test. Formal UAT sign-off becomes the gate that authorizes scheduling the production cutover."
        },
        {
          title: "Cutover & rollback planning",
          body: "The production cutover runs to a rehearsed runbook: final data migration, configuration deployment, validation checkpoints, and go/no-go decision points. A defined rollback position and restore plan means that if exit criteria are not met, you return to the prior environment without business disruption."
        },
        {
          title: "Reporting, integrations & validation",
          body: "Before go-live we confirm BIRT and any Cognos reporting render correctly, every inbound and outbound integration completes end-to-end, and security groups and application authorizations behave as designed — so production starts validated, not assumed."
        },
        {
          title: "Hypercare & transition to operations",
          body: "After go-live we provide a hypercare period of heightened support — rapid triage, fixes, and tuning while the environment stabilizes — then transition to steady-state managed hosting and support so your MAS 9 platform stays current and well-operated."
        }
      ]}
    />
  );
}
