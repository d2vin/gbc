/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["globalbc.io"],
  },
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/static/images",
  }
};

module.exports = nextConfig
