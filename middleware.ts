import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./db/firebase/auth";

export const middleware = async (request: NextRequest) => {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else {
    return NextResponse.next()
  }
};

export const config = {
  matcher: "/dashboard/:path*",
};
