/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["picsum.photos", "ui-avatars.com"],
  },
};

module.exports = nextConfig;
