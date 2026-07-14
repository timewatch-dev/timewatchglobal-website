module.exports = {
  apps: [
    {
      name: "global-website",          // ✅ frontend app name
      script: "npm",                    // ✅ Next.js runs via npm
      args: "start",                    // ✅ runs `next start`

      // ✅ CRITICAL (same pattern as backend)
      cwd: "/home/vikram/apps/global/website/current",

      env: {
        NODE_ENV: "production",
        PORT: 4004,                     // ✅ production port
      },

      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
    },
  ],
};
