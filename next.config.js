/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["picsum.photos", "ui-avatars.com"],
    unoptimized: true,
  },
  basePath: "/bodrum-nufus",
  assetPrefix: "/bodrum-nufus/",
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ENABLE_BLOG: process.env.NEXT_PUBLIC_ENABLE_BLOG,
    NEXT_PUBLIC_ENABLE_ADMIN: process.env.NEXT_PUBLIC_ENABLE_ADMIN,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
