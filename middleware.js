import createMiddleware from "next-intl/middleware";
import {locales, localePrefix, pathnames} from './navigation';

const nextIntlMiddleware = createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
  pathnames,
 });

export default function (req) {
  return nextIntlMiddleware(req)
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*","/((?!api|_next|_vercel|.*\\..*).*)"],
};
