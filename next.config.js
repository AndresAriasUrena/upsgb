/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/upsgb',
  assetPrefix: '/upsgb/',
  trailingSlash: true,
};

module.exports = nextConfig;