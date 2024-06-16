import { defineType, defineField } from "sanity";

export default defineType({
  name: "platform",
  title: "Platform",
  type: "object",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
      validation: (r) => r.required(),
    },
    defineField({
      name: "imagesDesktop",
      title: "Desktop Images",
      description: "One large of image of images.",
      type: "customImage",
      options: { hotspot: true },
    }),
    defineField({
      name: "imagesMobile",
      title: "Mobile Image",
      type: "array",
      of: [{ type: "customImage", options: { hotspot: true } }],
    }),
  ],
});
