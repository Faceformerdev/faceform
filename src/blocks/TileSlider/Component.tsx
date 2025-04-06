'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ButtonBlock } from '../Button/Component'
import Image from 'next/image'

type LinkType = {
  type: 'none' | 'internal' | 'external'
  internalLink?: {
    relationTo: string
    value: string
  }
  externalLink?: string
  label?: string
  openInNewTab?: boolean
}

type Tile = {
  image: any
  title: string
  description?: string
  link?: {
    url: string
    newTab?: boolean
  }
  showButton?: boolean
  button?: {
    label: string
    link: {
      type: 'custom'
      url: string
      newTab?: boolean
    }
    color: 'primary' | 'secondary' | 'accent' | 'custom'
    customColor?: string
    size: 'small' | 'medium' | 'large'
    variant: 'solid' | 'outline' | 'ghost'
    textColor: 'default' | 'white' | 'black' | 'custom'
    borderRadius: 'none' | 'small' | 'medium' | 'large' | 'full'
    blockType: 'button'
  }
}

type DisplayOptions = {
  tilesPerView: '1' | '2' | '3' | '4'
  tileHeight: 'small' | 'medium' | 'large'
  tileStyle: 'card' | 'overlay' | 'minimal'
  showNavigation: boolean
  showPagination: boolean
  autoplay: boolean
  autoplaySpeed: number
}

type TileSliderProps = {
  title?: string
  description?: string
  tiles: Tile[]
  displayOptions: DisplayOptions
  background?: 'none' | 'light' | 'dark' | 'primary' | 'secondary'
  id?: string
}

export const TileSliderBlock: React.FC<TileSliderProps> = (props) => {
  const { title, description, tiles, displayOptions, background = 'none', id } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Destructure display options
  const {
    tilesPerView,
    tileHeight,
    tileStyle,
    showNavigation,
    showPagination,
    autoplay,
    autoplaySpeed,
  } = displayOptions

  // Calculate how many tiles to show based on the tilesPerView prop
  const tilesToShow = parseInt(tilesPerView)

  // Calculate the maximum index based on the number of tiles and tiles to show
  const maxIndex = Math.max(0, tiles.length - tilesToShow)

  // Determine if we should show navigation arrows
  const shouldShowNavigation = showNavigation && tiles.length > tilesToShow

  // Handle navigation with infinite loop
  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1))
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxIndex + 1) % (maxIndex + 1))
  }

  const goToIndex = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)
  }

  // Handle transition end to create infinite loop effect
  const handleTransitionEnd = () => {
    setIsAnimating(false)
  }

  // Setup autoplay
  useEffect(() => {
    if (autoplay && !isHovered) {
      autoplayRef.current = setInterval(() => {
        goToNext()
      }, autoplaySpeed)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, autoplaySpeed, isHovered, currentIndex])

  // Calculate the height class based on the tileHeight prop
  const heightClass = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80',
  }[tileHeight]

  // Calculate the width class based on the tilesPerView prop
  const widthClass = {
    '1': 'w-full',
    '2': 'w-1/2',
    '3': 'w-1/3',
    '4': 'w-1/4',
  }[tilesPerView]

  // Background classes
  const backgroundClasses = {
    none: 'bg-transparent',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
  }[background]

  // Create a style object for the slider
  const sliderStyle = {
    transform: `translateX(-${currentIndex * (100 / tilesToShow)}%)`,
    transition: 'transform 0.5s ease-in-out',
    width: `${tiles.length * (100 / tilesToShow)}%`,
  }

  // Render a link based on the link type
  const renderLink = (link: LinkType, children: React.ReactNode) => {
    if (!link || link.type === 'none') {
      return <>{children}</>
    }

    let href = '#'
    if (link.type === 'internal' && link.internalLink) {
      const { relationTo, value } = link.internalLink
      if (typeof value === 'string') {
        href = `/${relationTo}/${value}`
      }
    } else if (link.type === 'external' && link.externalLink) {
      href = link.externalLink
    }

    return (
      <Link
        href={href}
        target={link.openInNewTab ? '_blank' : undefined}
        rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
        className="block h-full"
      >
        {children}
      </Link>
    )
  }

  // Render a tile based on the tile style
  const renderTile = (tile: Tile, index: number) => {
    const tileContent = (
      <div
        className={cn(
          'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
          tileStyle === 'card' && 'border border-border rounded-lg bg-card h-full flex flex-col',
          tileStyle === 'overlay' && 'rounded-lg h-full flex flex-col',
          tileStyle === 'minimal' && 'h-full flex flex-col',
        )}
      >
        <div
          className={cn(
            'relative w-full overflow-hidden group',
            heightClass,
            tileStyle === 'overlay' && 'absolute inset-0 z-0',
          )}
        >
          <Image
            src={tile.image?.url || ''}
            alt={tile.image?.alt || tile.title}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
          />
          {tileStyle === 'overlay' && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
          )}
        </div>
        <div
          className={cn(
            'p-4 flex-grow',
            tileStyle === 'overlay' && 'absolute bottom-0 left-0 right-0 z-20 text-white',
          )}
        >
          <h3 className="text-xl font-bold mb-2">{tile.title}</h3>
          {tile.description && (
            <p className="text-sm text-muted-foreground mb-4">{tile.description}</p>
          )}
          {tile.showButton && tile.button && (
            <ButtonBlock
              label={tile.button.label}
              link={tile.button.link}
              color={tile.button.color}
              customColor={tile.button.customColor}
              size={tile.button.size}
              variant={tile.button.variant}
              textColor={tile.button.textColor}
              borderRadius={tile.button.borderRadius}
              blockType={tile.button.blockType}
            />
          )}
        </div>
      </div>
    )

    return (
      <div key={index} className={cn('flex-shrink-0 px-2', widthClass)}>
        {tile.link ? (
          <Link
            href={tile.link.url || '#'}
            target={tile.link.newTab ? '_blank' : undefined}
            rel={tile.link.newTab ? 'noopener noreferrer' : undefined}
            className="block h-full"
          >
            {tileContent}
          </Link>
        ) : (
          tileContent
        )}
      </div>
    )
  }

  return (
    <div
      className={cn('py-16', backgroundClasses)}
      id={`block-${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        )}

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {shouldShowNavigation && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous tiles"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next tiles"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex"
              style={sliderStyle}
              onTransitionEnd={handleTransitionEnd}
            >
              {tiles.map((tile, index) => renderTile(tile, index))}
            </div>
          </div>

          {/* Pagination Dots */}
          {showPagination && tiles.length > tilesToShow && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all',
                    currentIndex === index
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400',
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
