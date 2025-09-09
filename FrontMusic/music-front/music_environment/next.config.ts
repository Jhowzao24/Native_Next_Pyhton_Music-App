import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp3|wav)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      });
    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i1.wp.com',
      },
    ],
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
};

