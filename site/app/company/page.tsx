import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Grable Services, an IBM Maximo services firm supporting federal and commercial asset-intensive organizations."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Company"
      title="An IBM Maximo services firm built for accountable delivery."
      intro="Grable Services delivers IBM Maximo and Maximo Application Suite consulting, hosting, and managed services for federal and commercial asset-intensive organizations. Explore who we are and how we work."
      primaryCta="Talk with our team"
      primaryHref="/contact/"
      secondaryCta="Read about us"
      secondaryHref="/company/about/"
      cards={[
        {
          title: "About Grable Services",
          body: "Our mission, operating principles, Maximo focus, and approach to federal and commercial delivery.",
          href: "/company/about/"
        },
        {
          title: "Leadership",
          body: "The leadership model guiding Maximo engagements, managed hosting, federal support, and customer communication.",
          href: "/company/leadership/"
        },
        {
          title: "Careers",
          body: "Join a team building and operating mission-critical Maximo systems for federal and commercial clients.",
          href: "/company/careers/"
        },
        {
          title: "News & press",
          body: "Company updates, event activity, service announcements, and technical resources from Grable Services.",
          href: "/company/news/"
        },
        {
          title: "Partners",
          body: "The technology ecosystem supporting Maximo, OpenShift, cloud, storage, AI infrastructure, and integration work.",
          href: "/company/partners/"
        }
      ]}
      sections={[
        {
          title: "What we do",
          body: "We focus exclusively on IBM Maximo and Maximo Application Suite — assessment, upgrade and migration, implementation, integration, hosting, and managed operations for asset-intensive enterprises and government agencies."
        },
        {
          title: "Who we serve",
          body: "Federal agencies, defense organizations, utilities, transportation, manufacturing, life sciences, higher education, and other asset-intensive operators that depend on Maximo to manage assets, work, and inventory at scale."
        },
        {
          title: "Federal credentials",
          body: "Current registration, certification, NAICS, credential, and contract-path details are provided directly when they are needed for procurement or teaming conversations."
        }
      ]}
    />
  );
}
