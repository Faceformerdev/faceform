import type { Block } from 'payload'

import { ButtonBlock } from './Component'

export const Button: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'group',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
        },
      ],
    },
    {
      name: 'color',
      type: 'select',
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
          label: 'Custom',
          value: 'custom',
        },
      ],
      required: true,
    },
    {
      name: 'customColor',
      type: 'text',
      admin: {
        condition: (data, siblingData) => {
          return siblingData?.color === 'custom'
        },
      },
    },
    {
      name: 'textColor',
      type: 'select',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Black',
          value: 'black',
        },
        {
          label: 'Custom',
          value: 'custom',
        },
      ],
      required: true,
    },
    {
      name: 'customTextColor',
      type: 'text',
      admin: {
        condition: (data, siblingData) => {
          return siblingData?.textColor === 'custom'
        },
      },
    },
    {
      name: 'size',
      type: 'select',
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
      required: true,
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        {
          label: 'Solid',
          value: 'solid',
        },
        {
          label: 'Outline',
          value: 'outline',
        },
        {
          label: 'Ghost',
          value: 'ghost',
        },
      ],
      required: true,
    },
    {
      name: 'borderRadius',
      type: 'select',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Extra Small',
          value: 'xs',
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
          label: 'Extra Large',
          value: 'xl',
        },
        {
          label: 'Full',
          value: 'full',
        },
      ],
      required: true,
      defaultValue: 'medium',
    },
  ],
  labels: {
    singular: 'Button',
    plural: 'Buttons',
  },
}
