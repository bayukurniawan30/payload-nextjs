import { CollectionConfig } from 'payload'

const MediaCollection: CollectionConfig = {
  slug: 'media',
  upload: true,
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}

export default MediaCollection
