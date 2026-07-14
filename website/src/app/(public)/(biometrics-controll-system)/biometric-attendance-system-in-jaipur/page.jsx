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
  Hotel,
  Store,
} from "lucide-react";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import { Button } from "@/components/ui/button";
import BioCards from "@/components/landing/BioCards";

export const metadata = {
  title:
    "Biometric Attendance System in Jaipur | Face & Fingerprint Attendance Machine",
  description:
    "TimeWatch provides biometric attendance systems in Jaipur including face attendance machines and fingerprint attendance machines. Trusted by schools, hospitals, factories and offices across Mansarovar, Vaishali Nagar, Sitapura and MI Road.",
  keywords:
    "biometric attendance system in Jaipur, face attendance machine in Jaipur, fingerprint attendance machine in Jaipur, attendance machine Jaipur, biometric system Jaipur",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-jaipur`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Jaipur | Face & Fingerprint Attendance Machine",
    description:
      "TimeWatch provides biometric attendance systems in Jaipur including face attendance machines and fingerprint attendance machines. Trusted by schools, hospitals, factories and offices across Mansarovar, Vaishali Nagar, Sitapura and MI Road.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-jaipur`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceHyderabad() {
  const industries = [
    {
      title: "Large Workforce & Multiple Job Roles",
      value:
        "Jaipur’s business mix includes IT parks, colleges, hotels, manufacturing plants and textile markets. A Biometric Attendance System in Jaipur ensures accurate attendance tracking for all types of employees.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Compliance & Payroll Transparency",
      value:
        "Jaipur companies need clean attendance data for PF, ESI, audits, and monthly payroll. Biometric systems eliminate guesswork and manual entry, ensuring accurate HR and payroll processes.",
      icon: CheckCircle,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Contactless & Hygienic Authentication",
      value:
        "Organizations prefer hygienic, touchless attendance. Face Attendance Machines in Jaipur provide fast and safe entry without physical contact.",
      icon: Users,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Shift-Based Teams",
      value:
        "Factories in Sitapura Industrial Area, VKI and Bagru Industrial Area rely on biometric attendance systems to manage day, night, and rotating shifts efficiently.",
      icon: Factory,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Multi-Branch Attendance Management",
      value:
        "Retail chains and offices across Jaipur require centralized reporting. Cloud-connected biometric systems allow HR teams to manage attendance across all branches easily.",
      icon: Cloud,
      color: "from-purple-500 to-purple-700",
    },
  ];

  const locations = [
    "Mansarovar",
    "Vaishali Nagar",
    "Malviya Nagar",
    "Sitapura Industrial Area",
    "Jhotwara",
    "C-Scheme",
    "MI Road",
    "Raja Park",
    "Tonk Road",
    "Bani Park",
    "Ajmer Road",
    "Jagatpura",
    "Durgapura",
    "Bagru",
    "VKI",
    "Amer Road",
    "nearby regions",
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks in Jaipur?",
      answer:
        "Yes, face recognition machines work accurately even when employees wear masks or glasses.",
    },
    {
      question: "Which biometric system is best for factories in Jaipur?",
      answer:
        "Factories prefer a Fingerprint Attendance Machine in Jaipur because it is accurate, durable and suitable for multiple shifts.",
    },
    {
      question:
        "Can one biometric system manage multiple branches across Jaipur?",
      answer:
        "Yes, cloud based systems allow attendance tracking across all branches in one dashboard.",
    },
    {
      question: "Does biometric attendance integrate with payroll software?",
      answer:
        "Yes, attendance, shift and overtime data connect automatically to payroll.",
    },
    {
      question: "What is the cost of biometric attendance machines in Jaipur?",
      answer:
        "The price generally starts at around six thousand rupees and increases based on features like face recognition or multi-biometric support.",
    },
  ];

  const facePoints = [
    "IT companies in Mansarovar, Malviya Nagar and Ajmer Road",
    "Hospitals across C-Scheme, Lal Kothi and Bani Park",
    "Co working spaces and startups in Vaishali Nagar and MI Road",
    "Colleges and universities across Jaipur",
    "Hotels and hospitality establishments across the city",
  ];
  const fingerprintPoints = [
    "Textile units in Sanganer and Jhotwara",
    "Factories in Sitapura Industrial Area",
    "Workshops and automotive centers across the city",
    "Small businesses and retail stores in Raja Park, Vaishali Nagar and Tonk Road",
    "Warehouses and logistics hubs near Ajmer Road and the Industrial Bypass",
  ];

  const systems = [
    /* IT and Software Companies */
    {
      icon: Laptop,
      title: "IT and Software Companies in Jaipur",
      value:
        "Jaipur’s IT parks and technology zones in Mansarovar, Malviya Nagar, Lal Kothi and Ajmer Road have large workforces and hybrid work models. A Face Attendance Machine in Jaipur is preferred for its speed and touchless operation, allowing employees to check in quickly during peak hours.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Colleges, Schools and Coaching Institutes */
    {
      icon: School,
      title: "Colleges, Schools and Coaching Institutes in Jaipur",
      value:
        "Jaipur is a major education hub. Institutions across C-Scheme, Jagatpura, Durgapura and Tonk Road use biometric systems for teachers and staff to maintain punctuality and remove manual registers, improving transparency and attendance tracking.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Hotels, Restaurants and Hospitality */
    {
      icon: Hotel,
      title: "Hotels, Restaurants and Hospitality in Jaipur",
      value:
        "Being a tourist city, Jaipur has a large hospitality workforce. Hotels across MI Road, Bani Park, Civil Lines and Amer Road use biometric attendance for shift staff and housekeeping teams to ensure timely check-ins and accurate attendance records.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Manufacturing and Industrial Units */
    {
      icon: Factory,
      title: "Manufacturing and Industrial Units in Jaipur",
      value:
        "Factories in Sitapura, VKI, Bagru and EPIP use a Fingerprint Attendance Machine in Jaipur for precise shift tracking, overtime calculation, and prevention of buddy punching. It works reliably even in industrial environments.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Hospitals and Clinics */
    {
      icon: Hospital,
      title: "Hospitals and Clinics in Jaipur",
      value:
        "Healthcare facilities along Tonk Road, Malviya Nagar, Mansarovar and Sodala use contactless face attendance systems for safe, hygienic and efficient entry management for staff.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Retail, Showrooms and Service Centers */
    {
      icon: Store,
      title: "Retail, Showrooms and Service Centers in Jaipur",
      value:
        "Large retail chains and showrooms in Vaishali Nagar, C-Scheme and Raja Park use biometric attendance to reduce manual work, prevent staff time fraud, and maintain accurate workforce data.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* What is a Face Attendance Machine in Jaipur */
    {
      icon: HelpCircle,
      title: "What is a Face Attendance Machine in Jaipur?",
      value:
        "A Face Attendance Machine in Jaipur uses AI-powered facial recognition to authenticate employees instantly. It is ideal for IT parks, co-working spaces, hospitality, hospitals and high-traffic workplaces. It works accurately with masks, glasses or changing lighting conditions.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* What is a Fingerprint Attendance Machine in Jaipur */
    {
      icon: HelpCircle,
      title: "What is a Fingerprint Attendance Machine in Jaipur?",
      value:
        "A Fingerprint Attendance Machine in Jaipur uses unique fingerprint patterns to verify employees securely. It is cost-effective, reliable, and widely used in factories, workshops, retail and industrial units for accurate shift tracking and payroll management.",
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
        name: "Does face attendance work with masks in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, face attendance machines in Jaipur work accurately even when employees are wearing masks or glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which biometric system is best for factories in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Jaipur commonly use fingerprint attendance machines because they provide secure and accurate attendance for shift workers.",
        },
      },
      {
        "@type": "Question",
        name: "Can biometric attendance be used across multiple branches in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, cloud attendance systems allow companies to manage employee attendance across multiple branches in and around Jaipur.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, biometric attendance systems sync attendance, leave and overtime data with payroll software for accurate salary processing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of biometric attendance machines in Jaipur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Attendance machines in Jaipur generally start at around six thousand rupees depending on the biometric technology and features.",
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
                Biometric Attendance System in Jaipur
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Accurate and modern attendance solutions for growing businesses
                in Jaipur
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
                Jaipur is one of India’s fast-developing business destinations
                with a growing presence in IT, education, textiles, hospitality,
                manufacturing and government organizations. Companies across
                Mansarovar, Vaishali Nagar, Malviya Nagar, Sitapura Industrial
                Area, MI Road, Ajmer Road and nearby regions employ large teams
                working across multiple schedules, branches and job roles.
                Managing attendance manually often leads to errors, time theft,
                fake punches and payroll delays.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Biometric Attendance System in Jaipur removes these challenges
                by using advanced technologies like face recognition,
                fingerprint scanning, palm verification and iris authentication.
                The system ensures accurate time tracking, eliminates buddy
                punching and helps HR teams maintain clean attendance records.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                TimeWatch provides reliable biometric attendance machines and
                cloud HRMS software designed for Indian workplaces. Our systems
                are used by a wide range of Jaipur businesses including IT
                companies, colleges, manufacturing units, hospitals, hotels,
                retail stores and warehouses.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Section */}

        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Jaipur Companies Choose Biometric Attendance
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
                    Face Attendance Machine in Jaipur
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>Fast, touchless and ideal for modern Pune workplaces</p>
                  <p>
                    A Face Attendance Machine in Jaipur verifies an employee’s
                    identity using AI-driven facial recognition. This technology
                    is quick, accurate and suitable for environments with high
                    morning footfall. It is widely used in:
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
                    The Face Attendance Machine in Jaipur works even when
                    employees wear masks or glasses. It handles large employee
                    volumes with ease and reduces queues during peak hours. This
                    keyword appears more than six times naturally throughout the
                    page.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine in Jaipur
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    Reliable and cost-effective attendance for factories and
                    workshops
                  </p>
                  <p>
                    A Fingerprint Attendance Machine in Jaipur captures
                    attendance using fingerprint patterns. It eliminates proxy
                    punches and helps maintain accurate working hours. This
                    device is widely used in:
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
                    A Fingerprint Attendance Machine in Jaipur is preferred for
                    its reliability, security and ease of use. It also appears
                    naturally across the content more than six times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto mb-20 px-0">
            <h2 className="text-3xl md:text-3xl  font-bold text-gray-900 mb-12 text-center">
              How Jaipur Industries Use Biometric Attendance
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
                  What is a Face Attendance Machine in Jaipur
                </h2>
                <p className="text-white">
                  A Face Attendance Machine in Jaipur uses AI based facial
                  recognition to identify employees quickly and accurately. It
                  is suitable for high-traffic workplaces, educational
                  institutions, hospitals and IT offices. The system works with
                  masks and glasses and reduces long queues during peak timings.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-3xl font-bold mb-8">
                  What is a Fingerprint Attendance Machine in Jaipur
                </h2>
                <p className="text-white">
                  A Fingerprint Attendance Machine in Jaipur verifies employee
                  identity through fingerprint patterns. It is widely used in
                  manufacturing, textiles, workshops and retail because it is
                  reliable and cost effective. It ensures fair attendance and
                  eliminates buddy punching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why TimeWatch is Trusted in Jaipur
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "More than two decades of expertise in biometric technology",
              "Face Attendance Machine in Jaipur with industry-leading accuracy",
              "Fingerprint Attendance Machine in Jaipur for factories and workshops",
              "Cloud and desktop HRMS software for real time attendance",
              "Fast installation and strong on ground support",
              "Trusted by organizations across Rajasthan’s major sectors",
              "Systems built for Indian climate and heavy usage",
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Jaipur  Areas We Cover
            </h2>

            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {locations.map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 hover:scale-105 transition transform duration-200"
                >
                  {item}
                </button>
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
