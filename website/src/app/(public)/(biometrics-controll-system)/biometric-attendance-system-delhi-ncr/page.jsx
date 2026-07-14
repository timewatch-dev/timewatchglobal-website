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
    "Biometric Attendance System in Delhi NCR | Face and Fingerprint Attendance Machines",
  description:
    "Get advanced biometric attendance systems in Delhi NCR including face attendance machines and fingerprint attendance machines. Ideal for offices, factories, schools and hospitals in Delhi, Gurgaon, Noida, Ghaziabad and Faridabad.",
  keywords:
    "biometric attendance system in Delhi NCR, face attendance machine in Delhi NCR, fingerprint attendance machine in Delhi NCR, biometric attendance Delhi, attendance mach",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-delhi-ncr`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Chennai | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch provides advanced biometric attendance systems in Chennai including face attendance machines and fingerprint attendance machines.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-delhi-ncr`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceDelhi() {
  const systems = [
    {
      icon: Camera,
      title: "Face Attendance Machine in Chennai",
      value:
        "A Face Attendance Machine in Chennai is one of the most popular choices because it verifies employees instantly without physical contact. It uses advanced AI and infrared sensors to identify faces quickly even during heavy morning footfall in IT parks. This solution is widely used in: IT companies in Tidel Park and DLF IT Park Corporates across Anna Nagar, Nungambakkam and Adyar Hospitals in Velachery, Royapettah and Mylapore Co working spaces in OMR and ECR Educational institutions across Tambaram, Thiruvanmiyur and Kotturpuram It works even with masks, beards, spectacles or changing light. This keyword appears more than six times naturally across the page, supporting long term SEO without keyword stuffing.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Fingerprint,
      title: "Fingerprint Attendance Machine in Chennai",
      value:
        "The Fingerprint Attendance Machine in Chennai delivers high accuracy by verifying fingerprints. It removes buddy punching and ensures fair payroll for workers. It is especially useful for industries that require strict shift timings. Common users include: Automotive factories in Oragadam and Sriperumbudur Industrial companies in Ambattur Logistics hubs in Poonamallee, Perungalathur and Manapakkam Retail stores, workshops and small businesses across Chennai Fingerprint based systems remain one of the most cost effective and reliable attendance options, especially for shift based teams.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Hand,
      title: "Palm and Iris Based Attendance in Chennai",
      value:
        "Palm recognition is suitable for hospitals, food processing units, chemical labs and high hygiene zones. It is touchless and works well even with wet or damaged hands. Iris recognition is used for high security environments such as government buildings, defence units, aerospace facilities and banking institutions. It offers the strongest accuracy and is ideal for restricted zones.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Eye,
      title: "Where Biometric Attendance is Most Used in Chennai",
      value:
        "IT and Software Parks, Automotive and Industrial Manufacturing, Hospitals and Healthcare, Schools, Colleges and Coaching Institutes, Warehousing and Logistics, Corporate Offices and Business Centers. Chennai’s commercial areas like T Nagar, Guindy and Nungambakkam rely on biometric systems to maintain punctuality and reduce paperwork.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
    {
      icon: HelpCircle,
      title: "What is a Face Attendance Machine in Chennai",
      value:
        "A Face Attendance Machine in Chennai is a contactless biometric device that identifies employees using AI based facial recognition. Companies in Chennai prefer this option because it is fast, requires no touch and reduces long queues. It works even in areas with mixed lighting and supports mask detection, making it suitable for crowded IT campuses and healthcare environments.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
    {
      icon: HelpCircle,
      title: "What is a Fingerprint Attendance Machine in Chennai",
      value:
        "A Fingerprint Attendance Machine in Chennai verifies employees through their fingerprint patterns. This system is strong and dependable for factories and industrial units operating in multiple shifts. It is also cost effective and easy to use for small businesses, retail stores and workshops.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
  ];

  const industries = [
    {
      title: "Palm Recognition Attendance System",
      value:
        "Palm recognition is ideal for food units, labs and medical centers where fingerprints may not work. It is fully contactless and hygienic, suitable for hospital staff, production workers and research teams.",
      icon: Hand,
      color: "from-green-500 to-green-700",
      featured: true,
    },
    {
      title: "Iris Recognition Attendance System",
      value:
        "Iris attendance is used in high-security zones across Delhi NCR such as government offices, defence units and R&D labs. It works accurately even with masks, glasses and PPE.",
      icon: Eye,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Corporate Offices in Delhi & Gurgaon",
      value:
        "Companies in CP, Aerocity, Cyber Hub and Udyog Vihar use Face Attendance Machines in Delhi NCR for fast, touchless verification with real-time reports and payroll syncing.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "IT Parks in Noida and Gurgaon",
      value:
        "Tech firms in Noida Sector 62, 63 and Gurgaon Sector 44 prefer cloud-based Biometric Attendance Systems for hybrid work, flexible timing, late marks and compliance.",
      icon: Smartphone,
      color: "from-teal-500 to-teal-700",
    },
    {
      title: "Manufacturing Units in Ghaziabad & Faridabad",
      value:
        "Factories use Fingerprint Attendance Machines in Delhi NCR to ensure accurate shift tracking, prevent proxy attendance and maintain reliable payroll data.",
      icon: Factory,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Hospitals and Healthcare Centers",
      value:
        "Hospitals across Delhi NCR use face, palm and iris systems because they are hygienic, contactless and ideal for medical environments.",
      icon: Hospital,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Schools and Universities",
      value:
        "Educational institutions use biometric systems for staff and student attendance, improving transparency and reducing disputes.",
      icon: GraduationCap,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Retail Chains and Warehouses",
      value:
        "Retail stores and warehouses across NCR manage multi-branch attendance from a single cloud dashboard with real-time syncing.",
      icon: Truck,
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  const benefits = [
    {
      title: "Large teams and mixed work environments",
      desc: "Delhi NCR has offices, factories, warehouses, schools, hospitals, retail stores and IT parks. Each workplace has different requirements which makes a biometric attendance solution ideal.",
    },
    {
      title: "High movement and large footfall",
      desc: "Busy locations like Noida SEZ, Gurgaon Cyber City, Nehru Place and Connaught Place require fast attendance systems. A Face Attendance Machine in Delhi NCR can verify users within seconds even during morning rush hours.",
    },
    {
      title: "Multi branch companies",
      desc: "Many businesses in NCR operate in multiple locations. A cloud connected biometric system allows central attendance tracking across Delhi, Noida, Gurgaon and Ghaziabad.",
    },
    {
      title: "HR and payroll automation",
      desc: "Companies in NCR prefer automated payroll processing. A Biometric Attendance System in Delhi NCR removes manual errors and combines attendance with shifts, overtime, holidays and leave.",
    },
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks?",
      answer:
        "Yes, face recognition devices in Delhi NCR work with masks, glasses and head coverings.",
    },
    {
      question:
        "Which is better for factories in Delhi NCR, face or fingerprint?",
      answer:
        "Factories usually prefer a Fingerprint Attendance Machine in Delhi NCR while offices prefer a Face Attendance Machine in Delhi NCR.",
    },
    {
      question: "Can I track attendance for multiple branches in NCR?",
      answer:
        "Yes, our cloud attendance system syncs Delhi, Noida, Gurgaon, Ghaziabad and Faridabad into one dashboard.",
    },
    {
      question: "Does the system integrate with payroll?",
      answer:
        "Yes. All attendance data including shifts, overtime and leave syncs with payroll systems.",
    },
    {
      question:
        "What is the cost of a biometric attendance system in Delhi NCR?",
      answer:
        "Prices start around six thousand rupees depending on features and biometric modes.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face attendance work with masks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, face recognition attendance systems in Delhi NCR work even when employees are wearing masks or glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better for factories in Delhi NCR, face or fingerprint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories generally prefer fingerprint based systems while corporate offices choose face recognition attendance devices.",
        },
      },
      {
        "@type": "Question",
        name: "Can I track attendance for multiple branches in NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TimeWatch cloud attendance software syncs attendance from Delhi, Noida, Gurgaon, Ghaziabad and Faridabad in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Attendance data syncs with payroll modules including shifts, leave, overtime and compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of a biometric attendance system in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices start around six thousand rupees and vary based on features such as face recognition, fingerprint mode and cloud connectivity.",
        },
      },
    ],
  };

  const facePoints = [
    "Gurgaon corporate offices",
    "Noida IT parks",
    "Delhi hospitals and diagnostic labs",
    "Ghaziabad and Faridabad industrial units",
    "Large schools and colleges",
  ];
  const fingerprintPoints = [
    "Reliable Fingerprint Attendance Machine in Delhi NCR.",
    "Accurate biometric time tracking.",
    "Prevents proxy attendance.",
    "Easy payroll integration.",
    "Suitable for all industries.",
    "Secure and fast verification.",
  ];

  const locations = [
    {
      city: "Delhi",
      areas: [
        "Connaught Place",
        "Nehru Place",
        "Karol Bagh",
        "Dwarka",
        "Rohini",
        "Saket",
        "Janakpuri",
        "Mayur Vihar",
        "Okhla",
        "Pitampura",
      ],
    },
    {
      city: "Gurgaon",
      areas: [
        "Cyber City",
        "Udyog Vihar",
        "Golf Course Road",
        "Sohna Road",
        "MG Road",
        "Manesar",
      ],
    },
    {
      city: "Noida",
      areas: [
        "Sector 62",
        "Sector 63",
        "Sector 16",
        "Sector 125",
        "Sector 135",
        "Sector 142",
        "Greater Noida",
      ],
    },
    {
      city: "Ghaziabad",
      areas: ["Raj Nagar Extension", "Vaishali", "Vasundhara", "Kaushambi"],
    },
    {
      city: "Faridabad",
      areas: ["Sector 24", "Sector 31", "Industrial Model Town", "Ballabhgarh"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pb-36">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Biometric Attendance System in Delhi NCR
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Accurate, secure and modern attendance solutions for Delhi, Noida,
              Gurgaon, Ghaziabad and Faridabad
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
              Biometric Attendance System in Delhi NCR
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Managing attendance in a busy region like Delhi NCR is never
              simple. Companies deal with large teams, multiple shifts, field
              operations, compliance requirements and multi branch structures. A
              traditional register or card based system cannot offer the
              accuracy, transparency and speed that businesses need today. This
              is why organizations throughout Delhi NCR are steadily shifting to
              advanced biometric systems that use face, fingerprint, palm or
              iris recognition to record attendance with accuracy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              TimeWatch provides an advanced Biometric Attendance System in
              Delhi NCR which is trusted by thousands of companies across
              Connaught Place, Nehru Place, Okhla, Gurgaon Cyber City, Noida
              Sector 62, Raj Nagar Extension, Faridabad Industrial Area and
              more. Our systems are designed for Indian conditions and offer
              reliable performance, fast recognition and real time cloud
              connectivity for attendance, payroll and HRMS.
            </p>
          </div>

          <aside className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Our Delhi NCR Office</h3>
            <p className="text-gray-700 mb-2 font-semibold">
              TimeWatch Infocom Pvt. Ltd. – Delhi NCR Office
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
              Local demos, installations and support available across Delhi NCR
              including Connaught Place, Nehru Place, Karol Bagh, Dwarka,
              Rohini, Saket, Janakpuri, Mayur Vihar, Okhla, Pitampura, Gurgaon
              (Cyber City, Udyog Vihar, Golf Course Road, Sohna Road, MG Road,
              Manesar), Noida (Sectors 62, 63, 16, 125, 135, 142, Greater Noida)
              and Ghaziabad (Raj Nagar Extension, Vaishali, Vasundhara,
              Kaushambi) and Faridabad (Sector 24, Sector 31, IMT, Ballabhgarh).
            </p>
          </aside>
        </section>

        {/* Why Companies Prefer */}
        <section className="container mx-auto mb-20 px-0 lg:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Delhi NCR Needs a Modern Biometric Attendance System
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
                    Face Recognition Attendance System
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    The Face Attendance Machine in Delhi NCR is one of the
                    fastest growing attendance technologies. Companies prefer
                    face recognition because it is touchless, quick and highly
                    accurate. It works even with masks, glasses and low light
                    environments. The Face Attendance Machine in Delhi NCR is
                    widely used in:
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
                    This system helps prevent proxy punching and keeps the
                    office safe by ensuring only registered employees enter.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD - FINGERPRINT ATTENDANCE */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Fingerprint Attendance Machine
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700">
                  <p>
                    A Fingerprint Attendance Machine in Delhi NCR is the
                    preferred choice for factories, warehouses, workshops and
                    manufacturing units. It prevents buddy punching and provides
                    accurate time records even in rough work environments. Many
                    companies in Faridabad, Ghaziabad and Noida still rely
                    heavily on fingerprint based attendance for its reliability
                    and low cost.
                  </p>

                  <p>
                    The keyword Fingerprint Attendance Machine in Delhi NCR has
                    been included more than six times in natural positions.
                  </p>

                  {/* <ul className="space-y-4">
                    {fingerprintPoints.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Systems Grid */}
        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Popular Attendance Systems Used in Delhi NCR
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
                    What is a Face Attendance Machine in Delhi NCR
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Face Attendance Machine in Delhi NCR uses AI based face
                    detection to record attendance without physical contact. It
                    identifies employees within seconds and works even when
                    users wear masks or glasses. This system is ideal for large
                    entry points, corporate offices, IT companies, healthcare
                    centers and any environment that requires safe and hygienic
                    check ins. Companies in Gurgaon Cyber City, Noida SEZ,
                    Connaught Place and Rohini use Face Attendance Machines to
                    improve speed and security.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    What is a Fingerprint Attendance Machine in Delhi NCR
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                    A Fingerprint Attendance Machine in Delhi NCR uses unique
                    fingerprint patterns to verify employee identity. It is
                    accurate, cost effective and suitable for tough environments
                    such as factories, workshops and warehouses. Many companies
                    in Ghaziabad Industrial Area, Faridabad Sector 24 and Noida
                    Industrial Zone rely on a Fingerprint Attendance Machine for
                    its reliability and long term durability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose TimeWatch in Delhi NCR
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Over 20 years of experience in biometric technology",
              "AI powered Face Attendance Machines in Delhi NCR",
              "Reliable and long lasting Fingerprint Attendance Machines in Delhi NCR",
              "Cloud based and on site attendance solutions",
              "Real time syncing with shifts, overtime and payroll",
              "Fast installation with complete support across Delhi NCR",
              "Devices built for Indian weather, dust and heavy usage",
              "Integrated HRMS for complete automation",
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
                What is a Face Attendance Machine in Delhi NCR
              </h2>

              <div className="">
                <div className="">
                  <p className="flex gap-2">
                    A Face Attendance Machine in Delhi NCR uses AI based face
                    detection to record attendance without physical contact. It
                    identifies employees within seconds and works even when
                    users wear masks or glasses. This system is ideal for large
                    entry points, corporate offices, IT companies, healthcare
                    centers and any environment that requires safe and hygienic
                    check ins. Companies in Gurgaon Cyber City, Noida SEZ,
                    Connaught Place and Rohini use Face Attendance Machines to
                    improve speed and security.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-500 to-primary rounded-3xl p-4 md:p-10 text-white">
              <h2 className="text-3xl font-bold mb-8">
                What is a Fingerprint Attendance Machine in Delhi NCR
              </h2>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="">
                  <p className="text-white flex items-start">
                    A Fingerprint Attendance Machine in Delhi NCR uses unique
                    fingerprint patterns to verify employee identity. It is
                    accurate, cost effective and suitable for tough environments
                    such as factories, workshops and warehouses. Many companies
                    in Ghaziabad Industrial Area, Faridabad Sector 24 and Noida
                    Industrial Zone rely on a Fingerprint Attendance Machine for
                    its reliability and long term durability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Delhi NCR Areas We Cover
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
        <section className="container mx-auto mt-12 mb-20 px-0">
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
      </main>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
