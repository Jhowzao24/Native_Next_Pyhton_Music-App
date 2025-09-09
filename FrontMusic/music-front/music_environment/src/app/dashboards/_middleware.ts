import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function middleware(req: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
  const token = req.cookies.get("token");

  if (!token && req.nextUrl.pathname.startsWith("/dashboards")) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redireciona para Login
  }

  return NextResponse.next();
}
