import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Storage Defender Services",
  description:
    "IBM Storage Defender cyber resilience: Safeguarded Copy immutable snapshots, backup and recovery, and FlashSystem threat detection against ransomware."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Storage Services"
      title="IBM Storage Defender for cyber resilience and ransomware recovery"
      intro="IBM Storage Defender unifies data protection, threat detection, immutable Safeguarded Copy, and recovery orchestration under consumption-based licensing. Grable Services designs and operates Storage Defender so Maximo and regulated data can survive — and recover quickly from — ransomware and other cyber attacks."
      primaryCta="Plan your cyber resilience"
      primaryHref="/contact/"
      secondaryCta="See IBM Storage Defender"
      secondaryHref="/products/ibm-storage-defender/"
      cards={[
        {
          title: "Immutable Safeguarded Copy",
          body:
            "Storage Defender automates Safeguarded Copies that are logically isolated from production and cannot be modified or deleted during an attack, giving you a known-good point to recover from.",
          href: "/products/ibm-storage-defender/"
        },
        {
          title: "Threat detection",
          body:
            "Sensors across primary and secondary workloads — including real-time detection built into IBM FlashSystem — analyze array snapshots and backup metadata to flag ransomware and anomalies, with block-level detection in as little as 60 seconds.",
          href: "/products/ibm-storage-defender/"
        },
        {
          title: "Backup & recovery",
          body:
            "Storage Defender brings together data protection (including IBM Storage Protect) and recovery orchestration so backups are consistent, retained correctly, and ready to restore against your RPO and RTO targets.",
          href: "/services/storage-services/backup-recovery/"
        },
        {
          title: "Recovery orchestration",
          body:
            "When a threat is detected, Storage Defender can proactively create a Safeguarded Copy for offline investigation, compressing the time between alert, containment, and recovery so Maximo downtime stays minimal."
        }
      ]}
      sections={[
        {
          title: "Why it matters for Maximo",
          body:
            "Maximo coordinates work orders, assets, and inventory for mission-critical operations; losing or corrupting that data halts the business. Storage Defender's immutable copies and rapid detection mean a ransomware event becomes a recoverable incident rather than an outage with no clean restore point."
        },
        {
          title: "Consumption-based licensing",
          body:
            "Storage Defender uses a consumption model with resource units that can be applied across its capabilities — inventory, threat detection, data protection, Safeguarded Copy, and recovery — so you scale protection as data grows without re-licensing each component separately."
        },
        {
          title: "How Grable delivers it",
          body:
            "Grable designs the protection policies, isolation, and recovery runbooks, integrates Storage Defender with your FlashSystem and backup architecture, and validates recovery through testing. Grable's specific IBM Storage Defender authorization and named deployments."
        }
      ]}
    />
  );
}
