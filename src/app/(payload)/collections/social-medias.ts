import { CollectionConfig } from 'payload'

const SocialMediasCollection: CollectionConfig = {
  slug: 'social-medias',
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
      name: 'url',
      type: 'text',
      required: false,
    },
  ],
}

export default SocialMediasCollection
