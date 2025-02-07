/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS?.split(",") || [
      "picsum.photos",
      "ui-avatars.com",
    ],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ENABLE_BLOG: process.env.NEXT_PUBLIC_ENABLE_BLOG,
    NEXT_PUBLIC_ENABLE_ADMIN: process.env.NEXT_PUBLIC_ENABLE_ADMIN,
  },
};

module.exports = nextConfig;
