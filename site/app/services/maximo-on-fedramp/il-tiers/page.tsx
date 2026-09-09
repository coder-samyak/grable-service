import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";
export const metadata: Metadata = {
  title: "DoD Impact Levels for Maximo: IL2 to IL6",
  description:
    "DoD Impact Levels IL2, IL4, IL5, and IL6 explained for IBM Maximo: data sensitivity per tier, GovCloud vs DoD environments, and CUI considerations."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Maximo on FedRAMP"
      title="DoD Impact Levels for Maximo: IL2 Through IL6"
      intro="The Department of Defense layers Impact Levels (IL2, IL4, IL5, IL6) on top of FedRAMP baselines through the DoD Cloud Computing Security Requirements Guide (CC SRG). Each tier reflects increasing data sensitivity and additional FedRAMP+ controls. We help DoD mission owners and contractors match Maximo asset workloads to the right Impact Level."
      primaryCta="Talk to a DoD Maximo team"
      primaryHref="/contact/"
      secondaryCta="DoD industry solutions"
      secondaryHref="/industries/federal/dod/"
      cards={[
        {
          title: "DoD asset management",
          body:
            "See how Maximo supports DoD installations, fleets, and mission systems, and how Impact Levels shape the deployment.",
          href: "/industries/federal/dod/"
        },
        {
          title: "FedRAMP foundation",
          body:
            "DoD Impact Levels build on FedRAMP Moderate and High baselines. Review the FedRAMP program to understand the control foundation.",
          href: "/federal/fedramp/"
        },
        {
          title: "Compare FedRAMP baselines",
          body:
            "IL2 aligns with FedRAMP Moderate; IL4 and above build on FedRAMP High. Compare the civilian baselines that underpin each tier.",
          href: "/services/maximo-on-fedramp/high/"
        },
        {
          title: "Scope your Impact Level",
          body:
            "Tell us the data your Maximo program will hold — CUI, mission data, or classified — and we will map it to the correct Impact Level.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "IL2 — public and non-critical mission data",
          body:
            "Impact Level 2 covers public information and non-critical mission information that is unclassified. IL2 uses the FedRAMP Moderate baseline as its control foundation with limited DoD-specific additions. For Maximo, IL2 fits administrative or low-sensitivity asset workloads that do not involve controlled unclassified information. It is the entry tier for DoD cloud use and is commonly satisfied by commercial GovCloud regions."
        },
        {
          title: "IL4 — controlled unclassified information (CUI)",
          body:
            "Impact Level 4 covers controlled unclassified information, including export-controlled data, privacy information, and other CUI, plus non-critical mission data. IL4 builds on FedRAMP Moderate or High supplemented with DoD FedRAMP+ controls and is hosted in environments that meet DoD CUI requirements. Most DoD Maximo programs holding maintenance, logistics, or facility data tied to CUI will target IL4 as their baseline."
        },
        {
          title: "IL5 — higher-sensitivity CUI and NSS",
          body:
            "Impact Level 5 covers higher-sensitivity CUI, mission-critical information, and unclassified National Security Systems (NSS) data. IL5 requires the FedRAMP High control baseline supplemented with additional FedRAMP+ controls and stronger separation requirements — including dedicated infrastructure and tighter personnel and tenant isolation. Maximo workloads supporting weapons-system sustainment, critical logistics, or NSS-adjacent operations typically require IL5."
        },
        {
          title: "IL6 — classified up to SECRET",
          body:
            "Impact Level 6 covers classified information up to and including SECRET. IL6 builds on the FedRAMP High provisional authorization plus DoD FedRAMP+ controls and additional SRG requirements, and is hosted only in environments connected to classified DoD networks (such as SIPRNet) rather than commercial GovCloud. An IL6 Maximo deployment is a specialized, accredited environment distinct from any commercial SaaS offering. Confirm any specific IL6 Maximo availability and accreditation directly with IBM and the sponsoring DoD authorizing official."
        },
        {
          title: "GovCloud versus DoD environments",
          body:
            "IL2 and IL4 workloads commonly run in federally reviewed commercial government regions such as government cloud (U.S.). IL5 raises isolation and dedicated-infrastructure expectations, and IL6 requires accredited environments connected to classified networks. IBM Maximo government SaaS status should be confirmed against current official marketplace records. Confirm which Impact Levels a given Maximo offering supports against the FedRAMP Marketplace and DoD authorization records before scoping."
        },
        {
          title: "CUI and classified considerations",
          body:
            "Choosing an Impact Level starts with categorizing the data Maximo will actually hold. CUI markings, such as export-controlled or privacy data, push a program to IL4 or IL5; classified data forces IL6 and an accredited classified environment. Over-scoping wastes budget and slows authorization, while under-scoping creates compliance risk. Contact us to discuss your mission, data, and deployment requirements."
        }
      ]}
    />
  );
}
