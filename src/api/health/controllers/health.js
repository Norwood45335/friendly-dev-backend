module.exports = {
  check: async (ctx) => {
    try {
      // Simple health check response
      ctx.body = {
        status: 'ok',
        message: 'Strapi backend is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.env.npm_package_version || '1.0.0',
        environment: process.env.NODE_ENV || 'development'
      };
      ctx.status = 200;
    } catch (error) {
      ctx.body = {
        status: 'error',
        message: 'Health check failed',
        timestamp: new Date().toISOString(),
        error: error.message
      };
      ctx.status = 500;
    }
  },
};
