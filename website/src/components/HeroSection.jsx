"use client";
import React, { useEffect, useState } from "react";
import {
  Shield,
  BarChart3,
  Fingerprint,
  ArrowRight,
  Play,
  Award,
  SquareArrowOutUpRight,
} from "lucide-react";
import Counter from "./Counter";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormStore } from "@/store/useFormStore";
import EmailSuccessPopup from "./forms/EmailSuccessPopup";
import Link from "next/link";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10,15}$/, "Enter a valid phone number"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  location: Yup.string().notRequired(),
  message: Yup.string().notRequired(),
});

function ContactFormDialog({ children }) {
  const { isProcessing, createCustomer } = useFormStore();
  const [dialogOpen, setDialogOpen] = useState(false); // control Dialog
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Download Catalogue</DialogTitle>
            <DialogDescription>
              Please fill in your details below
            </DialogDescription>
          </DialogHeader>

          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              location: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { resetForm }) => {
              await createCustomer(values);
              setSuccess(false)
              // ✅ close dialog immediately
              setDialogOpen(false);

              // ✅ after 1.5s, show success popup
              setTimeout(() => {
                setSuccess(true);
              }, 500);

              resetForm();
            }}
          >
            <Form className="space-y-4 mt-4">
              {/* Name */}
              <div>
                <Field name="name" as={Input} placeholder="Name *" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <Field name="phone" as={Input} placeholder="Phone *" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field name="email" as={Input} placeholder="Email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Location */}
              <div>
                <Field name="location" as={Input} placeholder="Location" />
              </div>

              {/* Message */}
              <div>
                <Field
                  name="message"
                  as={Textarea}
                  placeholder="Message"
                  rows={3}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit">
                  {isProcessing ? "Submit..." : "Submit"}
                </Button>
              </div>
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>

      {/* ✅ Success popup after 1.5s */}
      {success && <EmailSuccessPopup onClose={() => setSuccess(false)} heading={"Form Submitted Successfully"} download={"https://drive.google.com/uc?export=download&id=1eMVypZUZCh26EXle3M0Uj3VDbLzJNNgG"}/>}
    </>
  );
}


const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "features",
        "products",
        "benefits",
        "testimonials",
        "pricing",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <section
      id="hero"
      className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Industry Leading Solution</span>
            </div> */}

            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Perfect Presence,
              <span className="text-secondary"> Perfect Control</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Revolutionary biometric time attendance system with advanced HRM
              integration. Transform your workforce management with cutting-edge
              technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <ContactFormDialog> */}
                <Link href={'/product-catalouge'} className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b82c30] transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer space-x-2">
                  <span>Get Catalogue</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              {/* </ContactFormDialog> */}

              <Link href={'/contact'} className="border-2 border-sectext-secondary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-sectext-secondary hover:text-primary transition-all flex items-center justify-center space-x-2">
                {/* <Play className="w-5 h-5" /> */}
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5"/>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4 justify-center md:justify-start">
              {/* <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div> */}
              <Counter />
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#d63438]/20 to-sectext-secondary/20 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Fingerprint className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">
                      Biometric Scanner
                    </h3>
                    <p className="text-sm text-gray-600">
                      Touch & Go Recognition
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-800">
                      John Doe - Check In
                    </span>
                    <span className="text-xs text-green-600">09:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-blue-800">
                      Sarah Smith - Check Out
                    </span>
                    <span className="text-xs text-blue-600">05:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium text-orange-800">
                      Mike Johnson - Break
                    </span>
                    <span className="text-xs text-orange-600">12:15 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sectext-secondary rounded-full flex items-center justify-center shadow-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
