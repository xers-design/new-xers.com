import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (r) => r.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      validation: (r) => r.required(),
    },
    {
      name: "image",
      title: "Profile Image",
      type: "customImage",
      options: { hotspot: true },
      validation: (r) => r.required(),
    },
  ],
});
