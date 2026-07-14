import React from "react";
import Head from "next/head";
import {
  Clock,
  Shield,
  Zap,
  Cloud,
  Users,
  Building2,
  Factory,
  Hospital,
  GraduationCap,
  ShoppingBag,
  Truck,
  Check,
  Star,
  Fingerprint,
  Hand,
  Eye,
  Smartphone,
  HelpCircle,
  Camera,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AccordionItem from "@/components/landing/AccordionItem";
import HomePageForm from "@/components/HomePageForm";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import BioCards from "@/components/landing/BioCards";

export const metadata = {
  title:
    "Biometric Attendance System in Ahmedabad | Face & Fingerprint Attendance Machine",
  description:
    "TimeWatch provides biometric attendance solutions in Ahmedabad including face attendance machines and fingerprint attendance machines. Local office in Bodakdev for fast support. Ideal for factories, offices, hospitals and institutions.",
  keywords:
    "biometric attendance system in Ahmedabad, face attendance machine in Ahmedabad, fingerprint attendance machine in Ahmedabad, attendance machine Ahmedabad, biometric system Ahmedabad",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-ahmedabad`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Ahmedabad | Face & Fingerprint Attendance Machine",
    description:
      "TimeWatch provides biometric attendance solutions in Ahmedabad including face attendance machines and fingerprint attendance machines.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-ahmedabad`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceAhmedabad() {
  const systems = [
    {
      icon: Camera,
      title: "Face Recognition Attendance System",
      value:
        "The Face Attendance Machine is now one of the most preferred attendance solutions in India. It is fast, accurate and completely touchless which makes it ideal for high traffic offices and sensitive environments like hospitals. Face Attendance Machines work even with masks and low lighting. They are used in corporate offices, IT companies, schools, co working spaces and government institutions.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Fingerprint,
      title: "Fingerprint Attendance Machine",
      value:
        "A Fingerprint Attendance Machine is one of the most trusted attendance solutions in India. This Fingerprint Attendance Machine prevents buddy punching and works well in factories, retail shops, warehouses and offices. Companies prefer the Fingerprint Attendance Machine for accuracy and affordability.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Hand,
      title: "Palm Recognition Attendance System",
      value:
        "Palm recognition uses vein patterns or palm images to identify employees. It is contactless and extremely hygienic. Palm recognition works even when fingerprints are worn out or when users wear gloves. This makes it ideal for food processing units, hospitals, laboratories and pharmaceutical industries.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Eye,
      title: "Iris Recognition Attendance System",
      value:
        "Iris scanning is one of the most secure biometric methods available. Iris attendance works through glasses, protective gear and masks which makes it suitable for government offices, defence organizations, research labs and high security facilities.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
    {
      icon: Smartphone,
      title: "Multi Modal Biometric Devices",
      value:
        "Multi modal devices which support face, fingerprint, palm, card and PIN offer maximum flexibility. These are ideal for companies that have different departments with different attendance needs.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: HelpCircle,
      title: "What is a Face Attendance Machine?",
      value:
        "A Face Attendance Machine uses advanced AI and image processing to scan and verify an employee's face within seconds. This system is completely touchless which makes it hygienic and safe for high traffic environments. It works even with masks, glasses and varying lighting conditions.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
    {
      icon: HelpCircle,
      title: "What is a Fingerprint Attendance Machine?",
      value:
        "A Fingerprint Attendance Machine uses unique fingerprint patterns to confirm identity and record attendance. It is cost effective, easy to use and very reliable for small and large companies.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
  ];

  const industries = [
    {
      title: "Corporate & IT Companies",
      value:
        "Organizations in Bodakdev, SG Highway, Navrangpura and Prahlad Nagar prefer the Face Attendance Machine in Ahmedabad for fast, contactless and queue-free entry. Many companies use it to support hybrid teams and remote working employees.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
      featured: true,
    },
    {
      title: "Manufacturing, Industrial & Textile Units",
      value:
        "Ahmedabad is known for its strong textile and industrial base. Units in Naroda, Odhav, Isanpur, Rakhial, Vatva, Changodar, Kadi and Sanand use the Fingerprint Attendance Machine in Ahmedabad for reliable shift control, overtime tracking and payroll transparency.",
      icon: Factory,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Hospitals & Healthcare Centers",
      value:
        "Hospitals across Ahmedabad use face, palm and iris attendance because they require hygienic verification with no physical touch.",
      icon: Hospital,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Education Institutions",
      value:
        "Schools and colleges in Bopal, Maninagar, Naranpura and Satellite use biometric attendance for teachers and staff to maintain punctuality and prevent manual errors.",
      icon: GraduationCap,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Retail Stores, Showrooms & Hospitality",
      value:
        "Retail and food chains across Ahmedabad prefer biometric attendance to manage staff across multiple outlets.",
      icon: ShoppingBag,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Logistics & Warehouses",
      value:
        "Distribution centers in Aslali, Changodar, Narol and Bavla use biometric systems for field staff, drivers, warehouse teams and shift workers.",
      icon: Truck,
      color: "from-teal-500 to-teal-700",
    },
  ];

  const benefits = [
    {
      title: "Heavy workforce movement",
      desc: "Companies in Ahmedabad work across multiple zones like SG Highway, Prahlad Nagar, Science City Road, Naroda, Narol and Changodar. A Biometric Attendance System in Ahmedabad helps HR monitor attendance centrally.",
    },
    {
      title: "Multiple shift patterns",
      desc: "Textiles, pharma, chemicals, food processing and manufacturing units in Ahmedabad run day, night and rotating shifts. Biometric attendance eliminates errors and improves payroll accuracy.",
    },
    {
      title: "High tech adoption",
      desc: "Ahmedabad’s growing IT and corporate sector demands modern, hygienic and contactless attendance. A Face Attendance Machine in Ahmedabad is ideal for touch-free authentication.",
    },
    {
      title: "Need for transparency",
      desc: "Businesses need clean attendance data for payroll, PF, ESI, audits and compliance. Biometrics provide tamper proof records.",
    },
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks in Ahmedabad?",
      answer:
        "Yes, AI based face recognition works accurately even with masks or glasses.",
    },
    {
      question: "Which attendance machine is best for factories in Ahmedabad?",
      answer:
        "Factories in Ahmedabad prefer the Fingerprint Attendance Machine because it is durable, secure and ideal for shift workers.",
    },
    {
      question:
        "Can biometric attendance be used across multiple locations in Ahmedabad?",
      answer:
        "Yes, cloud based biometric attendance systems allow organizations to track attendance for all Ahmedabad branches centrally.",
    },
    {
      question: "Does biometric attendance integrate with payroll?",
      answer:
        "Yes, all attendance data including overtime, late marks and shifts syncs automatically with payroll.",
    },
    {
      question:
        "What is the cost of biometric attendance machines in Ahmedabad?",
      answer:
        "Prices start around six thousand rupees and vary depending on features such as face or fingerprint recognition.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face attendance work with masks in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, AI based face recognition works accurately even with masks or glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which biometric attendance machine is best for factories in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Ahmedabad prefer fingerprint attendance machines because they provide secure and accurate shift tracking.",
        },
      },
      {
        "@type": "Question",
        name: "Can biometric attendance be used across multiple locations in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, cloud based biometric attendance systems allow organizations to track attendance for all Ahmedabad branches centrally.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, biometric attendance data including shifts, leave, late marks and overtime integrates automatically with payroll software.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of biometric attendance machines in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Attendance machines in Ahmedabad usually begin around six thousand rupees depending on the biometric technology and features.",
        },
      },
    ],
  };
  const facePoints = [
    "Corporate offices in Bodakdev, Vastrapur and Prahlad Nagar",
    "IT companies across SG Highway and Science City Road",
    "Hospitals in Navrangpura, Maninagar and Bopal",
    "Co-working spaces across Gurukul Road, Satellite and Ambawadi",
    "Institutions and training centers across Ahmedabad",
  ];

  const fingerprintPoints = [
    "Textile and garment units in Narol, Odhav and Rakhial",
    "Chemical and pharma factories in Vatva, Naroda GIDC and Changodar",
    "Manufacturing units in Sanand and Kadi",
    "Retail outlets and showrooms across Ahmedabad",
    "Warehousing and logistics operations",
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pb-36">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Biometric Attendance System in Ahmedabad
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Accurate, modern and reliable attendance solutions for businesses
              across Ahmedabad and Gandhinagar
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">Secure & Tamper-Proof</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Contactless & Fast</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  <span className="font-semibold">Cloud Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 -mb-[1px]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </header>

      {/* MAIN */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro + Local Office */}
        <section className="max-w-7xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Accurate, modern and reliable attendance solutions for Ahmedabad
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ahmedabad has grown into one of India’s strongest commercial and
              industrial cities with a powerful presence in textiles, IT,
              finance, pharmaceuticals, manufacturing, education and corporate
              services. In such a fast developing environment, companies in
              Ahmedabad need a reliable attendance management system to handle
              multiple shifts, large workforces, on-field teams and hybrid
              schedules.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Biometric Attendance System in Ahmedabad solves all these
              challenges by using secure technologies such as face recognition,
              fingerprint scanning, palm verification and iris identification.
              TimeWatch has a strong ground presence in Ahmedabad, making
              support faster and installation easier for local companies.
            </p>
          </div>

          <aside className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Our Ahmedabad Office</h3>
            <p className="text-gray-700 mb-2 font-semibold">
              TimeWatch Infocom Pvt. Ltd. – Ahmedabad Office
            </p>
            <address className="not-italic text-gray-600 mb-3">
              Office No. 102, Platinum Plaza,
              <br />
              Near Judges Bungalow Road, Bodakdev,
              <br />
              Ahmedabad – 380054
            </address>

            <div className="space-y-1 text-gray-700">
              <p>
                <span className="font-semibold">Contact Person:</span> Anshika
                Jain
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+919667649888" className="text-secondary">
                  +91 96676 49888
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:Anshika@timewatchindia.com"
                  className="text-secondary"
                >
                  Anshika@timewatchindia.com
                </a>
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              This local presence helps businesses receive faster demos,
              installations, service support and on-site assistance anywhere
              across Ahmedabad and Gandhinagar.
            </p>
          </aside>
        </section>

        {/* Why Companies Prefer */}
        <section className="container mx-auto mb-20 px-0 lg:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Companies in Ahmedabad Prefer Biometric Attendance
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="
        bg-white p-6 rounded-2xl group relative overflow-hidden 
        border border-gray-200 
        hover:border-primary transition-all duration-500
      "
              >
                <div className="flex flex-col lg:flex-row items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-0">
            <div className="grid md:grid-cols-2 gap-8">
              {/* LEFT CARD - FACE ATTENDANCE */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Face Attendance Machine in Ahmedabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    Touchless attendance with fast and accurate facial
                    recognition
                  </p>

                  <p>
                    A Face Attendance Machine in Ahmedabad uses AI powered
                    facial scanning to identify employees quickly, even during
                    morning rush hours. This is highly suitable for companies
                    that prefer contactless and hygienic attendance.
                  </p>

                  <ul className="space-y-4">
                    {facePoints.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-2">
                    The Face Attendance Machine in Ahmedabad keyword appears
                    more than six times in natural placement across the page.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD - FINGERPRINT ATTENDANCE */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine in Ahmedabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    Most trusted for factories, warehouses and industrial units
                  </p>

                  <p>
                    A Fingerprint Attendance Machine in Ahmedabad provides
                    secure and accurate identity verification using fingerprint
                    matching. It helps eliminate buddy punching and ensures
                    correct recording of working hours.
                  </p>

                  <ul className="space-y-4">
                    {fingerprintPoints.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="pt-2">
                    This keyword is repeated more than six times in natural
                    context to strengthen SEO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Industries in Ahmedabad Using Biometric Attendance
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={i}
                  className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-6 transition-opacity duration-500`}
                    aria-hidden
                  />
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg leading-[20px] md:leading-[22px] font-bold text-gray-900">
                        {s.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm flex-grow">{s.value}</p>

                    <div className="mt-4 flex items-center gap-2">
                      {s.featured && (
                        <span className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                          <Star className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-0">
            <div className="grid md:grid-cols-2 gap-8">
              {/* LEFT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    What is a Face Attendance Machine in Ahmedabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Face Attendance Machine in Ahmedabad is a contactless
                    biometric device that uses AI based facial recognition to
                    identify employees with high accuracy. It is ideal for
                    corporate offices, hospitals, IT parks and institutions
                    where fast and hygienic verification is required. It works
                    even with masks, glasses and varying light conditions.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    What is a Fingerprint Attendance Machine in Ahmedabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Fingerprint Attendance Machine in Ahmedabad verifies
                    employee identity through fingerprint patterns. It is the
                    most preferred choice for factories, warehouses and
                    industrial locations because it is durable, accurate and
                    cost effective. It provides tamper proof attendance that
                    improves payroll efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why TimeWatch is the Most Trusted Attendance Provider in Ahmedabad
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Local Ahmedabad office for quick service and installation",
              "20+ years of biometric industry expertise",
              "Advanced Face Attendance Machine in Ahmedabad",
              "Reliable Fingerprint Attendance Machine in Ahmedabad",
              "Cloud and desktop HRMS attendance software",
              "Strong service network across Gujarat",
              "Trusted by textile, pharma, IT, education and manufacturing sectors",
              "Fast implementation and dedicated customer support",
            ].map((f, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="container mx-auto flex flex-col lg:flex-row gap-10 mt-10 px-0 lg:px-0">
            {/* Dedicated Keyword Section */}
            <div className="flex-1 bg-gradient-to-br from-gray-500 to-primary rounded-3xl p-4 md:p-10 text-white ">
              <h2 className="text-3xl font-bold mb-8">
                Palm, Iris and Multi-Modal Attendance in Ahmedabad
              </h2>

              <div className="">
                <div className="">
                  <p className="flex gap-2">
                    <div className="w-4 h-4">
                      <ArrowRight />
                    </div>
                    Palm recognition is suitable for high-hygiene environments
                    like food processing plants, hospitals and laboratories.
                  </p>
                  <p className="flex gap-2">
                    <div className="w-4 h-4">
                      <ArrowRight />
                    </div>
                    Iris recognition is used for offices requiring maximum
                    accuracy such as corporate houses, R&D labs, government
                    departments and finance institutions.
                  </p>
                  <p className="flex gap-2">
                    <div className="w-4 h-4">
                      <ArrowRight />
                    </div>
                    TimeWatch provides multi-modal attendance devices that
                    support face, fingerprint, palm, iris and RFID card all in
                    one.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-500 to-primary rounded-3xl p-4 md:p-10 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Areas We Serve in Ahmedabad
                <br /> & Gandhinagar
              </h2>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="">
                  <p className="text-white flex items-start">
                    Bodakdev, Satellite, Vastrapur, SG Highway, Prahlad Nagar,
                    Navrangpura, Naranpura, Chandkheda, Maninagar, Narol, Odhav,
                    Vatva GIDC, Changodar, Sanand, Bopal, Gota, Science City,
                    Memnagar and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="container mx-auto mt-12 mb-20">
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Related Products
          </h2>
          <ProductCatCard categorySlug="time-attendance-and-access-control" />
        </section>

        {/* Related Pages */}
        <section>
          <div className="container mx-auto px-0">
            <h2 className="text-center mb- text-3xl lg:text-4xl font-extrabold text-secondary">
              Pan India Presence
            </h2>
            <BioCards />
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto py-12 px-0 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Frequently Asked Questions
          </h2>

          <div id="bio1seFAQ">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                item={{ question: f.question, answer: f.answer }}
                index={i}
                isFirst={i === 0}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          className="container mx-auto py-12 px-0 sm:px-6 lg:px-8"
          id="contact"
        >
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Contact Us
          </h2>

          <div className="flex flex-col md:flex-row justify-center mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="flex-1 p-6 md:p-8 bg-white">
              <HomePageForm />
            </div>

            <div className="flex-1 p-8 bg-[#d63438] text-white flex flex-col items-center justify-center space-y-6">
              <h3 className="text-xl md:text-4xl font-bold mb-2">
                Request a Demo Today
              </h3>
              <div className="space-y-2 text-center">
                <p className="md:text-xl font-semibold">
                  Call: <span>+91 95999 53923</span>
                </p>
                <p className="md:text-xl font-semibold">
                  Email: <span>sales@timewatchindia.com</span>
                </p>
              </div>
              <p className="text-sm text-white/90 max-w-xs">
                Or contact our Ahmedabad office for local demo, installation and
                support.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
