import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const TextImage: Block = {
  slug: 'textImage',
  interfaceName: 'TextImageBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'headingLevel',
      type: 'select',
      defaultValue: 'h2',
      options: [
        {
          label: 'H1',
          value: 'h1',
        },
        {
          label: 'H2',
          value: 'h2',
        },
        {
          label: 'H3',
          value: 'h3',
        },
        {
          label: 'H4',
          value: 'h4',
        },
        {
          label: 'H5',
          value: 'h5',
        },
        {
          label: 'H6',
          value: 'h6',
        },
      ],
      label: 'Heading Level',
    },
    {
      name: 'text',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: 'mediaPosition',
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
    },
    {
      name: 'imageSize',
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
      ],
    },
    {
      name: 'borderRadius',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'None',
          value: 'none',
        },
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
          label: 'Full',
          value: 'full',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      options: [
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Gray',
          value: 'gray',
        },
        {
          label: 'Primary',
          value: 'primary',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
        {
          label: 'Accent',
          value: 'accent',
        },
        {
          label: 'Custom',
          value: 'custom',
        },
      ],
    },
    {
      name: 'customBackgroundColor',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData.backgroundColor === 'custom',
        description:
          'Enter a valid CSS color value (hex, rgb, rgba, etc.) Faceformer grün: #81c642',
      },
    },
  ],
  labels: {
    singular: 'Farbiger Hintergrund',
    plural: 'Farbiger Hintergrund',
  },
}
