import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { serviceCards } from "../data/site";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IBM Maximo, Hosting, Storage, and AI Services",
  description:
    "Explore Grable Services support for MAS 9 migration, Maximo hosting, IBM Storage Services, AI hosting, federal deployment planning, and integrations.",
  path: "/services/"
});

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="IBM Maximo services built for migration, hosting, compliance, and field operations."
      intro="Whether the priority is MAS 9 migration, Maximo as a Service, federal deployment planning, AI on Maximo, integration, storage, or mobile field workflows, Grable structures the work around production outcomes."
      cards={serviceCards}
      route="/services/"
      template="service"
      faqs={[
        {
          title: "Can Grable support both migration and hosting?",
          body: "Yes. Assessment, migration, hosting, integration, and managed operations can be scoped together or separately."
        },
        {
          title: "Are procurement identifiers published on the site?",
          body: "Current procurement identifiers and certification details are provided through direct request so buyers can verify them against the appropriate source."
        }
      ]}
    />
  );
}
