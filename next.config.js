/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    trailingSlash: true,
    reactStrictMode: true,
  };
};

module.exports = nextConfig;
