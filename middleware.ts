import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./libs/supabase/auth";

export const middleware = (request: NextRequest) => {

  // Still in progress
  // return NextResponse.redirect(new URL("/login", request.url));
  // if (email) {
  //   console.log(email);
  //   return NextResponse.next();
  // } else {
  // }
};

export const config = {
  matcher: "/dashboard/:path*",
};
