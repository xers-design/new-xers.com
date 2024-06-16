import { defineType, defineField } from "sanity";

export default defineType({
  title: "Bro",
  name: "bro",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    {
      name: "image",
      title: "Profile Image",
      type: "customImage",
      options: { hotspot: true, metadata: ["lqip"] },
      validation: (r) => r.required(),
    },
    defineField({
      name: "pillShapeText",
      title: "Text in Pill Shape",
      type: "string",
    }),
    {
      name: "positions",
      title: "Positions",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().max(2),
    },
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image.image",
      subtitle: "pillShapeText",
    },
  },
});
