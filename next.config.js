/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["picsum.photos", "ui-avatars.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
