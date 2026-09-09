import { defineType, defineField } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Menu title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "items", title: "Items", type: "array", of: [{ type: "cta" }] })
  ]
});
