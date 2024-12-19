import path from 'path'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  ChecklistFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import UsersCollection from '@/app/(payload)/collections/users'
import MediaCollection from '@/app/(payload)/collections/media'
import PagesCollection from '@/app/(payload)/collections/pages'
import SettingsCollection from '@/app/(payload)/collections/settings'
import NavigationsCollection from '@/app/(payload)/collections/navigations'
import SocialMediasCollection from '@/app/(payload)/collections/social-medias'
import ContactMessagesCollection from '@/app/(payload)/collections/contact-messages'
import BlogCategoriesCollection from '@/app/(payload)/collections/blog-categories'
import BlogsCollection from '@/app/(payload)/collections/blogs'
import SettingsSeed from '@/app/(payload)/seeders/settings'
import Dashboard from '@/app/(payload)/components/Dashboard'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  collections: [
    UsersCollection,
    PagesCollection,
    MediaCollection,
    SettingsCollection,
    NavigationsCollection,
    SocialMediasCollection,
    ContactMessagesCollection,
    BlogCategoriesCollection,
    BlogsCollection,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),
  // db: mongooseAdapter({
  //   url: process.env.MONGODB_URI || '',
  // }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: process.env.DEFAULT_USER_EMAIL || 'dev@payloadcms.com',
      password: process.env.DEFAULT_USER_PASSWORD || 'test',
      prefillOnly: true,
    },
    components: {
      views: {
        Dashboard: {
          Component: '/src/app/(payload)/components/Dashboard.tsx',
          path: '/dashboard',
        },
      },
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: process.env.DEFAULT_USER_EMAIL || 'dev@payloadcms.com',
          name: 'Admin',
          password: process.env.DEFAULT_USER_PASSWORD || 'test',
        },
      })
    }

    const existingSettings = await payload.find({
      collection: 'settings',
      limit: 1,
    })

    if (existingSettings.docs.length === 0) {
      SettingsSeed.map(async (setting) => {
        await payload.create({
          collection: 'settings',
          data: {
            name: setting.name,
            label: setting.label,
            value: setting.value,
          },
        })
      })
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
