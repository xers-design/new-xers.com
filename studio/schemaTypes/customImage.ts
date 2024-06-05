import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Image',
  name: 'customImage',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
});
