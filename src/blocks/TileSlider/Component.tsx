'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type TileSliderProps = {
  tiles: {
    image: any
    title: string
    content: any
  }[]
  tilesPerView: '2' | '3' | '4' | '5'
  tileHeight: 'small' | 'medium' | 'large'
  id?: string
}

export const TileSliderBlock: React.FC<TileSliderProps> = (props) => {
  const { tiles, tilesPerView, tileHeight, id } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showNavigation, setShowNavigation] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Calculate how many tiles to show based on the tilesPerView prop
  const tilesToShow = parseInt(tilesPerView)

  // Calculate the maximum index based on the number of tiles and tiles to show
  const maxIndex = Math.max(0, tiles.length - tilesToShow)

  // Determine if we should show navigation arrows
  useEffect(() => {
    setShowNavigation(tiles.length > tilesToShow)
  }, [tiles.length, tilesToShow])

  // Handle navigation with infinite loop
  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  // Handle transition end to create infinite loop effect
  const handleTransitionEnd = () => {
    // If we've gone past the end, jump back to the beginning without animation
    if (currentIndex > maxIndex) {
      setCurrentIndex(0)
    }
    // If we've gone before the beginning, jump to the end without animation
    else if (currentIndex < 0) {
      setCurrentIndex(maxIndex)
    }
  }

  // Calculate the height class based on the tileHeight prop
  const heightClass = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80',
  }[tileHeight]

  // Calculate the width class based on the tilesPerView prop
  const widthClass = {
    '2': 'w-1/2',
    '3': 'w-1/3',
    '4': 'w-1/4',
    '5': 'w-1/5',
  }[tilesPerView]

  // Create a style object for the slider
  const sliderStyle = {
    transform: `translateX(-${currentIndex * (100 / tilesToShow)}%)`,
    transition: 'transform 0.5s ease-in-out',
    width: `${tiles.length * (100 / tilesToShow)}%`,
  }

  return (
    <div className="my-16 overflow-hidden" id={`block-${id}`}>
      <div className="container relative max-w-8xl mx-auto">
        {showNavigation && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Previous tiles"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Next tiles"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            style={sliderStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {tiles.map((tile, index) => (
              <div key={index} className={cn('flex-shrink-0 px-2', widthClass)}>
                <div className="border border-border rounded-lg overflow-hidden bg-card h-full flex flex-col">
                  <div className={cn('relative w-full overflow-hidden', heightClass)}>
                    <Media resource={tile.image} fill imgClassName="object-cover object-center" />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{tile.title}</h3>
                    <RichText data={tile.content} enableGutter={false} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
