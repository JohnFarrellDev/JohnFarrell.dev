import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    // Static export has no Image Optimization server; serve images as-is.
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
};

const withMDX = createMDX();

export default withMDX(nextConfig);
