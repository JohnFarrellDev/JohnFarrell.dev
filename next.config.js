/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['imgs.xkcd.com', 'i.imgur.com'],
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
