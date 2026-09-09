import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo PaaS Hosting",
  description:
    "Platform-as-a-Service hosting for IBM Maximo Application Suite from Grable Services: we run the managed OpenShift and Maximo runtime — upgrades, scaling, and observability — while you own configuration and customization."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Maximo Hosting"
      title="Maximo Platform as a Service (PaaS)"
      intro="Grable Services operates the platform — the Red Hat OpenShift cluster and the IBM Maximo Application Suite runtime — as a managed service, while your team owns the Maximo configuration and customization. PaaS sits between IaaS and fully managed hosting: you keep functional ownership, we keep the platform running, patched, scaled, and observable."
      primaryCta="Plan a PaaS deployment"
      primaryHref="/contact/"
      secondaryCta="See fully managed hosting"
      secondaryHref="/services/maximo-hosting/managed/"
      cards={[
        {
          title: "Managed OpenShift runtime",
          body: "We run the Red Hat OpenShift cluster and the MAS operators and runtime: cluster health, certificates, ingress, the MAS core and Manage application bundles, and the platform services Maximo depends on. You get a healthy platform to build on without operating it."
        },
        {
          title: "Platform upgrades",
          body: "We plan and execute OpenShift and MAS platform upgrades — operator catalog updates, MAS version moves, and fix packs at the platform layer — with change control and test-first validation, coordinated with your team's configuration and customization release schedule."
        },
        {
          title: "Scaling and capacity",
          body: "We size and scale the platform to demand, including horizontal scaling of Maximo application bundles and the supporting pods. For production we can operate an HA bundle topology with autoscaling and pod disruption protection so the platform absorbs load."
        },
        {
          title: "Observability",
          body: "Platform-level monitoring, logging, and alerting across the cluster, MAS bundles, cron, and integration so platform issues are detected and resolved. We surface relevant platform health signals to your team for the layers you own."
        },
        {
          title: "You own configuration",
          body: "Your team owns Maximo functional configuration, automation scripts, application design, customization, and how the application is used. PaaS leaves the application decisions with you while removing the platform operations burden.",
          href: "/services/maximo-hosting/iaas/"
        },
        {
          title: "Database coordination",
          body: "We operate the platform's connection to the Maximo database and coordinate on database needs that affect the runtime. Database administration responsibilities are defined per engagement."
        }
      ]}
      sections={[
        {
          title: "Shared-responsibility split",
          body: "Under PaaS, Grable Services is responsible for the infrastructure, the OpenShift cluster, and the MAS platform runtime — including platform patching, upgrades, scaling, and observability. Your team is responsible for Maximo configuration, customization, automation scripts, application design, data, and user administration. PaaS gives you more platform relief than IaaS while keeping more functional control than fully managed hosting. The exact boundary is documented per engagement."
        },
        {
          title: "PaaS versus IaaS and managed",
          body: "If you want to keep administrative control of the OpenShift and Maximo runtime yourself, our IaaS model hosts only the underlying infrastructure. If you want Grable to also own Maximo configuration, database administration, and end-to-end operations, our fully managed (MaaS) model takes the application layer too. PaaS is the middle path: we run the platform, you run Maximo."
        },
        {
          title: "Support and service levels",
          body: "PaaS includes a defined support process for the platform layer with severity-based handling and an escalation path into the Grable team. Support hours, response targets, and uptime commitments are specified in the service agreement."
        },
        {
          title: "Production readiness",
          body: "For production workloads we can operate a high-availability MAS topology with scaled application bundles, autoscaling, and tested platform recovery procedures. Production resilience targets and recovery objectives are scoped per engagement."
        }
      ]}
    />
  );
}
