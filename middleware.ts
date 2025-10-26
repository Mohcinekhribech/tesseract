import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login') {
    const response = NextResponse.next()
    response.headers.set('x-hide-layout', 'true')
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/login' 
}