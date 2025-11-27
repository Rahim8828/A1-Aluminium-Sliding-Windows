#!/bin/bash

# Quick Image Fix Script
# Run this if images still not loading after Netlify deploy

echo "🔧 Applying quick image fix..."

# Backup current config
cp next.config.ts next.config.ts.backup

# Update next.config.ts to use unoptimized images
cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  
  // Image optimization settings - UNOPTIMIZED FOR NETLIFY
  images: {
    unoptimized: true, // Quick fix for Netlify
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },

  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
              "frame-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },

  experimental: {
    optimizePackageImports: ['lucide-react', '@/components'],
  },

  productionBrowserSourceMaps: false,
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
};

export default nextConfig;
EOF

echo "✅ Config updated with unoptimized images"
echo ""
echo "Now run:"
echo "  git add next.config.ts"
echo "  git commit -m 'fix: Enable unoptimized images for Netlify'"
echo "  git push origin main"
echo ""
echo "To restore original config:"
echo "  mv next.config.ts.backup next.config.ts"
