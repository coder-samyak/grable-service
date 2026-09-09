import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement for the Grable Services website."
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Accessibility statement."
      intro="Grable Services aims to make the website usable for visitors with a range of abilities, devices, browsers, and assistive technologies."
      primaryCta="Report an accessibility issue"
      primaryHref="/contact/"
      secondaryCta="Privacy policy"
      secondaryHref="/legal/privacy/"
      template="legal"
      sections={[
        {
          title: "Accessibility approach",
          body: "The site is structured with semantic headings, descriptive links, keyboard-accessible navigation, readable contrast, responsive layouts, and form labels."
        },
        {
          title: "Ongoing improvements",
          body: "Accessibility is reviewed as content, design, and functionality change. Issues found during testing or reported by visitors are prioritized with other site maintenance work."
        },
        {
          title: "Known limitations",
          body: "Some third-party tools, embedded services, or downloadable files may have different accessibility behavior. Grable can provide alternate support paths when needed."
        },
        {
          title: "Feedback",
          body: "Visitors who experience an accessibility barrier can contact Grable with the page URL, device or browser, assistive technology if relevant, and a short description of the issue."
        }
      ]}
    />
  );
}
