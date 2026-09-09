import { defineType, defineField } from "sanity";

export default defineType({
  name: "cta",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", title: "Href", type: "string", validation: (r) => r.required() })
  ]
});
