import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { TextImage } from '../TextImageBlock'
import { MediaBlock } from '../MediaBlock/config'
import { CallToAction } from '../CallToAction/config'
import { MediaTextBlock } from '../MediaTextBlock'
import { SplitScreen } from '../SplitScreen'
import { MediaEmbed } from '../MediaEmbed'
import { Header } from '../Header'
import { Button } from '../Button'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        label: 'One Third',
        value: 'oneThird',
      },
      {
        label: 'Half',
        value: 'half',
      },
      {
        label: 'Two Thirds',
        value: 'twoThirds',
      },
      {
        label: 'Full',
        value: 'full',
      },
    ],
  },
  {
    name: 'contentType',
    type: 'select',
    defaultValue: 'richText',
    options: [
      {
        label: 'Rich Text',
        value: 'richText',
      },
      {
        label: 'Text Image Block',
        value: 'textImage',
      },
      {
        label: 'Media Block',
        value: 'mediaBlock',
      },
      {
        label: 'Call to Action',
        value: 'cta',
      },
      {
        label: 'Media Text Block',
        value: 'mediaText',
      },
      {
        label: 'Split Screen',
        value: 'splitScreen',
      },
      {
        label: 'Media Embed',
        value: 'mediaEmbed',
      },
      {
        label: 'Header',
        value: 'header',
      },
      {
        label: 'Button',
        value: 'button',
      },
    ],
  },
  {
    name: 'richText',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ]
      },
    }),
    label: 'Rich Text Content',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'richText',
    },
  },
  {
    name: 'textImage',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'textImage',
    },
    fields: TextImage.fields,
  },
  {
    name: 'mediaBlock',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'mediaBlock',
    },
    fields: MediaBlock.fields,
  },
  {
    name: 'cta',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'cta',
    },
    fields: CallToAction.fields,
  },
  {
    name: 'mediaText',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'mediaText',
    },
    fields: MediaTextBlock.fields,
  },
  {
    name: 'splitScreen',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'splitScreen',
    },
    fields: SplitScreen.fields,
  },
  {
    name: 'mediaEmbed',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'mediaEmbed',
    },
    fields: MediaEmbed.fields,
  },
  {
    name: 'header',
    type: 'group',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'header',
    },
    fields: Header.fields,
  },
  {
    name: 'button',
    type: 'group',
    fields: Button.fields,
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'button',
    },
  },
  {
    name: 'enableLink',
    type: 'checkbox',
    admin: {
      condition: (_, siblingData) => siblingData?.contentType === 'richText',
    },
  },
  link({
    overrides: {
      admin: {
        condition: (_data, siblingData) => {
          return Boolean(siblingData?.enableLink) && siblingData?.contentType === 'richText'
        },
      },
    },
  }),
]

export const ColorBackgroundBlock: Block = {
  slug: 'colorBackground',
  interfaceName: 'ColorBackgroundBlock',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      required: true,
      options: [
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
          label: 'Light Gray',
          value: 'light-gray',
        },
        {
          label: 'Dark Gray',
          value: 'dark-gray',
        },
      ],
    },
    {
      name: 'padding',
      type: 'select',
      defaultValue: 'normal',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
  labels: {
    singular: 'Color Background Block',
    plural: 'Color Background Blocks',
  },
}
