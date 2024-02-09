import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./libs/supabase/auth";

export const middleware = (request: NextRequest) => {
  // // Get cookie from request
  // const cookies = request.cookies;
  // const cookieSecret = cookies["cookie-secret"];
  // // Check if cookie is present and valid
  // if (cookieSecret && cookieSecret === process.env.NEXT_PUBLIC_COOKIE_SECRET) {
  //   // User is authenticated, allow access to dashboard
  //   return NextResponse.next();
  // } else {
  //   // Redirect to login page if user is not authenticated
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
};

export const config = {
  matcher: "/dashboard/:path*",
};
