import type { Metadata } from "next";
import { MaximoJourney } from "./components/journey/MaximoJourney";
import { pageMetadata } from "./lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IBM Maximo Consulting, MAS 9 Migration & Managed Hosting | Grable Services",
  description:
    "From MAXIMO 4 client-server to MAS 9 and agentic AI — Grable Services has run every era of IBM Maximo. SDVOSB partner for federal and commercial MAS migration, hosting, and AI-ready operations.",
  path: "/"
});

export default function HomePage() {
  return <MaximoJourney />;
}
