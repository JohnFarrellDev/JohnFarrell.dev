/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imgs.xkcd.com'],
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
