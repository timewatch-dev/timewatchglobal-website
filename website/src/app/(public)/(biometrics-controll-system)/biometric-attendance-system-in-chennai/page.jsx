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
} from "lucide-react";
import AccordionItem from "@/components/landing/AccordionItem";
import HomePageForm from "@/components/HomePageForm";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import BioCards from "@/components/landing/BioCards";

export const metadata = {
  title:
    "Biometric Attendance System in Chennai | Face Attendance Machine and Fingerprint Attendance Machine",
  description:
    "TimeWatch provides advanced biometric attendance systems in Chennai including face attendance machines and fingerprint attendance machines. Perfect for IT parks, factories, hospitals, colleges and corporate offices across OMR, Guindy, Ambattur and Velachery.",
  keywords:
    "biometric attendance system in Chennai, face attendance machine in Chennai, fingerprint attendance machine in Chennai, attendance machine Chennai, biometric device Chennai",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-chennai`,
  },
  openGraph: {
    title:
      "Biometric Attendance System in Chennai | Face Attendance Machine and Fingerprint Attendance Machine",
    description:
      "TimeWatch provides advanced biometric attendance systems in Chennai including face attendance machines and fingerprint attendance machines.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/biometric-attendance-system-chennai`,
    siteName: "TimeWatch",
    type: "website",
  },
};

export default function BiometricAttendanceChennai() {
  const industries = [
    {
      title: "IT and Software Parks",
      value:
        "Chennai’s IT corridor, especially OMR, ECR and Tidel Park, is home to thousands of employees. A Face Attendance Machine in Chennai helps companies manage daily rush while ensuring smooth entry.",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
      featured: true,
    },
    {
      title: "Automotive and Industrial Manufacturing",
      value:
        "Chennai’s identity as India’s automobile capital makes accurate attendance essential. Plants in Oragadam, Sriperumbudur, Maraimalai Nagar and Mahindra World City use biometric devices for shift management and overtime tracking.",
      icon: Factory,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Hospitals and Healthcare",
      value:
        "Hospitals require hygienic and contactless verification. Face and palm attendance systems ensure safe entry for doctors, nurses and support teams.",
      icon: Hospital,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Schools, Colleges and Coaching Institutes",
      value:
        "Using biometric attendance reduces administrative work, avoids disputes and ensures transparent time records for faculty and staff.",
      icon: GraduationCap,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Warehousing and Logistics",
      value:
        "Companies handling e commerce, FMCG and cargo operations use biometrics to monitor field staff and warehouse teams with real time syncing.",
      icon: Truck,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Corporate Offices and Business Centers",
      value:
        "Chennai’s commercial areas like T Nagar, Guindy and Nungambakkam rely on biometric systems to maintain punctuality and reduce paperwork.",
      icon: Users,
      color: "from-teal-500 to-teal-700",
    },
  ];

  const benefits = [
    {
      title: "Multiple work models and shift patterns",
      desc: "Chennai’s workforce operates through night shifts, rotating shifts and flexible work timings across IT parks and industrial clusters. A Biometric Attendance System in Chennai brings uniformity and removes the errors that usually come with manual attendance.",
    },
    {
      title: "High employee movement across locations",
      desc: "Many companies have teams moving between Siruseri, Sholinganallur, Perungudi, Guindy and OMR. Cloud connected biometric systems let HR track everyone from one dashboard.",
    },
    {
      title: "Need for hygienic, contactless attendance",
      desc: "Hospitals, labs and corporate offices prefer touch free entry. A Face Attendance Machine in Chennai provides this along with speed and convenience.",
    },
    {
      title: "Payroll accuracy across multiple shifts",
      desc: "Chennai’s factories in Oragadam and Sriperumbudur rely heavily on accurate shift data. Biometric machines ensure correct overtime and working hours without manual updates.",
    },
  ];

  const faqs = [
    {
      question: "Does face attendance work with masks in Chennai?",
      answer:
        "Yes. Face recognition devices work accurately even with masks and glasses.",
    },
    {
      question: "Which attendance machine is best for factories in Chennai?",
      answer:
        "Factories usually prefer a Fingerprint Attendance Machine in Chennai as it is accurate and suitable for shift operations.",
    },
    {
      question: "Will the biometric system work across multiple sites?",
      answer:
        "Yes. Cloud based systems let you track attendance across all branches in real time.",
    },
    {
      question: "Does biometric attendance integrate with payroll?",
      answer:
        "Yes, attendance, leave and overtime data automatically syncs with payroll software.",
    },
    {
      question:
        "What is the price range of biometric attendance devices in Chennai?",
      answer:
        "Basic devices start around six thousand rupees and advanced models vary based on features.",
    },
  ];

  const facePoints = [
    "IT companies in Tidel Park and DLF IT Park",
    "Corporates across Anna Nagar, Nungambakkam and Adyar",
    "Hospitals in Velachery, Royapettah and Mylapore",
    "Co working spaces in OMR and ECR",
    "Educational institutions across Tambaram, Thiruvanmiyur and Kotturpuram",
  ];

  const fingerprintPoints = [
    "Automotive factories in Oragadam and Sriperumbudur",
    "Industrial companies in Ambattur",
    "Logistics hubs in Poonamallee, Perungalathur and Manapakkam",
    "Retail stores, workshops and small businesses across Chennai",
    "Shift based teams and manufacturing units",
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does face attendance work with masks in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, face recognition attendance systems in Chennai work accurately even when employees are wearing masks or glasses.",
        },
      },
      {
        "@type": "Question",
        name: "Which attendance machine is best for factories in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factories in Chennai prefer fingerprint attendance machines because they are durable, accurate and suitable for shift based operations.",
        },
      },
      {
        "@type": "Question",
        name: "Will the biometric system work across multiple sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cloud based biometric attendance systems allow companies to track attendance across different Chennai branches in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Does biometric attendance integrate with payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Attendance, late marks, overtime and shift data automatically sync with payroll for fast and accurate salary processing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price range of biometric attendance devices in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biometric attendance devices in Chennai generally start around six thousand rupees and increase based on features like face, fingerprint or palm recognition.",
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
              Biometric Attendance System in Chennai
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Accurate and dependable attendance solutions designed for
              Chennai’s growing workforce
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
              Biometric Attendance System in Chennai
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Chennai continues to be one of India's strongest economic cities
              with a massive presence in IT, manufacturing, healthcare,
              education and logistics. With thousands of employees working
              across multiple shifts, hybrid models and outdoor roles, companies
              in Chennai need an advanced attendance solution that ensures
              accuracy, transparency and zero manual dependency.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Biometric Attendance System in Chennai provides exactly that.
              These systems use face recognition, fingerprint scanning, palm
              verification and iris technology to track attendance with
              precision. Whether your organization is located in OMR, Ambattur,
              Guindy, Adyar, Velachery, Tambaram or T Nagar, biometric systems
              help maintain accurate employee records, streamline payroll and
              reduce administrative work.
            </p>
          </div>

          <aside className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Our Chennai Office</h3>
            <p className="text-gray-700 mb-2 font-semibold">
              TimeWatch Infocom Pvt. Ltd. – Chennai Office
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
              Local demos, installations and support available across Chennai.
            </p>
          </aside>
        </section>

        {/* Why Companies Prefer */}
        <section className="container mx-auto mb-20 px-0 lg:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Chennai Organizations Prefer Biometric Attendance
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

      

        {/* Systems Grid */}
        <section className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Where Biometric Attendance is Most Used in Chennai
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
                    Face Attendance Machine in Chennai
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                   A Face Attendance Machine in Chennai is a contactless biometric device that identifies employees using AI based facial recognition. Companies in Chennai prefer this option because it is fast, requires no touch and reduces long queues. It works even in areas with mixed lighting and supports mask detection, making it suitable for crowded IT campuses and healthcare environments.
                  </p>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                   Fingerprint Attendance Machine in Chennai
                  </h3>
                </div>

                <div className="p-6 space-y-4 text-gray-700 leading-relaxed lg:pr-30">
                  <p>
                   A Fingerprint Attendance Machine in Chennai verifies employees through their fingerprint patterns. This system is strong and dependable for factories and industrial units operating in multiple shifts. It is also cost effective and easy to use for small businesses, retail stores and workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TimeWatch */}
        <section className="container mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why TimeWatch is the Top Choice for Chennai Companies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Over two decades of experience in biometric technology",
              "Strong product reliability even under heavy usage",
              "Dedicated support across Chennai",
              "Wide range of biometric solutions including face, fingerprint, palm and iris",
              "Cloud and desktop attendance software",
              "Instant syncing with payroll and leave systems",
              "Ideal for both corporate and industrial setups",
              "Extensive service network across Tamil Nadu",
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
                Face Attendance Machine in Chennai
              </h2>

              <div className="">
                <div className="">
                  <p className="flex gap-2">
                    <div className="w-4 h-4">
                      <ArrowRight />
                    </div>
                    A Face Attendance Machine in Chennai is a contactless
                    biometric device that identifies employees using AI based
                    facial recognition. Companies in Chennai prefer this option
                    because it is fast, requires no touch and reduces long
                    queues. It works even in areas with mixed lighting and
                    supports mask detection, making it suitable for crowded IT
                    campuses and healthcare environments.
                  </p>
                  <p className="flex gap-2">
                    <div className="w-4 h-4">
                      <ArrowRight />
                    </div>
                    A Fingerprint Attendance Machine in Chennai verifies
                    employees through their fingerprint patterns. This system is
                    strong and dependable for factories and industrial units
                    operating in multiple shifts. It is also cost effective and
                    easy to use for small businesses, retail stores and
                    workshops.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-gray-500 to-primary rounded-3xl p-4 md:p-10 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Fingerprint Attendance Machine in Chennai
              </h2>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="">
                  <p className="text-white flex items-start">
                    OMR, ECR, Guindy, T Nagar, Velachery, Ambattur, Anna Nagar,
                    Adyar, Sholinganallur, Perungudi, Porur, Tambaram, Chrompet,
                    Pallavaram, Mylapore, Nungambakkam, Siruseri SIPCOT,
                    Poonamallee and more.
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
