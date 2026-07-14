"use client";

import React, { useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import {
  Building2,
  Factory,
  GraduationCap,
  Truck,
  Shield,
  Users,
  MapPin,
  Award,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import HomePageForm from "@/components/HomePageForm";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import { Button } from "@/components/ui/button";

// --- Data definitions (unchanged from original) ---

const faqs = [
  {
    question: "What is BIO-1SE and how does it work?",
    answer:
      "BIO-1SE is a biometric attendance and access control device developed by TimeWatch. It uses AI-powered face recognition, fingerprint scanning, palm detection, RFID cards, and password verification to track employee attendance and control facility access.",
  },
  {
    question: "Is BIO-1SE a contactless attendance system?",
    answer:
      "Yes. BIO-1SE offers face recognition and palm recognition, both of which are completely touchless. This makes it ideal for hospitals, labs, offices, and high-hygiene areas where avoiding surface contact is important.",
  },
  {
    question: "Can it be integrated with my existing HRMS or payroll software?",
    answer:
      "Absolutely. BIO-1SE supports cloud integration with most HRMS and payroll systems, allowing real-time syncing of employee attendance, work hours, leave data, and more without manual input.",
  },
  {
    question: "Is BIO-1SE suitable for multiple locations or factory setups?",
    answer:
      "Yes. The device is designed for scalability. Whether you are managing offices in Delhi and Mumbai or factory sites in Dubai and Qatar, you can control access and attendance across all locations from a single dashboard.",
  },
  {
    question: "What happens during a power cut? Will data be lost?",
    answer:
      "No. BIO-1SE has a built-in battery backup to ensure attendance logging continues during power failures. All data is securely stored and synced to the cloud once the network is back up.",
  },
  {
    question: "Who can use BIO-1SE — employees, visitors, or contractors?",
    answer:
      "BIO-1SE supports multiple authentication methods, including RFID cards and passwords. It is suitable for full-time employees, part-time workers, contractors, and even temporary visitors.",
  },
  {
    question: "Where can I get a demo or buy BIO-1SE?",
    answer:
      "You can request a free demo or place an order by calling us at +91 95999 53923 or emailing sales@timewatchindia.com. We provide support and installations across India and Gulf countries such as Dubai, Abu Dhabi, and Qatar.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the BIO-1SE biometric attendance system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIO-1SE is a face recognition and fingerprint-based biometric attendance and access control device by TimeWatch. It also supports palm, RFID, and password entry, making it ideal for secure, hygienic workforce management across India and GCC countries.",
      },
    },
    {
      "@type": "Question",
      name: "Does BIO-1SE support contactless attendance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BIO-1SE supports AI-based face recognition and palm authentication for touchless attendance. It's highly suitable for hospitals, labs, and clean zone workplaces.",
      },
    },
    {
      "@type": "Question",
      name: "Can BIO-1SE integrate with my HRMS or payroll system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. BIO-1SE comes cloud-connected and integrates with major HRMS software for real-time syncing of attendance, leave, and shift data, simplifying payroll processing.",
      },
    },
    {
      "@type": "Question",
      name: "Is BIO-1SE suitable for multi-location offices or factories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BIO-1SE is designed to be scalable across corporate offices and multi-shift industrial locations. You can manage access across multiple sites from a centralized dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I get a demo or buy BIO-1SE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request a free demo by calling +91 95999 53923 or emailing sales@timewatchindia.com. TimeWatch serves across India and Gulf countries including Dubai, Doha, and Abu Dhabi.",
      },
    },
  ],
};

const sections = [
  {
    title: "Remote Employee Enrollment via Mobile App",
    description:
      "BIO-1SE allows HR teams to register and configure employees remotely through a mobile application. This is ideal for HR teams working across multiple branch offices or onboarding remote employees and field staff.",
  },
  {
    title: "100% Accurate Attendance Tracking with Biometric Validation",
    description:
      "Forget traditional punch cards or manual registers. BIO-1SE ensures every in-and-out entry is recorded only after biometric authentication. This improves payroll accuracy and reduces fraud, especially in medium and large Indian companies.",
  },
  {
    title: "Effortless Compliance with Indian Labor Laws",
    description:
      "Generate audit-ready attendance records that help with compliance to statutory labor requirements. Automate reporting to reduce risks during inspections or audits.",
  },
  {
    title: "Better Workplace Security Through Smart Access Control",
    description:
      "Limit entry to secure areas, such as server rooms, R&D labs, or finance departments, using fingerprint, face, palm, or RFID-based access rules. You control who enters, when, and where, keeping your assets and data secure.",
  },
  {
    title: "Faster Access with Touchless Technology",
    description:
      "Contactless face and palm recognition speeds up entry queues during peak hours. This ensures convenience for employees and maintains workplace hygiene. This is especially valuable in schools, hospitals, and factories with heavy foot traffic.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices & IT Parks",
    locations: "Delhi NCR, Bengaluru, Hyderabad, Mumbai, Pune",
    description: "Automated, secure, and scalable attendance solutions",
  },
  {
    icon: Factory,
    title: "Industrial Units & Manufacturing",
    locations: "Gujarat, Tamil Nadu, Maharashtra",
    description: "Rugged, multi-biometric devices for shift workers",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions & Hospitals",
    locations: "Kolkata, Jaipur, Lucknow",
    description: "Hygienic, contactless attendance tracking",
  },
  {
    icon: Truck,
    title: "Construction & Logistics Hubs",
    locations: "Remote & multi-site locations",
    description: "Cloud connectivity with mobile enrollment",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Designed in India, Built for Indian Workspaces",
    description:
      "Understanding climate conditions, user behavior, and legal compliance",
  },
  {
    icon: Users,
    title: "Trusted by Over 5,000 Indian Businesses",
    description:
      "Across education, healthcare, manufacturing, IT, retail, and logistics",
  },
  {
    icon: Shield,
    title: "Pan-India Service and Support",
    description:
      "From metropolitan areas to tier-2 cities with responsive technical support",
  },
  {
    icon: Award,
    title: "1-Year Warranty & Free Updates",
    description: "Product warranty with ongoing software and AI improvements",
  },
];

// Helper component for the FAQ accordion to replicate Bootstrap's collapse/accordion behavior
const AccordionItem = ({ item, index, isFirst, parentId = "bio1seFAQ" }) => {
  const [isOpen, setIsOpen] = React.useState(isFirst);
  const id = `collapse-${index}`;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden my-2">
      <h2 className="mb-0" id={`heading-${index}`}>
        <button
          className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-gray-800 bg-white hover:bg-gray-50 transition duration-150"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.question}
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-primary" : "rotate-0 text-primary"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 p-4 pt-0" : "max-h-0 opacity-0"
        } overflow-hidden text-gray-600`}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

// --- Main Component ---
const BIO1SEPage = () => {
  const [hoveredCard2, setHoveredCard2] = React.useState(null);
  const [hoveredFeature2, setHoveredFeature2] = React.useState(null);

  return (
    <>
      <Head>
        <title>
          BIO-1SE Biometric Attendance & Access Control System | AI Face, Finger
          & Palm Recognition for India & GCC (UAE, Saudi Arabia, Qatar)
        </title>
        <meta
          name="description"
          content="Discover BIO-1SE from TimeWatch, an AI-powered biometric attendance and access control device featuring face, fingerprint, palm, and RFID recognition. Perfect for workplaces in India (Delhi, Mumbai, Bengaluru) and the Gulf (Dubai, Doha, Abu Dhabi)."
        />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>
      {/* Assuming Navbar and Footer are functional Tailwind components */}

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 bio1se-page">
        {/* HERO SECTION */}
        <section className="pt-0 pb-12 md:py-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                BIO-1SE: Face, Finger & Palm Biometric Attendance System
              </h1>

              <p className="text-lg text-gray-600 mb-6">
                An AI-powered contactless attendance and access control device
                with face, fingerprint, palm, RFID, and password authentication.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b82c30] transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer space-x-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="https://wa.link/cex09u"
                  target="_blank"
                  className="border-2 border-sectext-secondary text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-sectext-secondary hover:text-primary transition-all flex items-center justify-center space-x-2"
                >
                  {/* <Play className="w-5 h-5" /> */}
                  <span>Connect on WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Abstract/Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/bio-1se.png" // replace this with your image path
                alt="BIO-1SE biometric attendance device TimeWatch India UAE"
                className="max-w-xs md:max-w-sm lg:max-w-md rounded-xl mx-auto shadow-2xl w-full"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* --- */}

        {/* HIGHLIGHT FEATURES SECTION */}
        <section className="py-12">
          <div className="container mx-auto text-center px-0 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 text-secondary">
              Product Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "/images/face.png",
                  title: "Face Recognition",
                  text: "Advanced AI for secure, contactless attendance.",
                },
                {
                  icon: "/images/palm.png",
                  title: "Palm & Fingerprint Authentication",
                  text: "Dual biometric modes for added security & hygiene.",
                },
                {
                  icon: "/images/RFID-CARD.png",
                  title: "RFID Access Control",
                  text: "Ideal for guests, temporary staff, and contractors.",
                },
                {
                  icon: "/images/cloud.png",
                  title: "Cloud Sync with HRMS",
                  text: "Seamless integration with payroll & attendance systems.",
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="h-full p-6 bg-white rounded-xl border border-gray-200 shadow-lg transition duration-400 hover:shadow-xl hover:-translate-y-1">
                    <div className="text-center">
                      <img
                        src={item.icon}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- */}

        {/* KEY BENEFITS SECTION */}
        <section className="py-12">
          <div className="container mx-auto px-0 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl lg:text-4xl font-extrabold text-center text-secondary">
              Key Benefits for HR, Admin, and Security Teams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="flex justify-center">
                  <div className="h-full p-6 bg-white rounded-2xl border border-gray-200 shadow-lg text-left transition duration-400 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="mb-4 text-xl font-bold text-primary">
                      {section.title}
                    </h3>
                    {section.description && (
                      <p className="text-gray-700 font-normal text-sm leading-relaxed">
                        {section.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className={'mx-auto mt-10 flex justify-center w-fit'}>
              <Link href={"tel:+919266955776"}>Request a Call Back</Link>
            </Button>
          </div>
        </section>

        {/* --- */}

        {/* INDUSTRY AND TIMEWATCH FEATURES SECTION */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-0 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-secondary">
                Who Should Use BIO-1SE?
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                The perfect biometric attendance system designed for India's
                diverse industries and unique challenges
              </p>
            </div>

            {/* Industries Section */}
            <div className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <div key={index}>
                      <div
                        className={`p-8 bg-white rounded-2xl h-full border border-gray-200 shadow-md text-center transition-all duration-400 cursor-pointer ${
                          hoveredCard2 === index
                            ? "transform -translate-y-2 shadow-xl ring-2 ring-red-100"
                            : ""
                        }`}
                        onMouseEnter={() => setHoveredCard2(index)}
                        onMouseLeave={() => setHoveredCard2(null)}
                      >
                        <div className="text-center">
                          <div
                            className={`w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-6 transition-transform duration-300 shadow-md ${
                              hoveredCard2 === index ? "scale-110" : "scale-100"
                            }`}
                          >
                            <IconComponent size={32} color="white" />
                          </div>
                          <h4 className="font-bold text-gray-800 mb-3 text-lg">
                            {industry.title}
                          </h4>
                          <div className="bg-red-50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">
                            {industry.locations}
                          </div>
                          <p className="text-gray-500 text-sm mb-0">
                            {industry.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
           <Button asChild className={'mx-auto mt-10 flex justify-center w-fit'}>
              <Link href={"https://wa.link/cex09u"} target="_blank">Instant WhatsApp Enquiry</Link>
            </Button>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs features={features} />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="container mx-auto py-12 px-0 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="" id="bio1seFAQ">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isFirst={index === 0}
              />
            ))}
          </div>
        </section>

        {/* --- */}

        {/* CONTACT FORM SECTION */}
        <section
          className="container mx-auto py-12 px-0 sm:px-6 lg:px-8"
          id="contact"
        >
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center  mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* Contact Form */}
            <div className="flex-1 p-4 md:p-8 bg-white">
              <HomePageForm isRedirect={true} enquiryPage={"bio-1se"} />
            </div>

            {/* Contact Info */}
            <div className="flex-1 p-8 bg-[#d63438] text-white flex flex-col items-center justify-center space-y-6">
              <h2 className="text-xl md:text-4xl font-bold mb-4">
                Request a Demo Today
              </h2>
              <div className="space-y-3 text-center">
                <p className="md:text-xl font-semibold">
                  Call:&nbsp;
                  <span> +91 95999 53923</span>
                </p>
                <p className="md:text-xl font-semibold">
                  Email:&nbsp;
                  <span> sales@timewatchindia.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BIO1SEPage;
