import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "MRO and Master Data Services for IBM Maximo",
  description:
    "MRO and master data services—data collection, cleansing, cataloging, and mobile asset data capture—to reach migration-ready data quality with Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="MRO Data Services"
      title="Clean MRO and master data your systems can trust"
      intro="Poor master and MRO data quietly derails Maximo migrations and inventory accuracy. Grable provides MRO and master data services—collection, cleansing, cataloging, and mobile asset data capture—to get your data to a migration-ready standard."
      primaryCta="Request a data assessment"
      primaryHref="/contact/"
      secondaryCta="See mobile field workflows"
      secondaryHref="/services/maximo-mobile-field/"
      route="/solutions/mro-data-services/"
      template="service"
      cards={[
        {
          title: "Data collection and capture",
          body: "Collect asset and inventory data systematically, including mobile field capture, so records reflect what is actually installed and in stock.",
          href: "/services/maximo-mobile-field/"
        },
        {
          title: "Cleansing and cataloging",
          body: "Cleanse and catalog MRO and master data—deduplicating, standardizing, and structuring records into a consistent, usable catalog.",
          href: "/contact/"
        },
        {
          title: "Migration-ready quality",
          body: "Raise data to the quality level a Maximo migration needs, since records carried forward are only as reliable as the data behind them.",
          href: "/services/mas9-migration/readiness-assessment/"
        },
        {
          title: "AC/DC Mobile data capture",
          body: "Use Grable's AC/DC Mobile for offline asset data collection in the field, pairing data services with practical capture tools.",
          href: "/services/maximo-mobile-field/"
        }
      ]}
      sections={[
        {
          title: "Data quality decides migration success",
          body: "Master and MRO data quality is one of the biggest risks to a Maximo migration and to everyday inventory accuracy. We treat data as a first-class deliverable, getting it clean before it becomes a problem in the system you depend on."
        },
        {
          title: "Collection, cleansing, and cataloging",
          body: "Our services span the full data lifecycle—collecting records, cleansing and deduplicating them, and cataloging them into consistent structures—so inventory and asset data stay accurate and usable over time."
        },
        {
          title: "Paired with mobile capture",
          body: "Data work is most durable when capture happens where the assets are. We pair MRO data services with mobile asset data capture, including AC/DC Mobile, so field teams record accurate data the first time."
        }
      ]}
    />
  );
}
