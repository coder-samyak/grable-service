import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "Maximo on FedRAMP High Baseline",
  description:
    "IBM Maximo at the FedRAMP High baseline: high-impact data, NIST 800-53 Rev 5 control rigor, government cloud deployment, and who actually needs High."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Maximo on FedRAMP"
      title="IBM Maximo at the FedRAMP High Baseline"
      intro="FedRAMP High is the most stringent of the three FedRAMP baselines, reserved for systems where the loss of confidentiality, integrity, or availability would have a severe or catastrophic effect on agency operations. We help federal asset-management teams understand when Maximo workloads require High, and how that deployment pattern differs from Moderate."
      primaryCta="Talk to a federal Maximo team"
      primaryHref="/contact/"
      secondaryCta="Compare with FedRAMP Moderate"
      secondaryHref="/services/maximo-on-fedramp/moderate/"
      cards={[
        {
          title: "When you need High",
          body:
            "High suits agencies whose EAM data is high-impact under FIPS 199, where downtime or disclosure could damage life-safety, national-security, or mission-critical infrastructure operations.",
          href: "/services/maximo-on-fedramp/moderate/"
        },
        {
          title: "DoD Impact Level path",
          body:
            "A FedRAMP High authorization is the control foundation DoD builds on for Impact Levels 4, 5, and 6 via FedRAMP+ controls. Review the IL tiers if Maximo will hold CUI or DoD mission data.",
          href: "/services/maximo-on-fedramp/il-tiers/"
        },
        {
          title: "FedRAMP program overview",
          body:
            "New to FedRAMP authorization boundaries, agency ATOs, and continuous monitoring? Start with our FedRAMP primer before scoping a High Maximo deployment.",
          href: "/federal/fedramp/"
        },
        {
          title: "Scope your environment",
          body:
            "Tell us your data categorization, agency, and asset footprint and we will map the right baseline and deployment model for your Maximo program.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "What FedRAMP High covers",
          body:
            "FedRAMP High is built on the NIST SP 800-53 Revision 5 High control baseline — roughly 421 controls and control enhancements, the largest of the FedRAMP baselines (Low and Moderate apply progressively fewer). It is intended for high-impact information systems under FIPS 199, where a security breach could cause severe or catastrophic harm. For an asset-management platform like Maximo, that typically means work orders, asset records, and facility data tied to critical or sensitive missions rather than routine administrative use."
        },
        {
          title: "Control rigor at the High baseline",
          body:
            "Moving from Moderate to High tightens requirements across access control, audit and accountability, incident response, contingency planning, system and communications protection, and supply-chain risk management. Expect stronger encryption and key-management expectations, more rigorous boundary protection, expanded continuous monitoring, and tighter personnel and physical safeguards. These are platform and hosting obligations carried by the authorized cloud service offering — agencies still own configuration, user provisioning, and data governance inside their boundary."
        },
        {
          title: "The GovCloud deployment pattern",
          body:
            "FedRAMP High Maximo workloads are deployed in a U.S. government cloud region such as government cloud (U.S.), which provides physical and logical isolation, U.S.-person operational controls, and a hosting environment aligned to High-baseline expectations. IBM Maximo Application Suite as a Service for Government runs on government cloud; agencies consume it as managed SaaS inside an controlled boundary rather than standing up the underlying OpenShift infrastructure themselves. Confirm the specific IBM offering and its current authorization status against the FedRAMP Marketplace for your baseline."
        },
        {
          title: "Who needs High versus Moderate",
          body:
            "Most civilian agencies run EAM workloads comfortably at FedRAMP Moderate. High becomes appropriate when the asset data itself is high-impact — for example, systems supporting national security, critical national infrastructure, law enforcement, or life-safety operations — or when a DoD mission owner requires the High control foundation as a stepping stone to an Impact Level authorization. We help you avoid both under- and over-scoping the baseline."
        },
        {
          title: "How Grable Services supports High deployments",
          body:
            "Grable helps federal customers categorize data, select the correct baseline, plan migration into the appropriate cloud boundary, and operate Maximo against agency security requirements. Contact us for current scope, references, and supporting federal materials."
        }
      ]}
    />
  );
}
