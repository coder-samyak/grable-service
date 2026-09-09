import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { routeContent } from "../data/routeContent";
import { siteRoutes } from "../data/site";

type CatchAllProps = {
  params: Promise<{
    slug: string[];
  }>;
};

function titleFromRoute(route: string) {
  const lastSegment = route
    .split("/")
    .filter(Boolean)
    .at(-1);

  if (!lastSegment) return "Planned page";

  return lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return siteRoutes
    .filter((route) => route !== "/")
    .map((route) => ({
      slug: route.split("/").filter(Boolean)
    }));
}

export async function generateMetadata({ params }: CatchAllProps): Promise<Metadata> {
  const { slug } = await params;
  const route = `/${slug.join("/")}/`;
  const content = routeContent[route];

  if (!content) {
    return {
      title: titleFromRoute(route),
      description: "Grable Services page."
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: route
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: route
    }
  };
}

export default async function PlannedRoutePage({ params }: CatchAllProps) {
  const { slug } = await params;
  const route = `/${slug.join("/")}/`;

  if (!siteRoutes.includes(route)) {
    notFound();
  }

  const content = routeContent[route];

  if (!content) {
    notFound();
  }

  return (
    <PageShell
      {...content}
      route={route}
    />
  );
}
