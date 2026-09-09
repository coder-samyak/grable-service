import type { Metadata } from "next";
import { CredentialIconRow } from "../components/CredentialIconRow";
import { PageShell } from "../components/PageShell";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Federal Maximo Services",
  description:
    "Public-sector Maximo migration, hosting, capability materials, procurement intake, and compliance planning for federal buyers.",
  path: "/federal/"
});

export default function FederalPage() {
  return (
    <>
      <PageShell
        eyebrow="Federal services"
        title="Maximo support for public-sector environments."
        intro="Grable Services supports MAS 9 migration, managed hosting, integration, storage, and compliance-aware deployment planning for federal and public-sector technology programs."
        primaryCta="Start an inquiry"
        secondaryCta="Explore services"
        secondaryHref="/services/"
        route="/federal/"
        template="federal"
        sections={[
          { title: "Procurement support", body: "Federal buyers can request current capability materials, teaming information, contracting-path guidance, and supporting details through direct intake." },
          { title: "Compliance-aware planning", body: "We help teams translate security, hosting, FedRAMP, impact-level, identity, data, and operational expectations into practical Maximo delivery requirements." },
          { title: "Delivery focus", body: "Public-sector work is scoped around migration risk, hosting responsibility, integration boundaries, documentation, acceptance criteria, and sustainment needs." }
        ]}
        faqs={[
          {
            title: "Can contracting details be shared directly?",
            body: "Yes. Current procurement, credential, and proposal-support details can be shared through the appropriate direct channel."
          },
          {
            title: "Does this page claim a specific authorization?",
            body: "No. Offering-specific authorization or certification status should be confirmed against the applicable official source before it is used in a procurement decision."
          }
        ]}
      />
      <CredentialIconRow />
    </>
  );
}
