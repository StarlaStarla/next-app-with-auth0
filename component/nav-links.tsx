'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { name: 'Home', href: '/dashboard', icon: './home.svg' },
  {
    name: 'All Candidates',
    href: '/dashboard/candidates',
    icon: './home.svg'
  }
]

export default function NavLinks() {
  const pathName = usePathname()
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex h-[48px] grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3', {
              'bg-sky-100 text-blue-600': pathName === link.href
            })}
          >
            <Image priority src={link.icon} alt='home' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
