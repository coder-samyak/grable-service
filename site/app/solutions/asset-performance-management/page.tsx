import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Asset Performance Management Advisory for IBM Maximo",
  description:
    "Platform-enablement advisory for MAS asset performance management—Maximo Health, Monitor, and Predict—to support condition-based and predictive maintenance."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Asset Performance Management"
      title="Enabling APM on the Maximo Application Suite"
      intro="IBM Maximo Application Suite includes asset performance management capabilities—Maximo Health, Monitor, and Predict—for condition-based and predictive maintenance. Grable provides platform-enablement and advisory help so reliability teams can plan how these capabilities fit their assets, data, and maintenance practice."
      primaryCta="Book a briefing"
      primaryHref="/contact/"
      secondaryCta="See reliability and maintenance"
      secondaryHref="/solutions/reliability-maintenance/"
      route="/solutions/asset-performance-management/"
      template="service"
      cards={[
        {
          title: "Maximo Health",
          body: "Advisory on enabling Maximo Health to score and rank assets by condition, helping teams prioritize maintenance and capital decisions beyond age alone.",
          href: "/contact/"
        },
        {
          title: "Maximo Monitor",
          body: "Planning support for Maximo Monitor, which ingests IoT and sensor data and applies anomaly detection to surface issues across the asset fleet.",
          href: "/contact/"
        },
        {
          title: "Maximo Predict",
          body: "Guidance on Maximo Predict, which applies machine learning to asset and sensor data to support a shift from reactive toward predictive maintenance.",
          href: "/services/ai-on-maximo/"
        },
        {
          title: "Maximo platform expertise",
          body: "Grable's depth in IBM Maximo and EAM lets us advise on how APM capabilities sit alongside your existing asset and work management.",
          href: "/solutions/enterprise-asset-management/"
        }
      ]}
      sections={[
        {
          title: "From reactive toward predictive",
          body: "Many teams own assets but still maintain them reactively. We help you think through how MAS APM capabilities could support condition-based and predictive approaches, grounded in the data and processes you have today."
        },
        {
          title: "Data and readiness first",
          body: "Health, Monitor, and Predict depend on connected asset, meter, and sensor data. Our advisory work starts by assessing whether your inputs are ready, since the value of these capabilities follows the quality of the data behind them."
        },
        {
          title: "Advisory, grounded in Maximo depth",
          body: "We frame this engagement as platform-enablement advisory built on Grable's Maximo and EAM expertise. We help you plan and sequence APM adoption on the MAS platform rather than promising specific outcomes."
        }
      ]}
    />
  );
}
