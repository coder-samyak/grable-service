import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Small Business Certification",
  description:
    "How federal buyers can evaluate small-business certification details and request current Grable Services credential information."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Small business certification"
      title="Small-business details for federal buyers."
      intro="Federal buyers can request Grable's current small-business, ownership, registration, and credential details through direct intake and verify them against the applicable official source."
      primaryCta="Contact our federal team"
      primaryHref="/contact/"
      secondaryCta="View capability statement"
      secondaryHref="/federal/capability-statement/"
      cards={[
        {
          title: "What certification means",
          body: "Federal small-business programs help agencies identify eligible firms for specific procurement paths, socioeconomic goals, and set-aside opportunities."
        },
        {
          title: "Set-aside eligibility",
          body: "Eligibility for a set-aside or sole-source path depends on the current program rules, procurement facts, and the firm's active status in the applicable system of record."
        },
        {
          title: "Verification source",
          body: "Certification is verified through the official federal small business certification system of record. Always confirm current status directly at the source."
        }
      ]}
      sections={[
        {
          title: "How certification works",
          body: "Certification programs review ownership, control, size, and any applicable socioeconomic criteria. Requirements and governing rules should be confirmed against current official guidance."
        },
        {
          title: "Why it matters for buyers",
          body: "Awarding to an eligible certified business can support agency socioeconomic goals. Contracting officers should confirm current status before relying on it for an award."
        },
        {
          title: "Grable Services status",
          body: "Grable provides current certification, registration, and effective-date details through direct request so buyers can verify the information independently."
        },
        {
          title: "Next step",
          body: "Request our capability statement and current credential block, and we will provide verifiable identifiers your contracting team can confirm independently."
        }
      ]}
    />
  );
}
