import React from 'react'
import { cn } from '@/utilities/ui'
import { Media } from '@/payload-types'

type BackgroundProps = {
  type: 'color' | 'image'
  color: 'transparent' | 'primary' | 'secondary' | 'muted' | 'custom'
  customColor?: string
  image?: Media
  imagePosition: 'center' | 'top' | 'bottom'
  overlayOpacity: 'none' | 'light' | 'medium' | 'dark'
}

type Props = {
  title: string
  subtitle?: string
  alignment: 'left' | 'center' | 'right'
  size: 'small' | 'medium' | 'large'
  background: BackgroundProps
  padding: 'compact' | 'normal' | 'large'
}

export const HeaderBlock: React.FC<Props> = ({
  title,
  subtitle,
  alignment,
  size,
  background,
  padding,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const sizeClasses = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl lg:text-6xl',
  }

  const backgroundClasses = {
    transparent: 'bg-transparent',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    muted: 'bg-muted text-muted-foreground',
    custom: '',
  }

  const paddingClasses = {
    compact: 'py-4',
    normal: 'py-8',
    large: 'py-12 md:py-16',
  }

  const overlayClasses = {
    none: '',
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
  }

  const imagePositionClasses = {
    center: 'bg-center',
    top: 'bg-top',
    bottom: 'bg-bottom',
  }

  const useWhiteText =
    background.type === 'image' ||
    (background.type === 'color' && background.color === 'custom' && background.customColor)

  return (
    <div
      className={cn(
        'w-full relative -mt-[3rem]',
        background.type === 'color' &&
          background.color !== 'custom' &&
          backgroundClasses[background.color],
        paddingClasses[padding],
      )}
      style={
        background.type === 'color' && background.color === 'custom' && background.customColor
          ? { backgroundColor: background.customColor }
          : undefined
      }
    >
      {background.type === 'image' && background.image?.url && (
        <>
          <div
            className={cn(
              'absolute inset-0 bg-cover bg-no-repeat',
              imagePositionClasses[background.imagePosition],
            )}
            style={{
              backgroundImage: `url(${background.image.url})`,
            }}
          />
          <div className={cn('absolute inset-0', overlayClasses[background.overlayOpacity])} />
        </>
      )}
      <div className="container relative">
        <div className={cn('max-w-4xl mx-auto', alignmentClasses[alignment])}>
          <h1
            className={cn(
              'font-bold tracking-tight',
              sizeClasses[size],
              'mb-4',
              useWhiteText && 'text-white',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'text-lg md:text-xl',
                background.type === 'color'
                  ? background.color === 'transparent'
                    ? 'text-muted-foreground'
                    : useWhiteText
                      ? 'text-white/90'
                      : ''
                  : 'text-white/90',
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
