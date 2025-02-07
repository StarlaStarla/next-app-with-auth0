import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
console.log('the AUTH0_SECRET env var is set: ', process.env.AUTH0_SECRET)

export const GET = handleAuth({
  login: async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await handleLogin(req, res, {
        returnTo: '/dashboard'
      })
    } catch (error) {
      console.error('handleAuth-----', error)
    }
  }
})
