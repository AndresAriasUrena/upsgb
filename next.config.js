/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Necesario para GitHub Pages
  basePath: '/upsgb',
  assetPrefix: '/upsgb/',
  trailingSlash: true,
};

module.exports = nextConfig;