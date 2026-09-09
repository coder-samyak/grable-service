import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "MAS 9 Free Upgrade Program",
  description:
    "Learn how the Grable Services MAS 9 free upgrade program works: what it covers conceptually, how AppPoints and licensing factor in, and who the IBM Maximo Application Suite 9 offer is designed for."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="MAS 9 Migration"
      title="Move to IBM Maximo Application Suite 9 through our free upgrade program."
      intro="Our MAS 9 free upgrade program is built to lower the barrier to modernizing onto IBM Maximo Application Suite 9. The offer is scoped individually around your current environment, licensing position, readiness, and target deployment model."
      primaryCta="See if you qualify"
      primaryHref="/contact/"
      secondaryCta="Explore full upgrade services"
      secondaryHref="/services/mas9-migration/upgrade-services/"
      cards={[
        {
          title: "What the program covers",
          body: "The program can offset defined portions of the delivery effort for moving from Maximo 7.6.x or MAS 8 onto MAS 9, including environment planning, upgrade execution, and validation.",
          href: "/services/mas9-migration/upgrade-services/"
        },
        {
          title: "Who it's for",
          body: "The program is aimed at organizations running a supported Maximo 7.6.x or MAS 8 environment that are ready to modernize onto a Red Hat OpenShift and Java 17 MAS 9 platform."
        },
        {
          title: "How AppPoints factor in",
          body: "MAS 9 licenses applications through AppPoints rather than the named or concurrent user model of Maximo 7.6. We review entitlement needs before recommending a migration path."
        },
        {
          title: "What it costs you",
          body: "Any IBM subscription, infrastructure, data remediation, customization, integration, travel, or out-of-scope work is confirmed in writing before work begins."
        },
        {
          title: "Eligibility requirements",
          body: "Qualification depends on your current Maximo version, environment readiness, licensing position, timeline, and the amount of remediation needed before upgrade."
        },
        {
          title: "Program duration & availability",
          body: "The program may be subject to scheduling, capacity, and offer-window limits. Grable confirms availability during the scoping conversation."
        }
      ]}
      sections={[
        {
          title: "How the program works, step by step",
          body: "The engagement begins with readiness review, continues through upgrade planning and delivery, and concludes with validation, handover, and stabilization planning."
        },
        {
          title: "What's included and what isn't",
          body: "A clear inclusions-and-exclusions list keeps expectations aligned: included services, customer responsibilities, and any out-of-scope items that would be quoted separately."
        },
        {
          title: "Backed by full MAS 9 upgrade delivery",
          body: "Whether you proceed under the program or as a standard engagement, the same disciplined upgrade methodology applies — phased planning, OpenShift build, remediation, test cycles, UAT, cutover, rollback, and hypercare — so the result is a properly validated MAS 9 platform."
        },
        {
          title: "Confirm the details for your environment",
          body: "Because the offer terms, eligibility, and value carry specifics, the fastest way to get accurate answers is a short scoping conversation about your current Maximo environment and goals. Contact us to confirm what the program means for you."
        }
      ]}
    />
  );
}
