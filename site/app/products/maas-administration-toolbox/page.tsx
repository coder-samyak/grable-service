import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "MaaS Administration Toolbox",
  description:
    "The Grable MaaS Administration Toolbox is an internal accelerator for administering managed Maximo Application Suite environments."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Grable accelerator"
      title="MaaS Administration Toolbox: tooling for managed Maximo operations"
      intro="The MaaS Administration Toolbox is a Grable Services internal accelerator used to streamline repeatable administration patterns for managed Maximo Application Suite environments."
      primaryCta="Ask about managed Maximo"
      primaryHref="/contact/"
      secondaryCta="See our managed Maximo hosting"
      secondaryHref="/services/maximo-hosting/managed/"
      cards={[
        {
          title: "Routine administration",
          body:
            "Standardizes common administrative activities across managed MAS environments so routine operations are more repeatable."
        },
        {
          title: "Health and configuration checks",
          body:
            "Supports review of environment health, configuration consistency, and operational signals that matter to managed-service delivery."
        },
        {
          title: "Operational consistency",
          body:
            "Helps apply consistent procedures across environments under Grable management while preserving the customer-specific runbook."
        },
        {
          title: "Managed-service delivery counterpart",
          body:
            "The Toolbox supports Grable's managed Maximo hosting service, where our team runs and supports your MAS environment after go-live.",
          href: "/services/maximo-hosting/managed/"
        }
      ]}
      sections={[
        {
          title: "What the Toolbox is",
          body:
            "It is an internal Grable accelerator, not a separately licensed product. It helps the team running your environment execute managed Maximo operations more consistently."
        },
        {
          title: "How it fits managed hosting",
          body:
            "The Toolbox underpins our managed Maximo hosting offering. If you are evaluating managed MAS operations, start with the linked managed hosting service to understand the actual scope, SLAs, and responsibilities we commit to."
        },
        {
          title: "Engagement scope",
          body:
            "Toolbox use is part of Grable's managed-service operating model. The exact administrative scope, responsibilities, and customer-facing outputs are confirmed in writing for each engagement."
        }
      ]}
    />
  );
}
