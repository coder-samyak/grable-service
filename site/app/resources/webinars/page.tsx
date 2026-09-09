import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Webinars",
  description:
    "Live and on-demand Maximo webinars on MAS 9 migration, licensing, hosting, and AI for federal and commercial asset teams."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Maximo webinars"
      intro="Live and on-demand sessions where our practitioners walk through MAS 9 migration, AppPoints licensing, hosting decisions, and AI-enabled asset management. Each webinar is built to answer real planning questions, not to pitch."
      primaryCta="Request a topic or briefing"
      primaryHref="/contact/"
      secondaryCta="Read the blog"
      secondaryHref="/resources/blog/"
      cards={[
        {
          title: "Migrating to MAS 9",
          body: "A working session on readiness, sequencing, and cutover for teams leaving Maximo 7.6.",
          href: "/services/mas9-migration/"
        },
        {
          title: "Licensing without surprises",
          body: "How AppPoints, user tiers, and consumption modes affect what you actually pay.",
          href: "/resources/guides/maximo-apppoints-licensing/"
        },
        {
          title: "Choosing a hosting model",
          body: "SaaS vs. BYOL vs. managed hosting, walked through against compliance and cost constraints.",
          href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/"
        },
        {
          title: "AI for regulated assets",
          body: "Where watsonx and predictive models fit when data residency and controls matter.",
          href: "/services/ai-hosting/regulated-ai-workloads/"
        }
      ]}
      sections={[
        {
          title: "Format",
          body: "Sessions run short, with most of the time reserved for live questions. On-demand recordings are paired with the slides and any referenced guides so you can act on what you learned."
        },
        {
          title: "Keep learning between sessions",
          body: "Our blog covers the same topics in written form, updated more frequently than the webinar calendar. It is the best place to follow up after a session."
        }
      ]}
    />
  );
}
