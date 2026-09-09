import { defineType, defineField } from "sanity";

export default defineType({
  name: "credential",
  title: "Credential",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "value", title: "Value", type: "string", validation: (r) => r.required() })
  ]
});
