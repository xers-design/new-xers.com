import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'highlight',
  title: 'Highlight',
  type: 'object',
  fields: [
    {
      name: 'verb',
      title: 'Verb',
      type: 'string',
      validation: (r) => r.required(),
    },
    {
      name: 'number',
      title: 'Number',
      type: 'string',
      validation: (r) => r.required(),
    },
    {
      name: 'noun',
      title: 'Noun',
      type: 'string',
      validation: (r) => r.required(),
    },
  ],
});
