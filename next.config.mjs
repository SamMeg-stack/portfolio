import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add the alias for '@' to point to 'src'
    config.resolve.alias['@'] = path.resolve('src');

    // Add the custom SVG handling rule
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;

