import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  try {
    const token = cookies().get("token");
    if (!token) throw Error;
    return NextResponse.next();
  } catch (error) {
    return NextResponse.rewrite(
      new URL("/login?message=Invalid credentials", req.url)
    );
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
