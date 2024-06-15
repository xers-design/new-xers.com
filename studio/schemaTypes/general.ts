import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Data from active document will show on the website.',
      initialValue: false,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'General',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'navbarImage',
      title: 'Navbar Image',
      type: 'customImage',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'to',
              title: 'Link',
              type: 'url',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              validation: (r) => r.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
