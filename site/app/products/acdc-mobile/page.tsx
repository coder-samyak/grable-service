import { PageShell } from "../../components/PageShell";

export default function AcdcMobilePage() {
  return (
    <PageShell
      eyebrow="AC/DC Mobile"
      title="Mobile asset data collection for Maximo field teams."
      intro="AC/DC Mobile supports field teams that need structured asset data collection, inspection workflows, and Maximo-connected mobile processes."
      primaryCta="Discuss mobile workflows"
      sections={[
        { title: "Field data collection", body: "Capture asset, location, inspection, and work-context information closer to the point of execution so Maximo records stay useful for maintenance and reliability teams." },
        { title: "Workflow fit", body: "Mobile scope is defined around the crews, devices, connectivity, forms, sync needs, and Maximo processes involved in the field workflow." },
        { title: "Implementation path", body: "Grable can help assess requirements, configure the supporting Maximo process, train users, and support rollout across pilot and production teams." }
      ]}
    />
  );
}
