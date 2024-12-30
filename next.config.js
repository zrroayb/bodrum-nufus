/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/nextnufus",
  assetPrefix: "/nextnufus/",
  trailingSlash: true,
};

module.exports = nextConfig;
