'use client'
import './globals.css'
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg'
  const { user, isLoading } = useUser()
  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen w-screen bg-gray-500'>
        <Image src={loadingImg} alt='Loading...' height={50} width={50} />
      </div>
    )
  }
  if (!user) {
    return (
      <main>
        <Link href='/api/auth/login?screen_hint=signup'>
          <button>Sign up</button>
        </Link>
        <Link href='/api/auth/login'>
          <button>Log in</button>
        </Link>
      </main>
    )
  }

  return (
    <main>
      <h1>
        Welcome, {user.name}
        {user.email}!
      </h1>
      <p>
        <Link href='/api/auth/logout'>
          <button>Log out</button>
        </Link>
      </p>
    </main>
  )
}
