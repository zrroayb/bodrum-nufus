/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["picsum.photos", "ui-avatars.com"],
  },
};

// Add basePath and assetPrefix only in production for GitHub Pages
if (process.env.NODE_ENV === "production") {
  nextConfig.basePath = "/nextnufus";
  nextConfig.assetPrefix = "/nextnufus/";
}

module.exports = nextConfig;
