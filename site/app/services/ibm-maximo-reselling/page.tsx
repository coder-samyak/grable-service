import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "IBM Maximo Reselling & Licensing",
  description:
    "Evaluate IBM Maximo Application Suite licensing — AppPoints, SaaS vs BYOL vs managed, renewals, expansions, and migration license impact with one partner."
};
export default function Page() {
  return (
    <PageShell
      eyebrow="Licensing & Procurement"
      title="IBM Maximo Reselling and Licensing"
      intro="IBM Maximo Application Suite (MAS) licensing is metered in AppPoints — a shared pool you allocate across Manage, Monitor, Health, Predict, Visual Inspection, and more. The model is flexible but easy to mis-size. We help you evaluate licensing, choose a delivery model, and run procurement through one accountable partner."
      primaryCta="Get a licensing assessment"
      primaryHref="/contact/"
      secondaryCta="Plan your MAS 9 migration"
      secondaryHref="/services/mas9-migration/"
      cards={[
        {
          title: "MAS 9 migration impact",
          body:
            "Moving from legacy Maximo 7.6 to MAS changes how you are licensed. We model the AppPoint impact before you commit to a migration.",
          href: "/services/mas9-migration/"
        },
        {
          title: "Hosting and managed options",
          body:
            "Compare self-hosted BYOL, IBM SaaS, and fully managed hosting — and how each affects licensing, renewals, and operational responsibility.",
          href: "/services/maximo-hosting/"
        },
        {
          title: "Right-size your AppPoints",
          body:
            "Over-buying AppPoints wastes budget; under-buying blocks user onboarding. We size the pool to your real application mix and user roles.",
          href: "/contact/"
        },
        {
          title: "One procurement contact",
          body:
            "Stop juggling licensing, hosting, and migration across separate vendors. Bring procurement, renewals, and expansions under a single accountable partner.",
          href: "/contact/"
        }
      ]}
      sections={[
        {
          title: "Understanding MAS AppPoints",
          body:
            "Maximo Application Suite licenses are consumed as AppPoints — a flexible, shared entitlement pool drawn down by the applications and capabilities your users activate, rather than per-named-product licensing. Different MAS applications and user types consume AppPoints at different rates, so the same total can support very different deployments. Getting the pool size right depends on your application mix, concurrent versus authorized user counts, and which advanced capabilities (Monitor, Predict, Health, Visual Inspection) you intend to use."
        },
        {
          title: "SaaS, BYOL, and managed delivery",
          body:
            "MAS can be consumed as IBM SaaS (including the federally reviewed as-a-Service offering for government), as a bring-your-own-license (BYOL) deployment you run on your own OpenShift infrastructure, or through a managed-hosting partner who operates the platform on your behalf. Each model trades cost, control, and operational burden differently — SaaS minimizes infrastructure work, BYOL maximizes control, and managed hosting balances the two. The right choice shapes both your licensing terms and your total cost of ownership."
        },
        {
          title: "Renewals and true-ups",
          body:
            "AppPoint entitlements come up for renewal on a defined term, and usage drift between purchase and renewal is common. We help you review actual consumption ahead of renewal, avoid surprise true-ups, and negotiate terms that reflect your current and projected footprint rather than last year's estimate. Proactive renewal management is usually where the largest licensing savings appear."
        },
        {
          title: "Expansions and new capabilities",
          body:
            "Adding Monitor, Health, Predict, Visual Inspection, or new user populations draws additional AppPoints from the pool. We model expansion scenarios before you turn capabilities on, so growth is a planned budget line rather than an unexpected overage. This is especially important when rolling new MAS applications out across multiple sites or business units."
        },
        {
          title: "Migration license impact",
          body:
            "Migrating from legacy Maximo (for example 7.6.x) to MAS 9 changes your licensing basis from traditional Maximo metrics to AppPoints. The conversion is not always one-to-one, and the new application mix can shift your entitlement needs up or down. We pair the licensing evaluation with the technical migration plan so procurement and engineering stay aligned — see our MAS 9 migration service for the full path."
        },
        {
          title: "One accountable partner for procurement",
          body:
            "Grable Services helps federal and commercial customers evaluate MAS licensing, choose a delivery model, and manage renewals and expansions through a single point of contact. Contact us to confirm current procurement options for your organization."
        }
      ]}
    />
  );
}
