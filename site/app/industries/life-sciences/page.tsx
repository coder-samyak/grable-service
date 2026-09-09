import type { Metadata } from "next";
import { PageShell } from "../../components/PageShell";
export const metadata: Metadata = {
  title: "GxP-Validated IBM Maximo for Life Sciences",
  description: "Validated IBM Maximo EAM for life sciences: 21 CFR Part 11 compliance, calibration management, and GxP-validated hosting for regulated manufacturing assets."
};
export default function Page() {
  return (
    <PageShell
      backgroundVideo="/journey/Life science.mp4"
      processBackgroundVideo="/journey/Life science 2.mp4"
      splitBackgroundVideo="/journey/life science 3.mp4"
      stepsBackgroundVideo="/journey/Life science 4.mp4"
      eyebrow="Industries / Life Sciences"
      title="GxP-validated IBM Maximo for regulated life sciences operations."
      intro="Grable Services delivers validated IBM Maximo for pharmaceutical, biotech, and medical device operations, supporting calibration, preventive maintenance, and asset compliance under 21 CFR Part 11 and GxP requirements that regulators expect."
      primaryCta="Discuss your validation needs"
      primaryHref="/contact/"
      secondaryCta="Explore managed hosting"
      secondaryHref="/services/maximo-hosting/"
      cards={[
        { title: "Computer system validation", body: "IQ/OQ/PQ documentation, validation lifecycle support, and change control aligned to GAMP 5 and GxP expectations." },
        { title: "21 CFR Part 11 controls", body: "Electronic records, electronic signatures, and audit trail configuration to meet FDA Part 11 requirements." },
        { title: "Calibration management", body: "Instrument calibration scheduling, tolerance tracking, and out-of-tolerance handling for regulated equipment." },
        { title: "Validated managed hosting", body: "GxP-aware hosting with qualification and change management for the underlying platform.", href: "/services/maximo-hosting/" }
      ]}
      sections={[
        { title: "Regulated asset types", body: "Life sciences Maximo programs manage production equipment, cleanrooms, HVAC and utilities classified as GxP-critical, lab instruments, and cold-chain assets, each with maintenance and calibration regimes tied to regulatory risk." },
        { title: "Preventive and calibration maintenance", body: "We configure preventive maintenance and calibration so that GxP-critical equipment stays qualified, with documented intervals, tolerances, and deviation handling that withstand inspection." },
        { title: "Data integrity and audit trail", body: "ALCOA+ data integrity principles drive our configuration of audit trails, electronic signatures, and access controls so maintenance records remain attributable, contemporaneous, and inspection-ready." },
        { title: "Validation lifecycle", body: "From validation planning through IQ/OQ/PQ and periodic review, we maintain the documented evidence that keeps a Maximo deployment in a validated state across upgrades and changes." }
      ]}
    />
  );
}
