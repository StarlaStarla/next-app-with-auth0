'use client'

import React, { PropsWithChildren } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { PageLoader } from './page-loader'
import Sidenav from './sidenav'
import Image from 'next/image'

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useUser()

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className='flex flex-col h-full'>
      <div className='h-16 w-full flex flex-row items-center'>
        <Image src='/logo.svg' alt='logo' width={32} height={32} className='inline-block mx-5.5'></Image>
        <div className='inline-block font-[noto_sans_tc] text-sm font-medium'>SmartTalentConnect</div>
      </div>
      <div className='flex flex-col md:flex-row md:overflow-hidden flex-1'>
        <div className='w-full flex-none md:w-64'>
          <Sidenav />
        </div>
        <div className='flex-grow md:overflow-y-auto'>{children}</div>
      </div>
    </div>
  )
}
