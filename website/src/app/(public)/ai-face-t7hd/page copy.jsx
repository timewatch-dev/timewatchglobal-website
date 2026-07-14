import React from "react";
import {
  Camera,
  Wifi,
  Battery,
  Shield,
  Zap,
  MapPin,
  Smartphone,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Fingerprint,
  QrCode,
  CreditCard,
  Globe,
  HardHat,
  Plane,
  Train,
  Building2,
  Factory,
  Award,
} from "lucide-react";
import Image from "next/image";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import AccordionItem from "@/components/landing/AccordionItem";
import HomePageForm from "@/components/HomePageForm";
import Link from "next/link";

export const metadata = {
  title: "TimeWatch | AI-Face-T7HD",
  description:
    "Experience the next generation of workforce attendance — portable, powerful, and built for any environment.",
  alternates: {
    canonical: "https://www.timewatchindia.com/ai-face-t7hd",
  },
};

// Helper component for the FAQ accordion to replicate Bootstrap's collapse/accordion behavior

const AIFaceT7HDLanding = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is TimeWatch AI-Face-T7HD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TimeWatch AI-Face-T7HD is a portable Android-based biometric attendance and access control device designed for outdoor or remote sites with dual camera support, rugged IP68 build, and 4G connectivity.",
        },
      },
      {
        "@type": "Question",
        name: "How does the back camera work for attendance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 13MP rear camera enables attendance capture in open or large spaces. Simply point the back camera at individuals or groups for instant face recognition with popup confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "What connectivity options are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The device supports 4G SIM, Wi-Fi, and GPS for instant cloud sync and real-time data transmission from any location.",
        },
      },
      {
        "@type": "Question",
        name: "What is the battery capacity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The AI-Face-T7HD features a powerful 5050mAh long-lasting battery for extended outdoor use without frequent charging.",
        },
      },
      {
        "@type": "Question",
        name: "Can it be used outdoors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the device is IP68 rated, making it water-resistant, dust-proof, and shock-resistant for harsh outdoor environments.",
        },
      },
      {
        "@type": "Question",
        name: "What verification modes does it support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The device supports multiple authentication methods including Face Recognition, NFC, Password, and QR Code verification.",
        },
      },
      {
        "@type": "Question",
        name: "Can I export attendance data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can view and export attendance data instantly with real-time cloud sync and easy download options.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries is it ideal for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perfect for construction sites, airports, metro systems, logistics, security teams, and any industry requiring portable outdoor attendance tracking.",
        },
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "TimeWatch AI-Face-T7HD Portable Biometric Attendance Device",
    description:
      "India's first portable biometric attendance device with back camera support, IP68 rugged design, Android 13.0 OS, dual camera, 5050mAh battery, and 4G/Wi-Fi/GPS connectivity.",
    brand: {
      "@type": "Brand",
      name: "TimeWatch",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
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


  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-[#6d6f72]/10 to-primary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6d6f72] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className=" items-center bg-white rounded-full px-4 py-2 shadow-md mb-6 hidden md:inline-flex">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-semibold text-gray-700">
                    India's First Portable Device with Back Camera
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6d6f72] mb-6 leading-tight">
                  TimeWatch <span className="text-primary">AI-Face-T7HD</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Experience the next generation of workforce attendance —
                  portable, powerful, and built for any environment
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">IP68 Rugged</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Smartphone className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">Android 13.0</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Camera className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">Dual Camera</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Battery className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">5050mAh</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                    <Wifi className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">4G/Wi-Fi/GPS</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://storage.googleapis.com/timewatch-dashbord-bucket/uploads/docs/datasheet/ai-face-t7hd-datasheet-ver-2-0-yohwpj.pdf"
                    target="_blank"
                    className="bg-primary hover:bg-[#b82c30] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                  >
                    Get a Catalouge
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                  href={"#contact"}
                  
                    className="bg-red-300  text-[#6d6f72] font-semibold px-8 py-4 rounded-lg border-2 border-gray-200"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>

              <div className="relative hidden. md:block. mt-10 md:mt-0">
                <div className="relative z-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-2xl flex items-center justify-center">
                    {/* <Smartphone className="w-48 h-48 text-primary" /> */}
                    {/* <video src="/videos/360.mp4"></video> */}
                    <div className="relative w-[300px] h-[250px]  md:w-[600px] md:h-[450px]">
                      <Image
                        src="/images/AI-Face-T7HD-front.png"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain py-4 md:py-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/30 to-[#6d6f72]/30 rounded-3xl -z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                A Breakthrough in Portable Biometric Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meet TimeWatch AI-Face-T7HD — AI-powered face recognition with
                rugged IP68 build, Android 13.0 OS, and 4G connectivity ensures
                accurate real-time attendance anywhere. Perfect for
                construction, airports, metro, and security teams.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#b82c30] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                  Lightning Fast
                </h3>
                <p className="text-gray-600">
                  0.2-second recognition speed with instant popup confirmation
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6d6f72] to-[#5a5c5f] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                  Military Grade
                </h3>
                <p className="text-gray-600">
                  IP68 rated for water, dust, and shock resistance
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#b82c30] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                  Always Connected
                </h3>
                <p className="text-gray-600">
                  4G, Wi-Fi, and GPS for real-time cloud synchronization
                </p>
              </div>
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
                    <div className="relative w-[300px] h-[250px]  md:w-[450px] md:h-[450px] flex justify-center">
                      <Image
                        src="/images/AI-Face-T7HD-back.png"
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
                  CORE INNOVATION
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Back Camera Attendance Revolution
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The 13MP rear camera enables attendance capture via back
                  camera — ideal for large groups or open areas. Instant
                  recognition with popup confirmation makes workforce management
                  effortless.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#6d6f72] mb-1">
                        Group Attendance
                      </h4>
                      <p className="text-gray-600">
                        Capture multiple employees simultaneously in open spaces
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#6d6f72] mb-1">
                        Instant Confirmation
                      </h4>
                      <p className="text-gray-600">
                        Real-time popup with employee name and status
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#6d6f72] mb-1">
                        High Accuracy
                      </h4>
                      <p className="text-gray-600">
                        AI-powered recognition even in challenging conditions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-[#6d6f72] mb-3">
                    Perfect For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Construction Sites
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Metro Stations
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Airports
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Security Teams
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Industrial Sites
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Technical Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powered by cutting-edge technology for unmatched performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Operating System",
                  value: "Android 13.0",
                  color: "from-primary to-[#b82c30]",
                },
                {
                  icon: Camera,
                  title: "Display",
                  value: '5.5" HD Touch',
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                },
                {
                  icon: Camera,
                  title: "Camera System",
                  value: "Dual (Front + 13MP Rear)",
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
                  value: "4G / Wi-Fi / GPS",
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
                  <h3 className="text-sm font-medium text-gray-600 mb-1">
                    {spec.title}
                  </h3>
                  <p className="text-lg font-bold text-[#6d6f72]">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 text-center">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-[#6d6f72] mb-2">
                  Portable Design
                </h4>
                <p className="text-gray-600 text-sm">
                  Lightweight and easy to carry for field operations
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#6d6f72]/10 to-[#6d6f72]/5 rounded-2xl p-6 text-center">
                <Globe className="w-10 h-10 text-[#6d6f72] mx-auto mb-3" />
                <h4 className="font-semibold text-[#6d6f72] mb-2">
                  Real-time Data Sync
                </h4>
                <p className="text-gray-600 text-sm">
                  Instant cloud synchronization from any location
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-[#6d6f72] mb-2">
                  Easy Download
                </h4>
                <p className="text-gray-600 text-sm">
                  Export attendance reports with one click
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for demanding environments across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: HardHat,
                  title: "Construction Sites",
                  description:
                    "Track workers on-site with rugged, portable attendance",
                  color: "from-primary to-[#b82c30]",
                },
                {
                  icon: Plane,
                  title: "Airports",
                  description:
                    "Manage ground crew and staff across terminals efficiently",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                },
                {
                  icon: Train,
                  title: "Metro & Transit",
                  description:
                    "Sync remote attendance for station and field staff",
                  color: "from-primary to-[#b82c30]",
                },
                {
                  icon: Shield,
                  title: "Security Teams",
                  description:
                    "Reliable outdoor device for patrol and guard attendance",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                },
                {
                  icon: Factory,
                  title: "Factories",
                  description:
                    "Replace manual registers with automated biometric tracking",
                  color: "from-primary to-[#b82c30]",
                },
                {
                  icon: Building2,
                  title: "Remote Sites",
                  description: "Perfect for any location with 4G connectivity",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs />
          </div>
        </section>

        {/* FAQ Section */}
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

export default AIFaceT7HDLanding;
