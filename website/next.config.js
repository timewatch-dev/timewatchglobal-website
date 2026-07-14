/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "storage.googleapis.com",
      "timewatch2-0-311005204045.europe-west1.run.app",
      "cdn.timewatchindia.com",
      "assets.timewatchindia.com",
      "72.60.202.56",
      "timewatchindia.com",
      "www.timewatchindia.com",
      "preview.timewatchindia.com",
      "arabia.backend.timewatchindia.com",
      "timewatchuae.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.timewatchindia.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "72.60.202.56",
        port: "3001",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "timewatchindia.com",
        port: "3001",
        pathname: "/**",
      },
      // add more
    ],
  },
  // experimental: {
  //   prefetchBrowser: false,
  // },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      // 🔁 General redirect: all /market-place/* → /products/*
      {
        source: "/market-place/:path*",
        destination: "/products/:path*",
        permanent: true,
      },

      // 🔁 Specific product redirects (old → new slugs)
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000e",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000e",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000ew",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000ew",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000d",
        destination: "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000d",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000dw",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface1000dw",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface12fp-e",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface12fp-e",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface12fp-d",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface12fp-d",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/attendance-series/trueface2000",
        destination:
          "/products/time-attendance-and-access-control/attendance-series/trueface2000",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface3000",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface3000",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000fp",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000fp",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000-pw",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000-pw",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000fp-pw",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface6000-pw",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface50",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface50",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface50-fp",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface50",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface1l",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface1l",
        permanent: true,
      },
      {
        source:
          "/market-place/time-attendance-and-access-control/ai-based-speed-face-series/trueface1l-fp",
        destination:
          "/products/time-attendance-and-access-control/ai-based-speed-face-series/trueface1l-fp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;






