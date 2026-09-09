import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Immersive Mentoring for Maximo Teams",
  description:
    "Embedded, hands-on mentoring from Grable Services—experts work alongside your team to transfer IBM Maximo and reliability capability in context, not just in a classroom."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Immersive Mentoring"
      title="Immersive Mentoring for Maximo Teams"
      intro="Classroom training can fade once the session ends. Grable Services offers immersive mentoring, where our experts work alongside your team to transfer IBM Maximo and reliability capability in the context of real work—helping people become self-sufficient operators rather than dependent on outside help."
      primaryCta="Book a mentoring consultation"
      primaryHref="/contact/"
      secondaryCta="See EAM system training"
      secondaryHref="/services/eam-system-training/"
      route="/services/immersive-mentoring/"
      template="service"
      cards={[
        {
          title: "Embedded experts",
          body: "Grable mentors work alongside your team rather than from a distance, sharing Maximo and reliability knowledge in the flow of day-to-day work.",
          href: "/contact/"
        },
        {
          title: "In-context knowledge transfer",
          body: "Capability is built against your real assets, processes, and configuration, so lessons stick because they happen on the work that matters to you.",
          href: "/contact/"
        },
        {
          title: "Path to self-sufficiency",
          body: "The goal is an internal team that can operate confidently and reduce its reliance on outside vendors over time.",
          href: "/contact/"
        },
        {
          title: "Complements training",
          body: "Mentoring extends classroom training and system enablement into sustained, on-the-job capability building.",
          href: "/services/maintenance-reliability-training/"
        }
      ]}
      sections={[
        {
          title: "Beyond the classroom",
          body: "Training events are valuable, but knowledge often fades without reinforcement. Immersive mentoring puts Grable experts next to your team so learning happens on real work and carries forward into everyday practice."
        },
        {
          title: "Build internal capability",
          body: "This model suits customer Maximo and reliability teams that want to grow their own expertise and federal or enterprise organizations working to reduce vendor dependence. The emphasis is on transferring capability, not just delivering it."
        },
        {
          title: "A high-trust engagement model",
          body: "Working shoulder to shoulder with your team deepens the relationship and keeps mentoring aligned to your goals. It pairs naturally with Grable's training and administration services to support lasting adoption."
        }
      ]}
    />
  );
}
