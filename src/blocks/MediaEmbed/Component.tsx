import React from 'react'
import { cn } from '@/utilities/ui'

type Props = {
  mediaType: 'youtube' | 'vimeo' | 'other'
  url: string
  title: string
  description?: string
  aspectRatio: '16:9' | '4:3' | '1:1'
  size?: 'small' | 'medium' | 'large' | 'full'
  className?: string
}

export const MediaEmbedBlock: React.FC<Props> = ({
  mediaType,
  url,
  title,
  description,
  aspectRatio,
  size = 'medium',
  className,
}) => {
  const getEmbedUrl = (url: string, type: string) => {
    if (type === 'youtube') {
      const videoId = url.match(
        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]*)/,
      )?.[1]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }
    if (type === 'vimeo') {
      const videoId = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1]
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url
    }
    return url
  }

  const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
  }

  const sizeClasses = {
    small: 'max-w-2xl',
    medium: 'max-w-4xl',
    large: 'max-w-6xl',
    full: 'max-w-full',
  }

  return (
    <div className={cn('container my-16', className)}>
      <div className={cn('mx-auto', sizeClasses[size])}>
        <div
          className={cn(
            'relative w-full overflow-hidden rounded-lg',
            aspectRatioClasses[aspectRatio],
          )}
        >
          <iframe
            src={getEmbedUrl(url, mediaType)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      </div>
    </div>
  )
}
