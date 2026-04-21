import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===== CORE WEB VITALS OPTIMIZATION =====
  images: {
    // Enable Next.js Image Optimization (LCP -30%)
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Aggressive caching for static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy workers-comp micro-site migration (301)
      {
        source: '/',
        has: [{ type: 'host', value: 'workers-comp-calc.vercel.app' }],
        destination: 'https://mysmartcalculators.com/workers-comp',
        permanent: true,
      },
      {
        source: '/calculator',
        has: [{ type: 'host', value: 'workers-comp-calc.vercel.app' }],
        destination: 'https://mysmartcalculators.com/workers-comp/calculator',
        permanent: true,
      },
      {
        source: '/state-rates',
        has: [{ type: 'host', value: 'workers-comp-calc.vercel.app' }],
        destination: 'https://mysmartcalculators.com/workers-comp/state-rates',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'workers-comp-calc.vercel.app' }],
        destination: 'https://mysmartcalculators.com/workers-comp',
        permanent: true,
      },

      // Canonicalize www -> apex
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.mysmartcalculators.com',
          },
        ],
        destination: 'https://mysmartcalculators.com/:path*',
        permanent: true,
      },

      // Direct legacy path redirects on main domain
      {
        source: '/calculator',
        destination: '/workers-comp/calculator',
        permanent: true,
      },
      {
        source: '/state-rates',
        destination: '/workers-comp/state-rates',
        permanent: true,
      },
      {
        source: '/401k',
        destination: '/compound-interest',
        permanent: true,
      },

      // Canonical sub-route redirects for hash-mounted calculator sections
      // (avoid SSR fallback metadata on server-side redirect pages)
      {
        source: '/mortgage/calculator',
        destination: '/mortgage#calculator',
        permanent: true,
      },
      {
        source: '/mortgage/affordability',
        destination: '/mortgage#affordability',
        permanent: true,
      },
      {
        source: '/percentage/calculator',
        destination: '/percentage#calculator',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
