import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log(token)

  const pathname = request.nextUrl.pathname;

  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  const isHomePage = pathname === "/";

  // ❌ Not logged in → block home page
  if (isHomePage && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // ❌ Logged in → block auth pages
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/signin", "/signup"],
};
