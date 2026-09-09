import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Security & Trust",
  description: "Security and trust overview for Grable Services."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Security and trust."
      intro="Grable approaches security as part of delivery and operations: clear access boundaries, documented controls, monitored environments, recoverable systems, and careful handling of public claims."
      primaryCta="Contact security"
      primaryHref="/contact/"
      secondaryCta="FedRAMP and federal"
      secondaryHref="/federal/fedramp/"
      template="legal"
      sections={[
        {
          title: "Managed environment practices",
          body: "Hosting and managed-service work is scoped around access control, monitoring, patch routines, backup and recovery, incident escalation, and administrative ownership."
        },
        {
          title: "Data protection",
          body: "Project-specific data handling, retention, identity, encryption, and integration requirements are confirmed during scoping and documented in the applicable agreement or runbook."
        },
        {
          title: "Operational security",
          body: "Operational support emphasizes repeatable runbooks, controlled change, environment visibility, and clear handoff between Grable, customer, and platform responsibilities."
        },
        {
          title: "Federal and regulated work",
          body: "Federal, FedRAMP, impact-level, and other regulated-environment discussions are routed through direct intake so requirements and public statements can be handled accurately."
        },
        {
          title: "Reporting a concern",
          body: "Security concerns, suspected vulnerabilities, or trust questions can be routed through the contact page for review by the appropriate Grable owner."
        }
      ]}
    />
  );
}
