import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isCoreCalculatorPath,
  isLikelyCalculatorPath,
  normalizePath,
} from "@/lib/strategy/core-calculators";

const ALLOWED_INDEXER_BOTS = [
  "googlebot",
  "adsbot-google",
  "google-inspectiontool",
  "bingbot",
  "duckduckbot",
  "yandexbot",
  "baiduspider",
  "applebot",
  "slurp",
];

const BLOCKED_AUTOMATION_SIGNATURES = [
  "python-requests",
  "python-urllib",
  "curl/",
  "wget/",
  "httpclient",
  "go-http-client",
  "scrapy",
  "headlesschrome",
  "phantomjs",
  "selenium",
  "playwright",
  "puppeteer",
  "axios",
  "node-fetch",
  "java/",
  "libwww-perl",
  "okhttp",
  "postmanruntime",
];

function isAllowedIndexerBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return ALLOWED_INDEXER_BOTS.some((token) => ua.includes(token));
}

function isBlockedAutomation(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  if (!ua) return false;
  return BLOCKED_AUTOMATION_SIGNATURES.some((token) => ua.includes(token));
}

export function middleware(request: NextRequest) {
  const pathname = normalizePath(request.nextUrl.pathname);
  const userAgent = request.headers.get("user-agent") ?? "";

  // Gate #1: block obvious automation/scraper traffic (except known indexer bots).
  if (!isAllowedIndexerBot(userAgent) && isBlockedAutomation(userAgent)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.next();

  // Gate #2: keep non-core calculator routes serviceable, but remove from index.
  if (isLikelyCalculatorPath(pathname) && !isCoreCalculatorPath(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|txt|xml)$).*)",
  ],
};
