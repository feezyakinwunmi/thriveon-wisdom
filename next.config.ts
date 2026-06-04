import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // For local images in /public folder, you don't need domains/remotePatterns
    // But this ensures Vercel knows how to handle images
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;