import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Website terms of use for Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of use."
      intro="These terms describe the general conditions for using the Grable Services website and public content. Customer work is governed by the applicable proposal, statement of work, order, or agreement."
      primaryCta="Contact Grable"
      primaryHref="/contact/"
      secondaryCta="Privacy policy"
      secondaryHref="/legal/privacy/"
      template="legal"
      sections={[
        {
          title: "Website content",
          body: "The website is provided for general information about Grable Services, IBM Maximo services, hosting, storage, AI infrastructure, federal support, and related resources."
        },
        {
          title: "No project commitment",
          body: "Website content does not create a contract, warranty, authorization, certification, or commitment to deliver a specific service. Scope, pricing, responsibilities, and timelines are confirmed in writing."
        },
        {
          title: "Intellectual property",
          body: "Site text, structure, graphics, and other materials are owned by Grable Services or used with permission. Product and company names may be trademarks of their respective owners."
        },
        {
          title: "Acceptable use",
          body: "Visitors may not misuse the site, attempt unauthorized access, interfere with operations, submit unlawful content, or use public materials in a misleading way."
        },
        {
          title: "Updates",
          body: "Grable may update website content and these terms as services, policies, and public information change."
        }
      ]}
    />
  );
}
