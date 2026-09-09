import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a career in IBM Maximo and federal asset management at Grable Services. Learn why to join us, how to apply, and our hiring approach."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Company"
      title="Build mission-critical Maximo systems with us."
      intro="At Grable Services, you work on IBM Maximo and Maximo Application Suite systems that keep federal and commercial operations running. We hire consultants, engineers, and operators who care about asset management done right."
      primaryCta="Reach out about careers"
      primaryHref="/contact/"
      secondaryCta="About the company"
      secondaryHref="/company/about/"
      cards={[
        {
          title: "Work on Maximo every day",
          body: "Specialize in IBM Maximo and MAS across implementation, integration, hosting, and managed services — deep expertise instead of generic IT work."
        },
        {
          title: "Federal mission impact",
          body: "Support government and defense asset management programs where reliability and security genuinely matter."
        },
        {
          title: "Grow your craft",
          body: "Learn alongside experienced Maximo practitioners and advance toward architecture, MAS, and operations leadership roles."
        },
        {
          title: "Veteran-friendly culture",
          body: "We value the discipline, mission focus, and operational judgment that veterans and service-minded professionals bring."
        }
      ]}
      sections={[
        {
          title: "Why work here",
          body: "We are an IBM Maximo specialty firm, so your skills compound instead of scattering. You contribute directly to federal and commercial asset-management outcomes, with clear ownership and room to grow."
        },
        {
          title: "Open positions",
          body: "Roles may include Maximo consultants, MAS administrators, integration developers, reliability practitioners, and hosting or operations engineers. Current openings can be requested through the contact page."
        },
        {
          title: "How to apply",
          body: "Send your resume and a short note about your Maximo, asset management, federal, infrastructure, or operations experience through the contact page."
        }
      ]}
    />
  );
}
