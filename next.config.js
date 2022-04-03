/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["globalbc.io"],
  },
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/public/images",
  }
};

module.exports = nextConfig
