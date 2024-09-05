/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'imgs.xkcd.com',
      },
      {
        hostname: 'i.imgur.com',
      },
      {
        hostname: 'personal-website-sfdajkfsadvvujfdsfyeusjhvbsdfhfdshbfdserf.s3.eu-west-2.amazonaws.com',
      },
    ],
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
