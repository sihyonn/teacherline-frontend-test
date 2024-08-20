/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: ["localhost", "youtube.com", "*"],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },

  future: { webpack5: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },

  output: "export",
};

module.exports = nextConfig;
