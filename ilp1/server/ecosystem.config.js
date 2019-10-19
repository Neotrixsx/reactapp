module.exports = {
    apps : [{
      name: "server_app",
      script: "start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }