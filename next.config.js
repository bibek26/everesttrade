/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is key for static export
  images: {
    unoptimized: true // Required for static export with Image component
  }
};

module.exports = nextConfig;
