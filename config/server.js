module.exports = ({ env }) => ({
  host: env('HOST', 'https://strapidargains.azurewebsites.net'),
  // host: env('HOST', '13.69.68.0'),
  port: env.int('PORT', 1337),
  production: true,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ce7445a0d13c5690c39d05738a338d5d'),
    },
  },
});
