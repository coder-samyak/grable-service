import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Asset Management Leadership Training",
  description:
    "Grable Services offers maintenance, reliability, and EAM training to build internal asset-management capability and leadership that sustains your Maximo investment."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Asset Management Leadership Training"
      title="Asset Management Leadership Training"
      intro="Teams often lack the in-house EAM and reliability competency needed to sustain their Maximo investment. Grable offers maintenance, reliability, and EAM training programs that build internal asset-management capability and leadership so your organization can carry the work forward."
      primaryCta="Request a training overview"
      primaryHref="/contact/"
      secondaryCta="See reliability and maintenance"
      secondaryHref="/solutions/reliability-maintenance/"
      route="/solutions/asset-management-leadership-training/"
      template="service"
      cards={[
        {
          title: "Maintenance and reliability training",
          body: "We help maintenance and reliability teams build the practical skills that turn good asset strategy into consistent day-to-day execution.",
          href: "/solutions/reliability-maintenance/"
        },
        {
          title: "EAM capability building",
          body: "We develop internal enterprise asset management competency so your organization depends less on outside help over time.",
          href: "/solutions/business-process-consulting/"
        },
        {
          title: "Leadership development",
          body: "We support asset-management leaders and training sponsors in building the leadership needed to sustain reliability and EAM practices.",
          href: "/contact/"
        },
        {
          title: "Standards-informed content",
          body: "Our training reflects recognized asset and reliability standards, including alignment to SMRP best practices.",
          href: "/solutions/assessments-benchmarking/"
        }
      ]}
      sections={[
        {
          title: "Sustain the investment with your own people",
          body: "A Maximo or EAM investment only holds its value if internal teams can operate and improve it. Grable's training builds that competency directly into your organization, reducing reliance on external support for routine practice."
        },
        {
          title: "From individual skills to leadership",
          body: "Lasting asset-management maturity needs more than technical know-how; it needs leaders who can set direction and hold the line on good practice. Our programs develop both the hands-on skills and the leadership that keeps them in place."
        },
        {
          title: "Grounded in industry best practice",
          body: "Grable's training draws on involvement with recognized industry best practices, including SMRP, and on our focus as a specialist in IBM Maximo and MAS 9. Specific curriculum and credentials are confirmed with you as part of scoping each engagement."
        }
      ]}
    />
  );
}
