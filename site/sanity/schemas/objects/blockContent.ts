import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({ type: "block" }),
    defineArrayMember({ type: "image", options: { hotspot: true } })
  ]
});
