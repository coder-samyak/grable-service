import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "stats", title: "Stats", type: "array", of: [{ type: "stat" }] }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ]
});
