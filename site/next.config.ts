import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Keep the Sanity Studio toolkit out of the server bundle so React's
  // createContext resolves correctly (avoids "createContext is not a function").
  serverExternalPackages: ["sanity", "@sanity/vision", "@sanity/ui", "styled-components"],
  async redirects() {
    return [
      { source: "/cloud-solutions/", destination: "/services/maximo-hosting/", permanent: true },
      { source: "/ibm-maximo-in-the-cloud/", destination: "/services/maximo-hosting/", permanent: true },
      { source: "/maximo-as-a-services/", destination: "/services/maximo-hosting/managed/", permanent: true },
      { source: "/saas-gxp-and-the-cloud/", destination: "/industries/life-sciences/gxp-validated-maximo/", permanent: true },
      { source: "/validated-maximo-solutions/", destination: "/industries/life-sciences/validated-maximo/", permanent: true },
      { source: "/fedramp-saas-fedramp-ias/", destination: "/federal/fedramp-saas/", permanent: true },
      { source: "/laas/", destination: "/services/maximo-hosting/iaas/", permanent: true },
      { source: "/paas/", destination: "/services/maximo-hosting/paas/", permanent: true },
      { source: "/ac-dc-mobile-solution/", destination: "/products/acdc-mobile/", permanent: true },
      { source: "/mobile-asset-data-collection/", destination: "/products/acdc-mobile/", permanent: true },
      { source: "/careers/", destination: "/company/careers/", permanent: true },
      { source: "/contact-us/", destination: "/contact/", permanent: true },
      { source: "/privacy-policy/", destination: "/legal/privacy/", permanent: true },
      { source: "/products-services/", destination: "/services/", permanent: true },
      { source: "/maximo-free-upgrade/", destination: "/services/mas9-migration/free-upgrade/", permanent: true },
      { source: "/fedramp/", destination: "/federal/", permanent: true },
      { source: "/blog/", destination: "/resources/blog/", permanent: true },
      { source: "/about/", destination: "/company/about/", permanent: true },
      { source: "/team/", destination: "/company/leadership/", permanent: true },
      { source: "/case-studies/", destination: "/resources/case-studies/", permanent: true },
      { source: "/news/", destination: "/company/news/", permanent: true },
      { source: "/feed/", destination: "/resources/blog/rss.xml", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true }
    ];
  }
};

export default nextConfig;

