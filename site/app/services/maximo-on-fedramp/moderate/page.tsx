import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "Maximo on FedRAMP Moderate Baseline",
  description:
    "FedRAMP Moderate planning for IBM Maximo: the common federal baseline, its NIST 800-53 control set, typical agencies, and government cloud SaaS considerations."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Maximo on FedRAMP"
      title="IBM Maximo at the FedRAMP Moderate Baseline"
      intro="FedRAMP Moderate is the workhorse baseline of federal cloud: the level many civilian agencies use for systems that handle controlled but unclassified data. For Maximo programs, Moderate is often the starting point for compliance-aware deployment planning."
      primaryCta="Plan a Moderate deployment"
      primaryHref="/contact/"
      secondaryCta="When you need FedRAMP High"
      secondaryHref="/services/maximo-on-fedramp/high/"
      cards={[
        {
          title: "Step up to High",
          body:
            "If your asset data is high-impact under FIPS 199 — life-safety, national security, or critical infrastructure — review the FedRAMP High baseline and its stricter control set.",
          href: "/services/maximo-on-fedramp/high/"
        },
        {
          title: "DoD Impact Levels",
          body:
            "DoD mission owners layer Impact Levels on top of FedRAMP. Moderate maps to IL2 for public and non-critical data; CUI and mission data require IL4 and above.",
          href: "/services/maximo-on-fedramp/il-tiers/"
        },
        {
          title: "FedRAMP program overview",
          body:
            "Understand authorization boundaries, agency ATOs, and continuous monitoring before scoping your Maximo deployment at Moderate.",
          href: "/federal/fedramp/"
        },
        {
          title: "Scope your baseline",
          body:
            "Share your agency, data categorization, and asset footprint and we will confirm whether Moderate fits or whether you need to plan for High.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "Why Moderate is the most common baseline",
          body:
            "The large majority of federally reviewed cloud offerings — and most federal SaaS adoption — sit at the Moderate baseline. Moderate is designed for systems whose data is controlled unclassified information (CUI) or otherwise sensitive, where a breach would have a serious but not catastrophic impact. For enterprise asset management, that describes the typical agency use case: managing facilities, fleets, infrastructure, and maintenance operations without holding high-impact national-security data."
        },
        {
          title: "The Moderate control set",
          body:
            "FedRAMP Moderate implements the NIST SP 800-53 Revision 5 Moderate baseline — on the order of 320-plus controls and control enhancements, more than Low but fewer than High. It covers the full control families: access control, audit and accountability, security assessment, configuration management, contingency planning, identification and authentication, incident response, system and communications protection, and more. These are largely satisfied by the authorized cloud service offering, while the agency retains responsibility for in-boundary configuration, user access, and data handling under the shared-responsibility model."
        },
        {
          title: "Typical agencies and use cases",
          body:
            "Civilian departments and independent agencies — for example facilities and public-works organizations, transportation and infrastructure agencies, energy and utility operators, and federal real-property managers — commonly run Maximo at Moderate. The platform supports work-order management, preventive and predictive maintenance, asset lifecycle tracking, inventory, and reliability programs against CUI-level operational data inside the controlled boundary."
        },
        {
          title: "The government cloud SaaS path",
          body:
            "IBM Maximo government SaaS options should be confirmed against current official marketplace records before procurement. Agencies can consume Maximo inside a controlled boundary without standing up and maintaining the underlying OpenShift infrastructure. Confirm the current offering name, authorization status, and any migration deadlines against the FedRAMP Marketplace and IBM's announcements."
        },
        {
          title: "How Grable Services helps at Moderate",
          body:
            "We help federal teams categorize data, confirm whether Moderate is the right baseline, plan migration into the appropriate cloud boundary, and operate Maximo to agency standards. Contact us for current scope, references, and supporting materials."
        }
      ]}
    />
  );
}
