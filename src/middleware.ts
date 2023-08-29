import { NextResponse } from "next/server";
import { createClient } from "@/prismicio";

export async function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  console.log(pathname);

  if (
    [
      "/manifest.json",
      "/favicon.ico",
      "robots.txt",
      "/api/",
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  const client = createClient();
  const repository = await client.getRepository();

  const locales = repository.languages.map((lang) => lang.id.substring(0, 2));
  const defaultLocale = locales[0];

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (
    pathname === "/en" ||
    pathname === "/en/" ||
    pathname === "/en/home" ||
    pathname === "/en/home/"
  ) {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  if (pathname === "/fr/home" || pathname === "/fr/home/") {
    return NextResponse.redirect(new URL(`/fr`, request.url));
  }

  // Redirect to default locale if there is no supported locale prefix
  if (pathnameIsMissingLocale && pathname !== "/") {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  // Do not localize these paths
  matcher: ["/((?!api|_next/static|slice-simulator|favicon.ico).*)"],
};
