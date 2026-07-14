"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const GTM = () => {
  const [time, setTime] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let out = setTimeout(() => {
      setTime(true);
    }, 7000);

    return () => clearTimeout(out);
  }, [time]);

  // Add all routes or path fragments where GTM should NOT be included
  const excludedPaths = [
    // "/access-control-security-gate-manufacturer-in-India",
    // "/ai-face-t7hd",
    // "/biometric-attendance-access-control-system",
    // "/biometric-attendance-system-bio-1se-india",
    // "entrance-control-systems-secure-intelligent-pedestrian",
  ];

  // Check if the current pathname includes any excluded path
  const shouldExclude = excludedPaths.some((path) => pathname.includes(path));

  if (shouldExclude) return null; // ✅ Don't load GTM on excluded pages

  return (
    <>
      {time && (
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NNJTRPC');
        `,
          }}
        />
      )}
    </>
  );
};

export default GTM;
