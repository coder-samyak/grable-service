import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Maximo for Oil and Gas",
  description:
    "Grable Services applies IBM Maximo and MAS 9 to oil and gas asset management—production assets, pipeline integrity, and HSE-driven maintenance across upstream, midstream, and downstream."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Oil and Gas"
      title="IBM Maximo for Oil and Gas Asset Management"
      intro="Oil and gas operators have to manage integrity and HSE compliance on high-consequence assets while cutting unplanned downtime. Specializing in IBM Maximo and MAS 9, Grable Services helps operators apply Maximo to production assets, pipeline integrity, and maintenance across upstream, midstream, and downstream operations."
      primaryCta="Talk to an oil and gas asset expert"
      primaryHref="/contact/"
      secondaryCta="See the Manufacturing industry page"
      secondaryHref="/industries/manufacturing/"
      route="/industries/oil-gas/"
      template="standard"
      cards={[
        {
          title: "Production asset management",
          body: "Maximo provides a single system of record for production assets across facilities, standardizing work, PMs, and asset history.",
          href: "/contact/"
        },
        {
          title: "Pipeline integrity",
          body: "Maximo Linear models pipelines as continuous linear assets, so inspection, condition, and integrity work follow the actual run of the line.",
          href: "/contact/"
        },
        {
          title: "HSE-driven maintenance",
          body: "Maximo ties maintenance to health, safety, and environmental requirements, keeping inspection and compliance records tied to the assets they cover.",
          href: "/contact/"
        },
        {
          title: "Predictive maintenance",
          body: "Maximo Health and Predict apply asset and sensor data to anticipate failures on high-consequence equipment before they cause unplanned downtime.",
          href: "/services/ai-on-maximo/"
        }
      ]}
      sections={[
        {
          title: "Why Maximo for oil and gas",
          body: "IBM Maximo is a widely adopted EAM platform for high-consequence, asset-intensive operations. Its linear, monitoring, and predictive capabilities map to production assets, pipeline integrity, and HSE-driven maintenance."
        },
        {
          title: "Regulatory and integrity drivers",
          body: "Operators work under integrity and safety requirements framed by bodies such as PHMSA and standards like those from API. Maximo gives them a single system of record for the inspection, maintenance, and integrity evidence those programs demand."
        },
        {
          title: "How Grable helps",
          body: "Grable Services brings IBM Maximo and MAS 9 platform depth. We help oil and gas operators assess asset and integrity data, plan the Maximo footprint, and operate the platform across the asset lifecycle."
        }
      ]}
    />
  );
}
