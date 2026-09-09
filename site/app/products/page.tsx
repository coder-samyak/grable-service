import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Maximo Products & Deployment Accelerators",
  description:
    "Grable product extensions for IBM Maximo — AC/DC Mobile field data collection, MaaS administration tooling, and MAS 9 migration accelerators.",
  path: "/products/"
});

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Products"
      title="Maximo product extensions and deployment accelerators."
      intro="The product area houses AC/DC Mobile, MaaS administration tooling, and MAS 9 migration accelerators for Maximo teams."
      cards={[
        { title: "AC/DC Mobile", body: "Mobile asset data collection and field workflow support for Maximo environments.", href: "/products/acdc-mobile/" },
        { title: "MaaS Administration Toolbox", body: "Administrative tooling and workflows for managed Maximo (MaaS) environments.", href: "/products/maas-administration-toolbox/" },
        { title: "MAS 9 Migration Kit", body: "Readiness checklists and planning assets that support MAS 9 migration projects.", href: "/products/mas9-migration-kit/" }
      ]}
    />
  );
}

