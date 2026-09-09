export type RouteContent = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  template?: "standard" | "service" | "federal" | "resource" | "contact" | "legal";
  cards?: Array<{
    title: string;
    body: string;
    href?: string;
  }>;
  sections?: Array<{
    title: string;
    body: string;
    href?: string;
  }>;
  faqs?: Array<{
    title: string;
    body: string;
  }>;
};

export const routeContent: Record<string, RouteContent> = {
  "/solutions/": {
    title: "Asset management solutions for complex operations",
    description:
      "Outcome-led IBM Maximo and asset management solution paths for reliability, MRO data, facilities, business process consulting, benchmarking, technology selection, and leadership training.",
    eyebrow: "Solutions",
    intro:
      "Use the solutions hub to find the operational outcome you need before choosing a service line. Grable connects IBM Maximo delivery, hosting, migration, training, and data work to the way your assets, crews, and reliability programs actually operate.",
    primaryCta: "Discuss your priorities",
    primaryHref: "/contact/",
    secondaryCta: "View services",
    secondaryHref: "/services/",
    cards: [
      {
        title: "Enterprise asset management",
        body: "Structure assets, work, inventory, preventive maintenance, and governance around a durable Maximo operating model.",
        href: "/solutions/enterprise-asset-management/"
      },
      {
        title: "Asset performance management",
        body: "Connect maintenance strategy, condition signals, and reliability analysis so teams can reduce avoidable downtime.",
        href: "/solutions/asset-performance-management/"
      },
      {
        title: "MRO data services",
        body: "Improve material masters, storeroom practices, critical spares, and purchasing data so maintenance work is easier to execute.",
        href: "/solutions/mro-data-services/"
      },
      {
        title: "Business process consulting",
        body: "Map the current operating model, remove friction, and align Maximo configuration to how work should flow.",
        href: "/solutions/business-process-consulting/"
      }
    ],
    sections: [
      {
        title: "Start with the business outcome",
        body: "Most programs fail when teams jump straight to configuration. We start with the operational result: better reliability, cleaner data, safer compliance, faster field work, or lower hosting burden."
      },
      {
        title: "Tie each solution to a delivery path",
        body: "Every solution points to the service work needed to execute it, whether that means MAS 9 migration, managed hosting, mobile enablement, integration engineering, or ongoing support."
      },
      {
        title: "Make the roadmap practical",
        body: "Grable turns broad asset-management goals into phased work packages with dependencies, acceptance criteria, and clear ownership."
      }
    ]
  },
  "/solutions/technology-selection/": {
    title: "Technology selection for EAM, hosting, storage, and AI",
    description:
      "Decision support for IBM Maximo, MAS 9, hosting models, storage platforms, mobile workflows, integrations, and AI infrastructure.",
    eyebrow: "Solutions / Technology Selection",
    intro:
      "Grable helps buyers compare platform options, hosting models, migration paths, storage patterns, and integration requirements before they commit budget or scope. The goal is a defensible recommendation, not a tool-first sales motion.",
    primaryCta: "Request selection support",
    primaryHref: "/contact/",
    secondaryCta: "See assessments",
    secondaryHref: "/solutions/assessments-benchmarking/",
    template: "service",
    cards: [
      {
        title: "EAM platform fit",
        body: "Compare Maximo and adjacent EAM requirements against asset complexity, maintenance maturity, integrations, reporting, and field adoption needs."
      },
      {
        title: "Hosting model comparison",
        body: "Weigh SaaS, BYOL managed hosting, PaaS, and IaaS against security, operations capacity, customization, cost, and upgrade risk.",
        href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/"
      },
      {
        title: "Storage and resilience",
        body: "Evaluate IBM Storage, backup, recovery, and cyber-resilience needs for Maximo and other operational systems.",
        href: "/services/storage-services/"
      },
      {
        title: "AI infrastructure readiness",
        body: "Clarify where watsonx-aligned infrastructure, data controls, and operating practices fit in regulated asset-management workflows.",
        href: "/services/ai-hosting/"
      }
    ],
    sections: [
      {
        title: "Requirements before recommendations",
        body: "We document current-state systems, integrations, constraints, users, data volumes, security expectations, and operating ownership before recommending a path."
      },
      {
        title: "Decision matrix",
        body: "Selection work produces a practical comparison of options, trade-offs, migration implications, recurring operating needs, and risks that need executive attention."
      },
      {
        title: "Implementation handoff",
        body: "The output is built to carry into procurement and delivery, with scope boundaries, assumptions, and next-step work packages clearly stated."
      }
    ]
  },
  "/services/octave-hxgn/": {
    title: "Octave and HxGN EAM advisory services",
    description:
      "Planning, assessment, integration, data, and operational support for organizations evaluating or operating Octave and HxGN EAM alongside Maximo and related systems.",
    eyebrow: "Services / EAM Platforms",
    intro:
      "Grable supports EAM buyers who need practical planning across IBM Maximo and adjacent platforms such as Octave and HxGN. We help teams clarify requirements, integrations, data movement, operating ownership, and migration risk before platform decisions turn into delivery commitments.",
    primaryCta: "Discuss EAM requirements",
    primaryHref: "/contact/",
    secondaryCta: "See technology selection",
    secondaryHref: "/solutions/technology-selection/",
    template: "service",
    cards: [
      {
        title: "Platform assessment",
        body: "Compare business requirements, asset structures, maintenance processes, and reporting needs against the capabilities and constraints of the target EAM platform."
      },
      {
        title: "Integration planning",
        body: "Map interfaces to ERP, GIS, identity, reporting, mobile, document, and operational systems before implementation starts.",
        href: "/services/integration-custom-dev/"
      },
      {
        title: "Data and migration readiness",
        body: "Assess asset, location, job plan, PM, inventory, vendor, and historical data quality so migration scope is realistic."
      },
      {
        title: "Operating model",
        body: "Define ownership for administration, releases, support, security, reporting, and day-two changes."
      }
    ],
    sections: [
      {
        title: "Vendor-neutral planning",
        body: "The advisory work focuses on requirements, risk, and operating fit. We do not force every buyer into the same platform path."
      },
      {
        title: "Maximo-aware perspective",
        body: "Because Grable works deeply in IBM Maximo, we can help teams compare alternate EAM approaches against Maximo architecture, integrations, migration effort, and long-term support."
      },
      {
        title: "Clear next steps",
        body: "Engagements end with a prioritized roadmap, open decisions, integration inventory, and implementation sequencing."
      }
    ]
  },
  "/services/sap-eam/": {
    title: "SAP EAM integration and planning support",
    description:
      "Advisory support for SAP EAM, IBM Maximo coexistence, integration planning, migration readiness, and maintenance data alignment.",
    eyebrow: "Services / SAP EAM",
    intro:
      "Grable helps asset-intensive organizations plan around SAP EAM when it intersects with Maximo, ERP, procurement, materials, reporting, and field execution. We focus on the interfaces, ownership decisions, and data quality issues that determine whether an EAM program works in production.",
    primaryCta: "Review your EAM landscape",
    primaryHref: "/contact/",
    secondaryCta: "See integrations",
    secondaryHref: "/services/integration-custom-dev/",
    template: "service",
    cards: [
      {
        title: "SAP and Maximo coexistence",
        body: "Clarify system-of-record boundaries for assets, work, inventory, procurement, finance, and reporting."
      },
      {
        title: "Integration inventory",
        body: "Document APIs, batch jobs, middleware, master-data flows, and exception handling between EAM and enterprise systems.",
        href: "/services/integration-custom-dev/"
      },
      {
        title: "Process alignment",
        body: "Align maintenance, materials, approvals, and cost capture so work execution does not break at system boundaries."
      },
      {
        title: "Migration readiness",
        body: "Assess data cleanup, mapping, cutover, and validation needs before replacing or consolidating systems."
      }
    ],
    sections: [
      {
        title: "Focus on the operating model",
        body: "SAP EAM and Maximo decisions affect procurement, finance, maintenance, reliability, and IT. We make those ownership lines explicit."
      },
      {
        title: "Reduce integration surprises",
        body: "The biggest risks usually sit in master data, exception flows, reporting assumptions, and change ownership. We identify those early."
      },
      {
        title: "Plan for delivery",
        body: "Recommendations include sequencing, dependencies, validation steps, and the technical work needed to move from decision to implementation."
      }
    ]
  },
  "/services/aspentech/": {
    title: "AspenTech asset performance planning",
    description:
      "Advisory, integration, and operating-model support for AspenTech asset performance workflows connected to Maximo, reliability programs, and operational data.",
    eyebrow: "Services / AspenTech",
    intro:
      "Grable helps reliability and asset-management teams plan AspenTech-related asset performance work in the context of Maximo, operational data, integrations, and maintenance execution. The emphasis is turning analytics signals into work processes that crews can actually use.",
    primaryCta: "Assess APM readiness",
    primaryHref: "/contact/",
    secondaryCta: "See APM solutions",
    secondaryHref: "/solutions/asset-performance-management/",
    template: "service",
    cards: [
      {
        title: "APM workflow design",
        body: "Connect risk, condition, reliability, and failure analysis to the maintenance processes that need to change."
      },
      {
        title: "Maximo integration planning",
        body: "Define how alerts, recommendations, asset context, and work execution should move between APM tools and Maximo.",
        href: "/services/integration-custom-dev/"
      },
      {
        title: "Data readiness",
        body: "Evaluate asset hierarchy, failure codes, work history, sensor context, and master data before analytics expectations are set."
      },
      {
        title: "Adoption and governance",
        body: "Set ownership for model review, recommendation triage, maintenance planning, and outcome tracking."
      }
    ],
    sections: [
      {
        title: "Analytics must land in work execution",
        body: "APM value depends on turning recommendations into prioritized, trusted maintenance actions. We design the handoff from insight to work."
      },
      {
        title: "Maximo context matters",
        body: "Asset hierarchy, job plans, PMs, work history, and failure data in Maximo affect how useful any APM output will be."
      },
      {
        title: "Phased rollout",
        body: "We recommend piloting high-value asset classes first, validating data quality and operating ownership before scaling broadly."
      }
    ]
  },
  "/services/other-eam-solutions/": {
    title: "Other EAM solution support",
    description:
      "Assessment, integration, data, migration, and operating-model support for EAM platforms beyond IBM Maximo.",
    eyebrow: "Services / Other EAM Solutions",
    intro:
      "Not every asset-management environment is a single-platform Maximo program. Grable helps teams assess, connect, clean up, migrate, and operate EAM landscapes that include multiple tools, legacy systems, and specialized industry applications.",
    primaryCta: "Map your EAM landscape",
    primaryHref: "/contact/",
    secondaryCta: "See business process consulting",
    secondaryHref: "/solutions/business-process-consulting/",
    template: "service",
    cards: [
      {
        title: "Current-state assessment",
        body: "Document systems, users, asset structures, integrations, reports, and pain points before choosing a modernization path."
      },
      {
        title: "Data cleanup",
        body: "Improve asset, location, MRO, PM, job plan, and work history data so downstream decisions are more reliable.",
        href: "/solutions/mro-data-services/"
      },
      {
        title: "Integration support",
        body: "Design practical interfaces between EAM, ERP, GIS, identity, reporting, mobile, and document systems.",
        href: "/services/integration-custom-dev/"
      },
      {
        title: "Migration planning",
        body: "Plan phased movement from legacy EAM systems to the target operating model with validation and cutover controls."
      }
    ],
    sections: [
      {
        title: "Support without platform tunnel vision",
        body: "The right answer may be consolidation, coexistence, migration, or targeted improvement. We help make that decision explicit."
      },
      {
        title: "Operational continuity",
        body: "EAM changes touch crews, planners, storerooms, reliability, finance, and IT. We prioritize continuity while the system landscape changes."
      },
      {
        title: "Clear ownership",
        body: "Recommendations include who owns administration, reporting, data quality, integrations, releases, and support after implementation."
      }
    ]
  },
  "/services/high-security-cloud/": {
    title: "High-security cloud planning for regulated workloads",
    description:
      "High-security cloud advisory and hosting planning for regulated Maximo, AI, storage, and operational workloads.",
    eyebrow: "Services / High-Security Cloud",
    intro:
      "Grable helps regulated teams plan secure cloud environments for Maximo, storage, AI infrastructure, and related operational systems. We translate security expectations into architecture, access, backup, monitoring, documentation, and operating requirements.",
    primaryCta: "Plan a secure environment",
    primaryHref: "/contact/",
    secondaryCta: "See federal deployment planning",
    secondaryHref: "/services/maximo-on-fedramp/",
    template: "service",
    cards: [
      {
        title: "Security requirements mapping",
        body: "Capture control expectations, data sensitivity, identity needs, audit requirements, and operational constraints before architecture decisions."
      },
      {
        title: "Managed hosting patterns",
        body: "Plan secure Maximo hosting options with backup, patching, monitoring, access control, and recovery responsibilities defined.",
        href: "/services/maximo-hosting/"
      },
      {
        title: "Federal deployment context",
        body: "Support public-sector buyers evaluating FedRAMP, IL-tier, documentation, and procurement considerations.",
        href: "/services/maximo-on-fedramp/"
      },
      {
        title: "AI and storage controls",
        body: "Align storage resilience and AI infrastructure with data protection, monitoring, and operating governance.",
        href: "/services/ai-hosting/"
      }
    ],
    sections: [
      {
        title: "Security becomes operating work",
        body: "Secure hosting is not just an architecture diagram. It requires repeatable patching, backups, access reviews, monitoring, incident response, and evidence."
      },
      {
        title: "Separate commercial and federal needs",
        body: "Commercial regulated workloads and federal workloads may require different documentation, procurement paths, and control evidence. We keep those paths clear."
      },
      {
        title: "Design for maintainability",
        body: "The environment must be secure and operable. We balance control requirements with support, upgrade, and recovery realities."
      }
    ]
  },
  "/services/octave-hxgn-cloud-hosting/": {
    title: "Cloud hosting planning for Octave and HxGN environments",
    description:
      "Cloud hosting assessment, migration, integration, backup, and support planning for Octave and HxGN EAM environments.",
    eyebrow: "Services / Cloud Hosting",
    intro:
      "Grable helps teams evaluate cloud hosting patterns for Octave and HxGN EAM environments, especially where those platforms interact with Maximo, ERP, reporting, identity, and operational data. The work defines what should be hosted, how it should be integrated, and who owns day-two operations.",
    primaryCta: "Review hosting requirements",
    primaryHref: "/contact/",
    secondaryCta: "Compare cloud options",
    secondaryHref: "/services/commercial-cloud-solutions/",
    template: "service",
    cards: [
      {
        title: "Hosting assessment",
        body: "Review workloads, users, data flows, security needs, performance expectations, and support requirements before choosing a hosting pattern."
      },
      {
        title: "Migration planning",
        body: "Sequence environment moves, data validation, integration testing, user acceptance, and cutover activities."
      },
      {
        title: "Backup and recovery",
        body: "Define recovery objectives, backup routines, restore testing, and operational responsibilities.",
        href: "/services/storage-services/backup-recovery/"
      },
      {
        title: "Managed operations",
        body: "Plan monitoring, patching, access management, release support, and vendor coordination after go-live."
      }
    ],
    sections: [
      {
        title: "Cloud decisions affect operations",
        body: "Hosting choices change how releases, integrations, backups, access, monitoring, and support are handled. We surface those impacts early."
      },
      {
        title: "Integration-first planning",
        body: "EAM systems rarely stand alone. We map identity, ERP, GIS, reporting, mobile, and document interfaces before migration scope is locked."
      },
      {
        title: "Production readiness",
        body: "The final plan includes acceptance criteria, cutover activities, restore testing, and support handoff."
      }
    ]
  },
  "/industries/nuclear/": {
    title: "IBM Maximo for nuclear maintenance and regulated assets",
    description:
      "IBM Maximo planning for nuclear maintenance programs, regulated work control, preventive maintenance, spares, documentation, and secure hosting.",
    eyebrow: "Industries / Nuclear",
    intro:
      "Nuclear maintenance programs require disciplined asset data, controlled work processes, evidence-ready documentation, and secure operating practices. Grable helps teams plan Maximo improvements, migrations, integrations, and hosting with the rigor regulated environments expect.",
    primaryCta: "Plan a nuclear Maximo review",
    primaryHref: "/contact/",
    secondaryCta: "See regulated hosting",
    secondaryHref: "/services/high-security-cloud/",
    cards: [
      {
        title: "Work control alignment",
        body: "Support preventive maintenance, corrective work, approvals, and documentation flows tied to regulated operating practices."
      },
      {
        title: "Asset and location integrity",
        body: "Improve asset hierarchy, locations, criticality, PMs, job plans, and spares data so maintenance execution is traceable."
      },
      {
        title: "Secure hosting planning",
        body: "Evaluate hosting, access, backup, recovery, monitoring, and evidence needs for sensitive operational systems.",
        href: "/services/high-security-cloud/"
      },
      {
        title: "Migration readiness",
        body: "Prepare Maximo environments for MAS 9 modernization while managing integrations, validation, and cutover risk.",
        href: "/services/mas9-migration/"
      }
    ],
    sections: [
      {
        title: "Regulated work needs strong data",
        body: "Asset records, PMs, procedures, job plans, failure codes, and work history need enough structure to support oversight and reliable execution."
      },
      {
        title: "Integrations must be controlled",
        body: "Interfaces with document, ERP, identity, reporting, and operational systems need clear ownership, validation, and exception handling."
      },
      {
        title: "Modernization without disruption",
        body: "We phase assessment, cleanup, migration, testing, and cutover so operational continuity remains central."
      }
    ]
  },
  "/industries/food-beverage/": {
    title: "IBM Maximo for food and beverage maintenance",
    description:
      "IBM Maximo support for food and beverage manufacturers focused on uptime, sanitation, compliance records, spares, and plant-floor maintenance.",
    eyebrow: "Industries / Food and Beverage",
    intro:
      "Food and beverage operators need maintenance processes that protect uptime, quality, sanitation windows, traceability, and safety. Grable helps align IBM Maximo to plant-floor work, spares, inspections, integrations, and reporting.",
    primaryCta: "Improve plant maintenance",
    primaryHref: "/contact/",
    secondaryCta: "See manufacturing",
    secondaryHref: "/industries/manufacturing/",
    cards: [
      {
        title: "Production uptime",
        body: "Plan PMs, repairs, and shutdown work around production schedules and critical equipment availability."
      },
      {
        title: "Sanitation and inspection work",
        body: "Structure recurring work, checklists, evidence, and approvals for sanitation-sensitive environments."
      },
      {
        title: "MRO and spares",
        body: "Improve parts data, reorder points, storeroom practices, and critical spares for plant-floor reliability.",
        href: "/solutions/mro-data-services/"
      },
      {
        title: "System integration",
        body: "Connect Maximo to ERP, MES, reporting, identity, and mobile workflows where plant execution depends on shared data.",
        href: "/services/integration-custom-dev/"
      }
    ],
    sections: [
      {
        title: "Maintenance must fit production reality",
        body: "We align work planning and asset data to production constraints, cleaning windows, product changeovers, and critical-line availability."
      },
      {
        title: "Compliance records need structure",
        body: "Inspections, sanitation tasks, work approvals, and parts usage should be easy to retrieve and trust when quality or audit questions arise."
      },
      {
        title: "Start with the highest-risk lines",
        body: "A focused assessment can identify the equipment, data, and work processes that most affect downtime, quality, and response time."
      }
    ]
  },
  "/resources/books/": {
    title: "Books and long-form Maximo resources",
    description:
      "Long-form Grable Services resources for IBM Maximo, MAS 9 migration, hosting, storage, AI infrastructure, and asset management leaders.",
    eyebrow: "Resources / Books",
    intro:
      "The books library houses longer, structured resources for buyers and practitioners who need more than a short article. Topics focus on Maximo modernization, MAS 9 migration, hosting models, licensing, storage resilience, and asset-management operating models.",
    primaryCta: "Request the resource list",
    primaryHref: "/contact/",
    secondaryCta: "Browse guides",
    secondaryHref: "/resources/guides/maximo-apppoints-licensing/",
    template: "resource",
    cards: [
      {
        title: "MAS 9 migration playbooks",
        body: "Long-form planning material for readiness, sequencing, integrations, OpenShift implications, validation, and cutover.",
        href: "/services/mas9-migration/"
      },
      {
        title: "Hosting decision guides",
        body: "Buyer-focused comparisons for SaaS, BYOL, managed hosting, PaaS, IaaS, support, and disaster recovery.",
        href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/"
      },
      {
        title: "Asset-management leadership",
        body: "Resources for leaders standardizing work management, reliability, MRO data, governance, and operating ownership.",
        href: "/solutions/asset-management-leadership-training/"
      },
      {
        title: "Storage and AI primers",
        body: "Structured introductions to IBM Storage as a Service, cyber resilience, and regulated AI infrastructure.",
        href: "/services/storage-services/"
      }
    ],
    sections: [
      {
        title: "Built for deeper evaluation",
        body: "Books and long-form resources are best for teams comparing strategic paths or preparing internal stakeholders for a major program."
      },
      {
        title: "Evidence-led resources",
        body: "Long-form resources should connect claims to source material, examples, or practical decision criteria so buyers can use them with confidence."
      }
    ]
  },
  "/resources/ebooks/": {
    title: "Ebooks for Maximo buyers and asset leaders",
    description:
      "Downloadable ebooks on Maximo migration, hosting, AppPoints licensing, storage resilience, AI infrastructure, and reliability programs.",
    eyebrow: "Resources / eBooks",
    intro:
      "The ebook library gives buyers a concise way to understand practical Maximo and infrastructure decisions before opening a formal project. Each ebook should help stakeholders align on the problem, the options, and the next decision.",
    primaryCta: "Request ebook access",
    primaryHref: "/contact/",
    secondaryCta: "See whitepapers",
    secondaryHref: "/resources/whitepapers/",
    template: "resource",
    cards: [
      {
        title: "MAS 9 readiness",
        body: "A buyer-oriented guide to readiness scoring, technical dependencies, integrations, and migration sequencing.",
        href: "/services/mas9-migration/readiness-assessment/"
      },
      {
        title: "AppPoints licensing",
        body: "Plain-language guidance on AppPoints, user types, consumption patterns, and renewal planning.",
        href: "/resources/guides/maximo-apppoints-licensing/"
      },
      {
        title: "Managed hosting",
        body: "A practical comparison of hosting paths, operating responsibility, recovery, and support expectations.",
        href: "/services/maximo-hosting/"
      },
      {
        title: "Storage resilience",
        body: "How IBM Storage services, backup, recovery, and cyber resilience support critical operational workloads.",
        href: "/resources/guides/ibm-storage-as-a-service/"
      }
    ],
    sections: [
      {
        title: "Useful for internal alignment",
        body: "Ebooks should be written for business, IT, reliability, and procurement stakeholders who need a common understanding before scope is finalized."
      },
      {
        title: "CTA-ready structure",
        body: "Each ebook page should connect to a consultation, readiness assessment, or relevant service path so interest can turn into a concrete next step."
      }
    ]
  },
  "/resources/videos/": {
    title: "Maximo videos and technical explainers",
    description:
      "Video resources for IBM Maximo, MAS 9 migration, hosting, storage, AI infrastructure, field workflows, and asset-management practices.",
    eyebrow: "Resources / Videos",
    intro:
      "The videos library is for short explainers, demos, webinars, and practical walkthroughs that make Maximo and infrastructure topics easier to evaluate. Video content should support buyer education without replacing detailed guides and consultations.",
    primaryCta: "Request a walkthrough",
    primaryHref: "/contact/",
    secondaryCta: "Browse webinars",
    secondaryHref: "/resources/webinars/",
    template: "resource",
    cards: [
      {
        title: "Migration explainers",
        body: "Short videos covering MAS 9 readiness, upgrade sequencing, OpenShift implications, and cutover planning.",
        href: "/services/mas9-migration/"
      },
      {
        title: "Hosting comparisons",
        body: "Walkthroughs that compare SaaS, BYOL, managed hosting, PaaS, and IaaS responsibilities.",
        href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/"
      },
      {
        title: "Field workflow demos",
        body: "Examples of mobile inspections, offline workflows, crew adoption, and data collection patterns.",
        href: "/services/maximo-mobile-field/"
      },
      {
        title: "Storage and AI explainers",
        body: "Video introductions to IBM storage resilience and infrastructure for regulated AI workloads.",
        href: "/services/ai-hosting/"
      }
    ],
    sections: [
      {
        title: "Use video for clarity",
        body: "Videos should simplify complex decisions, show workflows, and reinforce the practical implications of each service path."
      },
      {
        title: "Pair with written resources",
        body: "Each video should link to a guide, comparison, webinar, or contact path so viewers can keep evaluating after the recording ends."
      }
    ]
  },
  "/resources/on-demand-webinars/": {
    title: "On-demand Maximo webinars",
    description:
      "Recorded webinars on IBM Maximo, MAS 9 migration, managed hosting, AppPoints, federal deployment planning, storage, and AI infrastructure.",
    eyebrow: "Resources / On-demand Webinars",
    intro:
      "On-demand webinars give buyers a way to review deeper Maximo, hosting, migration, and infrastructure topics on their own schedule. Each recording should answer a specific decision question and connect viewers to the next practical step.",
    primaryCta: "Request webinar access",
    primaryHref: "/contact/",
    secondaryCta: "See live webinars",
    secondaryHref: "/resources/webinars/",
    template: "resource",
    cards: [
      {
        title: "MAS 9 planning sessions",
        body: "Recorded discussions on readiness, technical dependencies, licensing, integration risk, and upgrade sequencing.",
        href: "/services/mas9-migration/"
      },
      {
        title: "Hosting and operations",
        body: "Sessions covering managed hosting, disaster recovery, support ownership, and environment operations.",
        href: "/services/maximo-hosting/"
      },
      {
        title: "Federal deployment planning",
        body: "Webinars for public-sector buyers evaluating compliance context, procurement, and secure hosting paths.",
        href: "/federal/"
      },
      {
        title: "Storage and resilience",
        body: "Recordings on IBM Storage as a Service, backup, recovery, and cyber-resilience considerations.",
        href: "/services/storage-services/"
      }
    ],
    sections: [
      {
        title: "Decision-focused recordings",
        body: "Each on-demand webinar should make one decision easier: whether to migrate, how to host, what to assess, or which risk to prioritize."
      },
      {
        title: "Follow-up path",
        body: "Recorded content should route interested viewers to the relevant guide, comparison, readiness assessment, or contact form."
      }
    ]
  },
  "/resources/events/": {
    title: "Events for Maximo, reliability, and infrastructure teams",
    description:
      "Upcoming Grable Services events, webinars, briefings, and industry sessions for IBM Maximo, MAS 9, hosting, storage, AI, and asset management.",
    eyebrow: "Resources / Events",
    intro:
      "The events hub organizes upcoming webinars, briefings, conference sessions, and focused discussions for Maximo buyers, reliability leaders, federal teams, and infrastructure stakeholders.",
    primaryCta: "Ask about upcoming events",
    primaryHref: "/contact/",
    secondaryCta: "View webinars",
    secondaryHref: "/resources/webinars/",
    template: "resource",
    cards: [
      {
        title: "Migration briefings",
        body: "Short sessions on MAS 9 readiness, upgrade planning, AppPoints, OpenShift, integrations, and cutover risk.",
        href: "/services/mas9-migration/"
      },
      {
        title: "Federal buyer sessions",
        body: "Events focused on public-sector procurement, secure deployment planning, and Maximo modernization.",
        href: "/federal/"
      },
      {
        title: "Storage and resilience events",
        body: "Sessions on IBM Storage as a Service, backup, cyber resilience, and recovery planning.",
        href: "/services/storage-services/"
      },
      {
        title: "Reliability and field operations",
        body: "Events covering mobile workflows, MRO data, preventive maintenance, and reliability program improvement.",
        href: "/solutions/reliability-maintenance/"
      }
    ],
    sections: [
      {
        title: "Event details",
        body: "Each event listing should include date, time zone, topic, audience, registration path, and the next step for attendees."
      },
      {
        title: "Connect events to services",
        body: "Every event should link back to the relevant service, solution, guide, or consultation path so attendees can act after the session."
      }
    ]
  },
  "/resources/events/past/": {
    title: "Past Maximo and asset-management events",
    description:
      "Archive of past Grable Services events, webinars, briefings, and conference sessions for Maximo, MAS 9, hosting, storage, and asset management.",
    eyebrow: "Resources / Past Events",
    intro:
      "The past-events archive gives visitors a record of prior webinars, conference sessions, briefings, and technical discussions. It should preserve useful materials while clearly separating archived content from upcoming events.",
    primaryCta: "Request event materials",
    primaryHref: "/contact/",
    secondaryCta: "View upcoming events",
    secondaryHref: "/resources/events/",
    template: "resource",
    cards: [
      {
        title: "Recording archive",
        body: "Store links to recordings, slide decks, transcripts, and follow-up resources when they are available."
      },
      {
        title: "Topic collections",
        body: "Group past sessions by migration, hosting, federal deployment, storage, AI, and reliability themes."
      },
      {
        title: "Follow-up resources",
        body: "Connect old sessions to current guides, comparisons, and service pages so archived content remains useful.",
        href: "/resources/"
      },
      {
        title: "Sales enablement",
        body: "Use past-event pages to answer common buyer questions and route visitors to consultation or readiness assessment."
      }
    ],
    sections: [
      {
        title: "Archive with context",
        body: "Past events should include the original date and a note when technical details, product versions, or compliance context may have changed."
      },
      {
        title: "Keep the next action current",
        body: "Even archived pages should point to active services, current guides, and the right contact path."
      }
    ]
  },
  "/company/alliances/": {
    title: "Technology alliances and delivery relationships",
    description:
      "Grable Services alliances with technology, cloud, storage, and delivery partners supporting IBM Maximo, MAS 9, hosting, and infrastructure work.",
    eyebrow: "Company / Alliances",
    intro:
      "Grable works with technology and delivery relationships that support Maximo modernization, hosting, storage, AI infrastructure, and regulated operations. The alliances page explains how those relationships help clients without overstating unverified certifications or partner claims.",
    primaryCta: "Discuss partner alignment",
    primaryHref: "/contact/",
    secondaryCta: "Become a partner",
    secondaryHref: "/company/become-a-partner/",
    cards: [
      {
        title: "IBM ecosystem",
        body: "Relationships and experience around IBM Maximo, MAS, storage, watsonx-aligned infrastructure, and related enterprise technology.",
        href: "/services/ibm-maximo-reselling/"
      },
      {
        title: "Cloud and hosting",
        body: "Infrastructure and hosting relationships that support commercial, regulated, and public-sector deployment patterns.",
        href: "/services/maximo-hosting/"
      },
      {
        title: "Storage and resilience",
        body: "Alliance context for IBM Storage as a Service, Storage Defender, backup, recovery, and cyber resilience.",
        href: "/services/storage-services/"
      },
      {
        title: "Implementation support",
        body: "Specialized delivery relationships for integration, data, mobile, training, and operations work."
      }
    ],
    sections: [
      {
        title: "Current relationship details",
        body: "Partner levels, certifications, and formal designations are shared when they are current and relevant to a buyer or engagement."
      },
      {
        title: "Client value first",
        body: "Alliances matter when they reduce delivery risk, clarify accountability, improve support, or make procurement easier for the client."
      },
      {
        title: "Room for partner growth",
        body: "The page connects potential partners to the become-a-partner path while keeping buyer-facing messaging grounded in current facts."
      }
    ]
  },
  "/company/press-releases/": {
    title: "Press releases and company announcements",
    description:
      "Official Grable Services announcements, press releases, partner news, launch updates, and public company milestones.",
    eyebrow: "Company / Press Releases",
    intro:
      "The press-release archive is the official home for public Grable announcements, partner news, service launches, event updates, and company milestones. Each release should be dated, factual, and connected to a source-of-truth announcement.",
    primaryCta: "Contact Grable",
    primaryHref: "/contact/",
    secondaryCta: "See company news",
    secondaryHref: "/company/news/",
    template: "resource",
    cards: [
      {
        title: "Company announcements",
        body: "Formal updates about Grable Services milestones, capabilities, leadership, and public-facing business changes.",
        href: "/company/news/"
      },
      {
        title: "Partner and alliance news",
        body: "Announcements about partner relationships, alliance activity, and ecosystem participation.",
        href: "/company/alliances/"
      },
      {
        title: "Service launches",
        body: "Public releases for new or updated offerings across Maximo, hosting, storage, AI infrastructure, and field operations.",
        href: "/services/"
      },
      {
        title: "Event announcements",
        body: "Press-ready updates for webinars, conference participation, briefings, and public sessions.",
        href: "/resources/events/"
      }
    ],
    sections: [
      {
        title: "Publication workflow",
        body: "Each release should have an owner, date, headline, boilerplate, media contact, and appropriate review before publication."
      },
      {
        title: "Archive discipline",
        body: "Press releases should remain dated and factual. Older announcements should not be silently rewritten as current claims."
      }
    ]
  }
};
