import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import type { ContentBlock as ContentBlockProps } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { TextImageBlock } from '../TextImageBlock/Component'
import { MediaBlock } from '../MediaBlock/Component'
import { CallToActionBlock } from '../CallToAction/Component'
import { MediaTextBlock } from '../MediaTextBlock/Component'
import { SplitScreenBlock } from '../SplitScreen/Component'
import { MediaEmbedBlock } from '../MediaEmbed/Component'
import { HeaderBlock } from '../Header/Component'
import { ButtonBlock } from '../Button/Component'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  // Function to render the appropriate component based on contentType
  const renderContent = (col: any) => {
    const {
      contentType,
      richText,
      textImage,
      mediaBlock,
      cta,
      mediaText,
      splitScreen,
      mediaEmbed,
      header,
      button,
      enableLink,
      link,
    } = col

    switch (contentType) {
      case 'richText':
        return (
          <>
            {richText && <RichText data={richText} enableGutter={false} />}
            {enableLink && <CMSLink {...link} />}
          </>
        )
      case 'textImage':
        return textImage && <TextImageBlock {...textImage} />
      case 'mediaBlock':
        return mediaBlock && <MediaBlock {...mediaBlock} />
      case 'cta':
        return cta && <CallToActionBlock {...cta} />
      case 'mediaText':
        return mediaText && <MediaTextBlock {...mediaText} />
      case 'splitScreen':
        return splitScreen && <SplitScreenBlock {...splitScreen} />
      case 'mediaEmbed':
        return mediaEmbed && <MediaEmbedBlock {...mediaEmbed} />
      case 'header':
        return header && <HeaderBlock {...header} />
      case 'button':
        return button && <ButtonBlock {...button} />
      default:
        return null
    }
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { size } = col

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {renderContent(col)}
              </div>
            )
          })}
      </div>
    </div>
  )
}
