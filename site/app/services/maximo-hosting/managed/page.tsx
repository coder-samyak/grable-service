import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "Managed Maximo Hosting (MaaS)",
  description:
    "Fully managed IBM Maximo Application Suite operations from Grable Services: OpenShift infrastructure, OS and Maximo patching, DB2/Oracle/SQL Server administration, backups, monitoring, security, and disaster recovery."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Maximo Hosting"
      title="Managed Maximo (Maximo as a Service)"
      intro="Grable Services runs your IBM Maximo Application Suite (MAS 9) environment end to end on Red Hat OpenShift. We own the infrastructure, OS and Maximo patching, database administration, backups, monitoring, security, and disaster recovery so your team can focus on maintenance and asset management instead of platform operations."
      primaryCta="Talk to a Maximo hosting team"
      primaryHref="/contact/"
      secondaryCta="Compare IaaS hosting"
      secondaryHref="/services/maximo-hosting/iaas/"
      cards={[
        {
          title: "Infrastructure operations",
          body: "We provision and operate the full hosting stack: compute, storage, and network plus the Red Hat OpenShift cluster that MAS 9 runs on. You consume a working Maximo environment rather than managing servers, clusters, or capacity.",
          href: "/services/maximo-hosting/iaas/"
        },
        {
          title: "OS and Maximo patching",
          body: "We track IBM fix packs, MAS releases, and operating system and OpenShift updates, then test and apply them on a managed cadence with change control. Patching covers the platform and the Maximo application layer to keep you supported and secure."
        },
        {
          title: "Database administration",
          body: "Managed DBA for the Maximo database whether you run IBM Db2, Oracle, or Microsoft SQL Server. We handle configuration, performance tuning, indexing, capacity, collation standards, and routine maintenance against the database supporting MAS."
        },
        {
          title: "Backups and recovery",
          body: "We define and run a backup schedule and validate restores so Maximo data is recoverable to the recovery point agreed for the engagement."
        },
        {
          title: "Monitoring and observability",
          body: "Proactive monitoring of cluster health, Maximo application bundles, integration, cron tasks, and database performance with alerting. We watch the environment so issues are caught and addressed before they reach your users."
        },
        {
          title: "Disaster recovery",
          body: "Documented DR procedures include recovery point and recovery time expectations, testing cadence, and any multi-site or failover topology scoped for the environment."
        }
      ]}
      sections={[
        {
          title: "Shared-responsibility model",
          body: "In a fully managed engagement, Grable Services is responsible for the infrastructure, OpenShift platform, Maximo runtime, database administration, patching, backups, monitoring, security operations, and disaster recovery. You retain ownership of Maximo functional configuration, business data, customizations, user administration, and how Maximo is used to run your maintenance and asset programs. The exact responsibility split is documented per engagement so there are no gaps."
        },
        {
          title: "Support model and service levels",
          body: "Managed hosting includes a defined support process for incidents, requests, and changes, with severity-based handling and an escalation path into the Grable team. Support hours, response targets, uptime commitments, and related terms are specified in the service agreement."
        },
        {
          title: "Security and compliance",
          body: "We apply platform hardening, access controls, TLS encryption to the database, and patch management as part of the managed service. For workloads that require an authorized federal cloud boundary, our federal deployment planning path is a related option for government and regulated customers."
        },
        {
          title: "When fully managed is the right fit",
          body: "Choose Managed Maximo when you want Maximo to be operated as a service and prefer to invest your team's time in functional work rather than running OpenShift, databases, and infrastructure. If your team wants to retain more administrative control of the Maximo and OpenShift layer, our IaaS hosting model is the better starting point."
        }
      ]}
    />
  );
}
