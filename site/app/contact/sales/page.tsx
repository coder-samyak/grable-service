import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Contact Sales",
  description:
    "Talk to Grable Services sales about IBM Maximo hosting, MAS 9, storage, AI hosting, and reselling. Tell us your needs and we will route your request."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Talk to sales about your Maximo initiative."
      intro="Whether you need IBM Maximo hosting, a MAS 9 deployment, storage, AI hosting, or to license Maximo through us, our sales team will route your request to the right specialist."
      primaryCta="Start the conversation"
      primaryHref="/contact/"
      secondaryCta="Browse services"
      secondaryHref="/services/"
      cards={[
        {
          title: "Maximo hosting",
          body: "Managed and hosted Maximo environments sized for your workload.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "MAS 9",
          body: "Plan and license a Maximo Application Suite 9 deployment on OpenShift.",
          href: "/services/"
        },
        {
          title: "Storage & AI hosting",
          body: "Storage capacity and AI hosting to support Maximo data and intelligent workloads.",
          href: "/services/"
        },
        {
          title: "IBM Maximo reselling",
          body: "License IBM Maximo and MAS through Grable Services.",
          href: "/services/ibm-maximo-reselling/"
        }
      ]}
      sections={[
        {
          title: "How sales routing works",
          body: "Tell us your use case, whether hosting, MAS 9, storage, AI hosting, federal planning, or reselling, and we will route the request to the right specialist."
        },
        {
          title: "What to include in your request",
          body: "Share your Maximo version, environment size, target timeline, and whether you are a federal or commercial buyer so we can scope an accurate response."
        },
        {
          title: "Reach sales",
          body: "To begin, use the main contact form and include enough context for Grable to route the conversation quickly."
        }
      ]}
    />
  );
}
