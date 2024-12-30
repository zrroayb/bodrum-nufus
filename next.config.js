/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["picsum.photos"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: "/nextnufus",
  assetPrefix: "/nextnufus/",
};

module.exports = nextConfig;
