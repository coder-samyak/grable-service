import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "IBM Maximo for Maintenance Service Providers",
  description:
    "Grable Services applies IBM Maximo and MAS 9 to work, labor, and contract management for maintenance service providers delivering across many sites and clients."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Maintenance Service Providers"
      title="IBM Maximo for Maintenance Service Providers"
      intro="Maintenance service providers and facilities outsourcers need standardized work-management processes, SLA tracking, and mobile field execution across many sites and clients. Specializing in IBM Maximo and MAS 9, Grable Services helps service providers run consistent PM programs and field work on Maximo."
      primaryCta="See how we support service providers"
      primaryHref="/contact/"
      secondaryCta="Explore Maximo mobile and field"
      secondaryHref="/services/maximo-mobile-field/"
      route="/industries/maintenance-service-providers/"
      template="standard"
      cards={[
        {
          title: "Standardized PM programs",
          body: "Maximo job plans and PM schedules let service providers apply consistent preventive maintenance practices across diverse sites and client portfolios.",
          href: "/contact/"
        },
        {
          title: "Work and labor management",
          body: "Maximo work management coordinates labor, scheduling, and work orders so multi-site service delivery stays organized and accountable.",
          href: "/contact/"
        },
        {
          title: "SLA and contract tracking",
          body: "Maximo tracks service levels and contract obligations, giving providers the work and response history they need to demonstrate performance to clients.",
          href: "/contact/"
        },
        {
          title: "Mobile field execution",
          body: "Maximo Mobile Work Manager puts work orders, asset data, and completion records in the hands of field technicians at the point of work.",
          href: "/services/maximo-mobile-field/"
        }
      ]}
      sections={[
        {
          title: "Why Maximo for service providers",
          body: "IBM Maximo is a proven EAM platform for managing work, labor, and assets at scale. Its work-management, mobile, and field-service capabilities fit the multi-site, multi-client model that maintenance service providers operate."
        },
        {
          title: "Built around delivery discipline",
          body: "Reliable service delivery depends on consistent PMs, job plans, and field execution. Maximo, paired with established maintenance-and-reliability practices such as SMRP and GSA facilities standards, supports that discipline across a provider's portfolio."
        },
        {
          title: "How Grable helps",
          body: "Grable Services brings IBM Maximo and MAS 9 platform depth and facilities-management experience. We help service providers stand up standardized work and mobile processes and operate Maximo across their sites."
        }
      ]}
    />
  );
}
