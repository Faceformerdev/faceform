import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const MediaEmbed: Block = {
  slug: 'mediaEmbed',
  interfaceName: 'MediaEmbedBlock',
  fields: [
    {
      name: 'mediaType',
      type: 'select',
      required: true,
      defaultValue: 'youtube',
      options: [
        {
          label: 'YouTube',
          value: 'youtube',
        },
        {
          label: 'Vimeo',
          value: 'vimeo',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        description: 'Enter the URL of the media to embed',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
        {
          label: 'Full Width',
          value: 'full',
        },
      ],
    },
    {
      name: 'aspectRatio',
      type: 'select',
      defaultValue: '16:9',
      options: [
        {
          label: '16:9 (Widescreen)',
          value: '16:9',
        },
        {
          label: '4:3 (Standard)',
          value: '4:3',
        },
        {
          label: '1:1 (Square)',
          value: '1:1',
        },
      ],
    },
  ],
  labels: {
    singular: 'Media Embed Block',
    plural: 'Media Embed Blocks',
  },
}
