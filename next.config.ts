import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/401k',
        destination: '/401k-growth',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
