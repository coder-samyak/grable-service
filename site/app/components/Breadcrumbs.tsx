import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "../lib/schema";

type BreadcrumbsProps = {
  items: { name: string; href: string }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length < 2) return null;

  return (
    <>
      <nav aria-label="Breadcrumb" className="breadcrumbs wrap">
        {items.map((item, index) => (
          <span key={item.href}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? <span>{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
          </span>
        ))}
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
