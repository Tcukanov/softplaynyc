/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "assets.zyrosite.com" },
      { protocol: "https", hostname: "cdn.zyrosite.com" },
    ],
  },
};

export default nextConfig;
