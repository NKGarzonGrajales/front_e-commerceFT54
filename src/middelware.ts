import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { NextURL } from 'next/dist/server/web/next-url';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  
  if ((pathname.startsWith('/dashboard') || pathname.startsWith("/cart")) && !request.cookies.get("userData")?.value) {
    const loginURL = new NextURL('/login', origin)
    return NextResponse.redirect(loginURL) 
  } else {
    return NextResponse.next();
    }
    
  }

  

export const config = {
  matcher: ['/dashboard/:path*', "/cart/:path*"],
};

