import { AfterCallbackAppRoute, handleAuth, handleCallback, handleLogin } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'

const afterCallback: AfterCallbackAppRoute = async (req, session) => {
  return session
}
export const GET = handleAuth({
  callback: async (req: any, ctx: any) => {
    try {
      // you need to cast this as returning a response because the auth handlers support
      // signatures for both routers
      return await handleCallback(req, ctx, { afterCallback })
    } catch (error) {
      return NextResponse.redirect('/auth/error')
    }
  }
})
