export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export type PrimaryNavItem = {
  label: string;
  href: string;
  summary: string;
  seeAllLabel: string;
  sections: NavSection[];
  featured?: NavLink;
};

export const utilityNav = [
  { label: "Support", href: "/contact/support/" }
];

export const primaryNav: PrimaryNavItem[] = [
  {
    label: "Hosting",
    href: "/services/maximo-hosting/",
    summary: "Managed Maximo hosting, cloud model selection, production support, backup, recovery, and regulated hosting paths.",
    seeAllLabel: "See hosting services",
    sections: [
      {
        title: "Hosting options",
        links: [
          { label: "Maximo Hosting / MaaS", href: "/services/maximo-hosting/" },
          { label: "Managed hosting", href: "/services/maximo-hosting/managed/" },
          { label: "Infrastructure hosting", href: "/services/maximo-hosting/iaas/" },
          { label: "Platform hosting", href: "/services/maximo-hosting/paas/" }
        ]
      },
      {
        title: "Related services",
        links: [
          { label: "Commercial cloud solutions", href: "/services/commercial-cloud-solutions/" },
          { label: "High-security cloud", href: "/services/high-security-cloud/" },
          { label: "Backup and recovery", href: "/services/storage-services/backup-recovery/" },
          { label: "Security planning", href: "/legal/security/" }
        ]
      },
      {
        title: "Evaluation",
        links: [
          { label: "MAS SaaS vs BYOL vs hosting", href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/" },
          { label: "Assessments and benchmarking", href: "/solutions/assessments-benchmarking/" },
          { label: "Technology selection", href: "/solutions/technology-selection/" },
          { label: "Contact sales", href: "/contact/sales/" }
        ]
      }
    ],
    featured: {
      label: "Compare hosting models",
      href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/",
      description: "Use the comparison path to clarify SaaS, BYOL managed hosting, PaaS, and IaaS trade-offs."
    }
  },
  {
    label: "MAS 9 Upgrade",
    href: "/services/mas9-migration/",
    summary: "Readiness, migration, OpenShift, Java 17, AppPoints, integration remediation, testing, and cutover planning.",
    seeAllLabel: "See MAS 9 services",
    sections: [
      {
        title: "Migration path",
        links: [
          { label: "MAS 9 migration", href: "/services/mas9-migration/" },
          { label: "Readiness assessment", href: "/services/mas9-migration/readiness-assessment/" },
          { label: "Upgrade services", href: "/services/mas9-migration/upgrade-services/" },
          { label: "Free upgrade path", href: "/services/mas9-migration/free-upgrade/" }
        ]
      },
      {
        title: "Planning inputs",
        links: [
          { label: "AppPoints licensing guide", href: "/resources/guides/maximo-apppoints-licensing/" },
          { label: "IBM Maximo reselling", href: "/services/ibm-maximo-reselling/" },
          { label: "Integration and custom dev", href: "/services/integration-custom-dev/" },
          { label: "MAS 9 migration kit", href: "/products/mas9-migration-kit/" }
        ]
      },
      {
        title: "Operational outcomes",
        links: [
          { label: "Enterprise asset management", href: "/solutions/enterprise-asset-management/" },
          { label: "Reliability and maintenance", href: "/solutions/reliability-maintenance/" },
          { label: "Business process consulting", href: "/solutions/business-process-consulting/" },
          { label: "MRO data services", href: "/solutions/mro-data-services/" }
        ]
      }
    ],
    featured: {
      label: "Start with readiness",
      href: "/services/mas9-migration/readiness-assessment/",
      description: "Inventory dependencies and migration risk before committing scope."
    }
  },
  {
    label: "Storage",
    href: "/services/storage-services/",
    summary: "IBM Storage services, Storage as a Service, Storage Defender, backup, recovery, and data resilience.",
    seeAllLabel: "See storage services",
    sections: [
      {
        title: "Services",
        links: [
          { label: "IBM Storage Services", href: "/services/storage-services/" },
          { label: "Storage as a Service", href: "/services/storage-services/storage-as-a-service/" },
          { label: "Storage Defender", href: "/services/storage-services/storage-defender/" },
          { label: "Backup and recovery", href: "/services/storage-services/backup-recovery/" }
        ]
      },
      {
        title: "Products",
        links: [
          { label: "IBM Storage portfolio", href: "/products/ibm-storage-services/" },
          { label: "IBM Storage as a Service", href: "/products/ibm-storage-as-a-service/" },
          { label: "IBM Storage Defender", href: "/products/ibm-storage-defender/" },
          { label: "Storage guide", href: "/resources/guides/ibm-storage-as-a-service/" }
        ]
      },
      {
        title: "Evaluation",
        links: [
          { label: "STaaS vs traditional storage", href: "/resources/comparisons/storage-as-a-service-vs-traditional-storage/" },
          { label: "AI hosting", href: "/services/ai-hosting/" },
          { label: "Technology selection", href: "/solutions/technology-selection/" },
          { label: "Datasheets", href: "/resources/datasheets/" }
        ]
      }
    ],
    featured: {
      label: "Connect storage to operations",
      href: "/services/storage-services/",
      description: "Plan implementation, resilience, and support around Maximo and enterprise workloads."
    }
  },
  {
    label: "AI Hosting",
    href: "/services/ai-hosting/",
    summary: "Infrastructure and operations planning for regulated AI workloads and watsonx-aligned environments.",
    seeAllLabel: "See AI hosting services",
    sections: [
      {
        title: "AI infrastructure",
        links: [
          { label: "AI hosting", href: "/services/ai-hosting/" },
          { label: "Regulated AI workloads", href: "/services/ai-hosting/regulated-ai-workloads/" },
          { label: "watsonx infrastructure", href: "/services/ai-hosting/watsonx-infrastructure/" },
          { label: "AI on Maximo", href: "/services/ai-on-maximo/" }
        ]
      },
      {
        title: "Supporting work",
        links: [
          { label: "IBM Storage Services", href: "/services/storage-services/" },
          { label: "High-security cloud", href: "/services/high-security-cloud/" },
          { label: "Integration and custom dev", href: "/services/integration-custom-dev/" },
          { label: "AI hosting guide", href: "/resources/guides/ai-hosting-for-regulated-workloads/" }
        ]
      },
      {
        title: "Use cases",
        links: [
          { label: "Asset performance management", href: "/solutions/asset-performance-management/" },
          { label: "Business value analysis", href: "/solutions/business-value-analysis/" },
          { label: "Federal programs", href: "/federal/" },
          { label: "Manufacturing", href: "/industries/manufacturing/" }
        ]
      }
    ],
    featured: {
      label: "Plan regulated AI infrastructure",
      href: "/services/ai-hosting/regulated-ai-workloads/",
      description: "Clarify controls, data, storage, monitoring, and support before production AI scope is set."
    }
  },
  {
    label: "Federal",
    href: "/federal/",
    summary: "Public-sector buying paths, capability materials, and compliance explainers.",
    seeAllLabel: "See federal hub",
    sections: [
      {
        title: "Procurement",
        links: [
          { label: "Capability statement", href: "/federal/capability-statement/" },
          { label: "Contract vehicles", href: "/federal/contract-vehicles/" },
          { label: "Past performance", href: "/federal/past-performance/" },
          { label: "Federal contact", href: "/contact/" }
        ]
      },
      {
        title: "Compliance explainers",
        links: [
          { label: "FedRAMP overview", href: "/federal/fedramp/" },
          { label: "FedRAMP SaaS", href: "/federal/fedramp-saas/" },
          { label: "Certification page", href: "/federal/sdvosb-certification/" },
          { label: "Impact-level guide", href: "/services/maximo-on-fedramp/il-tiers/" }
        ]
      }
    ],
    featured: {
      label: "Discuss federal requirements",
      href: "/contact/",
      description: "Route public-sector Maximo and infrastructure questions through the general contact path."
    }
  },
  {
    label: "Industries",
    href: "/industries/",
    summary: "Asset-intensive industries and public-sector environments Grable supports.",
    seeAllLabel: "See all industries",
    sections: [
      {
        title: "Public sector",
        links: [
          { label: "Federal", href: "/industries/federal/" },
          { label: "Defense programs", href: "/industries/federal/dod/" },
          { label: "Navy", href: "/industries/federal/navy/" },
          { label: "Army", href: "/industries/federal/army/" },
          { label: "Air Force", href: "/industries/federal/air-force/" },
          { label: "Civilian agencies", href: "/industries/federal/federal-civilian/" }
        ]
      },
      {
        title: "Commercial verticals",
        links: [
          { label: "Electric utilities", href: "/industries/electric-utilities/" },
          { label: "Water utilities", href: "/industries/water-utilities/" },
          { label: "Oil and gas", href: "/industries/oil-gas/" },
          { label: "Life sciences", href: "/industries/life-sciences/" },
          { label: "Manufacturing", href: "/industries/manufacturing/" },
          { label: "Transportation", href: "/industries/transportation/" }
        ]
      },
      {
        title: "Additional markets",
        links: [
          { label: "Utilities", href: "/industries/utilities/" },
          { label: "Higher education", href: "/industries/higher-education/" },
          { label: "Gaming and hospitality", href: "/industries/gaming-hospitality/" },
          { label: "Maintenance service providers", href: "/industries/maintenance-service-providers/" },
          { label: "Products", href: "/products/" },
          { label: "Company", href: "/company/" }
        ]
      }
    ]
  },
  {
    label: "Resources",
    href: "/resources/",
    summary: "Guides, comparisons, tools, webinars, and proof assets for evaluation and planning.",
    seeAllLabel: "See all resources",
    sections: [
      {
        title: "Resource library",
        links: [
          { label: "Blog", href: "/resources/blog/" },
          { label: "Books", href: "/resources/books/" },
          { label: "Case studies", href: "/resources/case-studies/" },
          { label: "Whitepapers", href: "/resources/whitepapers/" },
          { label: "eBooks", href: "/resources/ebooks/" },
          { label: "Videos", href: "/resources/videos/" },
          { label: "Datasheets", href: "/resources/datasheets/" },
          { label: "Webinars", href: "/resources/webinars/" },
          { label: "On-demand webinars", href: "/resources/on-demand-webinars/" },
          { label: "Self assessments", href: "/resources/self-assessments/" }
        ]
      },
      {
        title: "Tools and guides",
        links: [
          { label: "Tools hub", href: "/resources/tools/" },
          { label: "AppPoints licensing guide", href: "/resources/guides/maximo-apppoints-licensing/" },
          { label: "Storage as a Service guide", href: "/resources/guides/ibm-storage-as-a-service/" },
          { label: "AI hosting guide", href: "/resources/guides/ai-hosting-for-regulated-workloads/" }
        ]
      },
      {
        title: "Events and comparisons",
        links: [
          { label: "Events calendar", href: "/resources/events/" },
          { label: "Past events", href: "/resources/events/past/" },
          { label: "MAS SaaS vs BYOL vs hosting", href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/" },
          { label: "STaaS vs traditional storage", href: "/resources/comparisons/storage-as-a-service-vs-traditional-storage/" }
        ]
      }
    ]
  },
  {
    label: "About",
    href: "/company/",
    summary: "Company information, leadership, partners, careers, and news.",
    seeAllLabel: "About Grable",
    sections: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/company/about/" },
          { label: "Leadership", href: "/company/leadership/" },
          { label: "Partners", href: "/company/partners/" },
          { label: "Alliances", href: "/company/alliances/" },
          { label: "Become a partner", href: "/company/become-a-partner/" },
          { label: "Careers", href: "/company/careers/" },
          { label: "News", href: "/company/news/" },
          { label: "Press releases", href: "/company/press-releases/" }
        ]
      },
      {
        title: "Contact",
        links: [
          { label: "Contact us", href: "/contact/" },
          { label: "Sales", href: "/contact/sales/" },
          { label: "Support", href: "/contact/support/" }
        ]
      }
    ]
  }
];

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Hosting", href: "/services/maximo-hosting/" },
      { label: "MAS 9 Upgrade", href: "/services/mas9-migration/" },
      { label: "Storage", href: "/services/storage-services/" },
      { label: "AI Hosting", href: "/services/ai-hosting/" }
    ]
  },
  {
    title: "Federal",
    links: [
      { label: "Federal hub", href: "/federal/" },
      { label: "Capability statement", href: "/federal/capability-statement/" },
      { label: "Contract vehicles", href: "/federal/contract-vehicles/" },
      { label: "Past performance", href: "/federal/past-performance/" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Resource library", href: "/resources/" },
      { label: "Guides", href: "/resources/guides/maximo-apppoints-licensing/" },
      { label: "Comparisons", href: "/resources/comparisons/mas-saas-vs-byol-vs-managed-hosting/" },
      { label: "Datasheets", href: "/resources/datasheets/" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about/" },
      { label: "Leadership", href: "/company/leadership/" },
      { label: "Careers", href: "/company/careers/" },
      { label: "Partners", href: "/company/partners/" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy/" },
      { label: "Terms", href: "/legal/terms/" },
      { label: "Accessibility", href: "/legal/accessibility/" },
      { label: "Security", href: "/legal/security/" }
    ]
  }
];
