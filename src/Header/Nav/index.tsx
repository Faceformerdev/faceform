'use client'

import React from 'react'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

interface SocialMediaItem {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'
  url: string
  id?: string
}

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const socialMedia = data?.socialMedia || []

  const getSocialIcon = (platform: SocialMediaItem['platform']) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />
      case 'twitter':
        return <Twitter className="w-5 h-5" />
      case 'instagram':
        return <Instagram className="w-5 h-5" />
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'youtube':
        return <Youtube className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-3 items-start md:items-center p-4 md:p-0">
      <div className="flex flex-col md:flex-row gap-4 md:gap-3">
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="link" />
        })}
      </div>
      <div className="flex gap-2 md:ml-4">
        {socialMedia.map(({ platform, url }, i: number) => (
          <Link
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <span className="sr-only">{platform}</span>
            {getSocialIcon(platform)}
          </Link>
        ))}
      </div>
      <Link
        href="/search"
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5" />
      </Link>
    </nav>
  )
}
