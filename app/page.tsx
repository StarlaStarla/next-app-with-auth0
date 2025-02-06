'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

export default function Home() {
  const { user } = useUser()
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
