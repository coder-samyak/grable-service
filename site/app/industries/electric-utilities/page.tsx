import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Maximo for Electric Utilities",
  description:
    "Grable Services applies IBM Maximo and MAS 9 to grid and generation asset management for electric utilities—linear assets, outage support, and regulatory compliance."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Electric Utilities"
      title="IBM Maximo for Electric Utility Asset Management"
      intro="Electric utilities have to keep aging transmission, distribution, and generation assets reliable and compliant while controlling maintenance cost. Specializing in IBM Maximo and MAS 9, Grable Services helps utilities apply Maximo to grid and generation assets, condition-based maintenance, and regulatory reporting."
      primaryCta="Talk to a utilities asset expert"
      primaryHref="/contact/"
      secondaryCta="See the Utilities overview"
      secondaryHref="/industries/utilities/"
      route="/industries/electric-utilities/"
      template="standard"
      backgroundVideo="/journey/Electecial.mp4"
      processBackgroundVideo="/journey/Electrecal2.mp4"
      splitBackgroundVideo="/journey/Electrical3.mp4"
      stepsBackgroundVideo="/journey/Electrecal_4.mp4"
      cards={[
        {
          title: "Grid and linear assets",
          body: "Maximo Linear represents transmission and distribution networks as continuous linear assets, so work and condition data follow the actual span of the line rather than discrete point records.",
          href: "/industries/utilities/"
        },
        {
          title: "Condition-based maintenance",
          body: "Maximo Health and Predict score asset condition from meter and sensor data, helping reliability teams prioritize maintenance and capital decisions by risk instead of age alone.",
          href: "/services/ai-on-maximo/"
        },
        {
          title: "Outage and storm support",
          body: "Work and crew management in Maximo helps coordinate planned and unplanned outage response across the service territory.",
          href: "/contact/"
        },
        {
          title: "Regulatory compliance",
          body: "Maximo records and reporting support the documentation expected under NERC, FERC, and state PUC oversight, keeping inspection and maintenance history audit-ready.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "Why Maximo for electric utilities",
          body: "IBM Maximo is a widely adopted EAM platform across asset-intensive utilities. Its linear asset, monitoring, and predictive capabilities map directly to the way transmission, distribution, and generation assets are operated and maintained."
        },
        {
          title: "Regulatory and reliability drivers",
          body: "Utilities operate under reliability and compliance pressure from NERC and FERC and from state public utility commissions. Maximo gives utilities a single system of record for inspections, maintenance, and the evidence those programs require."
        },
        {
          title: "How Grable helps",
          body: "Grable Services brings IBM Maximo and MAS 9 platform depth. We help electric utilities assess their asset data, plan the Maximo footprint, and operate the platform so grid and generation programs run reliably."
        }
      ]}
    />
  );
}
