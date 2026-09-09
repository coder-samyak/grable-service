import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Integrated Facilities Management on IBM Maximo",
  description:
    "Integrated facilities management on IBM Maximo—one version of the truth across campuses, benchmarked to BOMA, IFMA, and GSA, from Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Facilities Management"
      title="Integrated facilities management on IBM Maximo"
      intro="Multi-site facilities often run on disconnected systems with no unified view of assets or space. Grable delivers integrated facilities management on IBM Maximo—one version of the truth across campuses, benchmarked to BOMA, IFMA, and GSA standards, across the full facility asset lifecycle."
      primaryCta="Book a briefing"
      primaryHref="/contact/"
      secondaryCta="See enterprise asset management"
      secondaryHref="/solutions/enterprise-asset-management/"
      route="/solutions/facilities-management/"
      template="service"
      cards={[
        {
          title: "One version of the truth",
          body: "Unify facility assets, work, and space across campuses on Maximo so operators stop reconciling disconnected systems and work from shared data.",
          href: "/solutions/enterprise-asset-management/"
        },
        {
          title: "Facility asset lifecycle",
          body: "Manage facility assets across their full lifecycle—from acquisition through maintenance and replacement—within a single facilities practice.",
          href: "/solutions/reliability-maintenance/"
        },
        {
          title: "BOMA, IFMA, and GSA benchmarks",
          body: "Align facilities practice to BOMA, IFMA, and GSA standards, giving portfolio and campus operators recognized benchmarks to manage against.",
          href: "/solutions/assessments-benchmarking/"
        },
        {
          title: "Deep facilities experience",
          body: "Grable's team brings extensive facilities and EAM experience to multi-site, facilities-intensive operations and the realities of running them.",
          href: "/industries/"
        }
      ]}
      sections={[
        {
          title: "Unify multi-site operations",
          body: "Facilities portfolios that span campuses tend to accumulate disconnected tools and inconsistent data. We bring facility assets and work onto one Maximo practice so operators have a unified, current view across sites."
        },
        {
          title: "Benchmarked to industry standards",
          body: "We align integrated facilities management to BOMA, IFMA, and GSA standards. Working to recognized benchmarks gives facilities leaders a credible basis for measuring performance and prioritizing investment."
        },
        {
          title: "Built on facilities depth",
          body: "Facilities management is a core area of Grable's experience. We anchor delivery in real facilities and EAM expertise so the Maximo practice we build reflects how multi-site operations actually run."
        }
      ]}
    />
  );
}
