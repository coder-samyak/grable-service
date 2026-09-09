import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
    defineField({ name: "faqs", title: "FAQs", type: "array", of: [{ type: "faq" }] }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ]
});
