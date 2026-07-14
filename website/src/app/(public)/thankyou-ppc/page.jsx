// app/thank-you/page.tsx
import Link from "next/link";
import { CheckCircle, Home, Mail, MessageCircleMore, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Thank You | TimeWatch - We'll Be In Touch Soon",
  description:
    "Thank you for contacting TimeWatch. We've received your message and will respond shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 flex items-center justify-center relative -top-20">
      {/* Hero Section with Gradient */}
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-[#b82c30] rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your message has been successfully received. Our team will review
            your inquiry and get back to you.
          </p>
          <div className="md:flex gap-x-4 items-center justify-center">
            <Button asChild>
              <Link href="/" className="mt-3">
               Back to Home
              </Link>
            </Button>
            {/* <Button asChild>
              <Link href="tel:+919266955776" className="mt-3">
                Enquiry Now
              </Link>
            </Button> */}
            {/* <Button asChild variant={"secondary"} className={'bg-[#25D366]'}>
              
              <Link href="https://wa.link/h2xnzy" target="_blank" className="mt-3 flex items-center">
              <MessageCircleMore className="w-10 h-10"/>
                Whatsapp Now
              </Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
