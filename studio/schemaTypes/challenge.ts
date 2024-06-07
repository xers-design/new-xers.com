import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'challenge',
  title: 'Challenge',
  type: 'object',
  fields: [
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      validation: (r) => r.required(),
    }),
  ],
});
