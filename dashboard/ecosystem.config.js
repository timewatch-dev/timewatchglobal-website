module.exports = {
  apps: [
    {
      name: "global-dashboard",
      script: "npm",
      args: "start",

      // same pattern as backend & frontend
      cwd: "/home/vikram/apps/global/dashboard/current",

      env: {
        NODE_ENV: "production",
        PORT: 4009, // nginx dashboard.timewatchglobal.com -> 127.0.0.1:4009
      },

      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
    },
  ],
};
