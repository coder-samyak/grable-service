import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "IBM Maximo for Gaming & Hospitality Facilities",
  description: "IBM Maximo EAM for casinos and resorts: guest-facing facility, gaming floor, and back-of-house asset maintenance with mobile field operations."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Industries / Gaming & Hospitality"
      title="IBM Maximo for resort, casino, and back-of-house facility assets."
      intro="Grable Services configures IBM Maximo to keep gaming and hospitality properties running, managing guest-facing facilities, gaming floor equipment, and back-of-house infrastructure with mobile work execution that minimizes guest impact."
      primaryCta="Talk to a hospitality team"
      primaryHref="/contact/"
      secondaryCta="See Maximo Mobile field"
      secondaryHref="/services/maximo-mobile-field/"
      cards={[
        { title: "Guest-facing facilities", body: "Guest rooms, restaurants, pools, and public spaces maintained to brand standards with rapid response work management." },
        { title: "Gaming floor equipment", body: "Slot machines, tables, and floor systems tracked for maintenance, uptime, and regulatory readiness." },
        { title: "Back-of-house infrastructure", body: "HVAC, kitchens, laundry, and central plant assets that keep the property operating around the clock." },
        { title: "Mobile field operations", body: "Engineers and housekeeping receive and close work orders on mobile devices for fast, documented response.", href: "/services/maximo-mobile-field/" }
      ]}
      sections={[
        { title: "Resort and casino asset types", body: "These properties span guest rooms, food and beverage, gaming floors, central plant utilities, parking, and entertainment venues, each with maintenance regimes balancing guest experience against cost and uptime." },
        { title: "Preventive maintenance and uptime", body: "We implement preventive maintenance so high-traffic assets such as elevators, HVAC, and kitchen equipment stay reliable, reducing downtime that directly affects guest satisfaction and revenue." },
        { title: "Mobile and rapid response", body: "Maximo Mobile lets engineering, facilities, and housekeeping receive, document, and close work in the field, shortening response times for guest-impacting issues across a sprawling property." },
        { title: "Compliance and safety", body: "Gaming floors, food service, and life-safety systems carry inspection and regulatory obligations. We configure scheduled inspections and audit trails so the property stays compliant." }
      ]}
    />
  );
}
