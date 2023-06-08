/** @type {import('next').NextConfig} */
const loaderUtils = require('loader-utils');
const path = require('path');

const hashOnlyIdent = (context, _, exportName) => {
  const result = loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${ path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/') }#className:${ exportName }`,
      ),
      'md4',
      'base64',
      6,
    )
    .replace(/^(-?\d|--)/, '_$1')
    .replaceAll('+', '_')
    .replaceAll('/', '_');

  return result;
};
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      's3-media0.fl.yelpcdn.com',
      'production-next-images-cdn.thumbtack.com',
      '195.12.56.85',
      process.env.BACK_URL,
      '127.0.0.1',
      '195.12.56.85',
    ],
  },
  env: {
    BACK_URL: process.env.BACK_URL,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    YELP_API_KEY: process.env.YELP_API_KEY,
  },
  webpack: (config, { dev }) => {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    if (!dev) {
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes('css-loader')
          && !moduleLoader.loader?.includes('postcss-loader')
          ) {
          // eslint-disable-next-line no-param-reassign
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
          }
        });
      });
    }

    if (dev) {
    // eslint-disable-next-line no-param-reassign
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: '/chat-service',
        destination: 'http://127.0.0.1:5050/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/orders',
        destination: `${ process.env.BACK_URL }/api/orders`,
      },
      {
        source: '/api/orders/options',
        destination: `${ process.env.BACK_URL }/api/content-type-builder/content-types/api::order.order`,
      },
      {
        source: '/api/upload',
        destination: `${ process.env.BACK_URL }/api/upload`,
      },
      {
        source: '/api/services',
        destination: `${ process.env.BACK_URL }/api/services?populate=*`,
      },
      {
        source: '/api/contact',
        destination: `${ process.env.BACK_URL }/api/contact?populate=*`,
      },
      {
        source: '/uploads/:path*',
        destination: '/cms/uploads/:path*',
      },
      {
        source: '/api/reviews/google',
        destination: 'https://maps.googleapis.com/maps/api/place/details/:path*',
      },
      {
        source: '/api/reviews/yelp',
        destination: 'https://api.yelp.com/v3/businesses/:path*',
      },
      {
        source: '/api/reviews/thumbtack',
        destination: 'https://data.accentapi.com/feed/150849.json?nocache=1685982129323',
      },
    ];
  },
};

module.exports = nextConfig;
