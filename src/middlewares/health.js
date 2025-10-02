module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Health check endpoint
    if (ctx.request.url === '/health' && ctx.request.method === 'GET') {
      ctx.body = {
        status: 'ok',
        message: 'Strapi backend is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.env.npm_package_version || '1.0.0',
        environment: process.env.NODE_ENV || 'development'
      };
      ctx.status = 200;
      return;
    }
    
    // Continue to next middleware
    await next();
  };
};
