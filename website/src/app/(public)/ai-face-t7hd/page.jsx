// app/ai-face-t7hd/page.tsx
import React from "react";
import {
  Battery,
  Wifi,
  Shield,
  Zap,
  Users,
  Cloud,
  MapPin,
  CheckCircle,
  Download,
  Phone,
  Mail,
  Clock,
  Smartphone,
  MonitorSmartphone,
  Camera,
  Fingerprint,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";
import CatalogueDownload from "@/components/forms/CatalogueDownload";

export const metadata = {
  title:
    "Portable Face Attendance Device with Battery Backup & 4G SIM | TimeWatch AI-Face-T7HD",
  description:
    "TimeWatch AI-Face-T7HD: Portable, AI-powered face attendance device with rugged IP68 build, battery backup, group capture, and 4G SIM support. Ideal for construction, airports, hospitals, schools, and more.",
  keywords:
    "face attendance device, portable attendance device, biometric attendance device, attendance device with battery backup, 4G attendance device, SIM support attendance, group attendance device, construction attendance, hospital attendance, school attendance, factory attendance, timewatch, AI face recognition",
  alternates: {
    canonical: "https://www.timewatchindia.com/ai-face-t7hd",
  },
  openGraph: {
    title:
      "Portable Face Attendance Device with Battery Backup & 4G SIM | TimeWatch AI-Face-T7HD",
    description:
      "Experience portable face attendance with 4G SIM, IP68 rugged build, and extended battery backup. Trusted by India's leading organizations.",
    url: "https://www.timewatchindia.com/ai-face-t7hd",
    type: "website",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/img/products/ai-face-t7hd.jpg",
        width: 1200,
        height: 630,
        alt: "AI-Face-T7HD Portable Face Attendance Device",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AI Face Attendance Device - Portable, Battery Backup, 4G SIM | TimeWatch",
    description:
      "Track workforce attendance anywhere with AI-powered face recognition, rugged IP68 design, and all-day power.",
    images: [
      "https://www.timewatchindia.com/assets/img/products/ai-face-t7hd.jpg",
    ],
  },
};

const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "TimeWatch AI-Face-T7HD",
  image: [
    "https://www.timewatchindia.com/assets/img/products/ai-face-t7hd.jpg",
  ],
  description:
    "AI-powered portable face attendance device with IP68 rugged rating, dual cameras, 5050mAh battery backup, 4G SIM support, and group capture. Built for construction, airports, schools, hospitals, factories, and remote sites.",
  brand: { "@type": "Brand", name: "TimeWatch" },
  url: "https://www.timewatchindia.com/ai-face-t7hd",
  offers: {
    "@type": "Offer",
    url: "https://www.timewatchindia.com/ai-face-t7hd#contact",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "156",
  },
};

const faqs = [
  {
    question: "What is TimeWatch AI-Face-T7HD?",
    answer:
      "AI-Face-T7HD is a portable Android-based biometric attendance and access control device by TimeWatch, designed for outdoor or remote work locations.",
  },
  {
    question: "How does the back camera work?",
    answer:
      "The 13MP rear camera is used to capture attendance in open or large areas, ensuring accurate identification even in outdoor environments.",
  },
  {
    question: "What are the connectivity options available?",
    answer:
      "AI-Face-T7HD supports 4G SIM, Wi-Fi, and GPS connectivity for instant synchronization of attendance and location data.",
  },
  {
    question: "What is the battery capacity?",
    answer:
      "The device is powered by a long-lasting 5050mAh battery, offering extended operation time for on-site and field deployments.",
  },
  {
    question: "Is it suitable for outdoor use?",
    answer:
      "Yes. AI-Face-T7HD is IP68 rated, making it resistant to water, dust, and shocks — perfect for rugged outdoor environments.",
  },
  {
    question: "What are the available verification modes?",
    answer:
      "The device supports multiple authentication methods including Face, NFC, Password, and QR Code verification.",
  },
  {
    question: "Can I export or view attendance data?",
    answer:
      "Yes. Attendance data can be viewed and exported instantly through the device interface or cloud platform.",
  },
  {
    question: "Which industries is AI-Face-T7HD ideal for?",
    answer:
      "It is ideal for construction sites, airports, metro projects, logistics operations, and security agencies requiring portable attendance tracking.",
  },
];

const featureList = [
  {
    title: "Designed for Mobility, Built for Performance",
    description:
      "The AI-Face-T7HD combines portability with durability, featuring an IP68-rated body that performs reliably in construction sites, hospitals, factories, and outdoor environments.",
  },
  {
    title: "AI-Powered Face Recognition",
    description:
      "Equipped with advanced deep learning algorithms, it delivers high-speed and accurate facial identification — both online and offline.",
  },
  {
    title: "Battery Backup & 4G Connectivity",
    description:
      "The 5050mAh battery and dual SIM slots ensure uninterrupted attendance tracking even in areas without power or Wi-Fi access.",
  },
  {
    title: "Offline & Multi-Mode Operation",
    description:
      "Supports face, NFC/MIFARE card, password, and QR authentication — providing flexible options for every organization.",
  },
  {
    title: "Made for Indian Work Conditions",
    description:
      "Developed with an understanding of Indian climate, workforce mobility, and compliance needs — ensuring stable and efficient attendance logging anywhere.",
  },
  {
    title: "Pan-India Service Network",
    description:
      "From metropolitan regions to remote sites, TimeWatch provides reliable installation, integration, and after-sales technical support.",
  },
  {
    title: "1-Year Warranty & Continuous Software Updates",
    description:
      "Comprehensive warranty coverage and lifetime AI software updates ensure your device remains up-to-date and dependable.",
  },
];

const AIFaceT7HDPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gap-12 items-center flex flex-col justify-center text-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
                  TimeWatch AI-Face-T7HD
                  <br />
                  <span className="text-primary">
                    Portable Face Attendance Device
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  <strong>Experience next-gen workforce attendance!</strong> The
                  TimeWatch AI-Face-T7HD is a rugged, portable biometric device
                  designed for face-based attendance in demanding environments.
                  With battery backup, 4G SIM connectivity, group capture, and
                  IP68 water/dust/shock resistance.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="#contact"
                    className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-[#c02a2e] transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Request a Quote
                  </Link>
                  <CatalogueDownload
                    downloadLink={
                      "https://storage.googleapis.com/timewatch-dashbord-bucket/uploads/docs/datasheet/ai-face-t7hd-datasheet-ver-2-0-yohwpj.pdf"
                    }
                    buttonVariant={"secondary"}
                  />
                </div>
                {/* Rating */}
                {/* <div className="mt-8 flex items-center gap-6 justify-center">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-600 font-medium">
                      4.9/5 (156 reviews)
                    </span>
                  </div>
                </div> */}
              </div>
              {/* <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-4">
                  <Image
                    src="/images/ai-face-t7hd.jpg"
                    alt="TimeWatch AI-Face-T7HD Portable Face Attendance Device"
                    width={600}
                    height={600}
                    className="rounded-lg mx-auto object-cover"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Core Innovation - Back Camera */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-[#6d6f72]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8">
                  <div className="bg-white. rounded-2xl shadow-2xl p-8 text-center flex justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[550px] md:h-[550px] flex justify-center">
                      <Image
                        src="/images/AI-Face-T7HD-front.png"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 mt-5 lg:mt-0">
                <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Key Features
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Designed for demanding environments with cutting-edge
                  technology
                </h2>
                <h4 className="font-bold text-[#6d6f72] mb-3 text-xl">
                  Perfect For:
                </h4>
                {/* <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The 13MP rear camera enables attendance capture via back
                  camera — ideal for large groups or open areas. Instant
                  recognition with popup confirmation makes workforce management
                  effortless.
                </p> */}

                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "AI-Powered Face Recognition",
                      description:
                        "Instant, high-accuracy biometric verification for quick attendance.",
                    },
                    {
                      title: "Portable & Rugged",
                      description:
                        "IP68 rated for work in outdoors, factories, sites, or challenging locations.",
                    },
                    {
                      title: "Battery Backup",
                      description:
                        "Massive 5050mAh battery lasts all day—ideal for remote use and field deployments.",
                    },
                    {
                      title: "4G SIM & Connectivity",
                      description:
                        "Real-time cloud sync with 4G SIM, Wi-Fi, and GPS—get instant attendance data anywhere.",
                    },
                    {
                      title: "Dual Camera Group Attendance",
                      description:
                        "Capture attendance of groups with powerful 13MP rear camera—perfect for open areas.",
                    },
                    {
                      title: "Fast Recognition",
                      description:
                        "0.2 seconds speed, instant popups for staff identity confirmation.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#6d6f72] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Technical Specifications
              </h2>
            </div>

            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Operating System",
                    value: "Android 13.0",
                    color: "from-primary to-[#b82c30]",
                  },
                  {
                    icon: MonitorSmartphone,
                    title: "Display",
                    value: '5.5" HD Touch',
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },
                  {
                    icon: Camera,
                    title: "Camera System",
                    value: "Front + 13MP Rear",
                    color: "from-primary to-[#b82c30]",
                  },
                  {
                    icon: Shield,
                    title: "Rugged Rating",
                    value: "IP68 Certified",
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },
                  {
                    icon: Battery,
                    title: "Battery",
                    value: "5050mAh",
                    color: "from-primary to-[#b82c30]",
                  },
                  {
                    icon: Wifi,
                    title: "Connectivity",
                    value: "4G / Wi-Fi / GPS (SIM Supported)",
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },
                  {
                    icon: Fingerprint,
                    title: "Authentication",
                    value: "Face / NFC / Password / QR",
                    color: "from-primary to-[#b82c30]",
                  },
                  {
                    icon: Zap,
                    title: "Recognition Speed",
                    value: "0.2 Seconds",
                    color: "from-[#6d6f72] to-[#5a5c5f]",
                  },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <spec.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-1">
                      {spec.title}
                    </h3>
                    <p className="text-lg font-bold text-[#6d6f72]">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use Cases */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Industry Use Cases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted across diverse sectors for reliable attendance tracking
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Construction & Project Sites",
                  description:
                    "Real-time attendance for laborers and staff—no manual registers, no fake entries.",
                },
                {
                  title: "Airports & Metro Stations",
                  description:
                    "Centralized attendance for ground crew and transit staff at any location.",
                },
                {
                  title: "Factories & Warehouses",
                  description:
                    "Accurate biometric tracking in industrial, dusty, or temperature-variable spaces.",
                },
                {
                  title: "Security & Patrol Teams",
                  description:
                    "Reliable outdoor attendance for guards, patrol teams, and remote security checkpoints.",
                },
                {
                  title: "Remote Sites & Mining",
                  description:
                    "Operates where no fixed infrastructure is available; uses battery and SIM connectivity.",
                },
                {
                  title: "Schools & Colleges",
                  description:
                    "Secure student and staff attendance—prevents proxy, exports logs for compliance.",
                },
                {
                  title: "Hospitals & Healthcare",
                  description:
                    "Portable attendance for rotating or shift workers, including emergency deployments.",
                },
                {
                  title: "Event Management",
                  description:
                    "Bulk or group attendance for large crowds, ensuring efficient entry/exits.",
                },
                {
                  title: "Logistics & Transport",
                  description:
                    "Immediate attendance capture at locality hubs, warehouses, truck stops.",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-[#6d6f72]/5 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs features={featureList} />
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

export default AIFaceT7HDPage;
