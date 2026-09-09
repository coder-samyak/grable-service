import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Blog",
  description:
    "Practical IBM Maximo and MAS articles on migration, licensing, hosting, and asset management for federal and commercial teams."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Resources"
      title="The Grable Services Maximo blog"
      intro="Search-led, practitioner-written articles on IBM Maximo Application Suite, migration planning, AppPoints licensing, hosting, and AI-enabled asset management. New posts focus on the questions buyers actually ask before a project starts."
      primaryCta="Talk to a Maximo advisor"
      primaryHref="/contact/"
      secondaryCta="Browse whitepapers"
      secondaryHref="/resources/whitepapers/"
      cards={[
        {
          title: "MAS 9 migration",
          body: "How-to walkthroughs on moving from Maximo 7.6 to MAS 9, readiness scoring, and cutover planning.",
          href: "/services/mas9-migration/"
        },
        {
          title: "Licensing explained",
          body: "Plain-language explainers on AppPoints, user tiers, and reserved vs. concurrent consumption.",
          href: "/resources/guides/maximo-apppoints-licensing/"
        },
        {
          title: "Hosting and operations",
          body: "Comparisons of SaaS, BYOL, and managed hosting plus day-two operations guidance.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "AI and watsonx",
          body: "Where generative and predictive AI fit in regulated asset-management workflows.",
          href: "/services/ai-hosting/"
        }
      ]}
      sections={[
        {
          title: "What you will find here",
          body: "Each article is grounded in real delivery experience implementing, migrating, and operating IBM Maximo. We prioritize accuracy over volume: licensing math, deployment trade-offs, and federal compliance context that you can act on. Deeper, citable references live in our whitepapers and guides."
        },
        {
          title: "Built for federal and commercial buyers",
          body: "We write for both contracting officers evaluating asset-management modernization and commercial reliability leaders standardizing on MAS. When a topic warrants more depth, we link out to a full guide or comparison."
        }
      ]}
    />
  );
}
