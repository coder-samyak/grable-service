import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "AI on Maximo: Assist, Predict, Health, Monitor",
  description:
    "Rollout planning for AI in IBM Maximo Application Suite—Maximo Assist, Predict, Health, Monitor, and Visual Inspection—delivered by Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="AI on Maximo"
      title="Bringing AI to IBM Maximo Application Suite"
      intro="IBM Maximo Application Suite includes a family of AI-driven applications for maintenance and reliability. We help you plan, sequence, and roll out Maximo Assist, Predict, Health, Monitor, and Visual Inspection so each capability lands with the data, integrations, and adoption it needs."
      primaryCta="Plan your AI on Maximo rollout"
      primaryHref="/contact/"
      secondaryCta="See Maximo mobile & field"
      secondaryHref="/services/maximo-mobile-field/"
      cards={[
        {
          title: "Maximo Assist",
          body: "AI-assisted technician guidance and knowledge surfacing that helps maintenance teams diagnose and resolve issues faster.",
          href: "/contact/"
        },
        {
          title: "Maximo Predict",
          body: "Predictive maintenance that applies machine learning to asset and sensor data to anticipate failures before they happen.",
          href: "/contact/"
        },
        {
          title: "Maximo Health",
          body: "Asset health insight that scores and ranks assets so teams can prioritize maintenance and capital decisions on condition, not just age.",
          href: "/contact/"
        },
        {
          title: "Maximo Monitor",
          body: "Remote condition monitoring that ingests IoT and sensor data, applies anomaly detection, and surfaces issues across the fleet.",
          href: "/contact/"
        },
        {
          title: "Maximo Visual Inspection",
          body: "Computer-vision models that automate visual inspection—detecting defects and conditions from images without deep data-science effort.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "Readiness and data foundation",
          body: "AI on Maximo is only as good as the data feeding it. We assess asset records, meter and sensor data, and integration points so Predict, Health, and Monitor have clean, connected inputs to work from."
        },
        {
          title: "Rollout sequencing",
          body: "We sequence the rollout—often starting with Health and Monitor to establish visibility, then layering Predict and Assist—so each application builds on the data and adoption of the last."
        },
        {
          title: "Adoption and operations",
          body: "We help maintenance and reliability teams adopt AI recommendations into real work-management practice, and support the models and integrations once they are live in production."
        }
      ]}
    />
  );
}
