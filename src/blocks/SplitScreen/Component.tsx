import React from 'react'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

type TimelineItem = {
  icon: MediaType
  title: string
  description: string
}

type Props = {
  richText: any
  timelineItems: TimelineItem[]
  alignment: 'left' | 'right'
}

export const SplitScreenBlock: React.FC<Props> = ({ richText, timelineItems, alignment }) => {
  const isTimelineLeft = alignment === 'left'

  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Rich Text Content */}
        <div
          className={cn('order-2 lg:order-1', {
            'lg:order-2': isTimelineLeft,
          })}
        >
          <RichText data={richText} enableGutter={false} />
        </div>

        {/* Timeline */}
        <div
          className={cn('order-1 lg:order-2', {
            'lg:order-1': isTimelineLeft,
          })}
        >
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center">
                    <Media resource={item.icon} className="w-8 h-8 object-contain" fill={false} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
