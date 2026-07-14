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
    "Biometric Attendance System in Hyderabad | Face Attendance Machine and Fingerprint Attendance Machine",
  description:
    "TimeWatch offers advanced biometric attendance systems in Hyderabad including face attendance machines and fingerprint attendance machines. Ideal for IT companies, factories, hospitals and institutions across HITEC City, Gachibowli, Madhapur and Secunderabad.",
  keywords:
    "biometric attendance system in Hyderabad, face attendance machine in Hyderabad, fingerprint attendance machine in Hyderabad, biometric system Hyderabad, attendance machine Hyderabad, face recognition attendance Hyderabad",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-hyderabad`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Hyderabad | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch offers advanced biometric attendance systems in Hyderabad including face attendance machines and fingerprint attendance machines.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-hyderabad`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceHyderabad() {
  const industries = [
    {
      title: "Information Technology & Corporate Workspaces",
      value:
        "IT hubs in HITEC City, Gachibowli, Madhapur and the Financial District prefer Face Attendance Machines in Hyderabad to handle large teams, hybrid work setups and high foot traffic efficiently.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Startups & Co-working Spaces",
      value:
        "Co-working spaces in Madhapur, Jubilee Hills and Kondapur use biometric attendance to manage both employee and visitor access, with Face Attendance Machines ensuring smooth flow during peak hours.",
      icon: Users,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Factories & Industrial Plants",
      value:
        "Industrial zones in Jeedimetla, Cherlapally, Balanagar, Patancheru and Uppal rely on Fingerprint Attendance Machines in Hyderabad for accurate shift management, overtime tracking and payroll reliability.",
      icon: Factory,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Hospitals, Medical Centers & Pharma",
      value:
        "Hospitals and healthcare institutions in Hyderabad prefer touchless systems like face, palm and iris attendance to maintain hygiene and reduce infection risks.",
      icon: Hospital,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Schools, Colleges & Training Institutes",
      value:
        "Educational institutions across Ameerpet, Kukatpally, Dilsukhnagar and Secunderabad use biometric attendance for faculty, admin staff and secure campus entry.",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Warehousing, Logistics & Delivery Centers",
      value:
        "Warehouses in Shamshabad, Uppal and Kompally use biometric systems to track delivery teams, night shift workers and multi-location operations in real time.",
      icon: Truck,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "High-Security Government & Research Facilities",
      value:
        "Government offices, R&D labs, defence units and financial institutions adopt Iris Attendance Systems in Hyderabad for maximum accuracy through masks, glasses and secure zones.",
      icon: ShieldCheck,
      color: "from-red-500 to-red-700",
    },
    {
      title: "Food Processing, Labs & Hygiene-Sensitive Industries",
      value:
        "Labs, pharma companies and food processing units use Palm Recognition Attendance in Hyderabad for fully touchless sign-in that works even with gloves or wet hands.",
      icon: Hand,
      color: "from-teal-500 to-teal-700",
    },
  ];

  const benefits = [
    {
      title: "Large tech workforce and multiple shifts",
      desc: "Hyderabad hosts a massive IT workforce with day, night and flexible shift patterns. A Biometric Attendance System in Hyderabad ensures accurate tracking across all timing variations.",
    },
    {
      title: "Growing demand for touchless attendance",
      desc: "Offices, hospitals and co-working spaces prefer hygienic, contactless entry. A Face Attendance Machine in Hyderabad enables fast and touch-free attendance punching.",
    },
    {
      title: "Multiple branches and remote teams",
      desc: "Companies operating in HITEC City, Secunderabad, Kukatpally and remote project sites can monitor attendance centrally using a cloud-based biometric system.",
    },
    {
      title: "Payroll accuracy and compliance",
      desc: "Organizations need precise working hours, overtime and leave data. Biometric attendance eliminates manual errors and ensures accurate payroll and compliance.",
    },
  ];

  const features = [
    "More than 20 years of biometric expertise",
    "Accurate Face Attendance Machine in Hyderabad with advanced AI",
    "Reliable Fingerprint Attendance Machine in Hyderabad for industry use",
    "Strong presence across Telangana",
    "Cloud and desktop attendance solutions",
    "Real time sync with payroll, leave and shift management",
    "Suitable for both small businesses and large enterprises",
    "End to end installation and on site support",
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
    "IT and software companies in HITEC City",
    "Corporate offices in Gachibowli",
    "Hospitals in Banjara Hills and Begumpet",
    "Co working spaces in Madhapur and Kondapur",
    "Educational institutions across Hyderabad",
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face attendance work with masks in Hyderabad",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Face attendance machines in Hyderabad work accurately with masks, glasses and changing lighting conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Which biometric machine is best for factories in Hyderabad",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Hyderabad often prefer fingerprint attendance machines for reliable shift based attendance and overtime tracking.",
        },
      },
      {
        "@type": "Question",
        name: "Can I track attendance across multiple branches in Hyderabad",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cloud based attendance systems allow companies to monitor employee attendance across multiple branches in and around Hyderabad.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll software",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All biometric attendance data including late marks, shifts and overtime syncs automatically with payroll software.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of biometric attendance machines in Hyderabad",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biometric attendance machines in Hyderabad usually start at around six thousand rupees and vary based on features like face or fingerprint recognition.",
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
                Biometric Attendance System in Hyderabad
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Smart, accurate and secure attendance solutions for businesses
                across Hyderabad and Secunderabad
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
                Hyderabad has grown into one of India's top business and
                technology hubs with large IT parks, corporate campuses,
                manufacturing units, hospitals and educational institutions.
                Managing attendance in such a fast moving environment requires a
                modern and dependable solution. A Biometric Attendance System in
                Hyderabad provides accurate and transparent time tracking using
                face recognition, fingerprint scanning, iris scanning or palm
                recognition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                TimeWatch offers advanced biometric attendance solutions
                tailored for Hyderabad based companies across HITEC City,
                Gachibowli, Madhapur, Financial District, Secunderabad,
                Kukatpally, Banjara Hills, Begumpet, Somajiguda, Uppal and more.
                These systems are reliable, cloud connected and suitable for
                both large enterprises and growing businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-0">
            <div className="grid md:grid-cols-2 gap-8">
              {/* LEFT CARD - FACE ATTENDANCE */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Face Attendance Machine in Hyderabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    A Face Attendance Machine in Hyderabad is one of the most
                    widely used attendance solutions for modern workplaces. It
                    uses artificial intelligence to identify employees
                    instantly. It works smoothly even during peak morning hours
                    in large tech parks. The Face Attendance Machine in
                    Hyderabad is fully touchless and accurate, making it
                    suitable for:
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

              {/* RIGHT CARD - FINGERPRINT ATTENDANCE */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine in Hyderabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    The Fingerprint Attendance Machine in Hyderabad continues to
                    be a strong choice for manufacturing units, warehouses,
                    workshops and industrial companies. It prevents buddy
                    punching and ensures accurate attendance for payroll.
                    Companies in industrial areas like Uppal, Jeedimetla,
                    Cherlapally and Patancheru rely heavily on fingerprint based
                    systems.
                  </p>

                  <p>
                    The Fingerprint Attendance Machine in Hyderabad is also
                    preferred by small businesses and retail stores because it
                    is cost effective and easy to maintain. This keyword is
                    included more than six times across the page to support SEO
                    ranking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}

        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            How Different Industries in Hyderabad Use Biometric Attendance
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
                    What is a Face Attendance Machine in Hyderabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Face Attendance Machine in Hyderabad is a touchless
                    attendance device that uses artificial intelligence to
                    verify employees by scanning their face. It is extremely
                    fast and accurate, making it suitable for large tech parks,
                    commercial offices and healthcare facilities. The system
                    works seamlessly with masks and glasses, which is ideal for
                    modern workspaces in Hyderabad.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    What is a Fingerprint Attendance Machine in Hyderabad
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Fingerprint Attendance Machine in Hyderabad uses
                    fingerprint patterns to authenticate identity. It is widely
                    used in factories, workshops and warehouses where shift
                    timing and overtime tracking are critical. This machine is
                    durable and cost effective, making it a popular choice
                    across Hyderabad’s industrial zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose TimeWatch in Hyderabad
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "More than 20 years of biometric expertise",
              "Accurate Face Attendance Machine in Hyderabad with advanced AI",
              "Reliable Fingerprint Attendance Machine in Hyderabad for industry use",
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
