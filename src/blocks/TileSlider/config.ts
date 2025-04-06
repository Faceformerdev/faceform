import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TileSlider: Block = {
  slug: 'tileSlider',
  interfaceName: 'TileSliderBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'tiles',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 20,
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
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'link',
          type: 'group',
          fields: [
            {
              name: 'type',
              type: 'select',
              defaultValue: 'none',
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'Internal',
                  value: 'internal',
                },
                {
                  label: 'External',
                  value: 'external',
                },
              ],
            },
            {
              name: 'internalLink',
              type: 'relationship',
              relationTo: ['pages', 'posts'],
              admin: {
                condition: (data, siblingData) => siblingData?.type === 'internal',
              },
            },
            {
              name: 'externalLink',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.type === 'external',
              },
            },
            {
              name: 'label',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.type !== 'none',
              },
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                condition: (data, siblingData) => siblingData?.type !== 'none',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'displayOptions',
      type: 'group',
      fields: [
        {
          name: 'tilesPerView',
          type: 'select',
          defaultValue: '3',
          options: [
            {
              label: '1 Tile',
              value: '1',
            },
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
        {
          name: 'tileStyle',
          type: 'select',
          defaultValue: 'card',
          options: [
            {
              label: 'Card',
              value: 'card',
            },
            {
              label: 'Overlay',
              value: 'overlay',
            },
            {
              label: 'Minimal',
              value: 'minimal',
            },
          ],
        },
        {
          name: 'showNavigation',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Navigation Arrows',
        },
        {
          name: 'showPagination',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Pagination Dots',
        },
        {
          name: 'autoplay',
          type: 'checkbox',
          defaultValue: false,
          label: 'Autoplay Slider',
        },
        {
          name: 'autoplaySpeed',
          type: 'number',
          defaultValue: 5000,
          min: 1000,
          max: 10000,
          admin: {
            condition: (data, siblingData) => siblingData?.autoplay === true,
          },
        },
      ],
    },
    {
      name: 'background',
      type: 'select',
      defaultValue: 'none',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Primary',
          value: 'primary',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
      ],
    },
  ],
  labels: {
    singular: 'Tile Slider',
    plural: 'Tile Sliders',
  },
}
