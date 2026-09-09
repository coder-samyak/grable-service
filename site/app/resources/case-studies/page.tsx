import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Case Studies",
  description:
    "Maximo migration, hosting, and modernization case studies showing outcomes for federal and commercial asset-management programs."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Maximo case studies"
      intro="Outcome-focused stories from our IBM Maximo migration, hosting, and modernization engagements. Each case study documents the starting challenge, our approach, and measurable results for federal and commercial asset programs."
      primaryCta="Discuss your program"
      primaryHref="/contact/"
      secondaryCta="See federal past performance"
      secondaryHref="/federal/past-performance/"
      cards={[
        {
          title: "MAS 9 migration",
          body: "Examples of migration planning, readiness, remediation, testing, cutover, and stabilization for Maximo modernization programs.",
          href: "/services/mas9-migration/"
        },
        {
          title: "Managed Maximo hosting",
          body: "Examples of operating Maximo environments with clearer support ownership, backup routines, monitoring, and managed hosting responsibilities.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "Federal asset modernization",
          body: "Examples of federal asset-management planning, deployment support, procurement context, and documentation needs.",
          href: "/federal/past-performance/"
        },
        {
          title: "AI-enabled reliability",
          body: "Examples of reliability, condition, and analytics planning connected to Maximo and supporting infrastructure.",
          href: "/services/ai-hosting/"
        }
      ]}
      sections={[
        {
          title: "How we document outcomes",
          body: "Every case study ties results to a baseline: what was failing, slow, costly, or difficult before, what changed during the engagement, and what the customer could operate afterward."
        },
        {
          title: "Federal performance record",
          body: "For our verified federal delivery history, see our federal past performance page. It captures contract context relevant to contracting officers evaluating us for Maximo and IBM infrastructure work."
        }
      ]}
    />
  );
}
