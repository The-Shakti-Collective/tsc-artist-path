import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.theshakticollective.in/artist-path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
