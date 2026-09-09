import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Grable Services",
  description:
    "Route inquiries for MAS 9 migration, Maximo hosting, storage services, AI hosting, IBM reselling, support, and general questions.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Talk to Grable about Maximo."
      intro="Route inquiries by MAS 9 migration, Maximo hosting, federal programs, support, AC/DC Mobile, storage, AI infrastructure, or general questions."
      primaryCta="Start an inquiry"
      primaryHref="/contact/"
      route="/contact/"
      template="contact"
      sections={[
        { title: "Inquiry details", body: "Collect only the information needed to understand scope, timeline, and requested support." },
        { title: "Routing", body: "Share enough context for Grable to route sales, support, federal, and general questions to the right owner." }
      ]}
    />
  );
}
