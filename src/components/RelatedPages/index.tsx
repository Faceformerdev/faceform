import React from 'react'
import Link from 'next/link'
import type { Page } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Media } from '@/components/Media'

interface Props {
  currentPage: Page
  className?: string
}

export const RelatedPages: React.FC<Props> = async ({ currentPage, className }) => {
  if (!currentPage.categories || currentPage.categories.length === 0) return null

  const payload = await getPayload({ config: configPromise })

  // Get all pages that share at least one category with the current page
  const relatedPages = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          id: {
            not_equals: currentPage.id,
          },
        },
        {
          categories: {
            in: currentPage.categories.map((category) =>
              typeof category === 'string' ? category : category.id,
            ),
          },
        },
      ],
    },
    limit: 5,
    select: {
      title: true,
      slug: true,
      meta: {
        image: true,
      },
    },
  })

  if (relatedPages.docs.length === 0) return null

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-4 text-primary">Ähnliche Seiten</h3>
      <ul className="space-y-3">
        {relatedPages.docs.map((page) => (
          <li key={page.id} className="group">
            <Link
              href={`/${page.slug}`}
              className="flex items-center gap-3 group-hover:opacity-80 transition-opacity"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/20">
                {page.meta?.image && typeof page.meta.image === 'object' ? (
                  <Media
                    resource={page.meta.image}
                    fill
                    imgClassName="object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
              </div>
              <span className="text-sm text-muted-foreground">{page.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
