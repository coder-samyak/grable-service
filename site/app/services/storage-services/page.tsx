import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Storage Services",
  description:
    "Sizing, procurement, migration, implementation, backup, resilience design, and managed support for IBM Storage powering Maximo and regulated enterprise data."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Storage Services"
      title="IBM Storage services for resilient Maximo and enterprise data"
      intro="Grable Services helps federal and commercial teams size, procure, migrate, implement, and operate IBM Storage platforms — IBM Storage as a Service, IBM FlashSystem all-flash arrays, and IBM Storage Defender — engineered to keep Maximo and regulated workloads performant, protected, and recoverable."
      primaryCta="Discuss your storage needs"
      primaryHref="/contact/"
      secondaryCta="View IBM Storage products"
      secondaryHref="/products/ibm-storage-services/"
      cards={[
        {
          title: "IBM Storage as a Service",
          body:
            "Consumption-based delivery of IBM FlashSystem capacity with SLA-managed performance tiers — sized and operated for Maximo and regulated workloads on an OPEX model.",
          href: "/services/storage-services/storage-as-a-service/"
        },
        {
          title: "IBM Storage Defender",
          body:
            "Cyber resilience for production data: Safeguarded Copy immutable snapshots, backup and recovery, and FlashSystem-based threat detection to limit ransomware impact.",
          href: "/services/storage-services/storage-defender/"
        },
        {
          title: "Backup, recovery & data resilience",
          body:
            "RPO/RTO-driven backup architecture, disaster recovery, cyber-recovery, and retention design that protects Maximo uptime and meets regulated retention requirements.",
          href: "/services/storage-services/backup-recovery/"
        },
        {
          title: "IBM Storage products & licensing",
          body:
            "Explore the IBM Storage platforms Grable supports and how consumption-based and capacity-based licensing maps to your data growth and compliance posture.",
          href: "/products/ibm-storage-services/"
        }
      ]}
      sections={[
        {
          title: "Sizing & procurement support",
          body:
            "We translate Maximo database, attachment, and integration data growth into right-sized IBM Storage capacity and performance tiers, then support procurement with configuration guidance and lifecycle planning so you commit to the capacity you actually need."
        },
        {
          title: "Migration & implementation",
          body:
            "Grable plans and executes data migration onto IBM FlashSystem and IBM Storage as a Service with minimal disruption — validating performance, replication, and integration with Maximo and surrounding enterprise systems before and after cutover."
        },
        {
          title: "Resilience & recovery design",
          body:
            "We design backup, replication, and cyber-recovery patterns around your RPO and RTO targets, including IBM Storage Defender Safeguarded Copy and FlashSystem snapshots, so regulated and mission-critical workloads stay recoverable after failure or attack."
        },
        {
          title: "Managed support after launch",
          body:
            "Grable provides ongoing operational support for IBM Storage estates, including capacity monitoring, backup validation, performance tuning, and lifecycle planning as Maximo and enterprise data volumes evolve."
        }
      ]}
    />
  );
}
