/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

// Add basePath and assetPrefix only in production for GitHub Pages
if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/nextnufus';
  nextConfig.assetPrefix = '/nextnufus/';
}

module.exports = nextConfig;
