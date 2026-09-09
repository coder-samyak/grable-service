import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "Backup, Recovery & Data Resilience",
  description:
    "RPO/RTO design, backup architecture, disaster recovery, cyber-recovery, and retention for IBM Storage — protecting Maximo uptime and regulated data."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Storage Services"
      title="Backup, recovery, and data resilience for IBM Storage"
      intro="A backup is only as good as the recovery it enables. Grable Services designs backup architecture, disaster recovery, and cyber-recovery around explicit RPO and RTO targets on IBM Storage — so Maximo and regulated data can be restored cleanly after failure, corruption, or a ransomware attack."
      primaryCta="Design your recovery strategy"
      primaryHref="/contact/"
      secondaryCta="Add Storage Defender cyber resilience"
      secondaryHref="/services/storage-services/storage-defender/"
      cards={[
        {
          title: "RPO / RTO design",
          body:
            "We quantify how much data you can afford to lose (RPO) and how quickly each system must return (RTO), then design backup frequency, replication, and recovery tooling to meet those targets cost-effectively.",
          href: "/services/storage-services/storage-defender/"
        },
        {
          title: "Backup architecture",
          body:
            "Grable designs backup topologies across IBM FlashSystem snapshots, IBM Storage Protect, and object storage targets — balancing performance, retention, and cost while keeping Maximo databases and attachments consistent."
        },
        {
          title: "Disaster recovery",
          body:
            "We plan replication, failover, and runbooks so a site or system loss has a tested path back to production, with recovery sequencing that respects Maximo's dependencies on database and integration services."
        },
        {
          title: "Cyber-recovery",
          body:
            "Beyond traditional DR, we design immutable, isolated recovery points — using IBM Storage Defender Safeguarded Copy — so a clean restore exists even when production backups are targeted by attackers.",
          href: "/services/storage-services/storage-defender/"
        }
      ]}
      sections={[
        {
          title: "Retention and compliance",
          body:
            "Regulated workloads carry retention and audit obligations. Grable maps backup and copy retention to your compliance requirements, ensuring data is kept for the required duration — and provably recoverable — without ballooning storage cost."
        },
        {
          title: "Protecting Maximo uptime",
          body:
            "Maximo drives work orders, assets, and inventory for operations that cannot simply pause. We tie backup and recovery design directly to Maximo availability targets, so a database failure or attack becomes a fast, predictable restore rather than an extended outage."
        },
        {
          title: "Validation and managed support",
          body:
            "Untested backups fail when you need them most. Grable validates recovery through restore testing and DR exercises, and provides ongoing support to monitor backup success, retention, and capacity. Grable's specific IBM Storage authorization and named recovery engagements."
        }
      ]}
    />
  );
}
