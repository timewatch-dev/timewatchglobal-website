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
} from "lucide-react";
import HomePageForm from "@/components/HomePageForm";
import AccordionItem from "@/components/landing/AccordionItem";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import BioCards from "@/components/landing/BioCards";

export const metadata = {
  title:
    "Biometric Attendance System in Kolkata | Face & Fingerprint Attendance Machine",
  description:
    "TimeWatch provides biometric attendance systems in Kolkata including face attendance machines and fingerprint attendance machines. Perfect for IT offices, factories, hospitals, schools and corporates across Salt Lake, New Town and Park Street.",
  keywords:
    "biometric attendance system in Kolkata, face attendance machine in Kolkata, fingerprint attendance machine in Kolkata, attendance machine Kolkata, biometric system Kolkata",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-kolkata`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Kolkata | Face & Fingerprint Attendance Machine",
    description:
      "TimeWatch provides biometric attendance systems in Kolkata including face attendance machines and fingerprint attendance machines. Perfect for IT offices, factories, hospitals, schools and corporates across Salt Lake, New Town and Park Street.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-in-kolkata`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceHyderabad() {
  const industries = [
    {
      title: "Information Technology & Corporate Workspaces",
      value:
        "IT parks in Salt Lake and corporate offices across Kolkata use Face Attendance Machines to manage large teams, hybrid work setups and ensure precise attendance tracking.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Small Businesses & Retail",
      value:
        "Shops, offices and startups near Gariahat leverage biometric attendance systems to maintain transparency, accurate payroll and reliable HR records.",
      icon: Users,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Factories & Industrial Plants",
      value:
        "Industrial units and warehouses in Howrah, Dankuni and Taratala use Fingerprint and Biometric Attendance Machines to manage shifts, overtime, and workforce across multiple teams efficiently.",
      icon: Factory,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Hospitals, Medical Centers & Healthcare",
      value:
        "Hospitals and healthcare institutions in Kolkata adopt touchless Face Attendance Machines to ensure hygiene and smooth entry for staff and visitors.",
      icon: Hospital,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Schools, Colleges & Educational Institutes",
      value:
        "Educational institutions across the city, including schools and colleges, use biometric systems for faculty, admin staff, and student attendance to maintain secure campus operations.",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-700",
    },
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks in Hyderabad",
      answer:
        "Yes, AI powered face recognition systems work accurately even when employees wear masks or glasses.",
    },
    {
      question: "Which biometric machine is best for factories in Hyderabad",
      answer:
        "Factories and manufacturing units prefer a Fingerprint Attendance Machine in Hyderabad because it offers reliable, tamper proof attendance.",
    },
    {
      question: "Can I track attendance across multiple branches in Hyderabad",
      answer:
        "Yes. Cloud based biometric systems allow real time attendance monitoring across every branch or site.",
    },
    {
      question: "Does biometric attendance integrate with payroll software",
      answer:
        "Yes, attendance, leave, overtime and shift data sync directly with payroll systems.",
    },
    {
      question:
        "What is the cost of biometric attendance machines in Hyderabad",
      answer:
        "Prices begin around six thousand rupees and vary depending on features like face recognition, fingerprint modes or cloud connectivity.",
    },
  ];

  const facePoints = [
    "IT companies in Salt Lake Sector V",
    "Startups and corporates in New Town and Rajarhat",
    "Hospitals across Park Street, Dhakuria and EM Bypass",
    "Co working spaces in Camac Street, Ballygunge and AJC Bose Road",
    "Educational institutions in Tollygunge, Kalighat and Behala",
  ];

  const fingerprintPoints = [
    "Manufacturing units in Howrah and Taratala",
    "Warehouses in Dankuni and BT Road",
    "Retail chains across Gariahat, Shyambazar and Esplanade",
    "Small businesses, workshops and automobile service centers",
    "Logistics and delivery hubs in Topsia and Kasba",
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face attendance work with masks in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, face attendance machines in Kolkata work accurately with masks and glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which biometric attendance system is best for factories in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Kolkata commonly use fingerprint attendance machines because of their accuracy and durability in shift based environments.",
        },
      },
      {
        "@type": "Question",
        name: "Can biometric attendance systems manage multiple branches in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, cloud attendance systems allow companies to manage and monitor attendance across multiple branches in and around Kolkata.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, biometric attendance systems automatically sync attendance, shift and overtime data with payroll software.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of biometric attendance machines in Kolkata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices for biometric attendance machines in Kolkata generally start around six thousand rupees depending on features like face or fingerprint recognition.",
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
                Biometric Attendance System in Kolkata
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Smart and accurate attendance solutions for Kolkata’s modern
                businesses
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
                Kolkata is one of India’s most active commercial hubs with a
                strong presence in IT, education, manufacturing, healthcare,
                retail, logistics and government services. Organizations across
                Salt Lake Sector V, Park Street, New Town, Rajarhat, Howrah,
                Ballygunge and other major business clusters manage thousands of
                employees every day. Handling attendance manually often leads to
                errors, time fraud and payroll delays.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A Biometric Attendance System in Kolkata solves these challenges
                by capturing precise employee attendance through face
                recognition, fingerprint scanning, palm verification and iris
                authentication. These systems help companies maintain accurate
                time records, eliminate manual dependency and ensure smooth
                payroll processing.
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
            How Different Industries in Kolkata Use Biometric Attendance
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
                    Face Attendance Machine in Kolkata
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Face Attendance Machine in Kolkata uses artificial
                    intelligence and infrared scanning to identify employees
                    instantly. It provides a contactless, hygienic and extremely
                    fast method of punching attendance. This solution is widely
                    adopted in:
                  </p>
                  <ul className="space-y-4">
                    {facePoints.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine in Kolkata
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Fingerprint Attendance Machine in Kolkata is reliable for
                    factories, warehouses, workshops and offices where secure
                    identity verification is required. It completely removes
                    buddy punching, making attendance tamper proof.
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
                    The Fingerprint Attendance Machine in Kolkata keyword also
                    appears multiple times to strengthen SEO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose TimeWatch in Kolkata
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "More than 20 years of biometric expertise",
              "Accurate Face Attendance Machine in Kolkata with advanced AI",
              "Reliable Fingerprint Attendance Machine in Kolkata for industry use",
              "Strong presence across Telangana",
              "Cloud and desktop attendance solutions",
              "Real time sync with payroll, leave and shift management",
              "Suitable for both small businesses and large enterprises",
              "End to end installation and on site support",
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
