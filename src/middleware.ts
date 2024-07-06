import { AUTHENTICATED_ROUTES } from '@/data/contants';
import { AUTH_ROUTE, LOGIN_ROUTE } from '@/data/page-routes';
import { NextRequest, NextResponse } from 'next/server';
import { matchesWildcard } from './lib/utils';

export async function middleware(request: NextRequest) {
  const LOGIN = `${request.nextUrl.origin}${LOGIN_ROUTE}`;

  if (AUTHENTICATED_ROUTES.some(pattern => matchesWildcard(request.nextUrl.pathname, pattern))) {
    const token = request.cookies.get('token');
    if (!token) {
      return NextResponse.redirect(LOGIN);
    }
    //token Verification
  }

  let redirectToApp = false;

  if (request.nextUrl.pathname.startsWith(AUTH_ROUTE)) {
    const token = request.cookies.get('token');

    if (token) {
      //verify token before redirecting
      redirectToApp = true;
    }
  }

  if (redirectToApp) {
    return NextResponse.redirect(request.nextUrl.origin);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/'
};
