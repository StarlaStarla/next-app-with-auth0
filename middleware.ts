import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'
import { NextRequest, NextResponse } from 'next/server'

export default withMiddlewareAuthRequired()

export function middleware(request: NextRequest) {
  console.log('middleware redirect to dashboard-------------')
  return NextResponse.redirect(new URL('/dashboard', request.url))
}

export const config = {
  matcher: ['/dashboard/:path*']
}
