import { handleAuth, handleCallback, Session } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const afterCallback = async (req: NextApiRequest, res: NextApiResponse, session: Session) => {
  console.log('I am getting called after callback', session)
  if (session.user) {
    res.status(200).redirect('/dashboard')
    console.log('user found', session.user)
  } else {
    console.log('user not found', session)
  }

  return session
}
export const GET = handleAuth({
  callback: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      // you need to cast this as returning a response because the auth handlers support
      // signatures for both routers
      return await handleCallback(req, res, { afterCallback })
    } catch (error) {
      console.error('error----------------------', error)
    }
  }
})
