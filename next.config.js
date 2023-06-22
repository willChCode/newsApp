/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['i.pinimg.com', 's.yimg.com', 'media.wired.com']
  }
};

module.exports = nextConfig;
