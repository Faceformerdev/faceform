import React from 'react'
import { Media } from '@/payload-types'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'

type Props = {
  media: Media
  text: any
  mediaPosition: 'left' | 'right'
  imageSize: 'small' | 'medium' | 'large'
}

export const MediaTextBlock: React.FC<Props> = ({
  media,
  text,
  mediaPosition,
  imageSize = 'medium',
}) => {
  // Define size classes for different image sizes
  const sizeClasses = {
    small: 'md:w-1/3',
    medium: 'md:w-1/2',
    large: 'md:w-2/3',
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            'grid gap-8 items-center',
            'flex flex-col md:flex-row',
            mediaPosition === 'right' ? 'md:flex-row-reverse' : '',
          )}
        >
          <div className={cn('relative aspect-video', sizeClasses[imageSize])}>
            {media?.url && (
              <img
                src={media.url}
                alt={media.alt || ''}
                className="object-cover w-full h-full rounded-lg"
              />
            )}
          </div>
          <div
            className={cn(
              'prose prose-lg max-w-none',
              imageSize === 'small' ? 'md:w-2/3' : 'md:w-1/2',
            )}
          >
            <RichText data={text} />
          </div>
        </div>
      </div>
    </div>
  )
}
