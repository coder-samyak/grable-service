import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "News & Press",
  description:
    "Company updates from Grable Services across IBM Maximo consulting, hosting, storage, AI infrastructure, and federal services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Company"
      title="News, announcements, and press."
      intro="Find company updates, service announcements, event activity, and public materials from Grable Services as they become available."
      primaryCta="Media inquiries"
      primaryHref="/contact/"
      secondaryCta="Read our blog"
      secondaryHref="/resources/blog/"
      cards={[
        {
          title: "Service updates",
          body: "Announcements about Maximo hosting, MAS 9 migration, storage, AI infrastructure, and related delivery capabilities.",
          href: "/services/"
        },
        {
          title: "Events and webinars",
          body: "Briefings and educational sessions for Maximo, reliability, federal, storage, and infrastructure audiences.",
          href: "/resources/webinars/"
        },
        {
          title: "Technical articles",
          body: "Practical thinking from Grable on Maximo modernization, licensing, hosting, and operational planning.",
          href: "/resources/blog/"
        }
      ]}
      sections={[
        {
          title: "Company updates",
          body: "News items are published when there is a clear public announcement, useful customer information, or a timely update about Grable services."
        },
        {
          title: "Press and media",
          body: "For interviews, company background, media assets, or event participation, route the request through the contact page."
        },
        {
          title: "More from Grable Services",
          body: "For technical articles and buyer education on IBM Maximo and MAS, visit the blog and resources library."
        }
      ]}
    />
  );
}
