"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import HomePageForm from "@/components/HomePageForm";
import EmailSuccessPopup from "@/components/forms/EmailSuccessPopup";

// Drop-in replacement for a button-style <Link href="/contact">.
// A normal click opens the same form as the contact page in a popup, on the current page.
// The real /contact link stays in the HTML, so crawlers, no-JS visitors and ctrl/cmd/middle
// clicks (open in a new tab) still reach the contact page.
export default function ContactPopupTrigger({
  children,
  className,
  title = "Contact Us",
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleClick = (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    setSent(false);
    setOpen(true);
  };

  return (
    <>
      <Link href="/contact" className={className} onClick={handleClick} {...rest}>
        {children}
      </Link>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:max-w-2xl md:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
            <DialogDescription className="text-gray-600">
              Share your details and our team will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <HomePageForm
            onSuccess={() => {
              setOpen(false);
              setSent(true);
            }}
          />
        </DialogContent>
      </Dialog>

      {sent && <EmailSuccessPopup />}
    </>
  );
}
