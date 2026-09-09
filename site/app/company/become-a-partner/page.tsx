import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Become a Partner | Teaming and Subcontracting",
  description:
    "Primes, subcontractors, and technology vendors can team with Grable Services, specialists in IBM Maximo and MAS 9. Start the conversation."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Partnering"
      title="Team with Grable Services"
      intro="We welcome conversations with prime contractors, subcontractors, and technology vendors who want to team with us. Specializing in IBM Maximo and MAS 9, Grable Services brings deep delivery capability to teaming arrangements."
      primaryCta="Start a partnering conversation"
      primaryHref="/contact/"
      secondaryCta="See our partnerships"
      secondaryHref="/company/partners/"
      template="standard"
      cards={[
        {
          title: "Primes seeking a teaming partner",
          body: "If you are pursuing federal work and need a teaming partner with genuine IBM Maximo and MAS 9 depth, we would like to talk.",
          href: "/contact/"
        },
        {
          title: "Subcontractors and delivery partners",
          body: "Specialists who complement our Maximo, hosting, storage, and AI infrastructure work can reach out to explore subcontracting and joint delivery.",
          href: "/contact/"
        },
        {
          title: "Technology vendors",
          body: "Vendors looking for a delivery partner to bring their technology to asset-intensive and federal customers can start a conversation with us.",
          href: "/company/partners/"
        }
      ]}
      sections={[
        {
          title: "What Grable brings to a team",
          body: "Grable Services is focused on IBM Maximo and MAS 9. We combine hands-on capability across migration, managed hosting, IBM Storage, and AI infrastructure—useful depth for primes and partners assembling a team."
        },
        {
          title: "How to start",
          body: "There is no formal partner-program application or tier to apply for. The best first step is a direct conversation about the opportunity, the scope, and how our capabilities fit alongside yours. Reach out and we will route you to the right person."
        }
      ]}
    />
  );
}
