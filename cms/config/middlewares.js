module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    // This is the middleware that redirects to /admin
    // when the user visits the root URL.
    // See cms\src\middlewares\admin-redirect.js
    resolve: './src/middlewares/admin-redirect.js',
  },
];
