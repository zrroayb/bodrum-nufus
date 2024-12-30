/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: 'custom',
    path: '',
  },
  basePath: "/nextnufus",
  assetPrefix: "/nextnufus/",
  trailingSlash: true,
};

module.exports = nextConfig;
