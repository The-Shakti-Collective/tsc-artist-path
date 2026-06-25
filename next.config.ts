import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.alias['@shared'] = path.join(__dirname, '../shared');
    return config;
  },
};

export default nextConfig;
