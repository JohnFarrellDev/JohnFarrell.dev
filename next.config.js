/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imgs.xkcd.com', 'i.imgur.com'],
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
