import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
import { pageMetadata } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Grable Services collects, uses, and protects information on grableservices.com, and the privacy choices available to you.",
  path: "/legal/privacy/"
});

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy policy."
      intro="This policy explains what information Grable Services collects, how we use and protect it, and the choices you have. It applies to grableservices.com and to business communications with our team."
      primaryCta="Contact Grable"
      primaryHref="/contact/"
      secondaryCta="Security overview"
      secondaryHref="/legal/security/"
      template="legal"
      sections={[
        {
          title: "Scope and effective date",
          body: "Last updated July 5, 2026. This Privacy Policy describes how Grable Services (“Grable,” “we,” “us”) handles information collected through this website and related business interactions. It does not cover third-party websites or services we may link to, which have their own privacy practices."
        },
        {
          title: "Information we collect",
          body: "We collect information you provide directly — such as your name, business email, phone number, organization, role, and the details of your inquiry — when you submit a form or contact us. We also automatically collect limited technical information such as IP address, browser and device type, pages visited, and referring source through standard server logs and analytics."
        },
        {
          title: "How we use information",
          body: "We use information to respond to inquiries, route sales and support conversations, deliver requested resources, operate and improve the website, maintain appropriate business records, and protect the security and integrity of our services. We do not use your information for automated decisions that produce legal or similarly significant effects."
        },
        {
          title: "Sharing and service providers",
          body: "We share information only as needed with vetted service providers that support hosting, analytics, communications, customer relationship management, and security operations, and only for those purposes. We may also disclose information when required by law or to protect our legal rights. We do not sell personal information."
        },
        {
          title: "Cookies and analytics",
          body: "The website uses cookies and similar technologies to remember preferences, measure performance, and understand how visitors use the site. Non-essential analytics and marketing technologies remain disabled until configured. You can limit or block cookies through your browser settings, though some features may not work as intended."
        },
        {
          title: "Data retention",
          body: "We keep personal information only as long as necessary for the purposes described here — typically for the duration of our business relationship and a reasonable period afterward to meet legal, contractual, and record-keeping obligations — after which it is deleted or anonymized."
        },
        {
          title: "Your privacy rights",
          body: "Depending on your location, you may have the right to access, correct, update, or delete the personal information we hold about you, or to object to or restrict certain processing. To exercise any of these rights, contact us using the details below and we will respond within the timeframe required by applicable law."
        },
        {
          title: "Security",
          body: "We apply administrative, technical, and physical safeguards appropriate to the sensitivity of the information we handle, and we limit access to those who need it. No method of transmission or storage is fully secure, but we work continuously to protect your information. See our Security overview for more detail."
        },
        {
          title: "Children’s privacy",
          body: "This website and our services are intended for businesses and professionals. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal information, contact us and we will delete it."
        },
        {
          title: "Changes to this policy",
          body: "We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. Material changes will be posted on this page with a revised “last updated” date. Continued use of the website after changes take effect constitutes acceptance of the updated policy."
        },
        {
          title: "Contact us",
          body: "Questions, requests, or complaints about this Privacy Policy or your information can be directed to privacy@grableservices.com or submitted through our contact page. We will work with you to resolve any concerns."
        }
      ]}
    />
  );
}
