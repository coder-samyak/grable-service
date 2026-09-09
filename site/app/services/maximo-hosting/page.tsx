import { PageShell } from "../../components/PageShell";
import { StepSection } from "../../components/StepSection";
import { HostingFeed } from "../../components/journey/mockups/HostingFeed";

export default function MaximoHostingPage() {
  return (
    <>
      <PageShell
        eyebrow="Maximo Hosting / MaaS"
        title="Maximo as a managed service, without losing control."
        intro="Grable hosts and manages Maximo environments across commercial and federal requirements, with infrastructure, patching, backups, DBA coverage, and disaster recovery designed into the service."
        primaryCta="Compare hosting options"
        secondaryCta="Calculate hosting TCO"
      />

      <StepSection
        stepNumber={1}
        title="Managed Maximo (Maximo as a Service)"
        body="Full-service Maximo operations for teams that want predictable uptime, support, backups, patching, and database coverage. We run the infrastructure, OS, Maximo patches, backups, monitoring, and support so your team focuses on maintenance and asset management."
        href="/services/maximo-hosting/managed/"
        content={<HostingFeed type="managed" active={true} />}
        accent="#e0b43a"
      />

      <StepSection
        stepNumber={2}
        title="IaaS and PaaS Options"
        body="Separate infrastructure and platform options for buyers who need more control over cloud model, tenancy, and operational boundaries. Choose the level of managed control that fits your team and governance requirements."
        href="/services/maximo-hosting/iaas/"
        content={<HostingFeed type="paas" active={true} />}
        accent="#22d3ee"
      />

      <StepSection
        stepNumber={3}
        title="Operating Model & Support"
        body="Hosting scope is documented around environment ownership, access, monitoring, backups, disaster recovery, support expectations, and escalation paths. Clear boundaries mean predictable operations and clean handoff to day-two support."
        content={<HostingFeed type="operations" active={true} />}
        accent="#7dd3fc"
      />
    </>
  );
}
