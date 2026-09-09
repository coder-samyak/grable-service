import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "MAS 9 Migration Kit",
  description:
    "The Grable MAS 9 Migration Kit is an internal accelerator of readiness, checklist, and planning aids for Maximo Application Suite 9 migrations."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Grable accelerator"
      title="MAS 9 Migration Kit: readiness and planning accelerators for MAS 9"
      intro="The MAS 9 Migration Kit is a Grable Services internal accelerator: a set of readiness, checklist, and planning aids our team uses to de-risk migrations from legacy Maximo to Maximo Application Suite 9."
      primaryCta="Start a MAS 9 conversation"
      primaryHref="/contact/"
      secondaryCta="Book a MAS 9 readiness assessment"
      secondaryHref="/services/mas9-migration/readiness-assessment/"
      cards={[
        {
          title: "Readiness inputs",
          body:
            "Captures environment, integration, customization, reporting, security, data, and operational inputs that shape a MAS 9 migration."
        },
        {
          title: "Migration checklists",
          body:
            "Tracks prerequisites, dependencies, validation steps, test cycles, and cutover considerations across the migration path."
        },
        {
          title: "Planning templates",
          body:
            "Turns assessment findings into a sequenced plan with responsibilities, assumptions, risks, and decision points."
        },
        {
          title: "Risk and dependency tracking",
          body:
            "Surfaces risks and dependencies early so remediation work can be planned before migration timelines become brittle."
        },
        {
          title: "Readiness assessment counterpart",
          body:
            "The Kit feeds Grable's MAS 9 readiness assessment, where we evaluate your current Maximo estate and produce a migration path.",
          href: "/services/mas9-migration/readiness-assessment/"
        }
      ]}
      sections={[
        {
          title: "What the Migration Kit is",
          body:
            "It is an internal Grable accelerator that standardizes how we approach MAS 9 migrations, not a separately licensed product."
        },
        {
          title: "How it supports your migration",
          body:
            "The Kit underpins our readiness assessment and migration delivery. If you are evaluating a move to MAS 9, begin with the linked readiness assessment to understand current-state findings, risks, and a recommended migration path."
        },
        {
          title: "Engagement scope",
          body:
            "The exact aids applied to your project are confirmed in writing as part of the readiness assessment or migration engagement."
        }
      ]}
    />
  );
}
