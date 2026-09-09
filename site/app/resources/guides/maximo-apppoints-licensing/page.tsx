import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "How Maximo AppPoints Licensing Works",
  description:
    "A practical guide to IBM Maximo Application Suite AppPoints licensing: user tiers, app consumption, sizing, and SaaS vs. BYOL impact."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Guide"
      title="How IBM Maximo Application Suite AppPoints licensing works"
      intro="IBM Maximo Application Suite (MAS) replaced per-seat and per-application licensing with a single shared currency called AppPoints. This guide explains how AppPoints are consumed by user tiers and applications, how to size them, and how SaaS versus BYOL deployment changes the picture."
      primaryCta="Get a licensing review"
      primaryHref="/contact/"
      secondaryCta="See Maximo reselling"
      secondaryHref="/services/ibm-maximo-reselling/"
      cards={[
        {
          title: "AppPoints are a shared pool",
          body: "You purchase a total entitlement of AppPoints. Every active user and every deployed application or add-on draws from that single pool, so you can shift capacity across products without buying separate licenses."
        },
        {
          title: "User tiers: Premium, Base, Limited",
          body: "Users are classified by access level. A Premium user consumes 15 AppPoints, a Limited user consumes 5, and a Base user falls between the two. Assign the lowest tier that still meets each person's job needs."
        },
        {
          title: "Reserved vs. concurrent consumption",
          body: "Authorized (reserved) users hold their AppPoints permanently, even when logged out. Concurrent users only consume points while active. Mixing the two lets you cover both daily power users and occasional users efficiently."
        },
        {
          title: "Applications also cost AppPoints",
          body: "Deploying applications, add-ons, and industry solutions consumes AppPoints from the same pool. Enabling Manage, Monitor, Health, or Predict each has a cost, so deployment scope is a licensing decision, not just a technical one."
        },
        {
          title: "Enforcement is configurable",
          body: "MAS can enforce the purchased AppPoints limit and block additional logins once the pool is exhausted. Understanding this prevents lockouts at month-end or during seasonal peaks."
        },
        {
          title: "Sizing starts with your user mix",
          body: "Estimate how many Premium, Base, and Limited users you truly need, decide which will be reserved vs. concurrent, then add the AppPoint cost of the applications you plan to enable. The total drives your entitlement."
        }
      ]}
      sections={[
        {
          title: "Worked sizing example",
          body: "Suppose you have 20 reserved Premium users (20 x 15 = 300 AppPoints) and 100 concurrent Limited users where 40 are active at peak (40 x 5 = 200 AppPoints), plus application overhead. Your peak demand is roughly 500 AppPoints plus app cost. Right-tiering even a handful of Premium users down to Base materially lowers the total."
        },
        {
          title: "How SaaS vs. BYOL changes the math",
          body: "On IBM-managed SaaS, AppPoints are bundled into a subscription and IBM runs the platform, so you trade some control for predictable OPEX. With Bring Your Own License (BYOL), you own the AppPoints entitlement and deploy on infrastructure you or a partner manage, which can lower long-run cost but shifts platform operations to you. The same AppPoint math applies in both models; what differs is who operates the suite and how the cost is structured."
        },
        {
          title: "Avoiding over-purchase and lockouts",
          body: "The most common mistakes are over-assigning Premium tiers and ignoring reserved-user accumulation. Audit tier assignments regularly, prefer concurrent licensing for occasional users, and monitor consumption against your limit so enforcement never surprises you mid-period."
        },
        {
          title: "Next step",
          body: "If you are budgeting a new MAS deployment or true-ing up an existing one, our Maximo reselling team can model your AppPoint demand and recommend the right entitlement and deployment model before you commit."
        }
      ]}
    />
  );
}
