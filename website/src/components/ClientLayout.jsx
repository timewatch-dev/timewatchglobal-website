"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportButtons from "@/components/SupportButtons";
import { useEffect } from "react";
import LandingHeader from "./LandingHeader";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  console.log("pathname", pathname);

  // ✅ Example: hide Header/Footer on specific pages
  const hideLayout = [
    "/biometric-attendance-system-bio-1se-india",
    "/product-catalouge",
    // "/access-control-security-gate-manufacturer-in-India",
    "/ai-face-t7hd",
    "/biometric-attendance-access-control-system",
    "/entrance-control-systems-secure-intelligent-pedestrian",
  ].includes(pathname);

  useEffect(() => {
    // Example: scroll to top or analytics event
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Conditionally render header/footer */}
      {!hideLayout && <Header />}
      {hideLayout && pathname !== "/product-catalouge" && <LandingHeader />}

      <div>{children}</div>

      {!hideLayout && <Footer />}

      <SupportButtons />
      {/* <Button asChild className={'fixed top-1/2 -translate-y-1/2 -right-7 z-10 -rotate-90 text-lg'}>
        <Link
        target="_blank"
          href={
            "https://eazypay.icicibank.com/eazypayLink?P1=b65SESRZWRLVerKiBAGNcA==#"
          }
        >
          Pay Now
        </Link>
      </Button> */}
    </>
  );
}
