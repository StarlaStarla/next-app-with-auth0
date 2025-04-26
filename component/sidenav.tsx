import Link from 'next/link'
import NavLinks from './nav-links'

const Sidenav = () => {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <div className='flex grow flex-col space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>
        <button className='flex h-12 w-full grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
          <Link className='hidden md:block' href='/api/auth/logout'>
            Logout
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Sidenav
