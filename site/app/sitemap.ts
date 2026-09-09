import type { MetadataRoute } from "next";
import { siteRoutes } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: `https://grableservices.com${route}`,
    lastModified: new Date()
  }));
}

