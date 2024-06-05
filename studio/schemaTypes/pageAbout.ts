import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
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
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bros',
      title: 'Bros',
      type: 'array',
      of: [{ type: 'bro' }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'visionBody',
      title: 'Vision Body',
      type: 'text',
      validation: (r) => r.required(),
    }),
    {
      name: 'video',
      title: 'Video',
      type: 'video',
    },
    defineField({
      name: 'imagesDesktop',
      title: 'Desktop Images',
      description: 'One large of image of images.',
      type: 'customImage',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imagesMobile',
      title: 'Mobile Image',
      type: 'array',
      of: [{ type: 'customImage', options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
      media: 'imagesDesktop.image',
    },
    prepare(selection) {
      const subtitle = selection.isActive ? 'active' : 'not active';
      return { ...selection, subtitle };
    },
  },
});
