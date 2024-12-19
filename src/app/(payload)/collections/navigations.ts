import { CollectionConfig } from 'payload'

const NavigationsCollection: CollectionConfig = {
  slug: 'navigations',
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
      name: 'link',
      type: 'text',
      required: true,
    },
    {
      name: 'ordering',
      type: 'number',
      required: false,
      defaultValue: 0,
    },
  ],
}

export default NavigationsCollection
