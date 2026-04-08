import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const TARUN_SUBDOMAIN = "tarun.joulebridge.in";
const TARUN_ROUTE = "/connect/tarun";

function isAssetPath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/vendor") ||
    pathname.startsWith("/brand") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/papers") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.includes(".")
  );
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const { pathname, search } = request.nextUrl;

  if (host === TARUN_SUBDOMAIN) {
    if (isAssetPath(pathname)) {
      return NextResponse.next();
    }

    if (pathname === "/" || pathname === TARUN_ROUTE) {
      const rewriteUrl = request.nextUrl.clone();
      rewriteUrl.pathname = TARUN_ROUTE;
      return NextResponse.rewrite(rewriteUrl);
    }

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (pathname === TARUN_ROUTE) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.host = TARUN_SUBDOMAIN;
    redirectUrl.pathname = "/";
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/search).*)"],
};
