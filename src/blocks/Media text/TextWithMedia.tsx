import { Block } from 'payload'

export const MediaText: Block = {
  slug: 'MediaText',
  fields: [
    {
      type: 'richText',
      name: 'content',
    },
    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
    },
    {
      type: 'radio',
      name: 'textPosition',
      options: ['Left', 'Right'],
    },
  ],
}
