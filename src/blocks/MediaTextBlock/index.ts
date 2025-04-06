import { Block } from 'payload'
import { MediaTextBlock as MediaTextBlockComponent } from './Component'

export const MediaTextBlock: Block = {
  slug: 'mediaText',
  labels: {
    singular: 'Media Text Block',
    plural: 'Media Text Blocks',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Media',
    },
    {
      name: 'text',
      type: 'richText',
      required: true,
      label: 'Text Content',
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
      label: 'Media Position',
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
      label: 'Image Size',
    },
  ],
}

export { MediaTextBlockComponent }
