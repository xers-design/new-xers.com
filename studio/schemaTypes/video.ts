import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: { accept: 'video/*' },
      validation: (r) => r.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'customImage',
      options: { hotspot: true },
      validation: (r) => r.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
    },
  ],
});
