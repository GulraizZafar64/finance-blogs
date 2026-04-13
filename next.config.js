/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
