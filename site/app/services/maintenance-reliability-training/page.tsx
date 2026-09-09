import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maintenance & Reliability Training",
  description:
    "Standards-based maintenance and reliability training from Grable Services—aligned to SMRP, GSA, and ISO 55000 practices to lift workforce capability alongside your EAM system."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Maintenance & Reliability Training"
      title="Maintenance and Reliability Training"
      intro="Deploying IBM Maximo is only part of realizing asset-management value—teams also need the maintenance and reliability discipline to use it well. Grable Services delivers training grounded in recognized standards so maintenance, reliability, and facilities staff build the practices that turn an EAM platform into measurable outcomes."
      primaryCta="Book a training consultation"
      primaryHref="/contact/"
      secondaryCta="See EAM system training"
      secondaryHref="/services/eam-system-training/"
      route="/services/maintenance-reliability-training/"
      template="service"
      cards={[
        {
          title: "Standards-based curriculum",
          body: "Training shaped by recognized maintenance and reliability standards including SMRP, GSA, and ISO 55000, so the practices your team learns reflect established asset-management discipline.",
          href: "/contact/"
        },
        {
          title: "Reliability practice for your team",
          body: "Sessions that help maintenance and reliability staff move from reactive work toward structured, repeatable practice that supports the goals of your asset program.",
          href: "/contact/"
        },
        {
          title: "Aligned to your EAM platform",
          body: "Training tied to how your organization runs IBM Maximo, so workforce capability and the system reinforce each other rather than living in separate silos.",
          href: "/services/eam-system-training/"
        },
        {
          title: "Pairs with mentoring",
          body: "Classroom learning combined with hands-on mentoring options so knowledge transfers into day-to-day work rather than fading after a session.",
          href: "/services/immersive-mentoring/"
        }
      ]}
      sections={[
        {
          title: "Why training matters",
          body: "Organizations often invest in Maximo but lack the maintenance and reliability discipline to realize its value. Standards-based upskilling gives staff a shared framework and vocabulary so the platform supports a consistent way of working."
        },
        {
          title: "Grounded in recognized standards",
          body: "Grable aligns its training approach to SMRP, GSA, and ISO 55000 practices. This standards orientation differentiates the work beyond software training and ties reliability outcomes back to the asset-management program."
        },
        {
          title: "Who benefits",
          body: "Maintenance, reliability, and facilities leaders, along with federal and enterprise asset organizations, use this training to build internal capability and sustain the value of their EAM investment over time."
        }
      ]}
    />
  );
}
