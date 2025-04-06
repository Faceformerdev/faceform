import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import { CMSLink } from '../../components/Link'
import { TextImageBlock } from '../TextImageBlock/Component'
import { MediaBlock } from '../MediaBlock/Component'
import { CallToActionBlock } from '../CallToAction/Component'
import { MediaTextBlock } from '../MediaTextBlock/Component'
import { SplitScreenBlock } from '../SplitScreen/Component'
import { MediaEmbedBlock } from '../MediaEmbed/Component'
import { HeaderBlock } from '../Header/Component'

type BackgroundColor = 'primary' | 'secondary' | 'accent' | 'light-gray' | 'dark-gray'
type PaddingSize = 'small' | 'normal' | 'large'
type ColumnSize = 'full' | 'half' | 'oneThird' | 'twoThirds'

interface Column {
  size: ColumnSize
  contentType: string
  richText?: any
  textImage?: any
  mediaBlock?: any
  cta?: any
  mediaText?: any
  splitScreen?: any
  mediaEmbed?: any
  header?: any
  enableLink?: boolean
  link?: any
}

interface ColorBackgroundBlockProps {
  columns: Column[]
  backgroundColor: BackgroundColor
  padding: PaddingSize
}

export const ColorBackgroundBlock: React.FC<ColorBackgroundBlockProps> = (props) => {
  const { columns, backgroundColor, padding } = props

  const colsSpanClasses: Record<ColumnSize, string> = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  const paddingClasses: Record<PaddingSize, string> = {
    small: 'py-8',
    normal: 'py-16',
    large: 'py-24',
  }

  const bgColorClasses: Record<BackgroundColor, string> = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    'light-gray': 'bg-gray-100',
    'dark-gray': 'bg-gray-800',
  }

  // Function to render the appropriate component based on contentType
  const renderContent = (col: Column) => {
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
      default:
        return null
    }
  }

  return (
    <div className={cn('w-full', bgColorClasses[backgroundColor], paddingClasses[padding])}>
      <div className="container">
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { size } = col

              return (
                <div
                  className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size]}`, {
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
    </div>
  )
}
