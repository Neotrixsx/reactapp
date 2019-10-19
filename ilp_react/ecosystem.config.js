module.exports = {
    apps : [{
      name: "react_app",
      script: "./node_modules/react-scripts/scripts/start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }