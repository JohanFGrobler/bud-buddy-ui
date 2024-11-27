import type { NextConfig } from "next";

const isDevelopment = true /*process.env.NODE_ENV === 'development'*/;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: isDevelopment
      ? [
        {
          protocol: 'https',
          hostname: '**', // Allow all hostnames in development
        },
      ]
      : [
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com', // Specific hostname for production
        },
      ],
    unoptimized: isDevelopment,
  },
};

export default nextConfig;
