/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{
      hostname: 'imgs.xkcd.com',
    }, {
      hostname: 'i.imgur.com'
    }],
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
