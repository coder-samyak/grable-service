import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "Storage as a Service vs Traditional Storage",
  description:
    "Compare IBM Storage as a Service against traditional CAPEX storage across cost model, capacity, operations, refresh risk, and compliance fit."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Comparison"
      title="Storage as a Service vs. traditional CAPEX storage"
      intro="The classic way to buy enterprise storage is a large upfront capital purchase you own and operate. IBM Storage as a Service (STaaS) delivers the same on-premises FlashSystem hardware on a consumption model. This comparison weighs the two across cost, capacity, operations, and risk."
      primaryCta="Model your storage options"
      primaryHref="/contact/"
      secondaryCta="See storage services"
      secondaryHref="/services/storage-services/"
      cards={[
        {
          title: "Cost model: OPEX vs. CAPEX",
          body: "STaaS is consumption-based and treated as OPEX, with one rate for base and growth capacity. Traditional storage is a capital purchase you depreciate, which can be cheaper over the asset's life if your footprint is stable and capital is available."
        },
        {
          title: "Upfront commitment",
          body: "Traditional storage requires forecasting peak capacity years ahead and buying it all up front. STaaS commits you to a base capacity and lets you grow into pre-installed headroom without a new procurement."
        },
        {
          title: "Capacity and growth",
          body: "STaaS ships with roughly 50% additional capacity already installed, so growth is immediate. With traditional storage, exceeding your purchased capacity means a new acquisition cycle and the delay that comes with it."
        },
        {
          title: "Operations and maintenance",
          body: "Under STaaS, IBM monitors, maintains, and refreshes the hardware. With traditional storage your team owns firmware, maintenance contracts, capacity planning, and break-fix."
        },
        {
          title: "Refresh and obsolescence risk",
          body: "Owned storage ages and eventually needs a disruptive, capital-heavy refresh. STaaS folds lifecycle and refresh into the service, removing the end-of-life cliff."
        },
        {
          title: "Performance parity",
          body: "Both use enterprise FlashSystem hardware, so STaaS does not sacrifice performance. You still choose Extreme, Premium, or Balanced tiers to match IOPS and latency needs."
        }
      ]}
      sections={[
        {
          title: "When traditional storage still wins",
          body: "If your capacity needs are stable and well understood, you have capital to deploy, and you have a team that already runs storage well, an owned purchase can have a lower total cost over the hardware's life. You also avoid an ongoing service commitment. The trade is that you carry forecasting risk, refresh risk, and all operational work."
        },
        {
          title: "When STaaS is the better fit",
          body: "STaaS shines when growth is unpredictable, when finance prefers OPEX, when you want to avoid large upfront outlays, or when a lean team cannot absorb storage operations. The pre-installed headroom and bundled lifecycle remove the two biggest pain points of owned storage: running out of capacity and facing a disruptive refresh."
        },
        {
          title: "Compliance and data residency",
          body: "Both options keep data on-premises, so both satisfy data-residency requirements common in federal and regulated environments. The difference is operational: STaaS offloads day-to-day management to IBM while keeping the hardware physically under your control."
        },
        {
          title: "Next step",
          body: "Our storage services team can model both options against your capacity forecast and budget treatment, then implement and support whichever you choose. Explore the storage services page to see how we help."
        }
      ]}
    />
  );
}
