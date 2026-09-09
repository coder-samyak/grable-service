import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Default meta description", type: "text", rows: 3 }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
    defineField({ name: "credentials", title: "Credential strip", type: "array", of: [{ type: "credential" }] })
  ]
});
