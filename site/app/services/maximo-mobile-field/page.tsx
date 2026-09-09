import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo Mobile & Field Operations Services",
  description:
    "IBM Maximo Mobile for field operations—offline work order execution, inspections, and asset data collection—with Grable's AC/DC Mobile for utilities."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Mobile & Field Operations"
      title="Mobile and field operations on IBM Maximo Mobile"
      intro="Work happens in the field, often without connectivity. IBM Maximo Mobile is the modern, offline-capable app that puts work orders, inspections, and asset data in the hands of technicians. We plan and deliver field deployments—and extend them with Grable's AC/DC Mobile for utility crews."
      primaryCta="Plan your mobile rollout"
      primaryHref="/contact/"
      secondaryCta="Explore AC/DC Mobile"
      secondaryHref="/products/acdc-mobile/"
      cards={[
        {
          title: "AC/DC Mobile",
          body: "Grable's AC/DC Mobile product extends Maximo mobile field execution for utility and electrical operations.",
          href: "/products/acdc-mobile/"
        },
        {
          title: "Utilities",
          body: "See how mobile field operations support utility asset and work management in the field.",
          href: "/industries/utilities/"
        }
      ]}
      sections={[
        {
          title: "Offline work order execution",
          body: "Maximo Mobile lets technicians receive, update, and complete work orders without a connection, syncing automatically when they are back in coverage—so crews stay productive anywhere in the field."
        },
        {
          title: "Inspections and condition data",
          body: "Guided inspections capture meter readings, asset conditions, and findings at the point of work, feeding clean data back into Maximo for reliability and compliance decisions."
        },
        {
          title: "Asset data collection",
          body: "Field teams collect and correct asset, location, and nameplate data—including photos—keeping the asset register accurate as conditions change on the ground."
        },
        {
          title: "Deployment and adoption",
          body: "We plan device strategy, configuration, and offline behavior, then support technician adoption so the move to Maximo Mobile sticks and delivers measurable field productivity."
        }
      ]}
    />
  );
}
