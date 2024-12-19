import { CollectionConfig } from 'payload'

const SettingsCollection: CollectionConfig = {
  slug: 'settings',
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      access: {
        update: () => false,
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'value',
      type: 'textarea',
      required: false,
    },
  ],
}

export default SettingsCollection
