import type { Block } from 'payload'

export const Header: Block = {
  slug: 'header',
  interfaceName: 'HeaderBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: false,
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'large',
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
      name: 'background',
      type: 'group',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'color',
          options: [
            {
              label: 'Color',
              value: 'color',
            },
            {
              label: 'Image',
              value: 'image',
            },
          ],
        },
        {
          name: 'color',
          type: 'select',
          defaultValue: 'transparent',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'color',
          },
          options: [
            {
              label: 'Transparent',
              value: 'transparent',
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
              label: 'Muted',
              value: 'muted',
            },
            {
              label: 'Custom',
              value: 'custom',
            },
          ],
        },
        {
          name: 'customColor',
          type: 'text',
          admin: {
            condition: (data, siblingData) =>
              siblingData?.type === 'color' && siblingData?.color === 'custom',
            description: 'Enter a hex color code (e.g., #FF0000)',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'image',
            description: 'Upload or select an image for the header background',
          },
        },
        {
          name: 'imagePosition',
          type: 'select',
          defaultValue: 'center',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'image',
          },
          options: [
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Top',
              value: 'top',
            },
            {
              label: 'Bottom',
              value: 'bottom',
            },
          ],
        },
        {
          name: 'overlayOpacity',
          type: 'select',
          defaultValue: 'none',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'image',
          },
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
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Dark',
              value: 'dark',
            },
          ],
        },
      ],
    },
    {
      name: 'padding',
      type: 'select',
      defaultValue: 'normal',
      options: [
        {
          label: 'Compact',
          value: 'compact',
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
  ],
  labels: {
    singular: 'Header Block',
    plural: 'Header Blocks',
  },
}
