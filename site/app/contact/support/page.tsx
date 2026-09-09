import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Support for Grable Services managed and hosted IBM Maximo customers. Find your support channels, response expectations, and how to open a request."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Support for managed and hosted customers."
      intro="If Grable Services hosts or manages your IBM Maximo environment, this is how you reach our support team. Use the channels below to report issues, request changes, or check on your service."
      primaryCta="Open a support request"
      primaryHref="/contact/"
      secondaryCta="Managed Maximo hosting"
      secondaryHref="/services/maximo-hosting/managed/"
      cards={[
        {
          title: "Report an incident",
          body: "Notify us of an outage, degraded service, integration failure, or urgent issue in your hosted Maximo environment."
        },
        {
          title: "Submit a service request",
          body: "Request configuration changes, access updates, routine maintenance, environment changes, or support with managed operations."
        },
        {
          title: "Check service status",
          body: "Ask for current service status, maintenance timing, planned work, or incident follow-up for your managed environment."
        },
        {
          title: "Escalate an issue",
          body: "Escalate urgent issues through your assigned Grable support path when normal request handling is not enough."
        }
      ]}
      sections={[
        {
          title: "Who this is for",
          body: "Support is available to active Grable Services managed and hosted Maximo customers. If you are evaluating services, contact sales instead."
        },
        {
          title: "Support channels and service levels",
          body: "Support channels, coverage hours, severity definitions, response targets, and escalation paths are defined in the applicable service agreement."
        },
        {
          title: "About managed hosting",
          body: "Support is part of our managed Maximo hosting offering. Learn what is included at /services/maximo-hosting/managed/."
        }
      ]}
    />
  );
}
