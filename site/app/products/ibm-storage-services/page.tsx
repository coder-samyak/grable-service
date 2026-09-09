import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Storage Portfolio Services",
  description:
    "Grable Services helps federal and commercial teams plan, deploy, and operate the IBM Storage portfolio: FlashSystem, Storage as a Service, and Storage Defender."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="IBM Storage portfolio"
      title="IBM Storage portfolio services for resilient enterprise infrastructure"
      intro="The IBM Storage portfolio spans high-performance FlashSystem arrays, consumption-based Storage as a Service, and the Storage Defender cyber-resilience suite. Grable Services positions, designs, and supports these offerings as part of mission-critical IBM infrastructure for federal and commercial clients."
      primaryCta="Talk to a storage architect"
      primaryHref="/contact/"
      secondaryCta="Explore our storage services"
      secondaryHref="/services/storage-services/"
      cards={[
        {
          title: "IBM FlashSystem",
          body:
            "All-flash arrays engineered for low-latency, high-throughput enterprise workloads, with data reduction and built-in resilience features such as Safeguarded Copy for immutable point-in-time snapshots.",
          href: "/services/storage-services/"
        },
        {
          title: "IBM Storage as a Service (STaaS)",
          body:
            "A consumption-based model that delivers enterprise storage capacity with committed SLAs, so you pay for what you use rather than over-provisioning hardware up front.",
          href: "/products/ibm-storage-as-a-service/"
        },
        {
          title: "IBM Storage Defender",
          body:
            "A data-protection and cyber-resilience suite that adds AI-driven threat detection, Safeguarded Copy, backup, and recovery orchestration across the storage estate.",
          href: "/products/ibm-storage-defender/"
        },
        {
          title: "Grable delivery and support",
          body:
            "Grable Services plans architecture, executes deployments and migrations, and operates IBM Storage in production. Engagement scope and any IBM partner relationship are confirmed per contract.",
          href: "/services/storage-services/"
        }
      ]}
      sections={[
        {
          title: "How Grable positions the IBM Storage portfolio",
          body:
            "We map workload requirements, recovery objectives, and compliance constraints to the right mix of FlashSystem, STaaS, and Storage Defender. The goal is a storage foundation sized to actual demand, resilient against cyber threats, and operable by your team or ours after launch."
        },
        {
          title: "Built for federal and regulated environments",
          body:
            "Grable aligns storage design to federal security and availability expectations when those requirements apply. Authorization, accreditation, and resale details are confirmed in writing per engagement."
        },
        {
          title: "From portfolio to delivery",
          body:
            "Each IBM Storage product on this site links to its Grable delivery counterpart. Start with our storage services to see how planning, build, and operate phases turn the IBM portfolio into a supported environment."
        }
      ]}
    />
  );
}
