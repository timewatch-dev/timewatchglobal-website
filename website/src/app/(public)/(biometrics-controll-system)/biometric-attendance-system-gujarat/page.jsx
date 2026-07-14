import React from "react";
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
  Shirt,
  Store,
} from "lucide-react";
import AccordionItem from "@/components/landing/AccordionItem";
import HomePageForm from "@/components/HomePageForm";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import BioCards from "@/components/landing/BioCards";

export const metadata = {
  title:
    "Biometric Attendance System in Gujarat | Face & Fingerprint Attendance Machines",
  description:
    "Get advanced biometric attendance systems in Gujarat including face attendance machines and fingerprint attendance machines. Ideal for offices, factories and schools in Ahmedabad, Surat, Vadodara, Rajkot and Gandhinagar.",
  keywords:
    "biometric attendance system in Gujarat, face attendance machine in Gujarat, fingerprint attendance machine in Gujarat, attendance machine Ahmedabad, biometric Gujarat",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-gujarat`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Gujarat | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch provides advanced biometric attendance systems in Gujarat including face and fingerprint attendance devices.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-gujarat`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceGujarat() {
  const systems = [
    {
      icon: Camera,
      title: "Face Attendance Machine in Gujarat",
      value:
        "A Face Attendance Machine in Gujarat is widely used across IT companies, factories and commercial centers in Ahmedabad, Surat and Vadodara. It offers instant, touchless verification and works smoothly even in bright sunlight, low light or crowded entries.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Fingerprint,
      title: "Fingerprint Attendance Machine in Gujarat",
      value:
        "Fingerprint Attendance Machine in Gujarat is preferred in manufacturing hubs like Sanand, Hazira, Vapi and Rajkot. It prevents buddy punching, offers high accuracy and is ideal for shift-based industries.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Hand,
      title: "Palm & Iris Based Attendance in Gujarat",
      value:
        "Palm attendance is perfect for healthcare and chemical units in Ankleshwar, Bharuch and Valsad. Iris recognition is used in high-security zones such as R&D centers, banks, ports and government offices.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Eye,
      title: "Where Biometric Attendance is Most Used in Gujarat",
      value:
        "Factories in Sanand & Vapi, Textile units in Surat, IT parks in Ahmedabad, Warehouses in Gandhidham, Corporates in Vadodara, Education institutes across Rajkot & Bhavnagar.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },
  ];

  const industries = [
    {
      title: "IT & Corporate Offices",
      value:
        "Ahmedabad, Vadodara, Gandhinagar, Surat and Rajkot rely on Face Attendance Machines in Gujarat to support hybrid work models, remote teams and multi-location operations.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Manufacturing & Industrial Plants",
      value:
        "Industrial belts in Sanand, Vapi, Ankleshwar, Bharuch, Jamnagar, Halol and Morbi use Fingerprint Attendance Machines in Gujarat for precise shift control, overtime tracking and attendance consistency.",
      icon: Factory,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Textile, Diamond & Power Loom Industry",
      value:
        "Surat’s textile mills and diamond units use biometric systems to prevent buddy punching, maintain accurate hours and ensure fair payroll.",
      icon: Shirt,
      color: "from-teal-500 to-teal-700",
    },
    {
      title: "Hospitals, Clinics & Pharma",
      value:
        "Hospitals and clinics in Ahmedabad, Vadodara, Rajkot and Surat prefer touchless face and palm recognition systems to maintain high hygiene standards.",
      icon: Hospital,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Education & Training Institutions",
      value:
        "Schools and colleges in Ahmedabad, Surat, Mehsana, Gandhinagar, Anand and Bhavnagar use biometric attendance to reduce manual errors and improve transparency.",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Logistics, Warehousing & Ports",
      value:
        "Kandla, Mundra, Hazira and Pipavav logistics hubs use biometric systems to track drivers, loaders, shift workers and supervisors efficiently.",
      icon: Truck,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Retail, FMCG & Multi-Outlet Chains",
      value:
        "Retail chains across Gujarat use biometric attendance to manage store staff and eliminate manual time corrections.",
      icon: Store,
      color: "from-red-500 to-red-700",
    },
  ];

  const benefits = [
    {
      title: "Massive and diverse workforce",
      desc: "From Ahmedabad offices to Surat textiles and Vapi–Ankleshwar manufacturing, Gujarat employs workers across all job roles. A Biometric Attendance System in Gujarat ensures accurate tracking for every category.",
    },
    {
      title: "High shift-based operations",
      desc: "Industries in GIDC zones like Vatva, Naroda, Vapi, Sanand, Ankleshwar and Panoli run day, night and rotating shifts. Biometrics eliminate errors in overtime and shift calculations.",
    },
    {
      title: "Multi-branch business operations",
      desc: "Retail chains and manufacturing clusters spread across multiple cities can monitor attendance from a single cloud dashboard, making HR management seamless.",
    },
    {
      title: "Strong focus on compliance & payroll",
      desc: "Gujarat organizations need accurate data for PF, ESI, audits and payroll. Biometric systems provide clean, tamper-proof attendance records for flawless compliance.",
    },
    {
      title: "Growing preference for contactless systems",
      desc: "Hospitals, IT firms and corporate offices prefer hygienic touch-free solutions. A Face Attendance Machine in Gujarat ensures quick and contactless attendance punching.",
    },
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks?",
      answer:
        "Yes. Face Attendance Machines in Gujarat work with masks, spectacles and head coverings.",
    },
    {
      question:
        "Which is better for factories in Gujarat, face or fingerprint?",
      answer:
        "Factories prefer fingerprint systems while corporate offices prefer face attendance machines.",
    },
    {
      question: "Can I manage attendance for multiple branches in Gujarat?",
      answer:
        "Yes. Cloud systems allow attendance sync across Ahmedabad, Surat, Vadodara, Rajkot and Bharuch.",
    },
    {
      question: "Do biometric systems integrate with payroll?",
      answer:
        "Yes. All attendance data including shifts, OT and leave syncs with payroll software.",
    },
    {
      question: "What is the cost of a biometric attendance system in Gujarat?",
      answer: "Prices start around ₹6000 depending on biometric modes.",
    },
  ];

  const locations = [
    {
      city: "Ahmedabad",
      areas: [
        "SG Highway",
        "Prahlad Nagar",
        "Bopal",
        "Navrangpura",
        "Maninagar",
        "Science City",
        "GIFT City",
      ],
    },
    {
      city: "Surat",
      areas: ["Adajan", "Varachha", "Katargam", "Udhna", "Sachin GIDC", "Vesu"],
    },
    {
      city: "Vadodara",
      areas: ["Alkapuri", "Gotri", "Manjalpur", "Makarpura GIDC"],
    },
    {
      city: "Rajkot",
      areas: ["150 Feet Ring Road", "Kalawad Road", "GIDC Metoda"],
    },
    {
      city: "Gandhinagar",
      areas: ["Sector 11", "Infocity", "Koba", "GIFT City"],
    },
  ];

  const facePoints = [
    "Corporate offices in Ahmedabad, Gandhinagar and Vadodara",
    "IT companies in GIFT City, SG Highway and Science City Road",
    "Textile industries in Surat and Pandesara",
    "Hospitals in Vadodara, Ahmedabad and Rajkot",
    "Educational institutions across Gujarat",
    "Co working spaces and startups in Ahmedabad, Surat and Vadodara",
  ];
  const fingerprintPoints = [
    "Textile and diamond units in Surat",
    "Chemical and pharma companies in Ankleshwar and Bharuch",
    "Industrial plants in Sanand, Vapi and Halol",
    "Engineering and manufacturing units in Rajkot",
    "Warehouses and logistics hubs across the state",
    "Small businesses and retail chains across Gujarat",
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face attendance work with masks in Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, face attendance machines in Gujarat work accurately even when employees wear masks or glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which biometric machine is best for factories in Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Gujarat prefer fingerprint attendance machines because they provide secure and accurate shift-based tracking.",
        },
      },
      {
        "@type": "Question",
        name: "Can biometric attendance work across multiple locations in Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, cloud attendance systems allow companies to manage employee attendance across multiple Gujarat branches in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, biometric attendance data, including shifts, overtime and leave, integrates automatically with payroll software.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of biometric attendance machines in Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Attendance machines in Gujarat typically start at around six thousand rupees depending on features and biometric technology.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pb-36">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Biometric Attendance System in Gujarat
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Modern, accurate and reliable attendance solutions for businesses
              across Gujarat
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
      {/* Intro + Local Office */}
      <section className="max-w-7xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Biometric Attendance System in Gujarat
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Gujarat is one of India’s most powerful business states, known for
            its strong industries in textiles, chemicals, pharmaceuticals,
            petrochemicals, diamonds, engineering, IT, education, finance and
            logistics. With millions of employees working across multiple
            shifts, field roles, hybrid offices and manufacturing units,
            companies across Gujarat need a dependable and modern attendance
            system.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A Biometric Attendance System in Gujarat helps organizations track
            employee time accurately using face recognition, fingerprint
            scanning, palm verification and iris identification. This removes
            manual errors, prevents fake punches and improves payroll accuracy.
            Whether your offices are in Ahmedabad, Surat, Vadodara, Rajkot,
            Gandhinagar, Bharuch, Vapi or Ankleshwar, biometric attendance
            ensures transparency and accountability across every location.
            TimeWatch has a strong presence across Gujarat with installation
            support, on-site service, cloud integration and advanced biometric
            hardware designed for Indian conditions.
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
            including Connaught Place, Nehru Place, Karol Bagh, Dwarka, Rohini,
            Saket, Janakpuri, Mayur Vihar, Okhla, Pitampura, Gurgaon (Cyber
            City, Udyog Vihar, Golf Course Road, Sohna Road, MG Road, Manesar),
            Noida (Sectors 62, 63, 16, 125, 135, 142, Greater Noida) and
            Ghaziabad (Raj Nagar Extension, Vaishali, Vasundhara, Kaushambi) and
            Faridabad (Sector 24, Sector 31, IMT, Ballabhgarh).
          </p>
        </aside>
      </section>

      {/* Why Companies Prefer */}
      <section className="container mx-auto mb-20 px-0 lg:mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Why Gujarat Businesses Prefer Biometric Attendance
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
                  Face Attendance Machine in Gujarat
                </h3>
              </div>

              <div className="p-6 space-y-4 text-gray-700">
                <p>
                  A Face Attendance Machine in Gujarat uses advanced AI
                  technology to identify employees instantly without physical
                  contact. It is extremely fast and suitable for workplaces that
                  experience heavy morning traffic.
                </p>
                <p>This solution is preferred in:</p>

                <ul className="space-y-4">
                  {facePoints.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-2">
                  The Face Attendance Machine in Gujarat keyword appears more
                  than six times across the page for strong SEO performance.
                </p>
              </div>
            </div>

            {/* RIGHT CARD - FINGERPRINT ATTENDANCE */}
            <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
              <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Fingerprint Attendance Machine in Gujarat
                </h3>
              </div>

              <div className="p-6 space-y-4 text-gray-700">
                <p>
                  A Fingerprint Attendance Machine in Gujarat identifies
                  employees using fingerprint patterns, making it extremely
                  reliable for factories, warehouses and field teams. It
                  eliminates buddy punching and ensures every entry is
                  authentic.
                </p>

                <p>It is widely used in:</p>

                <ul className="space-y-4">
                  {fingerprintPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  The Fingerprint Attendance Machine in Gujarat keyword also
                  appears more than six times to strengthen ranking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Systems Grid */}
      <section className="container mx-auto mb-20 px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          How Gujarat Industries Use Biometric Attendance
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
                  What is a Face Attendance Machine in Gujarat
                </h3>
              </div>

              <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                <p>
                  A Face Attendance Machine in Gujarat identifies employees
                  using AI based facial recognition. It is ideal for modern
                  workplaces where speed, hygiene and accuracy are important. It
                  works even with masks, glasses or changing lighting, making it
                  suitable for large corporate offices, hospitals and
                  institutions.
                </p>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
              <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                <h3 className="text-xl md:text-2xl font-semibold">
                  What is a Fingerprint Attendance Machine in Gujarat
                </h3>
              </div>

              <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                <p>
                  A Fingerprint Attendance Machine in Gujarat verifies identity
                  through fingerprint scanning. Factories, textile units and
                  industrial plants rely on it because it prevents fraudulent
                  punches, maintains accuracy and works well in shift-based
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why TimeWatch */}
      <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Why TimeWatch is Trusted Across Gujarat
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Over two decades of experience in biometric solutions",
            "Presence across major Gujarat cities",
            "Face Attendance Machine in Gujarat with high accuracy",
            "Fingerprint Attendance Machine in Gujarat for industrial sectors",
            "Cloud and desktop HRMS attendance systems",
            "Seamless sync with payroll and leave management",
            "Reliable installation and quick on-ground support",
            "Trusted by corporates, SMEs, factories and institutions",
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
            Gujarat Locations We Serve
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
    </div>
  );
}
