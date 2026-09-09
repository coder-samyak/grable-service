export type MockupKey =
  | "crt"
  | "retroBrowser"
  | "startCenter"
  | "masDashboard"
  | "copilotChat"
  | "agentFeed";

export type JourneyEra = {
  /** Section id — rail anchor target, e.g. "era-1994" */
  id: string;
  index: number;
  years: string;
  /** Short label shown on the timeline rail */
  markerLabel: string;
  /** Mono eyebrow above the era title */
  eyebrow: string;
  title: string;
  body: string[];
  /** Short fact chips */
  facts: string[];
  /** One-line "we were there" credibility note */
  grableNote: string;
  mockup: MockupKey;
  /** Media base path — resolves `${base}.webm`, `${base}.mp4`, `${base}-poster.jpg` */
  media: { base: string };
  /** Per-era accent color used by gradient + chips */
  accent: string;
};

export const journeyEras: JourneyEra[] = [
  {
    id: "era-1994",
    index: 0,
    years: "1994–2001",
    markerLabel: "1994",
    eyebrow: "PSDI · MRO SOFTWARE",
    title: "MAXIMO 4 & 5 — the client-server era",
    body: [
      "Maintenance goes digital. MAXIMO runs on client-server networks, green-on-black terminals hum in plant offices, and work orders still travel the shop floor on paper.",
      "The foundation of modern EAM is laid here: assets, PMs, work orders, inventory — disciplines that haven't changed, on technology that has."
    ],
    facts: ["Client-server architecture", "Green-screen terminals", "Paper work orders"],
    grableNote: "Our team cut its teeth on these systems — we've supported Maximo since the CRT days.",
    mockup: "crt",
    media: { base: "/journey/era-1.1" },
    accent: "#33ff66"
  },
  {
    id: "era-2002",
    index: 1,
    years: "2002–2007",
    markerLabel: "2002",
    eyebrow: "MAXIMO 6 · MXES · IBM ACQUIRES MRO (2006)",
    title: "Maximo goes to the browser",
    body: [
      "Maximo 6 rebuilds the platform on J2EE and moves the whole system into the web browser. No client installs, one URL for every technician and planner.",
      "In 2006, IBM acquires MRO Software — and Maximo becomes the backbone of IBM's asset management strategy."
    ],
    facts: ["J2EE web architecture", "Zero client installs", "IBM acquisition, 2006"],
    grableNote: "We migrated client-server sites to the web era without losing a single work order history.",
    mockup: "retroBrowser",
    media: { base: "/journey/era-2.2" },
    accent: "#5aa7e8"
  },
  {
    id: "era-2008",
    index: 2,
    years: "2008–2019",
    markerLabel: "2008",
    eyebrow: "MAXIMO 7.1 · 7.5 · 7.6",
    title: "The enterprise workhorse decade",
    body: [
      "Maximo 7 becomes the world's most trusted EAM: Start Centers, KPIs, mobile add-ons, and industry solutions for utilities, transportation, oil & gas, and federal fleets.",
      "Version 7.6 runs mission-critical maintenance for over a decade — 800M+ square feet of it under our watch."
    ],
    facts: ["Start Centers & KPIs", "Mobile workforce add-ons", "Industry solutions"],
    grableNote: "Grable ran Maximo 7.x in production for federal and commercial estates through the entire era.",
    mockup: "startCenter",
    media: { base: "/journey/era-3.3" },
    accent: "#0f62fe"
  },
  {
    id: "era-2020",
    index: 3,
    years: "2020–2022",
    markerLabel: "2020",
    eyebrow: "MAXIMO APPLICATION SUITE 8 · OPENSHIFT",
    title: "MAS 8 — cloud-native, sensor-aware",
    body: [
      "Maximo becomes a suite: containerized on Red Hat OpenShift with Monitor, Health, Predict, and Visual Inspection under one license model.",
      "Asset data stops being history and starts being telemetry — condition monitoring and anomaly detection move into the core platform."
    ],
    facts: ["Containerized on OpenShift", "Monitor · Health · Predict", "AppPoints licensing"],
    grableNote: "We stood up early MAS 8 environments and carried 7.x customers across the suite boundary.",
    mockup: "masDashboard",
    media: { base: "/journey/era-4.4" },
    accent: "#22d3ee"
  },
  {
    id: "era-2023",
    index: 4,
    years: "2023–2025",
    markerLabel: "2023",
    eyebrow: "MAS 9 · MAXIMO COPILOT · 7.6 END OF SUPPORT",
    title: "AI arrives — and the migration clock runs out",
    body: [
      "MAS 9 brings generative AI into maintenance: Maximo Copilot answers technicians in plain language, visual inspection reads defects from cameras, and predictive models schedule work before failure.",
      "Meanwhile Maximo 7.6 reaches end of support — the largest migration wave in Maximo history is underway."
    ],
    facts: ["Maximo Copilot (genAI)", "Predictive scheduling", "7.6 EOS migration wave"],
    grableNote: "We plan and execute MAS 9 migrations end-to-end — assessment to hypercare.",
    mockup: "copilotChat",
    media: { base: "/journey/era-5.5" },
    accent: "#7dd3fc"
  },
  {
    id: "era-2026",
    index: 5,
    years: "2026 →",
    markerLabel: "Now",
    eyebrow: "AGENTIC AI MAINTENANCE · GRABLE SERVICES",
    title: "Assets that triage themselves",
    body: [
      "The next era is agentic: AI agents watch telemetry, diagnose anomalies, draft prescriptive work orders, and reserve parts — with your planners approving, not typing.",
      "Thirty years of Maximo taught us one thing: every era rewards the operators who moved first. We'll move with you."
    ],
    facts: ["Autonomous triage", "Prescriptive work orders", "Human-in-the-loop approval"],
    grableNote: "SDVOSB · IBM partner — we take federal and commercial estates into the AI era.",
    mockup: "agentFeed",
    media: { base: "/journey/era-6.6" },
    accent: "#e0b43a"
  }
];

export const journeyHero = {
  eyebrow: "SDVOSB · IBM MAXIMO SINCE THE CLIENT-SERVER ERA",
  titleLead: "Thirty years of Maximo.",
  titleEmphasis: "One partner for the AI era.",
  subhead:
    "IBM Maximo consulting, MAS 9 migration, and managed operations — from MAXIMO 4 green screens to agentic AI maintenance, Grable Services has run every era in production.",
  primaryCta: { label: "Book a briefing", href: "/contact/" },
  secondaryCta: { label: "Plan your MAS 9 move", href: "/services/mas9-migration/" },
  scrollHint: "Scroll — 30 years in 60 seconds"
};

export const journeyFinalCta = {
  eyebrow: "THE NEXT ERA IS ALREADY RUNNING",
  titleLead: "Every era above, we ran in production.",
  titleEmphasis: "The next one, we'll run with you.",
  body: "Service-Disabled Veteran-Owned Small Business. IBM Maximo specialists across federal and commercial estates — assessment, migration, hosting, and AI-ready operations.",
  primaryCta: { label: "Book a briefing", href: "/contact/" },
  secondaryCta: { label: "Federal capabilities", href: "/federal/" },
  proofChips: ["SDVOSB", "IBM Maximo Partner", "Federal & Commercial", "800M+ sq ft supported"]
};
