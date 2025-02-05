'use client'
import Link from 'next/link'
import HomeIcon from '../../public/home.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'All Candidates',
    href: '/dashboard/candidates',
    icon: HomeIcon
  },
  { name: 'Applications', href: '/dashboard', icon: HomeIcon }
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
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === link.href
              }
            )}
          >
            <Image priority src={HomeIcon} alt='home' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
