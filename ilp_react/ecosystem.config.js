module.exports = {
    apps : [{
      name: "react_app",
      script: "start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }