import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resources for Maximo, Hosting, Storage, and AI",
  description:
    "Guides, blog posts, whitepapers, tools, case studies, datasheets, webinars, and comparisons for Maximo and IBM infrastructure planning.",
  path: "/resources/"
});

export default function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Maximo intelligence for migration, hosting, federal procurement, and AI."
      intro="Resources are organized for practical buyer education: blog posts, case studies, whitepapers, tools, webinars, datasheets, and comparison content for Maximo and infrastructure decisions."
      route="/resources/"
      template="resource"
      cards={[
        { title: "Blog", body: "Search-led articles and explainers.", href: "/resources/blog/" },
        { title: "Case Studies", body: "Public outcomes, project summaries, and reference paths.", href: "/resources/case-studies/" },
        { title: "Whitepapers", body: "MAS 9, FedRAMP, and hosting TCO downloads.", href: "/resources/whitepapers/" },
        { title: "Tools", body: "Readiness assessments and calculators.", href: "/resources/tools/" }
      ]}
    />
  );
}
