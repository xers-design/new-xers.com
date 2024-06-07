import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageHome',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Data from active document will show on the website.',
      initialValue: false,
      validation: (r) => r.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    },
    {
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{ type: 'customImage' }],
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'highlight' }],
    },
    {
      name: 'videoOne',
      title: 'Video One',
      type: 'video',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    },
    {
      name: 'videoTwo',
      title: 'Video Two',
      type: 'video',
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     isActive: 'isActive',
  //     media: 'imagesDesktop.image',
  //   },
  //   prepare(selection) {
  //     const subtitle = selection.isActive ? 'active' : 'not active';
  //     return { ...selection, subtitle };
  //   },
  // },
});
