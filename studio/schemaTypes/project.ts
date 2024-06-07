import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'customImage',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'featuredImageMobile',
      title: 'Featured Image (Mobile)',
      type: 'customImage',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'customImage',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      of: [{ type: 'platform' }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'devPartner',
      title: 'Development Partner',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'market',
      title: 'Market',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'highlight' }],
    }),
    defineField({
      name: 'challengeImage',
      title: 'Challenge Image',
      type: 'customImage',
      options: { hotspot: true },
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'challenge' }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'outroImage',
      title: 'Outro Image',
      type: 'customImage',
      validation: (r) => r.required(),
    }),
  ],
});
