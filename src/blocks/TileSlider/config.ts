import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const TileSlider: Block = {
  slug: 'tileSlider',
  interfaceName: 'TileSliderBlock',
  fields: [
    {
      name: 'tiles',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({}),
          required: true,
        },
      ],
    },
    {
      name: 'tilesPerView',
      type: 'select',
      defaultValue: '4',
      options: [
        {
          label: '2 Tiles',
          value: '2',
        },
        {
          label: '3 Tiles',
          value: '3',
        },
        {
          label: '4 Tiles',
          value: '4',
        },
        {
          label: '5 Tiles',
          value: '5',
        },
      ],
    },
    {
      name: 'tileHeight',
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
  ],
  labels: {
    singular: 'Tile Slider Block',
    plural: 'Tile Slider Blocks',
  },
}
