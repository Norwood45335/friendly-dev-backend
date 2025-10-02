module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/health',
      handler: 'health.check',
      config: {
        auth: false, // No authentication required
        policies: [], // No policies
        middlewares: [], // No middlewares
      },
    },
  ],
};
