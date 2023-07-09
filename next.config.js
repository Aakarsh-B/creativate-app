/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require('@sentry/nextjs');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = ` 
  default-src 'self';
  script-src 'self'  *.infinyte.club:*;
  img-src * data:;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com/ https://api.fontshare.com:* https://cdn.fontshare.com:*;
  font-src https://fonts.googleapis.com https://fonts.gstatic.com/ https://api.fontshare.com:* https://cdn.fontshare.com:*;
  connect-src *.infinyte.club:* *.ingest.sentry.io:* *.mixpanel.com:* *.googleapis.com:* *.icwf.xyz:*;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
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
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

const getHeaders = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV === 'Develop') {
    return [
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
    ];
  }
  return securityHeaders;
};

const getRedirects = () => [
  {
    source: '/home',
    destination: '/home',
    permanent: true,
  },
];

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(
  withBundleAnalyzer({
    reactStrictMode: true,
    async headers() {
      return [
        {
          // Apply these headers to all routes in our application.
          // todo: update security headers with correct values for production
          source: '/:path*',
          headers: getHeaders(),
        },
      ];
    },
    async redirects() {
      return getRedirects();
    },
    images: {
      formats: ['image/avif', 'image/webp'],
      domains: ['storage.googleapis.com'],
    },
    basePath: '/app',
    poweredByHeader: false,
    future: {
      webpack5: true,
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
      config.module.rules.push({
        test: /index\.(ts|tsx)$/,
        sideEffects: false,
      });
      return config;
    },
  }),
  sentryWebpackPluginOptions
);
