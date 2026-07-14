import React from "react";
import {
  Fingerprint,
  Eye,
  Scan,
  Wifi,
  Cloud,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AccordionItem from "@/components/landing/AccordionItem";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import Script from "next/script";
import { Button } from "@/components/ui/button";

export const metadata = {
  title:
    "Biometric Attendance & Access Control Systems | Face, Fingerprint, Palm, Iris & AI Devices | TimeWatch Infocom",
  description:
    "Explore AI-powered Biometric Attendance & Access Control Systems by TimeWatch India. Our range includes face recognition, fingerprint, palm, and iris devices, all cloud-connected, Wi-Fi enabled, and built for offices, factories, schools, and government facilities.",
  keywords:
    "biometric attendance system, biometric access control, face recognition device, fingerprint attendance machine, palm recognition, iris access control, AI biometric system, Wi-Fi attendance machine, cloud-based attendance, TimeWatch India",
  openGraph: {
    type: "website",
    url: "https://www.timewatchindia.com/time-attendance-and-access-control/",
    title: "Biometric Attendance & Access Control Systems – TimeWatch India",
    description:
      "AI-powered Face Recognition, Fingerprint, Palm & Iris Biometric Devices. Cloud-connected, Wi-Fi enabled systems for offices, factories, schools & government facilities.",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/images/biometrrtic-attendance-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Biometric Attendance & Access Control Systems by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biometric Attendance & Access Control Systems – TimeWatch India",
    description:
      "AI-powered biometric devices with face, fingerprint, palm & iris recognition. Cloud-connected & Wi-Fi enabled for seamless attendance tracking.",
    images: [
      "https://www.timewatchindia.com/assets/images/biometric-attendance-banner.jpg",
    ],
  },
  alternates: {
    canonical:
      "https://www.timewatchindia.com/time-attendance-and-access-control/",
  },
};

const BiometricAttendancePage = () => {
  const products = [
    {
      title: "Iris Series – High-Security Iris Recognition Devices",
      description:
        "The TimeWatch Iris Series is designed for high-security access control environments requiring contactless biometric identification. These iris attendance systems capture precise eye patterns to deliver 99.9% accurate authentication even under low light. Ideal for government offices, defense facilities, research centers, and healthcare institutions.",
      image: "/images/landing/bio/Iris-Series.png",
      features: [
        "99.9% accurate authentication",
        "Dual-eye capture technology",
        "Real-time cloud sync",
        "Contactless biometric security",
        "Low-light operation",
        "Seamless software integration",
      ],
      applications: [
        "Government Offices",
        "Defense Facilities",
        "Research Centers",
        "Healthcare Institutions",
      ],
      link: "https://www.timewatchindia.com/time-attendance-and-access-control/iris-series",
      catalogueUrl: "#",
    },
    {
      title: "Attendance Series – Reliable Biometric Attendance Devices",
      description:
        "The Attendance Series offers powerful fingerprint attendance systems and biometric attendance machines for organizations seeking reliability and ease of use. Each Wi-Fi-enabled biometric device captures employee data in real time and uploads it to the cloud-based attendance dashboard for payroll integration.",
      image: "/images/landing/bio/Attendance-Series.png",
      features: [
        "Wi-Fi enabled cloud sync",
        "Real-time data upload",
        "Payroll integration ready",
        "Fast fingerprint scanning",
        "Multi-user capacity",
        "Compliance reporting",
      ],
      applications: [
        "Corporate Offices",
        "Factories",
        "Educational Institutions",
        "Retail Chains",
      ],
      link: "https://www.timewatchindia.com/products/time-attendance-and-access-control/attendance-series",
      catalogueUrl: "#",
    },
    {
      title: "Network Elevator Controller – Smart Floor-Wise Access Management",
      description:
        "The Network Elevator Controller by TimeWatch provides intelligent floor-level access control using biometric or RFID credentials. Each system allows only authorized users to access selected floors, combining biometric access control and network-based management. Perfect for enhancing security in multi-story buildings.",
      image: "/images/landing/bio/Network-Elevator-Controller.png",
      features: [
        "Floor-level access control",
        "Biometric & RFID authentication",
        "Network-based management",
        "Centralized monitoring",
        "Audit trail logging",
        "Emergency override feature",
      ],
      applications: [
        "Corporate Buildings",
        "Hospitals",
        "Hotels",
        "Residential Complexes",
      ],
      link: "https://www.timewatchindia.com/products/time-attendance-and-access-control/network-elevator-controller",
      catalogueUrl: "#",
    },
    {
      title:
        "Card / Fingerprint / Face Series – Multi-Mode Attendance & Access Devices",
      description:
        "This series combines face recognition attendance systems, fingerprint readers, and RFID access devices into a unified solution. TimeWatch's multi-biometric attendance machines use AI for faster verification and accurate data recording. Ideal for corporates, educational campuses, and manufacturing units.",
      image: "/images/landing/bio/Card-FingerPrint-Face-Series.png",
      features: [
        "Multi-mode authentication",
        "AI-powered verification",
        "RFID card support",
        "Face & fingerprint combo",
        "Fast recognition speed",
        "Flexible integration",
      ],
      applications: [
        "Corporate Offices",
        "Educational Campuses",
        "Manufacturing Units",
        "Government Buildings",
      ],
      link: "https://www.timewatchindia.com/products/time-attendance-and-access-control/card-fingerprint-face-series",
      catalogueUrl: "#",
    },
    {
      title: "AI-Based Speed Face Series – High-Speed AI Attendance Devices",
      description:
        "The AI-Based Speed Face Series delivers lightning-fast recognition with advanced AI face recognition technology and deep learning algorithms. Built for high-traffic environments like factories, metros, and campuses, these devices identify individuals in under 0.3 seconds. Equipped with dual cameras, temperature detection, and anti-spoofing.",
      image: "/images/landing/bio/AI-Based-Speed-Face-Series.png",
      features: [
        "0.3 second recognition speed",
        "AI deep learning algorithms",
        "Dual camera system",
        "Temperature detection",
        "Anti-spoofing technology",
        "High-traffic optimization",
      ],
      applications: [
        "Factories",
        "Metro Stations",
        "Large Campuses",
        "Shopping Malls",
      ],
      link: "https://www.timewatchindia.com/products/time-attendance-and-access-control/iris-series",
      catalogueUrl: "#",
    },
    {
      title:
        "Face Palm Access Control Devices – Contactless Multi-Biometric Solutions",
      description:
        "The Face Palm Series offers AI-powered face and palm recognition systems for next-generation contactless access control. Using 3D palm vein mapping and facial recognition, these devices provide hygienic and highly accurate authentication for hospitals, labs, and premium corporate offices. IP65-rated for harsh environments.",
      image: "/images/landing/bio/Face-&-Palm-Access-control-devices.png",
      features: [
        "3D palm vein mapping",
        "AI facial recognition",
        "Contactless & hygienic",
        "IP65 weather protection",
        "Dual biometric verification",
        "High accuracy authentication",
      ],
      applications: [
        "Hospitals",
        "Laboratories",
        "Premium Offices",
        "Clean Rooms",
      ],
      link: "https://www.timewatchindia.com/products/time-attendance-and-access-control/face-palm-access-control-devices",
      catalogueUrl: "#",
    },
  ];

  const faqs = [
    {
      question: "What are Biometric Attendance & Access Control Systems?",
      answer:
        "These are AI-powered biometric devices that manage both attendance and physical access using face, fingerprint, palm, or iris recognition. They automate workforce management while securing entry points with advanced biometric authentication.",
    },
    {
      question: "Do TimeWatch devices support cloud connectivity?",
      answer:
        "Yes. All TimeWatch biometric attendance systems are cloud-based and sync automatically for real-time monitoring. You can access attendance data from anywhere through our web dashboard or mobile app.",
    },
    {
      question: "Can I manage attendance from mobile?",
      answer:
        "Yes. Our Wi-Fi biometric machines and mobile-compatible systems allow remote management and report access. Download our mobile app to view real-time attendance, generate reports, and manage users on the go.",
    },
    {
      question: "Which industries rely most on biometric access?",
      answer:
        "Offices, factories, schools, hospitals, and secure government facilities use biometric access control for safety and efficiency. Any organization requiring accurate attendance tracking and secure access control benefits from these systems.",
    },
    {
      question: "Do they integrate with payroll software?",
      answer:
        "Absolutely — our biometric attendance systems integrate with HRMS, ERP, and payroll tools for automated processing. We support standard APIs and data export formats for seamless integration.",
    },
    {
      question: "What is the accuracy rate of biometric devices?",
      answer:
        "Our biometric devices offer 99.9% accuracy for iris recognition, 99.7% for face recognition, and 99.5% for fingerprint recognition. Advanced AI algorithms ensure minimal false acceptance or rejection rates.",
    },
    {
      question: "Are the devices suitable for outdoor installation?",
      answer:
        "Yes, select models like the Face Palm Series feature IP65 protection rating, making them suitable for outdoor and harsh environment installations. We recommend specific models based on your installation requirements.",
    },
    {
      question: "What is the user capacity of these devices?",
      answer:
        "Capacity varies by model, ranging from 3,000 to 50,000 users and 100,000 to 5 million transaction logs. We help you choose the right device based on your organization size and requirements.",
    },
  ];

  const featureList = [
    {
      title: "Unified Attendance & Access Control",
      description:
        "One powerful platform for attendance tracking and secure entry using biometric authentication like face, fingerprint, palm, or iris. Eliminate multiple systems and manage everything from a single dashboard.",
    },
    {
      title: "AI & Cloud-Enabled Technology",
      description:
        "Our AI biometric devices automatically sync data to the cloud for instant insights. Access real-time attendance reports, analytics, and alerts from anywhere through web or mobile dashboards.",
    },
    {
      title: "Wi-Fi & Mobile App Integration",
      description:
        "Manage attendance logs anytime through mobile or cloud-based dashboards. Wi-Fi connectivity ensures seamless data transfer without complex networking requirements.",
    },
    {
      title: "Multi-Mode Authentication",
      description:
        "Choose from face recognition, fingerprint, palm vein, iris, RFID, card, or password login. Support for multiple authentication methods ensures flexibility for different user preferences and security levels.",
    },
    {
      title: "Trusted by 10,000+ Organizations",
      description:
        "Installed in offices, schools, hospitals, and factories across India. Over two decades of expertise in biometric solutions with proven reliability and customer satisfaction.",
    },
    {
      title: "Complete Integration Support",
      description:
        "Seamless integration with HRMS, ERP, and payroll systems. Our technical team provides end-to-end support from installation to integration, ensuring smooth deployment and operation.",
    },
  ];

  const industries = [
    "Corporate Offices & Co-working Spaces",
    "Educational Institutions & Universities",
    "Manufacturing & Warehousing Units",
    "Healthcare & Hospitals",
    "Retail Chains & Shopping Malls",
    "Government & Smart City Projects",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    name: "Biometric Attendance & Access Control Systems by TimeWatch",
    description:
      "AI-powered Biometric Attendance & Access Control Systems including face recognition, fingerprint, palm, and iris devices — all cloud-connected and Wi-Fi enabled.",
    url: "https://www.timewatchindia.com/time-attendance-and-access-control",
    brand: { "@type": "Brand", name: "TimeWatch India" },
    hasPart: products.map((product) => ({
      "@type": "WebPage",
      name: product.title,
      url: product.link,
    })),
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
                  Biometric Attendance & <br />
                  <span className="text-primary">Access Control Systems</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl">
                  India's most trusted range of AI-powered biometric systems
                  engineered to automate workforce management and secure
                  physical access. Face recognition, fingerprint, iris, and palm
                  devices with cloud connectivity.
                </p>
                {/* 
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Fingerprint className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">
                      Multi-Biometric
                    </span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Cloud className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">
                      Cloud-Connected
                    </span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Wifi className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">Wi-Fi Enabled</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">99.9% Accurate</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Scan className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">AI-Powered</span>
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
                Our Biometric Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced biometric devices for every security and attendance
                need
              </p>
            </div>

            <div className="space-y-20">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`lg:grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative z-10 bg-gray-100 rounded-3xl p-8">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-2xl flex items-center justify-center">
                        <div className="relative w-[300px] h-[250px] md:w-[600px] md:h-[450px]">
                          <Image
                            src={product.image}
                            alt={product.title}
                            title={product.title}
                            fill
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#6d6f72] mb-4 leading-tight">
                      {product.title}
                    </h3>

                    <p className="text-md text-gray-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-secondary mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">
                        Ideal Applications:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {product.catalogueUrl !== "#" && (
                        <a
                          className="bg-primary hover:bg-[#b82c30] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                          href={product.catalogueUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Catalogue
                        </a>
                      )}
                      <Button asChild variant={"secondary"}>
                        <Link
                          className="flex items-center"
                          href={product.link}
                          target="_blank"
                        >
                          View All Products
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button asChild>
                        <Link className="flex items-center" href={"#contact"}>
                          Enquiry Now
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs
              title="Why Choose TimeWatch Biometric Systems?"
              subtitle="Trusted by 10,000+ organizations across India for over two decades"
              features={featureList}
              buttonText="Enquire Now"
              buttonLink="#contact"
              footerText="Join thousands of businesses already using TimeWatch biometric solutions"
            />
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering biometric solutions across diverse sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg font-semibold text-[#6d6f72]">
                      {industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-3xl lg:text-4xl font-extrabold text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="">
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
            Get Started with TimeWatch
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Empower your organization with smart, accurate, and AI-driven
            biometric attendance & access control systems.
          </p>
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
                  <span>+91 95999 53923</span>
                </p>
                <p className="md:text-xl font-semibold">
                  Email:&nbsp;
                  <span>sales@timewatchindia.com</span>
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.timewatchindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 underline text-lg"
                >
                  www.timewatchindia.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Script
        id="biometric-attendance-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="additional-ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: "Biometric Attendance and Access Control Systems",
                url: "https://www.timewatchindia.com/biometric-attendance-access-control-system",
                description:
                  "Explore TimeWatch biometric attendance and access control systems including iris devices, fingerprint machines, AI face recognition terminals and palm authentication solutions. Designed for secure and automated workforce management across Indian organizations.",
                inLanguage: "en-IN",
                isPartOf: {
                  "@type": "Website",
                  name: "TimeWatch Infocom Pvt Ltd",
                  url: "https://www.timewatchindia.com/",
                },
              },

              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.timewatchindia.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Products",
                    item: "https://www.timewatchindia.com/products/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Biometric Attendance and Access Control Systems",
                    item: "https://www.timewatchindia.com/biometric-attendance-access-control-system",
                  },
                ],
              },

              {
                "@type": "ItemList",
                name: "Biometric Device Categories",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Iris Series – High-Security Iris Recognition Devices",
                    url: "https://www.timewatchindia.com/biometric-attendance-access-control-system#iris-series",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Attendance Series – Reliable Biometric Attendance Devices",
                    url: "https://www.timewatchindia.com/biometric-attendance-access-control-system#attendance-series",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Network Elevator Controller",
                    url: "https://www.timewatchindia.com/biometric-attendance-access-control-system#elevator-controller",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Card, Fingerprint and Face Series – Multi-Mode Devices",
                    url: "https://www.timewatchindia.com/biometric-attendance-access-control-system#card-fingerprint-face-series",
                  },
                  {
                    "@type": "ListItem",
                    position: 5,
                    name: "AI-Based Speed Face Series",
                    url: "https://www.timewatchindia.com/biometric-attendance-access-control-system#ai-speed-face-series",
                  },
                  {
                    "@type": "ListItem",
                    position: 6,
                    name: "Face Palm Access Control Devices",
                    url: "https://www.timewatchindia.com/biometric-attendance-access-control-system#face-palm-series",
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default BiometricAttendancePage;
