import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Business Value Analysis for Maximo & EAM",
  description:
    "Grable Services provides business-value advisory for Maximo and EAM investments, helping sponsors build the business case with capital planning, TCO, and value realization."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Business Value Analysis"
      title="Business Value Analysis for Maximo and EAM"
      intro="Sponsors often have to justify Maximo and upgrade spend to finance leadership. Grable provides business-value advisory for Maximo and EAM investments, helping you frame the business case through capital planning, total cost of ownership, and value realization aligned to your asset strategy."
      primaryCta="Book a briefing"
      primaryHref="/contact/"
      secondaryCta="Start with an assessment"
      secondaryHref="/solutions/assessments-benchmarking/"
      route="/solutions/business-value-analysis/"
      template="service"
      cards={[
        {
          title: "Business-case advisory",
          body: "We help EAM sponsors and finance and IT decision-makers structure a clear, defensible business case for Maximo and EAM investment.",
          href: "/contact/"
        },
        {
          title: "Capital planning support",
          body: "We support capital planning decision-making so asset and maintenance investments are weighed and sequenced against business priorities.",
          href: "/solutions/assessments-benchmarking/"
        },
        {
          title: "Total cost of ownership",
          body: "We help you account for the full cost picture of a Maximo or upgrade investment, beyond initial licensing and implementation, to set realistic expectations.",
          href: "/services/ibm-maximo-reselling/"
        },
        {
          title: "Value realization framing",
          body: "We connect the investment to the outcomes your asset strategy is meant to deliver, so value can be tracked rather than assumed.",
          href: "/services/mas9-migration/readiness-assessment/"
        }
      ]}
      sections={[
        {
          title: "An advisory approach, not a packaged number",
          body: "Business value depends on your environment, assets, and goals. Grable approaches business-value analysis as an advisory engagement that builds the case around your specifics rather than applying a generic figure. We do not present third-party industry results as Grable outcomes."
        },
        {
          title: "Built for the people who approve the spend",
          body: "Finance and IT leadership need a business case they can stand behind. We help sponsors articulate cost, value, and risk in terms decision-makers expect, drawing on Grable's capital-planning and business-intelligence experience."
        },
        {
          title: "Pairs with assessments and licensing review",
          body: "Business-value analysis is strongest alongside a maturity assessment and a licensing and reselling review. Together they ground the case in current state, future state, and the real cost of getting there with IBM Maximo and MAS 9."
        }
      ]}
    />
  );
}
