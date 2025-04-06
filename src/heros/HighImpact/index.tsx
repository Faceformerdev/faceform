'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React from 'react'
import { cn } from '@/utilities/ui'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

type HighImpactHeroProps = Page['hero'] & {
  alignment?: 'left' | 'center' | 'right'
  verticalAlignment?: 'top' | 'center' | 'bottom'
  headingColor?: 'white' | 'black' | 'primary' | 'secondary'
}

export const HighImpactHero: React.FC<HighImpactHeroProps> = ({
  links,
  media,
  richText,
  alignment = 'center',
  verticalAlignment = 'center',
  headingColor = 'white',
}) => {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  const verticalAlignmentClasses = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end',
  }

  const headingColorClasses = {
    white: 'text-white',
    black: 'text-black',
    primary: 'text-primary',
    secondary: 'text-secondary',
  }

  return (
    <div className="relative -mt-[10.4rem] flex items-center justify-center">
      <div
        className={cn(
          'container mb-8 z-10 relative flex',
          alignmentClasses[alignment],
          verticalAlignmentClasses[verticalAlignment],
          'min-h-[35vh]',
        )}
      >
        <div className={cn('max-w-[36.5rem]', headingColorClasses[headingColor])}>
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="absolute inset-0 select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
