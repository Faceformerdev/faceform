import React from 'react'
import { Media } from '@/payload-types'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import Image from 'next/image'

type Props = {
  media: Media
  text: any
  heading?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  mediaPosition: 'left' | 'right'
  imageSize: 'small' | 'medium' | 'large'
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'full'
  backgroundColor?: 'white' | 'gray' | 'primary' | 'secondary' | 'accent' | 'custom'
  customBackgroundColor?: string
  className?: string
}

export const TextImageBlock: React.FC<Props> = ({
  media,
  text,
  heading,
  headingLevel = 'h2',
  mediaPosition,
  imageSize = 'medium',
  borderRadius = 'medium',
  backgroundColor = 'white',
  customBackgroundColor,
  className,
}) => {
  // Define size classes for different image sizes
  const sizeClasses = {
    small: 'md:w-1/3',
    medium: 'md:w-1/2',
    large: 'md:w-2/3',
  }

  // Define background color classes
  const bgColorClasses = {
    white: 'bg-white',
    gray: 'bg-gray-100',
    primary: 'bg-primary/10',
    secondary: 'bg-secondary/10',
    accent: 'bg-accent/10',
    custom: '',
  }

  // Define border radius classes
  const borderRadiusClasses = {
    none: 'rounded-none',
    small: 'rounded-md',
    medium: 'rounded-xl',
    large: 'rounded-2xl',
    full: 'rounded-full',
  }

  // Get the background style based on the selected color
  const getBackgroundStyle = () => {
    if (backgroundColor === 'custom' && customBackgroundColor) {
      return { backgroundColor: customBackgroundColor }
    }
    return {}
  }

  // Check if media exists
  const hasMedia = !!media?.url

  // Render the heading based on the specified level
  const renderHeading = () => {
    if (!heading) return null

    // Define size classes for different heading levels
    const headingSizeClasses = {
      h1: 'text-4xl md:text-5xl font-bold',
      h2: 'text-3xl md:text-4xl font-bold',
      h3: 'text-2xl md:text-3xl font-bold',
      h4: 'text-xl md:text-2xl font-bold',
      h5: 'text-lg md:text-xl font-bold',
      h6: 'text-base md:text-lg font-bold',
    }

    switch (headingLevel) {
      case 'h1':
        return <h1 className={`mb-4 ${headingSizeClasses.h1}`}>{heading}</h1>
      case 'h2':
        return <h2 className={`mb-4 ${headingSizeClasses.h2}`}>{heading}</h2>
      case 'h3':
        return <h3 className={`mb-4 ${headingSizeClasses.h3}`}>{heading}</h3>
      case 'h4':
        return <h4 className={`mb-4 ${headingSizeClasses.h4}`}>{heading}</h4>
      case 'h5':
        return <h5 className={`mb-4 ${headingSizeClasses.h5}`}>{heading}</h5>
      case 'h6':
        return <h6 className={`mb-4 ${headingSizeClasses.h6}`}>{heading}</h6>
      default:
        return <h2 className={`mb-4 ${headingSizeClasses.h2}`}>{heading}</h2>
    }
  }

  return (
    <div className="py-12">
      <div className="container mx-auto max-w-7.5xl">
        <div
          className={cn(
            'grid gap-8 items-center p-8',
            borderRadiusClasses[borderRadius],
            bgColorClasses[backgroundColor],
            'border-2 border-black',
            className,
          )}
          style={getBackgroundStyle()}
        >
          <div
            className={cn(
              'flex flex-col md:flex-row gap-8 items-center',
              mediaPosition === 'right' ? 'md:flex-row-reverse' : '',
            )}
          >
            {hasMedia && (
              <div
                className={cn(
                  'relative aspect-video rounded-lg overflow-hidden',
                  sizeClasses[imageSize],
                )}
              >
                <Image
                  src={media.url || ''}
                  alt={media.alt || ''}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover shadow-lg"
                  priority={false}
                />
              </div>
            )}
            <div
              className={cn(
                'w-full',
                hasMedia ? (imageSize === 'small' ? 'md:w-2/3' : 'md:w-1/2') : 'w-full',
              )}
            >
              {renderHeading()}
              <RichText data={text} enableGutter={false} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
