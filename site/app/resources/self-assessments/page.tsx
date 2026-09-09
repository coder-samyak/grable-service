import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Self-Assessments: MAS 9, AI Hosting, Storage Readiness",
  description:
    "Guided readiness self-assessments from Grable Services for MAS 9 migration, AI hosting, and storage modernization—work through the questions and find your next step."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Self-assessments"
      title="Guided readiness self-assessments"
      intro="These guided self-assessments help you think through where your environment stands before you commit to a project. Each one walks through the questions Grable Services uses to scope work—MAS 9 migration readiness, AI hosting readiness, and storage modernization—so you can surface gaps and decide on a sensible next step."
      primaryCta="Start a readiness assessment"
      primaryHref="/contact/"
      secondaryCta="Browse all tools"
      secondaryHref="/resources/tools/"
      template="resource"
      cards={[
        {
          title: "MAS 9 readiness assessment",
          body: "Work through customizations, integrations, data quality, and infrastructure gaps so you understand what a move to IBM Maximo Application Suite 9 involves before cutover.",
          href: "/services/mas9-migration/"
        },
        {
          title: "AI hosting readiness assessment",
          body: "Review the compute, storage, security, and operational posture questions that matter for hosting production AI workloads in a regulated environment.",
          href: "/services/ai-hosting/"
        },
        {
          title: "Storage modernization assessment",
          body: "Think through resilience, backup, recovery, and capacity questions to gauge how ready your storage foundation is for Maximo and enterprise data workloads.",
          href: "/resources/tools/"
        }
      ]}
      sections={[
        {
          title: "How these assessments work",
          body: "Each assessment is a guided set of questions, not an instant score. As you work through it you build a clear picture of your current state and the gaps that matter. When you are ready, a Grable specialist can review your answers and discuss a tailored next step."
        },
        {
          title: "Grounded in real delivery criteria",
          body: "Grable Services specializes in IBM Maximo and MAS 9. The questions in these assessments reflect the criteria we use on real engagements, so the result points to practical next steps rather than inflated promises."
        },
        {
          title: "Where to go next",
          body: "Use the assessment outcome to start a focused conversation. From there you can explore our MAS 9 migration program, AI hosting, or the wider set of interactive tools and estimators in the resources hub."
        }
      ]}
    />
  );
}
