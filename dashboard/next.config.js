/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  domains: [
    "localhost",
    "storage.googleapis.com",
    "www.timewatchglobal.com",
    "timewatchglobal.com",
  ],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "www.timewatchglobal.com",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "timewatchglobal.com",
      pathname: "/uploads/**",
    },
  ],
},

};

export default nextConfig;
