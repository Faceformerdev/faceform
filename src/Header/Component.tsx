import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)()

  return (
    <header className="fixed top-0 left-0 right-0 z-10sticky top-0 backdrop-blur-sm z-20 ">
      <HeaderClient data={headerData} />
    </header>
  )
}
