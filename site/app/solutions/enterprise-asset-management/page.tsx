import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Enterprise Asset Management Consulting on IBM Maximo",
  description:
    "EAM consulting on IBM Maximo Manage—work, asset, and inventory management with ISO 55000-aligned asset lifecycle practice, delivered by Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Enterprise Asset Management"
      title="One accountable system of record for your assets"
      intro="Grable helps organizations replace fragmented asset processes with a single enterprise asset management practice on IBM Maximo Manage. We configure work, asset, and inventory management and align your asset lifecycle to the ISO 55000 standard so maintenance, reliability, and facilities teams work from one source of truth."
      primaryCta="Book a briefing"
      primaryHref="/contact/"
      secondaryCta="See reliability and maintenance"
      secondaryHref="/solutions/reliability-maintenance/"
      route="/solutions/enterprise-asset-management/"
      template="service"
      cards={[
        {
          title: "Asset management",
          body: "Configure the asset register, hierarchies, and classifications in Maximo so every asset has an accurate, structured record to maintain against.",
          href: "/contact/"
        },
        {
          title: "Work order management",
          body: "Stand up work management—work orders, PMs, and job plans—so maintenance is planned, scheduled, and tracked through a consistent process.",
          href: "/solutions/reliability-maintenance/"
        },
        {
          title: "Inventory and MRO",
          body: "Connect inventory and MRO data to work management so the right parts are available and stock levels reflect real maintenance demand.",
          href: "/solutions/mro-data-services/"
        },
        {
          title: "ISO 55000 alignment",
          body: "Align asset lifecycle practice to the ISO 55000 standard, giving asset managers a recognized framework for managing assets over their full life.",
          href: "/solutions/assessments-benchmarking/"
        }
      ]}
      sections={[
        {
          title: "Maximo Manage configuration",
          body: "We configure IBM Maximo Manage to fit how your organization runs—assets, work, and inventory—rather than forcing your processes into out-of-the-box defaults. The goal is a system of record your teams trust and actually use day to day."
        },
        {
          title: "One source of truth across teams",
          body: "Fragmented asset processes leave maintenance, reliability, and facilities working from different data. We consolidate that into one Maximo practice so decisions are made against consistent, current asset information."
        },
        {
          title: "A foundation for what comes next",
          body: "A clean EAM foundation makes downstream work—reliability programs, hosting, and MAS 9 upgrades—far more predictable. We build the asset, work, and inventory base so later initiatives have solid ground to stand on."
        }
      ]}
    />
  );
}
