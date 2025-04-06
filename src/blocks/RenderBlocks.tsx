import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MediaTextBlock } from '@/blocks/MediaTextBlock/Component'
import { SplitScreenBlock } from '@/blocks/SplitScreen/Component'
import { MediaEmbedBlock } from '@/blocks/MediaEmbed/Component'
import { HeaderBlock } from '@/blocks/Header/Component'
import { TextImageBlock } from '@/blocks/TextImageBlock/Component'
import { ColorBackgroundBlock } from '@/blocks/ColorBackgroundBlock/Component'
import { TileSliderBlock } from '@/blocks/TileSlider/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  mediaText: MediaTextBlock,
  splitScreen: SplitScreenBlock,
  mediaEmbed: MediaEmbedBlock,
  header: HeaderBlock,
  textImage: TextImageBlock,
  colorBackground: ColorBackgroundBlock,
  tileSlider: TileSliderBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <div>
        {blocks.map((block, i) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            return <Block key={`block-${i}`} {...block} />
          }

          return null
        })}
      </div>
    )
  }

  return null
}
