import React from "react";
import {
  Shield,
  Smartphone,
  Camera,
  Battery,
  Wifi,
  CheckCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AccordionItem from "@/components/landing/AccordionItem";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HomePageForm from "@/components/HomePageForm";
import Script from "next/script";
import CatalogueDownload from "@/components/forms/CatalogueDownload";

export const metadata = {
  title:
    "Tripod Turnstiles by TimeWatch – Secure Pedestrian Access Control | TimeWatch Infocom",
  description:
    "Explore TWLD-TS2700 & TWLD-TS2715 tripod turnstiles with stainless steel design, anti-tailgating sensors, and RFID/biometric integration.",
  openGraph: {
    type: "website",
    url: "https://www.timewatchindia.com/products/tripod-turnstiles/",
    title: "Tripod Turnstiles by TimeWatch – Secure Pedestrian Access Control",
    description:
      "Explore TWLD-TS2700 & TWLD-TS2715 tripod turnstiles with stainless steel design, anti-tailgating sensors, and RFID/biometric integration.",
    images: [
      {
        url: "https://www.timewatchindia.com/assets/images/tripod-turnstiles-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Tripod Turnstiles by TimeWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripod Turnstiles by TimeWatch",
    description:
      "TWLD-TS2700 and TWLD-TS2715 tripod turnstiles for reliable access control — SS304 stainless steel, anti-tailgating sensors, biometric integration.",
    images: [
      "https://www.timewatchindia.com/assets/images/tripod-turnstiles-banner.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.timewatchindia.com/products/tripod-turnstiles/",
  },
};

const TWLDTS2715Page = () => {
  const faqs = [
    {
      question:
        "What makes TWLD-TS2715 different from standard tripod turnstiles?",
      answer:
        "The TWLD-TS2715 features an integrated retractable belt barrier that provides visual guidance and enhanced crowd control, making it ideal for high-density areas like airports and event venues.",
    },
    {
      question: "Can the belt barrier be customized?",
      answer:
        "Yes, the belt length, color, and branding can be customized to match your facility's requirements and aesthetics.",
    },
    {
      question: "Is it suitable for outdoor use?",
      answer:
        "With IP44 protection rating, it's suitable for covered outdoor areas. For fully exposed locations, we recommend our weatherproof models.",
    },
    {
      question: "How does it handle emergency situations?",
      answer:
        "The turnstile includes anti-panic features that allow free bi-directional passage during fire alarms or other emergencies.",
    },
    {
      question: "What access control systems are compatible?",
      answer:
        "The TWLD-TS2715 integrates with RFID, face recognition, fingerprint scanners, QR/barcode readers, and most standard access control platforms.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India#webpage",
        name: "Tripod Turnstiles by TimeWatch | Access Control & Security Gates",
        url: "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India",
        description:
          "Tripod turnstiles by TimeWatch. Heavy-duty TWLD-TS2700 and TWLD-TS2715 tripod gates built from SS304 with anti-tailgating detection, retractable belt options, RFID and biometric integration. Designed for offices, campuses, metros and stadiums across India.",
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
            name: "Access Control & Security Gates",
            item: "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Tripod Turnstiles",
            item: "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India#tripod-turnstiles",
          },
        ],
      },

      {
        "@type": "ItemList",
        name: "Tripod Turnstile Models and Related Solutions",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "TWLD-TS2700 – Heavy-Duty Tripod Turnstile",
            url: "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India#twld-ts2700",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "TWLD-TS2715 – Tripod Turnstile with Retractable Belt",
            url: "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India#twld-ts2715",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI-Face-T7HD – AI Face Recognition Integration",
            url: "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India#aiface-t7hd",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Accessories and Integration Services",
            url: "https://www.timewatchindia.com/access-control-security-gate-manufacturer-in-India#accessories",
          },
        ],
      },
    ],
  };

  const featureList = [
    {
      title: "Precision-Engineered for Indian Infrastructure",
      description:
        "Built with high-grade stainless steel and tested for India’s diverse environments, from humid metros to industrial campuses, TimeWatch Tripod Turnstiles ensure durability, reliability, and consistent performance.",
    },
    {
      title: "Trusted by 5,000+ Businesses Nationwide",
      description:
        "Deployed across corporate offices, stadiums, manufacturing units, and educational institutions, our tripod gates are proven to deliver smooth, safe pedestrian control in high-traffic areas.",
    },
    {
      title: "Advanced Technology & Seamless Integration",
      description:
        "Each unit integrates effortlessly with RFID, face, fingerprint, and QR-based access systems. Our tripod turnstiles are powered by brushless DC motors with anti-tailgating sensors for silent, precise operation.",
    },
    {
      title: "AI-Ready & Maintenance-Free Design",
      description:
        "Equipped for future-ready access solutions, TimeWatch tripod turnstiles require negligible maintenance and can integrate with AI-driven attendance systems like TimeWatch AI-Face-T7HD for complete access automation.",
    },
    {
      title: "Pan-India Installation & Support",
      description:
        "With presence in metros and tier-2 cities, our technical network ensures timely installation, maintenance, and after-sales assistance for uninterrupted operation.",
    },
    {
      title: "1-Year Warranty + Free Firmware & AI Updates",
      description:
        "Each turnstile is backed by a comprehensive warranty and lifetime access to firmware/AI enhancements keeping your access system future-ready.",
    },
    // {
    //   title: "Sustainable & Energy Efficient",
    //   description:
    //     "Low power consumption (30–60W) and brushless motor design ensure long-term energy savings and eco-friendly operation in large facilities.",
    // },
  ];

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
                  Tripod Turnstiles by TimeWatch <br />{" "}
                  <span className="text-primary">
                    Smart, Secure, and Stylish Access Control Solutions
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Premium access control solution combining elegant design with
                  advanced crowd management. Features retractable belt barrier,
                  SS304 stainless steel construction, and seamless integration
                  with biometric systems.
                </p>

                {/* <div className="flex flex-wrap gap-4 mb-10">
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
                </div> */}

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={"#contact"}
                    className="bg-primary hover:bg-[#b82c30] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="pb-12 bg-gray-50 pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="">
                <div className="relative z-10 bg-gray-100 rounded-3xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-2xl flex items-center justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[600px] md:h-[450px]">
                      <Image
                        src="/images/landing/twld-ts2700.webp"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#6d6f72] mb-3 leading-tight">
                  TWLD-TS2700 – Heavy-Duty Tripod Turnstile for Reliable Access
                  Contro
                </h2>

                <p className="text-md text-gray-700 mb-4 leading-relaxed">
                  The TimeWatch TWLD-TS2700 is a heavy-duty, semi-automatic
                  tripod turnstile engineered for high-traffic zones such as
                  offices, campuses, stadiums, and metro stations. Constructed
                  from SS304 stainless steel, it ensures durability, silent
                  operation, and long service life with a 5-million-cycle
                  guarantee.
                </p>
                <h3 className="text-3xl lg:text-3xl font-extrabold text-secondary">
                  Key Features
                </h3>

                <ul className="space-y-2 mt-3">
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    SS304 stainless steel with anodized aluminum arms
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Infrared anti-tailgating detection
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Smooth semi-automatic motion
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Bi-directional operation
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Integration-ready for RFID, QR, biometric access
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    IP54 protection rating
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Maintenance-free operation
                  </li>
                </ul>

                <div class="flex flex-wrap gap-4 mt-5">
                  <CatalogueDownload
                    downloadLink={
                      "https://storage.googleapis.com/timewatch-dashbord-bucket/uploads/docs/datasheet/twld-ts2700-datasheet-ver-2-0-bfctqz.pdf"
                    }
                  />

                  <a
                    class="bg-secondary  text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                    href="#contact"
                  >
                    Enquiry Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="">
                <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#6d6f72] mb-6 leading-tight">
                  TWLD-TS2715 – Tripod Turnstile for Controlled Entry
                </h2>

                <p className="text-md text-gray-700 mb-8 leading-relaxed">
                  The TimeWatch TWLD-TS2715 enhances crowd management with its
                  integrated retractable belt mechanism. Designed for
                  high-density pedestrian areas like airports, event venues, and
                  transit terminals, it combines elegance and functionality for
                  safe, guided entry.
                </p>
                <h3 className="text-3xl lg:text-3xl font-extrabold text-secondary">
                  Key Features
                </h3>

                <ul className="space-y-2 mt-3">
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Integrated retractable safety belt
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    SS304 stainless steel and acrylic construction
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Infrared anti-tailgating sensors
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    Silent semi-automatic operation
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    IP44 protection rating
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />{" "}
                    RFID, biometric & QR system compatibility
                  </li>
                </ul>
                <div class="flex flex-wrap gap-4 mt-5">
                  <CatalogueDownload
                    downloadLink={
                      "https://storage.googleapis.com/timewatch-dashbord-bucket/uploads/docs/datasheet/twld-ts2715-datasheet-ver-2-0-eohhb1.pdf"
                    }
                  />

                  <a
                    class="bg-secondary  text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                    href="#contact"
                  >
                    Enquiry Now
                  </a>
                </div>
              </div>
              <div className="">
                <div className="relative z-10 bg-gray-100 rounded-3xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-2xl flex items-center justify-center">
                    <div className="relative w-[300px] h-[250px]  md:w-[600px] md:h-[450px]">
                      <Image
                        src="/images/landing/twld-ts2715.webp"
                        alt="AI-Face-T7HD"
                        title="AI-Face-T7HD"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs
              title="Why Choose TimeWatch?"
              subtitle="Your trusted partner for biometric solutions across India"
              features={featureList}
              buttonText="Enquire Now"
              footerText="Join 5,000+ Indian businesses already using TimeWatch solutions"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
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
      <Script
        id="tripod-turnstile-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default TWLDTS2715Page;
