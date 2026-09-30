module.exports = {
  apps: [
    {
      name: "global-backend",
      script: "app.js",
      cwd: "/home/vikram/apps/global/backend/current",
      env_file: "/home/vikram/apps/global/backend/shared/.env",

      env: {
        NODE_ENV: "production",
      },

      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      restart_delay: 3000,
      watch: false,
    },
  ],
};
