import "./globals.css";
import { Rajdhani } from "next/font/google";
// import GTM from "@/components/GTM";
import ClientLayout from "@/components/ClientLayout"; // ✅ New client wrapper

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.timewatchglobal.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TimeWatch",
  "alternateName": ["TimeWatch India", "TimeWatch UAE", "TimeWatch Arabia"],
  "url": "https://www.timewatchglobal.com",
  "logo": "https://www.timewatchglobal.com/timewatch-logo.svg",
  "sameAs": [
    "https://www.timewatchindia.com",
    "https://www.timewatchuae.com",
    "https://www.timewatcharabia.com",
    "https://www.facebook.com/TimeWatchindia1",
    "https://www.instagram.com/timewatchindiainfocom",
    "https://x.com/timewatchbiome",
    "https://www.youtube.com/@Timewatchinfocomindia",
    "https://www.linkedin.com/company/timewatchindia",
    "https://www.facebook.com/share/1HSttvzEV1/",
    "https://www.instagram.com/timewatcharabia",
    "https://x.com/TimewatchArabia",
    "https://www.linkedin.com/company/timewatch-arabia/",
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Biometric Attendance, Baggage Scanners, DFMD, Parking & Security Automation Solutions | TimeWatch",
  description:
    "TimeWatch provides biometric attendance systems, baggage scanners, DFMDs, boom barriers, turnstiles, UVSS, ANPR cameras, and parking management solutions for smart access control and security automation across India, the UAE, Saudi Arabia and international markets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "TimeWatch",
    locale: "en_US",
    url: SITE_URL,
    title:
      "TimeWatch – Biometric Attendance, Baggage Scanners, DFMD, Parking & Security Automation Solutions",
    description:
      "TimeWatch delivers biometric attendance, baggage scanners, DFMDs, boom barriers, turnstiles, UVSS, ANPR cameras, and parking management systems for advanced access control and security automation worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TimeWatch – Biometric Attendance & Security Automation Solutions",
    description:
      "Biometric attendance, baggage scanners, DFMDs, boom barriers, turnstiles, UVSS, ANPR cameras, and parking management systems for advanced access control and security automation worldwide.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rajdhani.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      {/* <GTM /> */}
      <body className={rajdhani.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
