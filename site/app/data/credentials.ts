export type CredentialItem = {
  title: string;
  body: string;
  icon: string;
  status: "public" | "pending";
};

export const credentialItems: CredentialItem[] = [
  {
    title: "Business certification",
    body: "Small-business and procurement details are provided through direct federal intake with the current supporting records.",
    icon: "/icons/credential-certificate.svg",
    status: "public"
  },
  {
    title: "IBM delivery ecosystem",
    body: "IBM-aligned consulting, licensing, storage, hosting, and Maximo delivery support are connected through one accountable team.",
    icon: "/icons/credential-partner.svg",
    status: "public"
  },
  {
    title: "Cloud and hosting posture",
    body: "Hosting work is scoped around access, backup, recovery, monitoring, patching, and operational ownership requirements.",
    icon: "/icons/credential-cloud.svg",
    status: "public"
  },
  {
    title: "Security practices",
    body: "Security planning emphasizes least-privilege access, documented controls, operational runbooks, and clear escalation paths.",
    icon: "/icons/credential-shield.svg",
    status: "public"
  },
  {
    title: "Standards alignment",
    body: "Delivery planning maps technical work to industry, reliability, validation, and public-sector requirements where they apply.",
    icon: "/icons/credential-standards.svg",
    status: "public"
  }
];
