import type { Metadata } from "next";

const baseUrl = "https://grableservices.com";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const normalizedPath = path.endsWith("/") ? path : `${path}/`;
  const url = `${baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Grable Services",
      type: "website"
    }
  };
}
