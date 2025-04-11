// src/collections/Posts.ts
import { CollectionConfig } from 'payload';
import { lexicalEditor, LinkFeature} from '@payloadcms/richtext-lexical';
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    enableRichTextLink: true,
    enableRichTextRelationship: true,

  },
  access: {
    // Allow everyone to read posts—adjust as needed.
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
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
      unique: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          LinkFeature({
            // Specify collections for internal linking if needed
            enabledCollections: ['posts'],
          }),
        ],
      }),
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media', // Make sure you have a Media collection for uploads.
      required: false,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { value: 'draft', label: 'Draft' },
        { value: 'published', label: 'Published' },
        { value: 'archived', label: 'Archived' },
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: false,
    },
  ],
};