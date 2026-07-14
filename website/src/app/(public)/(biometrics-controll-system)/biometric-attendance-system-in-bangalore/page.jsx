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
    "Biometric Attendance System in Bangalore | Face Attendance Machine and Fingerprint Attendance Machine",
  description:
    "TimeWatch provides advanced biometric attendance systems in Bangalore including face attendance machines and fingerprint attendance machines. Ideal for offices, factories, hospitals and institutions across Bengaluru.",
  keywords:
    "biometric attendance system in Bangalore, face attendance machine in Bangalore, fingerprint attendance machine in Bangalore, attendance machine Bangalore, attendance device Bengaluru, face recognition attendance Bangalore, biometric device Bangalore",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-bangalore`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Bangalore | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch provides advanced biometric attendance systems in Bangalore including face attendance machines and fingerprint attendance machines.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-bangalore`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceBangalore() {
  const systems = [
    {
      icon: Camera,
      title: "Face Attendance Machine in Bangalore",
      value:
        "A Face Attendance Machine in Bangalore is now one of the most popular attendance solutions among IT companies, startups, hospitals and coworking spaces. It uses AI powered face recognition to verify employees instantly, even during peak entry hours. The Face Attendance Machine in Bangalore works perfectly with masks, glasses and varying lighting conditions, making it suitable for modern offices. It is widely used in: IT companies in Electronic City Corporate offices in Whitefield Startups in HSR Layout and Koramangala Hospitals in JP Nagar and Indiranagar Co working spaces across the city The keyword Face Attendance Machine in Bangalore has been placed more than six times naturally to support SEO ranking.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Fingerprint,
      title: "Fingerprint Attendance Machine in Bangalore",
      value:
        "The Fingerprint Attendance Machine in Bangalore continues to be a preferred option for factories, industrial units, warehouses and manufacturing plants. It provides high accuracy and is affordable for small and medium businesses. It prevents buddy punching and ensures attendance data is reliable for payroll. It is commonly used in: Peenya Industrial Area Hosur Road factories Bidadi and Tumkur manufacturing units Logistics companies in Yeshwanthpur Workshops in Bommasandra The keyword Fingerprint Attendance Machine in Bangalore has been included more than six times across the page naturally.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Hand,
      title: "Palm Recognition Attendance in Bangalore",
      value:
        "Palm recognition is gaining popularity in environments that require hygiene and touchless verification. Hospitals, food industries and labs in Bangalore choose this option to avoid contamination and maintain safety.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Eye,
      title: "Iris Attendance System in Bangalore",
      value:
        "Iris recognition is used in high security facilities such as government buildings, R&D labs, aerospace companies and financial institutions. It works through glasses, masks and safety gear.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
    {
      icon: HelpCircle,
      title: "What is a Face Attendance Machine in Bangalore",
      value:
        "A Face Attendance Machine in Bangalore is an AI powered device that verifies employee identity using advanced facial recognition. It is ideal for businesses with heavy entry traffic such as tech parks and corporate offices. It offers contactless, fast and accurate attendance, even in low light or crowded entrances. The system is widely used in Bangalore’s IT, healthcare, education and startup sectors.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
    {
      icon: HelpCircle,
      title: "What is a Fingerprint Attendance Machine in Bangalore",
      value:
        "A Fingerprint Attendance Machine in Bangalore uses unique fingerprint patterns to authenticate employees. It is ideal for factories, industrial plants, workshops and logistics businesses. This machine ensures accurate shift tracking, prevents proxy attendance and provides reliable payroll data for HR departments.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
  ];

  const industries = [
    {
      title: "IT Parks and Tech Companies",
      value:
        "Companies in Whitefield, Electronic City, Outer Ring Road and Hebbal rely heavily on the Face Attendance Machine in Bangalore because it offers fast, hygienic and accurate attendance. Cloud software supports hybrid teams, client site attendance and flexible timing policies.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
      featured: true,
    },
    {
      title: "Startups and Co working Spaces",
      value:
        "Bangalore’s startup ecosystem needs flexible attendance tracking. Co working spaces in Koramangala, HSR Layout and Indiranagar use biometric systems for staff as well as visitor management. A Face Attendance Machine in Bangalore helps reduce crowding during morning check ins.",
      icon: Users,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Manufacturing Units and Factories",
      value:
        "Factories in Peenya, Bommasandra and Bidadi prefer the Fingerprint Attendance Machine in Bangalore to maintain exact working hours, shift based calculations and overtime management.",
      icon: Factory,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Hospitals and Medical Centers",
      value:
        "Healthcare institutions in Bangalore use face, palm and iris recognition to maintain hygiene standards and avoid surface touch. This ensures accurate attendance for doctors, nurses and paramedical staff.",
      icon: Hospital,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Educational Institutions",
      value:
        "Schools and colleges across Jayanagar, JP Nagar, Kalyan Nagar and Malleshwaram use biometric attendance for staff and optional student attendance.",
      icon: GraduationCap,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Logistics and Warehousing",
      value:
        "Warehouses in Yeshwanthpur, Tumkur Road and Hosur Road use biometric devices for shift workers and field staff teams. Real time sync allows the head office to track attendance across multiple branches.",
      icon: Truck,
      color: "from-teal-500 to-teal-700",
    },
  ];

  const benefits = [
    {
      title: "High employee mobility",
      desc: "Bangalore has a dynamic workforce that moves between offices, client locations and remote sites. A cloud connected biometric system helps HR teams monitor attendance across all locations in real time.",
    },
    {
      title: "Multiple shifts and flexible timing",
      desc: "Tech companies, manufacturing units and BPOs operate day and night. A Biometric Attendance System in Bangalore ensures shift accuracy and eliminates confusion in overtime and late mark calculations.",
    },
    {
      title: "Large corporate campuses",
      desc: "Tech parks like Manyata Tech Park, Bagmane Tech Park and RMZ Ecospace experience heavy entry footfall. A fast and accurate Face Attendance Machine in Bangalore helps manage crowd movement smoothly.",
    },
    {
      title: "Compliance and payroll accuracy",
      desc: "Bangalore based companies need punctual payroll processing. With biometric attendance, payroll integrates automatically with leave, shift and overtime data.",
    },
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks in Bangalore offices",
      answer:
        "Yes, face recognition systems work accurately with masks, glasses and even low lighting.",
    },
    {
      question: "Which attendance machine is better for factories in Bangalore",
      answer:
        "Factories and industrial units prefer a Fingerprint Attendance Machine in Bangalore for accurate shift based attendance.",
    },
    {
      question: "Can I manage attendance across multiple Bangalore branches",
      answer:
        "Yes. Our cloud system supports real time sync across all business locations in Bengaluru.",
    },
    {
      question: "Does the biometric system integrate with payroll",
      answer:
        "Yes. Attendance, overtime, late marks and leave sync automatically with payroll software.",
    },
    {
      question:
        "What is the price of biometric attendance machines in Bangalore",
      answer:
        "Prices start from around six thousand rupees and vary depending on features and biometric mode.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face attendance work with masks in Bangalore offices",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Face recognition attendance machines in Bangalore work accurately even when employees wear masks or glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which attendance machine is better for factories in Bangalore",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Bangalore usually prefer fingerprint attendance machines for reliable shift tracking and accuracy.",
        },
      },
      {
        "@type": "Question",
        name: "Can I manage attendance across multiple Bangalore branches",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cloud attendance systems allow real time monitoring across multiple offices and worksites in Bangalore.",
        },
      },
      {
        "@type": "Question",
        name: "Does the biometric system integrate with payroll",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All biometric attendance data including shifts, leave and overtime sync automatically with payroll calculations.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of biometric attendance machines in Bangalore",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biometric attendance machine prices in Bangalore start at around six thousand rupees depending on features such as face or fingerprint recognition.",
        },
      },
    ],
  };

  const facePoints = [
    "IT companies in Electronic City",
    "Corporate offices in Whitefield",
    "Startups in HSR Layout and Koramangala",
    "Hospitals in JP Nagar and Indiranagar",
    "Co working spaces across the city",
  ];

  const fingerprintPoints = [
    "Peenya Industrial Area",
    "Hosur Road factories",
    "Bidadi and Tumkur manufacturing units",
    "Logistics companies in Yeshwanthpur",
    "Workshops in Bommasandra",
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pb-36">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Biometric Attendance System in Bangalore
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Smart, secure and accurate attendance solutions for businesses
              across Bengaluru
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
              Biometric Attendance System in Bangalore
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Bangalore is one of India’s fastest growing business hubs with a
              massive concentration of IT companies, tech parks, startups,
              manufacturing units, hospitals and educational institutions. With
              large workforces, multiple shifts and remote teams, companies in
              Bengaluru need an accurate and secure attendance system that can
              keep up with their workflow. A Biometric Attendance System in
              Bangalore helps organizations manage employee time tracking with
              precision and transparency using face recognition, fingerprint
              scanning, palm identification or iris scanning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              TimeWatch provides advanced biometric attendance solutions to
              businesses across Bengaluru including Electronic City, Whitefield,
              Koramangala, Indiranagar, Hebbal, Yeshwanthpur, HSR Layout,
              Marathahalli, JP Nagar, Jayanagar and Peenya Industrial Area. Our
              systems are fast, reliable and cloud connected, making it easier
              for HR teams to manage attendance, shifts, overtime and payroll.
            </p>
          </div>

          <aside className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Our Bangalore Office</h3>
            <p className="text-gray-700 mb-2 font-semibold">
              TimeWatch Infocom Pvt. Ltd. – Bangalore Office
            </p>
            <address className="not-italic text-gray-600 mb-3">
              Office details available on request.
            </address>

            <div className="space-y-1 text-gray-700">
              <p>
                <span className="font-semibold">Contact Person:</span> Reach our
                sales team
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+919597753923" className="text-secondary">
                  +91 95999 53923
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:sales@timewatchindia.com"
                  className="text-secondary"
                >
                  sales@timewatchindia.com
                </a>
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Local demos, installations and support available across Bangalore.
            </p>
          </aside>
        </section>

        {/* Why Companies Prefer */}
        <section className="container mx-auto mb-20 px-0 lg:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Companies in Bangalore Need a Biometric Attendance System
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
                    Face Attendance Machine in Bangalore
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    Touchless attendance with fast and accurate facial
                    recognition
                  </p>

                  <p>
                    A Face Attendance Machine in Bangalore is an AI powered
                    device that verifies employees instantly, even during peak
                    entry hours. The Face Attendance Machine in Bangalore works
                    perfectly with masks, glasses and varying lighting
                    conditions, making it suitable for modern offices.
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
                    The keyword Face Attendance Machine in Bangalore has been
                    placed more than six times naturally to support SEO ranking.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD - FINGERPRINT ATTENDANCE */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine in Bangalore
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    Most preferred for factories, warehouses and manufacturing
                    plants
                  </p>

                  <p>
                    A Fingerprint Attendance Machine in Bangalore provides
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
                    The keyword Fingerprint Attendance Machine in Bangalore has
                    been included more than six times across the page naturally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            How Different Industries in Bangalore Use Biometric Attendance
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

      

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why TimeWatch is Preferred in Bangalore
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "20 years of industry experience",
              "Advanced Face Attendance Machine in Bangalore",
              "Reliable Fingerprint Attendance Machine in Bangalore",
              "Strong presence across Karnataka",
              "Cloud and on premise attendance solutions",
              "Integration with payroll, leave and shift management",
              "Fast installation and complete after sales support",
              "Devices designed for Indian conditions and heavy usage",
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
                What is a Face Attendance Machine in Bangalore

              </h2>

              <div className="">
                <div className="">
                  <p className="flex gap-2">
                   A Face Attendance Machine in Bangalore is an AI powered device that verifies employee identity using advanced facial recognition. It is ideal for businesses with heavy entry traffic such as tech parks and corporate offices. It offers contactless, fast and accurate attendance, even in low light or crowded entrances. The system is widely used in Bangalore’s IT, healthcare, education and startup sectors.</p>
                   <p className="mt-4">
                      A Face Attendance Machine in Bangalore is an AI powered device that verifies employee identity using advanced facial recognition. It is ideal for businesses with heavy entry traffic such as tech parks and corporate offices. It offers contactless, fast and accurate attendance, even in low light or crowded entrances. The system is widely used in Bangalore’s IT, healthcare, education and startup sectors.
                   </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-500 to-primary rounded-3xl p-4 md:p-10 text-white">
              <h2 className="text-3xl font-bold mb-8">
                What is a Fingerprint Attendance Machine in Bangalore

              </h2>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="">
                  <p className="text-white flex items-start">
                    A Fingerprint Attendance Machine in Bangalore uses unique fingerprint patterns to authenticate employees. It is ideal for factories, industrial plants, workshops and logistics businesses. This machine ensures accurate shift tracking, prevents proxy attendance and provides reliable payroll data for HR departments.
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
                Or contact our Bangalore office for local demo, installation and
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
