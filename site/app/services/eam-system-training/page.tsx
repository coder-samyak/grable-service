import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "EAM System Training for IBM Maximo",
  description:
    "Role-based IBM Maximo and MAS system training from Grable Services so users, administrators, and analysts operate the EAM platform effectively after deployment or upgrade."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="EAM System Training"
      title="EAM System Training for IBM Maximo"
      intro="Maximo adoption can stall when users and administrators are left to learn the system on their own. Grable Services delivers role-based IBM Maximo and Maximo Application Suite training so end users, administrators, and analysts can operate the EAM platform effectively after a deployment or an MAS 9 upgrade."
      primaryCta="Book a training consultation"
      primaryHref="/contact/"
      secondaryCta="See maintenance & reliability training"
      secondaryHref="/services/maintenance-reliability-training/"
      route="/services/eam-system-training/"
      template="service"
      cards={[
        {
          title: "End-user training",
          body: "Hands-on enablement for the people who use Maximo day to day, so work, asset, and inventory tasks become routine rather than a source of support tickets.",
          href: "/contact/"
        },
        {
          title: "Administrator training",
          body: "Training for the administrators who keep Maximo running, covering the configuration and operational tasks that sustain a healthy EAM environment.",
          href: "/contact/"
        },
        {
          title: "Analyst and project-team training",
          body: "Enablement for analysts and project teams who report on, extend, and steward the platform across a deployment or upgrade.",
          href: "/contact/"
        },
        {
          title: "Post-upgrade enablement",
          body: "Training timed to a deployment or MAS 9 upgrade so teams are ready to use new capabilities as they go live.",
          href: "/services/mas9-migration/"
        }
      ]}
      sections={[
        {
          title: "Role-based by design",
          body: "Different people use Maximo in different ways. Grable structures training around the roles in your organization—end users, administrators, analysts, and project teams—so each group learns what it needs without wading through what it does not."
        },
        {
          title: "Drives adoption, reduces support load",
          body: "Effective system training is one of the most direct ways to improve adoption and cut down on avoidable support requests. It is a natural complement to hosting and MAS 9 upgrade engagements where users meet the platform for the first time."
        },
        {
          title: "Timed to your project",
          body: "Whether you are deploying Maximo for the first time or upgrading to MAS 9, Grable aligns training to your project timeline so the platform and the people who run it are ready together."
        }
      ]}
    />
  );
}
