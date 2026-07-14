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
import { Button } from "@/components/ui/button";
import BioCards from "@/components/landing/BioCards";

export const metadata = {
  title:
    "Biometric Attendance System in Pune | Face Attendance Machine and Fingerprint Attendance Machine",
  description:
    "TimeWatch provides biometric attendance systems in Pune including face attendance machines and fingerprint attendance machines. Ideal for IT companies, factories, hospitals, colleges and offices across Hinjawadi, Magarpatta, Kharadi and Pimpri Chinchwad.",
  keywords:
    "biometric attendance system in Pune, face attendance machine in Pune, fingerprint attendance machine in Pune, attendance machine Pune, biometric system Pune",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-pune`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Pune | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch provides biometric attendance systems in Pune including face attendance machines and fingerprint attendance machines. Ideal for IT companies, factories, hospitals, colleges and offices across Hinjawadi, Magarpatta, Kharadi and Pimpri Chinchwad.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-pune`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceHyderabad() {
  const industries = [
    {
      title: "Growing IT & Startup Ecosystem",
      value:
        "With thousands of employees entering large tech parks like SP Infocity, Magarpatta and Rajiv Gandhi Infotech Park, Pune companies require fast and reliable Biometric Attendance Systems to manage workforce efficiently.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Strong Manufacturing & Industrial Base",
      value:
        "Pune’s industrial zones such as Pimpri Chinchwad, Bhosari, Talegaon and Chakan operate multiple shifts. A Biometric Attendance System in Pune ensures accurate tracking of overtime, shifts, and payroll for industrial teams.",
      icon: Factory,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Remote Teams & Flexible Work",
      value:
        "Companies across Pune follow hybrid work models. Cloud-connected biometric systems help track attendance seamlessly whether employees work onsite or remotely.",
      icon: Users,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "High Focus on Compliance & Payroll Accuracy",
      value:
        "Organizations in Pune cannot compromise on compliance or payroll. Biometric attendance systems integrate leave, shifts, overtime, and payroll management to ensure accurate and compliant HR processes.",
      icon: CheckCircle,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Hospitals, Labs & Healthcare Units",
      value:
        "Hospitals, laboratories, and healthcare centers across Pune adopt touchless biometric systems like face and palm recognition to maintain hygiene and smooth staff movement.",
      icon: Hospital,
      color: "from-purple-500 to-purple-700",
    },
  ];

  const locations = [
    "Hinjawadi",
    "Magarpatta",
    "Kharadi",
    "Viman Nagar",
    "Baner",
    "Balewadi",
    "Aundh",
    "Shivajinagar",
    "Camp",
    "Kothrud",
    "Yerwada",
    "Pimpri Chinchwad",
    "Bhosari",
    "Chakan",
    "Talegaon",
    "Hadapsar",
    "Wagholi",
    "and more",
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks in Pune?",
      answer:
        "Yes, AI face recognition works accurately even with masks or glasses.",
    },
    {
      question: "Which biometric machine is best for factories in Pune?",
      answer:
        "A Fingerprint Attendance Machine in Pune is ideal for factories because it provides reliable shift tracking.",
    },
    {
      question:
        "Can biometric attendance be used across multiple Pune branches?",
      answer:
        "Yes, cloud attendance software syncs all branches into one dashboard.",
    },
    {
      question: "Does biometric attendance integrate with payroll?",
      answer:
        "Yes, attendance automatically syncs with payroll including shifts, overtime and leave.",
    },
    {
      question: "What is the price of biometric attendance machines in Pune?",
      answer:
        "Basic models start around six thousand rupees and vary based on features such as face or fingerprint recognition.",
    },
  ];

  const facePoints = [
    "IT companies in Hinjawadi and Magarpatta",
    "Finance and consulting firms in Kharadi and Viman Nagar",
    "Hospitals across Shivajinagar, Aundh and Fatima Nagar",
    "Startups and co-working spaces in Baner and Yerwada",
    "Colleges and universities across Pune city",
  ];

  const fingerprintPoints = [
    "Pimpri Chinchwad industrial belt",
    "Bhosari MIDC",
    "Chakan and Talegaon factories",
    "Retail stores and supermarkets across Pune",
    "Logistics and warehouse facilities",
  ];
  const systems = [
    /* IT and Software Parks */
    {
      icon: Laptop,
      title: "IT and Software Parks in Pune",
      value:
        "Pune is home to major IT parks in Hinjawadi Phase 1, Phase 2 and Phase 3, as well as Magarpatta and Kharadi. Face Attendance Machine in Pune is the preferred choice for these companies as it offers fast entry and supports hybrid work. Employees can check in quickly during peak traffic hours without queues.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Manufacturing and Industrial Plants */
    {
      icon: Factory,
      title: "Manufacturing and Industrial Plants in Pune",
      value:
        "Pune is known for its automotive and engineering industries. Plants in Chakan, Talegaon and Pimpri Chinchwad rely on the Fingerprint Attendance Machine in Pune for accurate shift tracking, overtime management and prevention of buddy punching.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Hospitals and Healthcare Facilities */
    {
      icon: Hospital,
      title: "Hospitals and Healthcare Facilities in Pune",
      value:
        "Healthcare institutions across Pune use face, palm and iris attendance systems to ensure that staff can mark attendance hygienically without touching the machine. These systems are ideal for hospitals, labs, and pharmaceutical companies where hygiene is critical.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Education Sector */
    {
      icon: School,
      title: "Schools, Colleges and Institutes in Pune",
      value:
        "Educational institutions across Kothrud, Camp, Aundh and Deccan benefit from biometric attendance because it reduces paperwork, improves transparency and accurately tracks teacher and staff attendance.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Logistics and Warehousing */
    {
      icon: Warehouse,
      title: "Logistics and Warehousing in Pune",
      value:
        "Warehouses in Wagholi, Hadapsar and Ranjangaon use biometric attendance to track shift workers, delivery teams and field staff efficiently. Real-time data ensures accurate payroll and staffing management.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Corporate Offices and Startups */
    {
      icon: Building,
      title: "Corporate Offices and Startups in Pune",
      value:
        "Offices in Baner, Balewadi, Viman Nagar and Yerwada prefer biometric attendance because it integrates easily with HRMS and payroll systems, making employee management seamless and transparent.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* What is a Face Attendance Machine in Pune */
    {
      icon: HelpCircle,
      title: "What is a Face Attendance Machine in Pune?",
      value:
        "A Face Attendance Machine in Pune uses AI-enabled facial recognition to authenticate employees instantly. It is ideal for high-traffic workplaces like IT parks, co-working spaces and hospitals. It works accurately even with masks, glasses or changing lighting, making it suitable for modern corporate environments.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* What is a Fingerprint Attendance Machine in Pune */
    {
      icon: HelpCircle,
      title: "What is a Fingerprint Attendance Machine in Pune?",
      value:
        "A Fingerprint Attendance Machine in Pune uses unique fingerprint patterns to verify employees securely. It is a cost-effective and reliable option for factories, logistics companies, workshops and industrial plants where shift-based operations are common.",
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
        name: "Does face attendance work with masks in Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, face attendance machines in Pune work accurately even when employees are wearing masks or glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which biometric machine is best for factories in Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Pune generally prefer fingerprint attendance machines because they are durable and ideal for shift based attendance.",
        },
      },
      {
        "@type": "Question",
        name: "Can biometric attendance be used across multiple Pune branches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cloud based biometric attendance systems allow companies to manage attendance across multiple Pune offices from a single dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, biometric attendance data including leave, late marks, and overtime integrates automatically with payroll software.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of biometric attendance machines in Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Attendance machines in Pune usually start around six thousand rupees depending on the type of biometric technology.",
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
                Biometric Attendance System in Pune
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Modern, accurate and reliable attendance solutions for Pune’s
                growing businesses
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
                Pune is one of India’s most rapidly expanding business markets
                with a strong presence in IT, manufacturing, education, finance
                and startups. Organizations across Magarpatta, Hinjawadi, Baner,
                Pimpri Chinchwad and Kharadi rely on efficient attendance
                systems to manage employees working across offices, plants,
                branches, field roles and hybrid environments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Biometric Attendance System in Pune helps companies eliminate
                manual attendance errors, improve payroll accuracy and ensure
                transparent time tracking. These systems use face recognition,
                fingerprint scanning, palm verification or iris-based
                identification to offer accurate and secure attendance for every
                type of workforce.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                TimeWatch provides advanced biometric devices and cloud software
                built specifically for Indian work environments, making our
                system a trusted choice for businesses throughout Pune.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Section */}

        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Pune Companies Need Biometric Attendance
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
                    Face Attendance Machine in Pune
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>Fast, touchless and ideal for modern Pune workplaces</p>
                  <p>
                    A Face Attendance Machine in Pune uses AI-based facial
                    recognition to identify employees instantly. It is widely
                    adopted because it is contactless, hygienic and extremely
                    fast during peak hours.
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
                    This keyword appears more than six times throughout the
                    content to support strong SEO performance without sounding
                    repetitive.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine in Pune
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    Reliable and cost effective attendance solution for
                    factories and offices The Fingerprint Attendance Machine in
                    Pune is preferred by manufacturing plants, workshops,
                    warehouses and SME units. It prevents buddy punching and
                    ensures accurate time tracking for shift workers.
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
            <h2 className="text-3xl md:text-3xl  font-bold text-gray-900 mb-12 text-center">
              How Different Pune Industries Use Biometric Attendance
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
                  What is a Face Attendance Machine in Pune
                </h2>
                <p className="text-white">
                  A Face Attendance Machine in Pune uses AI-enabled facial
                  recognition to authenticate employees instantly. It is ideal
                  for high-traffic workplaces like IT parks, co-working spaces
                  and hospitals. It works accurately even with masks, glasses or
                  changing lighting, making it suitable for modern corporate
                  environments.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-3xl font-bold mb-8">
                  What is a Fingerprint Attendance Machine in Pune
                </h2>
                <p className="text-white">
                  A Fingerprint Attendance Machine in Pune uses fingerprint
                  patterns to verify employees securely. It is a cost-effective
                  and reliable option for factories, logistics companies and
                  workshops where shift-based operations are common.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why TimeWatch is Trusted in Pune
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Over 20 years of industry experience",
              "Face Attendance Machine in Pune with advanced AI",
              "Fingerprint Attendance Machine in Pune for industrial units",
              "Cloud and desktop software",
              "Real-time sync with payroll and leave",
              "Fast installation and reliable on-ground support",
              "Devices suitable for Indian weather and heavy daily use",
              "Trusted by thousands of Indian businesses",
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
              Pune Areas We Cover
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
