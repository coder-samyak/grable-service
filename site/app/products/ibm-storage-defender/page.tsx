import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Storage Defender Cyber Resilience",
  description:
    "IBM Storage Defender delivers cyber resilience with Safeguarded Copy, AI threat detection, backup, and recovery orchestration. Grable Services deploys and operates it."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="IBM Storage product"
      title="IBM Storage Defender: cyber resilience and rapid recovery for your data"
      intro="IBM Storage Defender is a data-protection and cyber-resilience suite that helps organizations protect, detect, and recover from cyberattacks across their storage estate. It combines AI-driven threat detection, Safeguarded Copy, backup, and recovery orchestration. Grable Services designs, deploys, and operates Storage Defender as part of a resilient IBM infrastructure."
      primaryCta="Plan a resilience review"
      primaryHref="/contact/"
      secondaryCta="See our Storage Defender delivery"
      secondaryHref="/services/storage-services/storage-defender/"
      cards={[
        {
          title: "Safeguarded Copy",
          body:
            "Automated, logically isolated point-in-time copies that cannot be modified or deleted during an attack, giving you a protected, immutable baseline to recover from."
        },
        {
          title: "AI-driven threat detection",
          body:
            "AI-powered sensors monitor for anomalies and ransomware behavior, helping surface threats early so isolation and recovery actions can begin quickly."
        },
        {
          title: "Backup and data protection",
          body:
            "Storage Defender unifies inventory, backup, and data protection across workloads, with consumption-based licensing that spans its protection capabilities."
        },
        {
          title: "Recovery orchestration",
          body:
            "Coordinated recovery workflows, including clean-room validation, help confirm that workloads can be safely restored to production after an incident."
        },
        {
          title: "Grable delivery counterpart",
          body:
            "Grable Services scopes, deploys, and operates Storage Defender alongside FlashSystem and STaaS. Specific IBM partner or resale arrangements are confirmed per contract.",
          href: "/services/storage-services/storage-defender/"
        }
      ]}
      sections={[
        {
          title: "Why cyber resilience belongs in the storage layer",
          body:
            "Perimeter and endpoint defenses can be bypassed, so a last line of defense at the data layer matters. Safeguarded Copy and isolated recovery points mean a ransomware event does not have to mean lost data or extended downtime."
        },
        {
          title: "How Grable operationalizes Storage Defender",
          body:
            "We define recovery objectives, configure Safeguarded Copy and detection policies, integrate with FlashSystem, and rehearse recovery so the capability is proven before it is needed. The linked delivery service covers the plan, build, and operate phases."
        },
        {
          title: "Part of the IBM Storage portfolio",
          body:
            "Storage Defender complements IBM FlashSystem and IBM Storage as a Service. Review the IBM Storage portfolio overview to see how detection, protection, and consumption capacity work together."
        }
      ]}
    />
  );
}
