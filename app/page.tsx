import './globals.css'
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'
import Login from './login/page'
import Page from './dashboard/page'

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
    return <Login></Login>
  }

  return <Page></Page>
}
