import React from "react";
import {
  Shield,
  Lock,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AccordionItem from "@/components/landing/AccordionItem";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import EnternceProductSection from "@/components/landing/EnternceProductSection";

export const metadata = {
  title:
    "Entrance Control Systems by TimeWatch – Automatic Turnstiles, Flap Barriers & Swing Gates Manufacturer in India",
  description:
    "Discover TimeWatch Entrance Control Systems – Full Height Turnstiles, Swing Barriers, Tripod Turnstiles, Flap Barriers, and P-Type Gates. Engineered with brushless DC motors, anti-tailgating sensors, and biometric integration for secure, high-traffic access control solutions.",
  keywords:
    "entrance control systems, pedestrian access control, full height turnstile, tripod turnstile, swing barrier gate, flap barrier, P-Type gate, access control gates, biometric access control, RFID gate, automatic gate manufacturer, entrance control manufacturer in India, TimeWatch India",
  openGraph: {
    type: "website",
    url: "https://www.timewatchindia.com/products/entrance-control/",
    title:
      "Entrance Control Systems by TimeWatch – Secure & Intelligent Pedestrian Access",
    description:
      "Explore Full Height Turnstiles, Swing Gates, Tripod Turnstiles, Flap Barriers, and P-Type Gates by TimeWatch – secure, durable, and intelligent access control solutions.",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/images/entrance-control-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Entrance Control Systems by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrance Control Systems by TimeWatch",
    description:
      "Full Height Turnstiles, Swing Gates, Tripod Turnstiles, Flap Barriers & P-Type Gates for secure pedestrian access control.",
    images: [
      "https://www.timewatchindia.com/assets/images/entrance-control-banner.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.timewatchindia.com/products/entrance-control/",
  },
};



const EntranceControlPage = () => {
  const products = [
    {
      id:"full-height-turnstiles",
      title: "Full Height Turnstiles",
      description:
        "Maximum security turnstiles engineered for high-traffic restricted areas. SUS304 stainless steel construction with up to 2 million operational cycles. Perfect for industrial facilities, data centers, and high-security zones.",
      image: "/images/landing/fht2300d.png",
      features: [
        "IP54 protection rating",
        "Bi-directional access control",
        "Face, fingerprint & RFID integration",
        "Up to 2M operational cycles",
        "Emergency release mechanism",
        "Heavy-duty SUS304 construction",
      ],
      models: ["FHT2400D", "FHT2300D", "FHT2400", "FHT2300"],
      link: "https://www.timewatchindia.com/products/entrance-control/full-height-turnstile",
      
      catalogueUrl: "#",
    },
    {
       id:"swing-gates",
      title: "Swing Gates / Swing Barriers",
      description:
        "Elegant swing gates with tempered glass wings for modern corporate entrances. Features precision brushless DC motors and infrared safety sensors for smooth, silent operation in lobbies and commercial spaces.",
      image: "/images/landing/swing-gate.webp",
      features: [
        "Tempered glass wings",
        "Brushless DC motor technology",
        "Infrared safety sensors",
        "Fire alarm interface",
        "Up to 15M operational cycles",
        "Adjustable speed control",
      ],
      models: ["TWLD-SG20", "TWLD-SG2600/2602", "TW-SG-2712", "TWLD-SG2009"],
      link: "https://www.timewatchindia.com/products/entrance-control/swing-gate-swing-barrier",
      catalogueUrl: "#",
    },
    {
        id:"tripod-turnstiles",
      title: "Tripod Turnstiles",
      description:
        "Cost-effective space-efficient solution with robust stainless steel construction. Ideal for offices, stadiums, metro stations, and educational institutions requiring reliable entry control.",
      image: "/images/landing/twld-ts2700-2.png",
      features: [
        "SS304 stainless steel frame",
        "Anti-tailgating sensors",
        "Semi-automatic operation",
        "5M+ operational cycles",
        "IP54 protection",
        "RFID & biometric ready",
      ],
      models: ["TWLD-TS2700", "TWLD-TS2715"],
      link: "https://www.timewatchindia.com/products/entrance-control/turnstile-tripod",
      catalogueUrl: "#",
    },
    {
       id:"flap-barriers",
      title: "Flap Barriers",
      description:
        "High-speed automated barriers with 0.6s operation time. 304-grade stainless steel with acrylic flaps for fast throughput in subways, offices, and campus environments.",
      image: "/images/landing/flap-barrier.webp",
      features: [
        "0.6s fast operation",
        "304 stainless steel construction",
        "Acrylic flap design",
        "Anti-tailgating sensors",
        "Emergency release mode",
        "Multiple access modes",
      ],
      models: ["TW-FB2000", "TW-FB2200"],
      link: "https://www.timewatchindia.com/products/entrance-control/flap-barrier",
      catalogueUrl: "#",
    },
    {
        id:"p-type-p-gate",
      title: "P-Type / P-Gate",
      description:
        "Wide-lane swing gate designed for wheelchair and trolley-friendly access. Features tempered glass paddles and brushless DC motor for reliable, maintenance-free operation.",
      image: "/images/landing/p-gate.webp",
      features: [
        "Wide-lane accessibility",
        "Tempered glass paddles",
        "Brushless DC motor",
        "8M+ operational cycles",
        "Infrared safety sensors",
        "Minimal maintenance",
      ],
      models: ["TWLD-SBG1000"],
      link: "https://www.timewatchindia.com/products/entrance-control/p-type-p-gate",
      catalogueUrl: "#",
    },
  ];

  const faqs = [
    {
      question: "What is an Entrance Control System?",
      answer:
        "An entrance control system manages and secures pedestrian movement using gates, turnstiles, and barriers integrated with access control devices like RFID, face, or fingerprint scanners.",
    },
    {
      question:
        "What products are included in TimeWatch's Entrance Control category?",
      answer:
        "The range includes Full Height Turnstiles, Swing Gates, Tripod Turnstiles, Flap Barriers, and P-Type Gates, all engineered for safe and efficient access control.",
    },
    {
      question: "Can these gates integrate with biometric systems?",
      answer:
        "Yes. All TimeWatch products integrate seamlessly with biometric devices, RFID card readers, and QR/barcode systems using dry-contact or TCP/IP connectivity.",
    },
    {
      question: "Where can Entrance Control Systems be installed?",
      answer:
        "They are ideal for offices, factories, educational campuses, airports, metro stations, hospitals, and high-security facilities.",
    },
    {
      question: "Are the products suitable for outdoor use?",
      answer:
        "Yes. Models like FHT2400D and TWLD-SG2602 are IP-rated for both indoor and semi-outdoor environments.",
    },
    {
      question: "How do these systems ensure safety?",
      answer:
        "All models include infrared anti-tailgating and anti-pinch sensors, ensuring safe and controlled access for every user.",
    },
    {
      question: "What is the typical lifespan of these gates?",
      answer:
        "Depending on the model, TimeWatch systems offer between 5 to 15 million operational cycles with negligible maintenance.",
    },
    {
      question: "Does TimeWatch offer installation and support?",
      answer:
        "Yes. TimeWatch provides complete installation, training, integration, and after-sales support across India.",
    },
  ];

  const featureList = [
    {
      title: "Leading Indian Manufacturer",
      description:
        "Trusted by 5,000+ businesses across India for biometric and access control solutions. From corporate offices to metro stations, our entrance control systems deliver proven performance in diverse Indian environments.",
    },
    {
      title: "Brushless DC Motor Technology",
      description:
        "Advanced brushless DC motors ensure silent operation, extended lifespan up to 15 million cycles, and minimal maintenance requirements, reducing total cost of ownership significantly.",
    },
    {
      title: "Seamless Integration",
      description:
        "All systems integrate effortlessly with RFID, QR codes, face recognition, and fingerprint scanners. Compatible with leading access control platforms via dry-contact or TCP/IP connectivity.",
    },
    {
      title: "Fail-Safe Emergency Operation",
      description:
        "Built-in fire alarm interface and emergency release mechanisms ensure safe evacuation during power loss or emergency situations, meeting international safety standards.",
    },
    {
      title: "Heavy-Duty Construction",
      description:
        "Premium SS304/SUS304 stainless steel construction with IP44/IP54 protection ratings. Engineered to withstand high-traffic applications and harsh Indian environmental conditions.",
    },
    {
      title: "Complete Service Support",
      description:
        "Pan-India installation, customization, training, and 24/7 after-sales support. 1-year comprehensive warranty with free firmware updates and technical assistance.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    name: "Entrance Control Systems by TimeWatch",
    description:
      "Explore Full Height Turnstiles, Swing Gates, Tripod Turnstiles, Flap Barriers, and P-Type Gates by TimeWatch – secure, durable, and intelligent access control solutions for high-traffic areas.",
    url: "https://www.timewatchindia.com/products/entrance-control",
    brand: { "@type": "Brand", name: "TimeWatch" },
    hasPart: [
      {
        "@type": "Product",
        name: "Full Height Turnstiles",
        url: "https://www.timewatchindia.com/products/entrance-control/full-height-turnstile",
      },
      {
        "@type": "Product",
        name: "Swing Gates / Swing Barriers",
        url: "https://www.timewatchindia.com/products/entrance-control/swing-gate-swing-barrier",
      },
      {
        "@type": "Product",
        name: "Tripod Turnstiles",
        url: "https://www.timewatchindia.com/products/entrance-control/turnstile-tripod",
      },
      {
        "@type": "Product",
        name: "Flap Barriers",
        url: "https://www.timewatchindia.com/products/entrance-control/flap-barrier",
      },
      {
        "@type": "Product",
        name: "P-Type / P-Gate",
        url: "https://www.timewatchindia.com/products/entrance-control/p-type-p-gate",
      },
    ],
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  };

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-[#6d6f72]/10 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6d6f72] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="lg:grid lg:grid-cols-1 gap-12 items-center">
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6d6f72] mb-6 leading-tight">
                  Entrance Control Systems <br />
                  <span className="text-primary">
                    Secure & Intelligent Pedestrian Access
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl">
                  TimeWatch India is a leading manufacturer of innovative
                  entrance control systems and access automation solutions. Our
                  advanced range offers unmatched reliability, design, and
                  integration for secure, seamless pedestrian access.
                </p>
                {/* 
                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">
                      IP54 Protection
                    </span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Lock className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">
                      Biometric Ready
                    </span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Users className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">
                      High Traffic
                    </span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Zap className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">15M+ Cycles</span>
                  </div>
                </div> */}

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={"#contact"}
                    className="bg-primary hover:bg-[#b82c30] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={"#products"}
                    className="bg-white hover:bg-gray-50 text-primary font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50" id="products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-4">
                Our Product Range
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive entrance control solutions for every security need
              </p>
            </div>

            <div className="space-y-20">
            
             <EnternceProductSection products={products}/>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs
              title="Why Choose TimeWatch?"
              subtitle="Your trusted partner for entrance control solutions across India"
              features={featureList}
              buttonText="Enquire Now"
              buttonLink="#contact"
              footerText="Join 5,000+ Indian businesses already using TimeWatch solutions"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className=" py-20 px-4 sm:px-6 lg:px-8 bg-gray-50.">
          <h2 className="text-center mb-12 text-3xl lg:text-4xl font-extrabold text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="container mx-auto">
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

        {/* Contact Form Section */}
        <section
          className="container mx-auto py-20 px-4 sm:px-6 lg:px-8"
          id="contact"
        >
          <h2 className="text-center mb-12 text-3xl lg:text-4xl font-extrabold text-secondary">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center rounded-xl overflow-hidden shadow-2xl">
            {/* Contact Form */}
            <div className="flex-1 p-4 md:p-8 bg-white">
              <HomePageForm />
            </div>

            {/* Contact Info */}
            <div className="flex-1 p-8 bg-[#d63438] text-white flex flex-col items-center justify-center space-y-6">
              <h2 className="text-xl md:text-4xl font-bold mb-4">
                Request a Demo Today
              </h2>
              <div className="space-y-3 text-center">
                <p className="md:text-xl font-semibold">
                  Call:&nbsp;
                  <span>+91 95999 53923</span>
                </p>
                <p className="md:text-xl font-semibold">
                  Email:&nbsp;
                  <span>sales@timewatchindia.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Script
        id="entrance-control-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default EntranceControlPage;
