import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Business Process Consulting for EAM & Facilities",
  description:
    "Grable Services standardizes EAM and facilities business processes across sites and departments, aligning workflows to IBM Maximo for one version of the truth."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Business Process Consulting"
      title="EAM and Facilities Process Consulting"
      intro="Inconsistent processes across sites and departments undermine asset data and erode the value of your systems. Specializing in IBM Maximo and MAS 9, Grable standardizes EAM and integrated facilities management processes, establishes one version of the truth, and aligns workflows to Maximo."
      primaryCta="Book a briefing"
      primaryHref="/contact/"
      secondaryCta="Explore enterprise asset management"
      secondaryHref="/solutions/enterprise-asset-management/"
      route="/solutions/business-process-consulting/"
      template="service"
      cards={[
        {
          title: "Standardized business processes",
          body: "We document and standardize asset and facilities processes across entities so every site and department works from a consistent, repeatable approach.",
          href: "/solutions/assessments-benchmarking/"
        },
        {
          title: "One version of the truth",
          body: "We align process and data definitions so asset records, work management, and reporting reflect a single, trusted source rather than competing local interpretations.",
          href: "/contact/"
        },
        {
          title: "Workflows aligned to Maximo",
          body: "We map standardized processes to how IBM Maximo and MAS 9 actually work, so the system reinforces good practice instead of fighting it.",
          href: "/solutions/enterprise-asset-management/"
        },
        {
          title: "Standards-aligned approach",
          body: "Our process work aligns to recognized asset and facilities management standards, including ISO 55000 and IFMA.",
          href: "/solutions/business-value-analysis/"
        }
      ]}
      sections={[
        {
          title: "Why process consulting comes first",
          body: "Technology amplifies whatever processes it runs on. Before downstream Maximo configuration and rollout, we help operations and EAM transformation leaders define how work should flow across the organization. This advisory front-end frames the Maximo work that follows and reduces costly rework later."
        },
        {
          title: "From fragmented to consistent",
          body: "Many organizations accumulate site-specific and department-specific ways of working over time. We bring those variations together into standardized processes that still respect legitimate local needs, giving you consistency without forcing a one-size-fits-all model."
        },
        {
          title: "Built for Maximo and EAM transformation",
          body: "Grable specializes in IBM Maximo and MAS 9, and our consulting is grounded in how these platforms support enterprise asset and facilities management. That focus keeps process recommendations practical and directly implementable in your environment."
        }
      ]}
    />
  );
}
