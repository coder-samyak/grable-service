import type { Metadata } from "next";
import { PageShell } from "../../../components/PageShell";

export const metadata: Metadata = {
  title: "Maximo IaaS Hosting",
  description:
    "Infrastructure-as-a-Service hosting for IBM Maximo Application Suite from Grable Services: managed compute, storage, network, and OpenShift cluster hosting while your team retains Maximo administrative control."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Maximo Hosting"
      title="Maximo Infrastructure as a Service (IaaS)"
      intro="Grable Services hosts the infrastructure your IBM Maximo Application Suite runs on — compute, storage, network, and the Red Hat OpenShift cluster — while your team keeps administrative control of the MAS platform and Maximo application. IaaS is the right model when you want a dependable, professionally operated foundation but prefer to run Maximo yourself."
      primaryCta="Discuss an IaaS engagement"
      primaryHref="/contact/"
      secondaryCta="See fully managed hosting"
      secondaryHref="/services/maximo-hosting/managed/"
      cards={[
        {
          title: "Compute, storage, and network",
          body: "We deliver and operate the underlying compute, persistent storage (including RWX storage for MAS), and networking that the cluster depends on. Capacity is sized to your environments — development, test, and production — with room to grow."
        },
        {
          title: "OpenShift cluster hosting",
          body: "We stand up and host the Red Hat OpenShift cluster that MAS 9 requires, including the bare-metal or virtualized nodes, control plane, and cluster networking. You receive a running, reachable OpenShift platform to install and operate Maximo on."
        },
        {
          title: "Tenancy options",
          body: "Single-tenant clusters for isolation or shared infrastructure where appropriate, depending on your security, performance, and compliance needs. We help you choose the tenancy model that balances isolation against cost for your workload."
        },
        {
          title: "Networking and access",
          body: "We provide the network foundation — VLANs, routing, public ingress, DNS, and TLS termination at the edge — so your Maximo environment is securely reachable. You define application-level access and routes within the platform you control."
        },
        {
          title: "Infrastructure resilience",
          body: "Resilient power, connectivity, and storage are handled at the infrastructure layer. Application backup, database recovery objectives, and disaster recovery responsibilities are defined in the IaaS responsibility model."
        },
        {
          title: "You keep Maximo control",
          body: "Your administrators retain control of the MAS install, workspace configuration, Maximo customization, upgrades, database administration, and user management. Grable keeps the infrastructure healthy underneath you.",
          href: "/services/maximo-hosting/paas/"
        }
      ]}
      sections={[
        {
          title: "Where Grable's responsibility ends",
          body: "Under IaaS, Grable Services is responsible up to and including the infrastructure and the OpenShift cluster: hardware, hypervisor where applicable, storage, network, cluster availability, and infrastructure patching. Everything above that line — the MAS operators and runtime, Maximo application configuration and customization, the Maximo database administration, OS-level patching inside your application images, application backups, and Maximo monitoring — is owned by your team. This boundary is documented explicitly so responsibilities are unambiguous."
        },
        {
          title: "IaaS versus managed and platform models",
          body: "IaaS gives you the most administrative control and the most operational responsibility. If you would rather Grable also run the OpenShift and Maximo runtime while you keep configuration ownership, our PaaS model moves the platform operations to us. If you want Maximo operated end to end as a service, our fully managed (MaaS) model is the right choice."
        },
        {
          title: "Support model",
          body: "IaaS includes infrastructure-level support with a defined incident and escalation process for the hosting platform. Support hours, response targets, and uptime commitments are defined in the service agreement."
        },
        {
          title: "A clear path to grow",
          body: "Many customers start on IaaS for control and move responsibilities to Grable over time. Because we host the underlying platform already, transitioning to PaaS or fully managed hosting is a natural step as your needs change, without re-platforming."
        }
      ]}
    />
  );
}
