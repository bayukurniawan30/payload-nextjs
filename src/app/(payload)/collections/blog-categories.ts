import { CollectionConfig } from 'payload'

const BlogCategoriesCollection: CollectionConfig = {
  slug: 'blog-categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      hooks: {
        beforeChange: [
          ({ value, operation }) => {
            if (operation === 'create') {
              return value.toLowerCase().replace(/ /g, '-')
            }
            return value
          },
        ],
      },
    },
  ],
}

export default BlogCategoriesCollection
