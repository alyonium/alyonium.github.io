import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/alyonium.github.io',
  assetPrefix: '/alyonium.github.io/',
  reactStrictMode: true,
};

export default nextConfig;
