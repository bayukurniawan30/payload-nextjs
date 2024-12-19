import { CollectionConfig } from 'payload'

const BlogsCollection: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'blog-categories',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      (args) => {
        args.data.slug = args.data.name.toLowerCase().replace(/ /g, '-')
      },
    ],
  },
}

export default BlogsCollection
