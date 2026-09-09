import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Storage as a Service Explained",
  description:
    "A guide to IBM Storage as a Service: the consumption model, performance tiers, SLAs, and when on-premises STaaS is the right choice."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Guide"
      title="IBM Storage as a Service explained"
      intro="IBM Storage as a Service (STaaS) delivers enterprise FlashSystem and DS8900F storage on your premises, but priced and consumed like a cloud service. This guide explains the consumption model, the performance tiers, the SLAs, and when STaaS is the right fit."
      primaryCta="Discuss a storage plan"
      primaryHref="/contact/"
      secondaryCta="See the STaaS product"
      secondaryHref="/products/ibm-storage-as-a-service/"
      cards={[
        {
          title: "On-premises, cloud-like pricing",
          body: "IBM installs and manages FlashSystem or DS8900F hardware in your data center, but you pay a usage-based rate rather than a large upfront purchase. The hardware stays on-site for data residency and latency."
        },
        {
          title: "Consumption-based billing",
          body: "You commit to a base capacity and pay one rate for base and growth. There are no penalty fees for low data reduction and no hidden charges for using above your commitment, which keeps billing predictable and OPEX-friendly."
        },
        {
          title: "Pre-installed headroom",
          body: "STaaS ships with your base capacity plus roughly 50% additional capacity already installed, so you can absorb growth instantly without waiting on a hardware procurement cycle."
        },
        {
          title: "Performance tiers",
          body: "Choose Extreme (Tier 1), Premium (Tier 2), or Balanced (Tier 3) based on IOPS and latency needs. Extreme targets latency as low as ~50 microseconds and 4,500 minimum IOPS/TB; Balanced provides 750 minimum IOPS/TB for less demanding workloads."
        },
        {
          title: "Availability SLA",
          body: "IBM offers a managed service backed by an availability SLA, with an option for a guaranteed 100% availability commitment for workloads that cannot tolerate downtime."
        },
        {
          title: "IBM handles lifecycle",
          body: "Monitoring, maintenance, and hardware refresh are IBM's responsibility under the service, reducing the operational burden on your storage team."
        }
      ]}
      sections={[
        {
          title: "How the consumption model works",
          body: "You and IBM agree on a committed base capacity and a performance tier. IBM installs hardware sized above that commitment so growth capacity is already on the floor. You are metered on actual used capacity, billed at a single rate that covers both base and growth. Because the rate does not change when you exceed the commitment, budgeting stays simple even as data grows."
        },
        {
          title: "When STaaS is the right choice",
          body: "STaaS fits organizations that need on-premises performance and data residency but want to avoid large capital outlays and refresh-cycle risk. It is especially attractive when workloads grow unpredictably, when finance prefers OPEX treatment, or when a lean team cannot absorb day-to-day storage operations. It is less compelling when you have a stable, well-understood footprint and abundant capital, where a traditional CAPEX purchase may cost less over the asset's life."
        },
        {
          title: "STaaS for regulated and federal workloads",
          body: "Because the hardware lives in your facility, STaaS keeps data physically under your control while still offloading operations to IBM. That combination is valuable for federal and regulated environments where data residency and audited control of physical infrastructure are requirements."
        },
        {
          title: "Next step",
          body: "Our team helps you choose a tier, size your base commitment, and decide whether STaaS or a traditional purchase serves you better. Explore the STaaS product page to see how we deliver and support it."
        }
      ]}
    />
  );
}
