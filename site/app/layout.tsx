import type { Metadata } from "next";
import { Lora, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "./components/CookieBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { StickyCTA } from "./components/StickyCTA";
import { ScrollReveal } from "./components/ScrollReveal";
import { SmoothScroll } from "./components/SmoothScroll";
import { JsonLd, organizationSchema, websiteSchema } from "./lib/schema";
import { CustomCursor } from "./components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Grable Services | IBM Maximo Services",
    template: "%s | Grable Services"
  },
  description:
    "IBM Maximo, storage, hosting, and AI infrastructure services for federal and commercial organizations.",
  metadataBase: new URL("https://grableservices.com"),
  openGraph: {
    title: "Grable Services | IBM Maximo Services",
    description:
      "MAS 9 migration, Maximo hosting, IBM Storage Services, AI hosting, and field operations for federal and commercial buyers.",
    url: "https://grableservices.com",
    siteName: "Grable Services",
    type: "website"
  }
};

const displayFont = Oswald({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const bodyFont = Lora({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const monoFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <CustomCursor />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCTA />
        <CookieBanner />
        <ScrollReveal />
        <SmoothScroll />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
