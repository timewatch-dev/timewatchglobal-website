"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function LandingPopupForm({ heading, download }) {
  const [open, setOpen] = useState(true);

  // Auto-close after 5 seconds if no download link
  useEffect(() => {
    if (!download) {
      const timer = setTimeout(() => setOpen(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [download]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl shadow-lg p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Success Icon */}
          <CheckCircle2 className="w-16 h-16 text-green-500" />

          {/* Header */}
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900">
              {heading ? heading : "Form Submitted Successfully!"}
            </DialogTitle>
          </DialogHeader>

          {/* Message */}
          <p className="text-gray-600">
            Thank you for your interest. Your details have been received.
          </p>

          {/* Action Buttons */}
          {download ? (
            <Button asChild className="mt-2">
              <Link href={download} download>
                Download Catalogue
              </Link>
            </Button>
          ) : (
            <Button className="mt-4" onClick={() => setOpen(false)}>
              Close
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
