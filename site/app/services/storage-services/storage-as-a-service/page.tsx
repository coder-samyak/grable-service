import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Storage as a Service Delivery",
  description:
    "Consumption-based IBM Storage as a Service (STaaS) delivery: OPEX model, sizing, and SLA-managed FlashSystem capacity for Maximo and regulated workloads."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Storage Services"
      title="IBM Storage as a Service delivery and operations"
      intro="IBM Storage as a Service (STaaS) delivers IBM FlashSystem on a subscription-plus-consumption basis — you commit to a base capacity and scale variable capacity on demand, paying for what you use. Grable Services helps you size, onboard, and operate STaaS so Maximo and regulated workloads get predictable performance on a clean OPEX model."
      primaryCta="Talk through a STaaS model"
      primaryHref="/contact/"
      secondaryCta="See IBM Storage as a Service"
      secondaryHref="/products/ibm-storage-as-a-service/"
      cards={[
        {
          title: "Consumption / OPEX model",
          body:
            "STaaS converts storage from a capital purchase into an operating expense: a committed base capacity bills monthly while variable capacity is available on demand, with annual subscription terms typically from one to five years.",
          href: "/products/ibm-storage-as-a-service/"
        },
        {
          title: "SLA-managed capacity",
          body:
            "IBM manages the underlying FlashSystem hardware to performance, capacity, and support SLAs — including Storage Insights monitoring, remote updates, and around-the-clock hardware response. Grable helps you hold the service to those commitments."
        },
        {
          title: "Sizing for Maximo",
          body:
            "We map Maximo database, attachment, and reporting growth to the right STaaS performance tier and base commitment, so you avoid over-committing while keeping headroom for spikes and future modules.",
          href: "/services/storage-services/"
        },
        {
          title: "Where STaaS fits regulated work",
          body:
            "For agencies and regulated commercial teams, the OPEX model and managed SLAs simplify budgeting and audit while keeping data on dedicated IBM FlashSystem capacity rather than shared multi-tenant cloud."
        }
      ]}
      sections={[
        {
          title: "Performance tiers and commitments",
          body:
            "IBM STaaS offers multiple performance tiers with different IOPS-per-TB and minimum usable capacities. Grable helps select the tier and base capacity commitment that match Maximo response-time targets and regulated retention, then plans for variable-capacity growth without re-procurement."
        },
        {
          title: "Onboarding and migration",
          body:
            "We coordinate provisioning, network and replication setup, and data migration onto STaaS — validating throughput and integration with Maximo and surrounding systems before production cutover, and confirming monitoring and alerting are in place."
        },
        {
          title: "Resilience and managed support",
          body:
            "STaaS capacity becomes the foundation for backup, replication, and cyber-recovery. Pair it with IBM Storage Defender and a tested backup architecture, and let Grable provide ongoing SLA monitoring and capacity tuning. Grable's specific IBM Storage authorization and named STaaS customers."
        }
      ]}
    />
  );
}
