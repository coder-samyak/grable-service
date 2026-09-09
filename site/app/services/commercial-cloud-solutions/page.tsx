import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Commercial Cloud Solutions for Maximo",
  description:
    "Commercial, non-federal IBM Maximo hosting from Grable Services—MaaS, PaaS, and IaaS options with managed support and disaster recovery for enterprise operators."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Commercial Cloud Solutions"
      title="Commercial Maximo Cloud Hosting"
      intro="Grable Services hosts IBM Maximo and related workloads for commercial, non-federal operators who want managed cloud accountability without federal compliance tiers. We offer Maximo-as-a-Service, platform, and infrastructure hosting options so enterprise teams can run Maximo without operating the underlying stack themselves."
      primaryCta="Compare hosting options"
      primaryHref="/contact/"
      secondaryCta="See Maximo hosting"
      secondaryHref="/services/maximo-hosting/"
      route="/services/commercial-cloud-solutions/"
      template="service"
      cards={[
        {
          title: "Maximo as a Service (MaaS)",
          body: "A fully managed Maximo environment where Grable runs the infrastructure, patching, backups, and operations so your team keeps control without staffing the stack.",
          href: "/services/maximo-hosting/managed/"
        },
        {
          title: "Platform as a Service (PaaS)",
          body: "A managed platform layer for teams that want Grable to operate the underlying environment while they retain ownership of their Maximo configuration and customizations.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "Infrastructure as a Service (IaaS)",
          body: "Managed infrastructure for organizations that want Grable to provision and maintain the compute, storage, and networking that their Maximo workloads run on.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "Managed support and disaster recovery",
          body: "Ongoing operational support and disaster-recovery planning so commercial Maximo environments stay current, recoverable, and production-ready.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "Built for commercial buyers",
          body: "Federal compliance tiers add overhead that many commercial operators do not need. We keep the commercial buying motion separate so enterprise teams in sectors such as life sciences, manufacturing, utilities, and gaming and hospitality get production-grade hosting without federal-specific messaging."
        },
        {
          title: "Choose your hosting model",
          body: "Not every organization wants the same level of management. We help you weigh MaaS, PaaS, and IaaS against your in-house operations capacity, then align the model to how much of the stack you want to own versus hand to Grable."
        },
        {
          title: "Run Maximo without losing control",
          body: "Grable operates the environment so your team can focus on asset and maintenance outcomes rather than infrastructure, patching, and recovery. You keep visibility and decision rights over your Maximo configuration while we handle the operational layer."
        }
      ]}
    />
  );
}
