import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Reliability and Maintenance Program Design",
  description:
    "Reliability and maintenance program design—preventive maintenance, RCM strategies, SMRP-aligned best practices, and maintenance training from Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Reliability and Maintenance"
      title="Move from reactive to reliability-driven maintenance"
      intro="Grable helps organizations design reliability and maintenance programs that go beyond firefighting. We build preventive maintenance and reliability strategies aligned to SMRP best practices and recognized standards, and we train your teams to sustain them."
      primaryCta="Book a briefing"
      primaryHref="/contact/"
      secondaryCta="See asset performance management"
      secondaryHref="/solutions/asset-performance-management/"
      route="/solutions/reliability-maintenance/"
      template="service"
      cards={[
        {
          title: "Preventive maintenance",
          body: "Design preventive maintenance programs—PMs and job plans—so routine work is planned and scheduled rather than triggered only by failures.",
          href: "/solutions/enterprise-asset-management/"
        },
        {
          title: "Reliability strategies",
          body: "Develop reliability-centered maintenance and reliability strategies that focus effort on the assets and failure modes that matter most.",
          href: "/contact/"
        },
        {
          title: "SMRP-aligned practice",
          body: "Build programs aligned to SMRP best practices and standards such as GSA, giving your maintenance organization a recognized framework to work within.",
          href: "/solutions/assessments-benchmarking/"
        },
        {
          title: "Maintenance and reliability training",
          body: "Train maintenance and reliability staff so the program is sustained internally and not dependent on outside support to keep running.",
          href: "/solutions/asset-management-leadership-training/"
        }
      ]}
      sections={[
        {
          title: "A framework, not just a fix",
          body: "Reactive maintenance burns time and budget without improving asset performance. We help you put a reliability framework in place—strategies, preventive routines, and standards alignment—so maintenance becomes deliberate and measurable."
        },
        {
          title: "Aligned to recognized standards",
          body: "Our reliability work draws on SMRP best practices and standards such as GSA. Aligning to recognized frameworks gives your program credibility and a common language across maintenance, reliability, and leadership."
        },
        {
          title: "Bridging consulting and Maximo",
          body: "Program design only delivers value when it lives in your system of record. We connect reliability and maintenance strategy to IBM Maximo configuration so the program is reflected in real work management."
        }
      ]}
    />
  );
}
