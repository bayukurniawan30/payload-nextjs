import { CollectionConfig } from 'payload'

const UsersCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: () => false,
    update: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

export default UsersCollection
