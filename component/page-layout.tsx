'use client'

import React, { PropsWithChildren } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { PageLoader } from './page-loader'
import Sidenav from './sidenav'
import Link from 'next/link'

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return (
      <div className=''>
        <PageLoader />
      </div>
    )
  }

  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <Sidenav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  )
}
