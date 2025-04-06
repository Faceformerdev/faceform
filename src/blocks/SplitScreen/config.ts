import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const SplitScreen: Block = {
  slug: 'splitScreen',
  interfaceName: 'SplitScreenBlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'timelineItems',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'iconType',
          type: 'select',
          required: true,
          defaultValue: 'image',
          options: [
            {
              label: 'Image',
              value: 'image',
            },
            {
              label: 'Icon',
              value: 'icon',
            },
          ],
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (data, siblingData) => siblingData?.iconType === 'image',
          },
        },
        {
          name: 'iconName',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter the Lucide icon name (e.g., "User", "Settings", "Mail")',
            condition: (data, siblingData) => siblingData?.iconType === 'icon',
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
          required: true,
        },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      required: true,
    },
  ],
  labels: {
    singular: 'Split Screen',
    plural: 'Split Screens',
  },
}
