import { siteRoutes } from "../data/site";

export function GET() {
  const body = [
    "# Grable Services",
    "",
    "Grable Services provides IBM Maximo services for MAS 9 migration, Maximo hosting, federal deployment planning federal deployments, integrations, AI on Maximo, and mobile field operations.",
    "",
    "## Key Pages",
    ...siteRoutes.map((route) => `- https://grableservices.com${route}`),
    "",
    "## Entity Notes",
    "- Company: Grable Services",
    "- Category: IBM Maximo consulting, hosting, migration, and managed services",
    "- Public sector details should use current public language.",
    "- Claims should be verified against current source documents before citation."
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
