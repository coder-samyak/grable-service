import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Storage as a Service (STaaS)",
  description:
    "IBM Storage as a Service delivers enterprise capacity on a consumption model with committed SLAs. Grable Services plans, deploys, and operates STaaS for your workloads."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="IBM Storage product"
      title="IBM Storage as a Service: enterprise capacity on a consumption model"
      intro="IBM Storage as a Service (STaaS) delivers enterprise-grade storage capacity as a managed, consumption-based offering. Instead of buying and over-provisioning arrays, you commit to a base capacity and SLA tier and scale on demand. Grable Services designs the deployment and operates it alongside your broader IBM infrastructure."
      primaryCta="Scope a STaaS engagement"
      primaryHref="/contact/"
      secondaryCta="See our Storage as a Service delivery"
      secondaryHref="/services/storage-services/storage-as-a-service/"
      cards={[
        {
          title: "Consumption-based capacity",
          body:
            "Pay for the capacity you actually use above a committed base, rather than financing a large up-front hardware purchase that sits idle until you grow into it."
        },
        {
          title: "Committed SLAs",
          body:
            "IBM STaaS is delivered against defined service-level agreements covering capacity availability and performance, shifting day-to-day infrastructure assurance toward a managed model."
        },
        {
          title: "Elastic scaling",
          body:
            "Grow committed and on-demand capacity as workloads expand, without the procurement cycle and refresh planning that traditional owned arrays require."
        },
        {
          title: "Grable delivery counterpart",
          body:
            "Grable Services handles requirements, sizing, deployment, and ongoing operation of your STaaS environment. Specific IBM partner or resale arrangements are confirmed per contract.",
          href: "/services/storage-services/storage-as-a-service/"
        }
      ]}
      sections={[
        {
          title: "Why consumption storage fits regulated workloads",
          body:
            "Federal and commercial teams often face unpredictable growth and strict availability targets. STaaS converts a capital-heavy refresh cycle into a predictable, SLA-backed operating model, while keeping capacity headroom for spikes."
        },
        {
          title: "Where Grable adds value",
          body:
            "We translate your performance, capacity, and compliance requirements into the right STaaS tier, integrate it with your storage and compute, and operate it after go-live. See the linked delivery service for the plan, build, and operate phases."
        },
        {
          title: "Part of the wider IBM Storage portfolio",
          body:
            "STaaS pairs naturally with IBM FlashSystem hardware and IBM Storage Defender for cyber resilience. Review the IBM Storage portfolio overview to see how the pieces fit together."
        }
      ]}
    />
  );
}
