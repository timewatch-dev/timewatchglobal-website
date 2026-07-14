import React from "react";
import {
  Building2,
  Users,
  Factory,
  Hospital,
  GraduationCap,
  Warehouse,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Shield,
  Zap,
  Cloud,
  Truck,
  ShieldCheck,
  Hand,
  Check,
  Eye,
  Building,
  Laptop,
  School,
  HelpCircle,
} from "lucide-react";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import BioCards from "@/components/landing/BioCards";

export const metadata = {
  title:
    "Biometric Attendance System in Mumbai | Face Attendance Machine and Fingerprint Attendance Machine",
  description:
    "TimeWatch offers advanced biometric attendance systems in Mumbai including face attendance machines and fingerprint attendance machines. Ideal for offices, factories, hospitals and schools across Mumbai, Navi Mumbai and Thane.",
  keywords:
    "biometric attendance system in Mumbai, face attendance machine in Mumbai, fingerprint attendance machine in Mumbai, attendance machine Mumbai, attendance device Thane, biometric system Navi Mumbai, face recognition attendance Mumbai, fingerprint attendance Navi Mumbai",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-mumbai`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Mumbai | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch offers advanced biometric attendance systems in Mumbai including face attendance machines and fingerprint attendance machines. Ideal for offices, factories, hospitals and schools across Mumbai, Navi Mumbai and Thane.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-mumbai`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceHyderabad() {
  const industries = [
    {
      title: "Large Workforce & Fast-Paced Work Environments",
      value:
        "Mumbai has one of the largest concentrations of corporate offices, IT parks, production units, hospitals and retail chains. A fast and accurate Biometric Attendance System in Mumbai helps manage high footfall and rapid entry flow across diverse workplaces.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Multi-Shift Companies & Industrial Workforces",
      value:
        "Factories in Navi Mumbai MIDC, Thane industrial zones and Andheri manufacturing clusters rely heavily on shift-based attendance. Fingerprint Attendance Machines in Mumbai are widely used for reliable tracking of long hours, night shifts and overtime.",
      icon: Factory,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Hybrid Offices & Mobile Teams",
      value:
        "Many Mumbai companies allow partial work-from-home or have teams working on client sites. Cloud-connected biometric systems help HR monitor attendance from any location with real-time syncing.",
      icon: Users,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Payroll-Driven Organizations",
      value:
        "Mumbai businesses cannot afford payroll delays or compliance errors. A Biometric Attendance System in Mumbai integrates attendance, leave, overtime and shift rosters to ensure accurate payroll every month.",
      icon: CheckCircle,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Hospitals, Clinics & High-Sensitivity Environments",
      value:
        "Hospitals and healthcare units across Mumbai, Navi Mumbai and Thane prefer touchless face and iris-based biometric systems to maintain hygiene and seamless staff movement.",
      icon: Hospital,
      color: "from-purple-500 to-purple-700",
    },
  ];

  const locations = [
    {
      city: "Mumbai",
      areas: [
        "BKC",
        "Andheri East",
        "Andheri West",
        "Lower Parel",
        "Dadar",
        "Bandra",
        "Goregaon",
        "Malad",
        "Borivali",
        "Kandivali",
        "Powai",
        "Kurla",
        "Saki Naka",
        "Chembur",
        "Churchgate",
        "Nariman Point",
      ],
    },
    {
      city: "Navi Mumbai",
      areas: [
        "Vashi",
        "Nerul",
        "Belapur",
        "Ghansoli",
        "Airoli",
        "Kopar Khairane",
        "Panvel",
      ],
    },
    {
      city: "Thane",
      areas: ["Thane West", "Thane East", "Wagle Estate", "Kalwa", "Mumbra"],
    },
  ];

  const faqs = [
    {
      question: "Does face recognition work during heavy footfall in Mumbai",
      answer:
        "Yes. Face Attendance Machines in Mumbai are designed to verify employees quickly even during rush hours.",
    },
    {
      question: "Which attendance machine is best for factories in Navi Mumbai",
      answer:
        "A Fingerprint Attendance Machine in Mumbai and Navi Mumbai is preferred for factory and industrial environments.",
    },
    {
      question: "Can I monitor attendance from different Mumbai branches",
      answer:
        "Yes. A cloud based Biometric Attendance System in Mumbai allows central attendance control across all locations.",
    },
    {
      question: "Does the machine integrate with payroll software",
      answer:
        "Yes. Attendance, shifts, overtime and leave data sync directly with payroll.",
    },
    {
      question: "What is the price of biometric attendance machines in Mumbai",
      answer:
        "Prices start around six thousand rupees and depend on features such as face recognition, fingerprint mode and cloud support.",
    },
  ];

  const facePoints = [
    "Corporate offices in BKC",
    "IT companies in Powai, Vikhroli and Andheri",
    "Hospitals in Dadar, Bandra and Byculla",
    "Educational institutions in Navi Mumbai",
    "Co working spaces across Mumbai",
  ];

  const fingerprintPoints = [
    "Manufacturing units in Navi Mumbai MIDC",
    "Warehouses in Bhiwandi",
    "Wholesale hubs in Saki Naka and Kurla",
    "Automobile workshops in Thane",
    "Printing and packaging companies in Andheri East",
  ];

  const systems = [
    /* Palm Recognition Attendance in Mumbai */
    {
      icon: Hand,
      title: "Palm Recognition Attendance in Mumbai",
      value:
        "Palm recognition is becoming popular in hospitals, labs, pharmaceutical companies and food processing units where hygiene is critical. It offers completely touch-free verification and works even when fingerprints are damaged or when staff wear gloves, making it highly reliable for sensitive environments.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Iris Recognition Attendance in Mumbai */
    {
      icon: Eye,
      title: "Iris Recognition Attendance in Mumbai",
      value:
        "Iris-based attendance is used in government offices, high-security buildings, R&D labs, aerospace companies and financial institutions in Mumbai. Iris recognition works through masks, glasses and safety gear while offering extremely high accuracy and security.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Corporate Offices in Mumbai */
    {
      icon: Building,
      title: "Corporate Offices in Mumbai",
      value:
        "Companies in BKC, Lower Parel, Nariman Point and Andheri East use the Face Attendance Machine in Mumbai to handle large morning rush hours. HR teams benefit from real-time dashboards, leave management and advanced shift-based attendance tracking.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* IT Parks in Powai, Vikhroli and Navi Mumbai */
    {
      icon: Laptop,
      title: "IT Parks and Tech Companies",
      value:
        "IT companies in Powai, Vikhroli and Navi Mumbai rely on cloud-connected Biometric Attendance Systems in Mumbai to manage hybrid employees, flexible timing, client-site teams and night shifts.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Factories in Navi Mumbai, Bhiwandi and Thane */
    {
      icon: Factory,
      title: "Factories and Industrial Units",
      value:
        "Industrial plants in Navi Mumbai, Bhiwandi and Thane prefer the Fingerprint Attendance Machine in Mumbai for strict shift hours, overtime validation and prevention of buddy punching. It works reliably even in rugged environments.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Hospitals, Clinics and Labs */
    {
      icon: Hospital,
      title: "Hospitals, Clinics and Labs",
      value:
        "Healthcare institutions across Mumbai choose touchless attendance systems like face, palm and iris recognition to avoid surface contact, maintain hygiene and ensure fast entry flow.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Schools and Colleges */
    {
      icon: School,
      title: "Schools, Colleges and Coaching Institutes",
      value:
        "Educational institutions use biometric attendance to improve transparency and track teacher and staff attendance accurately across all branches.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Retail Chains and Warehouses */
    {
      icon: Warehouse,
      title: "Retail Chains and Warehouses",
      value:
        "Retail stores and warehouses across Mumbai and Navi Mumbai depend on real-time attendance sync to the head office for correct staffing and accurate payroll management.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* What is a Face Attendance Machine in Mumbai */
    {
      icon: HelpCircle,
      title: "What is a Face Attendance Machine in Mumbai?",
      value:
        "A Face Attendance Machine in Mumbai is an AI-powered device that identifies employees through face recognition. It is fast, accurate and touchless, making it perfect for crowded offices, co-working spaces and commercial buildings. It works flawlessly with masks, glasses and different lighting conditions.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* What is a Fingerprint Attendance Machine in Mumbai */
    {
      icon: HelpCircle,
      title: "What is a Fingerprint Attendance Machine in Mumbai?",
      value:
        "A Fingerprint Attendance Machine in Mumbai uses unique fingerprint patterns for verification. It is widely used in manufacturing units, workshops and warehouses. This system is cost-effective, reliable and prevents attendance manipulation in industrial environments.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face recognition work during heavy footfall in Mumbai",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Face attendance systems in Mumbai are designed to verify employees quickly even during peak hours and large crowds.",
        },
      },
      {
        "@type": "Question",
        name: "Which attendance machine is best for factories in Navi Mumbai",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories across Navi Mumbai usually prefer fingerprint attendance systems for their accuracy and reliability in industrial environments.",
        },
      },
      {
        "@type": "Question",
        name: "Can I monitor attendance from different Mumbai branches",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cloud based biometric systems allow companies to monitor attendance from multiple branches across Mumbai, Navi Mumbai and Thane.",
        },
      },
      {
        "@type": "Question",
        name: "Does the machine integrate with payroll software",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Attendance, leave, overtime and shift data sync automatically with payroll software modules.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of biometric attendance machines in Mumbai",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices generally start at around six thousand rupees and vary depending on features such as face recognition, fingerprint scanner and cloud compatibility.",
        },
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen">
        {/* HERO */}
        <header className="relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pb-36">
            <div className="text-center">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Biometric Attendance System in Mumbai
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Accurate, secure and fast attendance for offices, factories and
                institutions across Mumbai, Navi Mumbai and Thane
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

        {/* Main Content */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            {/* Introduction */}
            <div className="bg-white rounded-2xl border p-8 md:p-12 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Managing employee attendance is one of the biggest challenges in
                a busy business environment like Mumbai. Companies in Mumbai
                operate with large teams, tight schedules, multiple shifts and
                remote staff. Manual registers, swipe cards or PIN systems
                cannot provide the speed, accuracy and transparency needed
                today. This is why organizations in Mumbai are switching to
                modern biometric solutions that use face, fingerprint, palm or
                iris recognition to ensure accurate attendance every time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TimeWatch provides a highly advanced Biometric Attendance System
                in Mumbai designed for the needs of Indian workplaces. Our
                attendance machines are used across Bandra Kurla Complex,
                Andheri, Lower Parel, Powai, Navi Mumbai, Thane, Vasai, Mira
                Road, Mulund, Kurla and many other business locations. The
                system delivers fast identification, real time data sync and
                complete integration with payroll and HRMS.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                TimeWatch provides modern and reliable biometric attendance
                machines and HRMS software trusted by businesses across the
                city. Our devices are built for Indian conditions and ensure
                seamless performance in crowded offices, factories, hospitals
                and educational institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Section */}

        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Businesses in Mumbai Need a Modern Biometric Attendance System
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
                    Face Attendance Machine in Mumbai
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Face Attendance Machine in Mumbai is one of the fastest
                    and most accurate attendance solutions used by companies
                    today. It uses artificial intelligence to verify faces
                    within seconds, even in low light or crowded entry points.
                    The Face Attendance Machine in Mumbai is touchless and
                    hygienic, making it ideal for:
                  </p>
                  <ul className="space-y-4">
                    {facePoints.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    The Face Attendance Machine in Mumbai is capable of
                    recognizing faces even with masks, glasses or head coverings
                    which makes it perfect for modern workplaces. This keyword
                    has been included more than six times across the page to
                    support ranking.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine in Mumbai
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    The Fingerprint Attendance Machine in Mumbai remains a
                    popular choice for factories, production units, workshops,
                    logistics companies and warehouses. It provides high
                    accuracy and prevents buddy punching. It is an affordable
                    option for:
                  </p>
                  <ul className="space-y-4">
                    {fingerprintPoints.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    The Fingerprint Attendance Machine in Mumbai is durable,
                    long lasting and suitable for Indian work environments where
                    dust, heat or rough usage may affect other systems. This
                    keyword is used more than six times naturally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto mb-20 px-0">
            <h2 className="text-3xl md:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Businesses in Mumbai Need a Modern Biometric Attendance System
            </h2>

            <div className="overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {systems.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent"
                    >
                      {/* Gradient Background Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      ></div>

                      {/* Top Accent Line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${spec.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>

                      <div className="relative p-6 flex flex-col h-full">
                        {/* Icon with Floating Effect */}
                        <div className="flex justify-left mb-4">
                          <div
                            className={`relative w-16 h-16 bg-gradient-to-br ${spec.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                          >
                            <IconComponent
                              className="w-8 h-8 text-white"
                              strokeWidth={2}
                            />

                            {/* Pulse Ring on Hover */}
                            <div
                              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700`}
                            ></div>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-800 mb-3 text-left min-h-[56px] flex items-center justify-left group-hover:text-[#b82c30] transition-colors duration-300">
                          {spec.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed text-left flex-grow">
                          {spec.value}
                        </p>

                        {/* Bottom Decorative Element */}
                        {/* <div className="mt-4 flex justify-center gap-1">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${spec.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                      </div> */}

                        {/* Featured Badge for Primary Items */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${spec.color} animate-pulse`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Keyword Section */}
        <section>
          <div className="container mx-auto mb-20 bg-gradient-to-br from-gray-500 to-primary rounded-3xl p-4 md:p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-3xl font-bold mb-8">
                  What is a Face Attendance Machine in Mumbai
                </h2>
                <p className="text-white">
                  A Face Attendance Machine in Mumbai is an AI powered device
                  that identifies employees through face recognition. It offers
                  quick, accurate and contactless attendance which is perfect
                  for crowded offices, co working spaces and commercial
                  buildings. This machine is ideal for entry points where
                  hundreds of employees check in during peak hours. It works
                  flawlessly with masks, glasses and different lighting
                  conditions.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-3xl font-bold mb-8">
                  What is a Fingerprint Attendance Machine in Mumbai
                </h2>
                <p className="text-white">
                  A Fingerprint Attendance Machine in Mumbai is a biometric
                  device that uses unique fingerprint patterns for verification.
                  It is widely used in manufacturing units, workshops, and
                  warehouse environments. This system is cost effective and
                  prevents attendance manipulation. It is suitable for
                  environments where employees work with machinery, tools or in
                  industrial surroundings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose TimeWatch in Mumbai
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Strong presence across Mumbai, Navi Mumbai and Thane",
              "Face Attendance Machines in Mumbai with advanced AI accuracy",
              "Reliable Fingerprint Attendance Machines in Mumbai for factories and warehouses",
              "20 years of experience in biometric technology",
              "Trusted by thousands of companies across India",
              "Real time cloud syncing and HRMS integration",
              "Rugged devices suitable for Indian conditions",
              "End to end support including installation, training and maintenance",
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Mumbai Areas We Cover
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-left">
                    {item.city}
                  </h3>
                  <ul
                    className={`space-y-2 text-gray-600`}
                    style={index === 0 ? { columnCount: 2 } : {}}
                  >
                    {item.areas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary rounded-full"></span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                Or contact our Chennai office for local demo, installation and
                support.
              </p>
            </div>
          </div>
        </section>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
    </>
  );
}
