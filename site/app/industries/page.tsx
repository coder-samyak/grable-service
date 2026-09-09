import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "IBM Maximo expertise tailored by industry — public sector, life sciences, gaming & hospitality, manufacturing, utilities, and transportation.",
  path: "/industries/"
});

const cards = [
  { title: "Public Sector", body: "Government and public infrastructure environments with compliance-heavy Maximo requirements.", href: "/industries/federal/" },
  { title: "Life Sciences", body: "GxP-validated Maximo, 21 CFR Part 11 considerations, and regulated hosting patterns.", href: "/industries/life-sciences/" },
  { title: "Gaming & Hospitality", body: "Facility, resort, casino, and back-of-house asset operations.", href: "/industries/gaming-hospitality/" },
  { title: "Manufacturing", body: "Plant floor, distribution, finished-goods assets, and Maximo process modernization.", href: "/industries/manufacturing/" },
  { title: "Utilities", body: "Reliability, asset health, inspections, mobile field operations, and compliance-heavy maintenance.", href: "/industries/utilities/" },
  { title: "Transportation", body: "Linear assets, roads, transit, and infrastructure maintenance operations.", href: "/industries/transportation/" }
];

export default function IndustriesPage() {
  return (
    <PageShell
      eyebrow="Industries"
      title="Maximo expertise shaped around the operating environment."
      intro="Each industry page pairs a specific Maximo challenge with the Grable services and compliance constraints that matter to that buyer."
      cards={cards}
    />
  );
}
