import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Asset Management Assessments & Benchmarking",
  description:
    "Grable Services delivers asset-management maturity assessments benchmarked against ISO 55000, BOMA, IFMA, GSA, and SMRP standards, with a clear improvement roadmap."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Assessments and Benchmarking"
      title="Asset Management Assessments and Benchmarking"
      intro="Many organizations don't know how their asset and maintenance maturity compares to industry standards. Grable delivers asset-management maturity assessments benchmarked against ISO 55000, BOMA, IFMA, GSA, and SMRP, giving asset and facilities leaders a clear baseline and an improvement roadmap."
      primaryCta="Request an assessment"
      primaryHref="/contact/"
      secondaryCta="See business process consulting"
      secondaryHref="/solutions/business-process-consulting/"
      route="/solutions/assessments-benchmarking/"
      template="service"
      cards={[
        {
          title: "Maturity assessment",
          body: "We evaluate where your asset and maintenance practices stand today across people, process, data, and technology to establish an objective baseline.",
          href: "/contact/"
        },
        {
          title: "Standards-based benchmarking",
          body: "We benchmark your practices against recognized standards, including ISO 55000, BOMA, IFMA, GSA, and SMRP, so comparisons are grounded in accepted frameworks.",
          href: "/solutions/business-value-analysis/"
        },
        {
          title: "Improvement roadmap",
          body: "We translate findings into a prioritized roadmap that shows where to focus next and how each step builds toward greater asset-management maturity.",
          href: "/solutions/business-process-consulting/"
        },
        {
          title: "A low-commitment entry point",
          body: "An assessment is a focused, advisory engagement that gives you clarity and direction before committing to larger transformation or system work.",
          href: "/solutions/reliability-maintenance/"
        }
      ]}
      sections={[
        {
          title: "Know where you stand",
          body: "Without an external reference point, it's hard to tell whether your asset and maintenance practices are leading, lagging, or simply different. Our assessments give asset and facilities leaders a defensible view of current maturity and the gaps that matter most."
        },
        {
          title: "Benchmarked against accepted standards",
          body: "Grable aligns assessments to widely recognized standards such as ISO 55000, BOMA, IFMA, GSA, and SMRP. Anchoring to these frameworks makes results credible to stakeholders and easier to act on across the organization."
        },
        {
          title: "A foundation for what comes next",
          body: "Assessment findings feed directly into process consulting, reliability and maintenance work, and business-value analysis. Specializing in IBM Maximo and MAS 9, Grable can carry the roadmap through to implementation."
        }
      ]}
    />
  );
}
