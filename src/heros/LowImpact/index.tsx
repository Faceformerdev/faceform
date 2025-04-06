import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <div className="relative -mt-[2.6rem] flex items-center justify-center">
      <div className="container mb-2 z-10 relative flex items-center justify-center">
        <div className="max-w-[20rem] md:text-center">
          {children ||
            (richText && <RichText className="mb-2" data={richText} enableGutter={false} />)}
        </div>
      </div>
    </div>
  )
}
