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
} from "lucide-react";
import AccordionItem from "@/components/landing/AccordionItem";
import HomePageForm from "@/components/HomePageForm";
import ProductCatCard from "@/features/singleProductByCat/components/ProductCatCard";
import BioCards from "@/components/landing/BioCards";

export default function BiometricAttendancePage() {
  const systems = [
    /* Face Recognition Attendance System */

    /* Additional Fingerprint Machine Block */
    {
      icon: Fingerprint,
      title: "Fingerprint Attendance Machine",
      value:
        "A Fingerprint Attendance Machine is one of the most trusted attendance solutions in India. This Fingerprint Attendance Machine prevents buddy punching and works well in factories, retail shops, warehouses and offices. Companies prefer the Fingerprint Attendance Machine for accuracy and affordability.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Where Fingerprint Works Best */
    {
      icon: Shield,
      title: "Where Fingerprint Systems Work Best",
      value:
        "A Fingerprint Attendance Machine performs reliably in harsh environments like industrial plants, workshops, factories and logistics hubs, offering durable performance.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Palm Recognition Attendance System */
    {
      icon: Hand,
      title: "Palm Recognition Attendance System",
      value:
        "Palm recognition uses vein patterns or palm images to identify employees. It is contactless and extremely hygienic. Palm recognition works even when fingerprints are worn out or when users wear gloves. This makes it ideal for food processing units, hospitals, laboratories and pharmaceutical industries.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* Iris Recognition Attendance System */
    {
      icon: Eye,
      title: "Iris Recognition Attendance System",
      value:
        "Iris scanning is one of the most secure biometric methods available. Iris attendance works through glasses, protective gear and masks which makes it suitable for government offices, defence organizations, research labs and high security facilities.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* Multi Modal Devices */
    {
      icon: Smartphone,
      title: "Multi Modal Biometric Devices",
      value:
        "Multi modal devices which support face, fingerprint, palm, card and PIN offer maximum flexibility. These are ideal for companies that have different departments with different attendance needs. For example, field teams may prefer mobile attendance, factory teams may use a Fingerprint Attendance Machine and office employees may use a Face Attendance Machine in the lobby. Multi modal devices allow all options in one system.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },

    /* What is a Face Attendance Machine */
    {
      icon: HelpCircle,
      title: "What is a Face Attendance Machine?",
      value:
        "A Face Attendance Machine uses advanced AI and image processing to scan and verify an employee's face within seconds. This system is completely touchless which makes it hygienic and safe for high traffic environments. It is also one of the fastest and most accurate attendance solutions in India. The Face Attendance Machine is ideal for corporate offices, IT parks, hospitals, educational institutions and customer facing workplaces. This machine works perfectly even with masks, glasses and varying lighting conditions which makes it suitable for Indian workplaces.",
      color: "from-[#6d6f72] to-[#5a5c5f]",
      featured: false,
    },

    /* What is a Fingerprint Attendance Machine */
    {
      icon: HelpCircle,
      title: "What is a Fingerprint Attendance Machine?",
      value:
        "A Fingerprint Attendance Machine uses unique fingerprint patterns to confirm identity and record attendance. It is cost effective, easy to use and very reliable for small and large companies. Many Indian organizations rely on the Fingerprint Attendance Machine because it has proven accuracy and works well in manufacturing units, stores, workshops, government offices and industrial zones. It prevents proxy punching and maintains accurate working hours for payroll processing.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
    {
      icon: Camera,
      title: "Face Recognition Attendance System",
      value:
        "The Face Attendance Machine is now one of the most preferred attendance solutions in India. It is fast, accurate and completely touchless which makes it ideal for high traffic offices and sensitive environments like hospitals. Face Attendance Machines work even with masks and low lighting. They are used in corporate offices, IT companies, schools, co working spaces and government institutions. To grow your visibility, the page now includes the keyword Face Attendance Machine a minimum of six times in natural places.",
      color: "from-primary to-[#b82c30]",
      featured: true,
    },
  ];
  const industries = [
    {
      icon: Building2,
      title: "Corporate Offices and IT Parks",
      content:
        "Face Attendance Machines and Fingerprint Attendance Machines are commonly used in Indian corporate offices. They help manage large teams, hybrid work models and multi location attendance. Real time attendance reports make it easier for HR teams to track late marks, shifts and overtime.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      icon: Factory,
      title: "Factories and Industrial Plants",
      content:
        "Industrial areas often require rugged and reliable attendance devices. A Fingerprint Attendance Machine works well in factories because it prevents buddy punching. Companies that prefer touchless attendance use Face Attendance Machines at the main entrance. These devices handle dust, heat and heavy usage without performance issues.",
      gradient: "from-orange-400 via-orange-500 to-red-500",
    },
    {
      icon: Hospital,
      title: "Hospitals and Diagnostic Labs",
      content:
        "Healthcare environments require contactless and hygienic methods. Face Attendance Machines, palm recognition and iris recognition are perfect for staff who wear masks, gloves and PPE kits. Attendance is fast, touchless and easy to verify.",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
    },
    {
      icon: GraduationCap,
      title: "Schools, Colleges and Training Centers",
      content:
        "Biometric attendance improves transparency and ensures that staff attendance is recorded correctly. Institutions can optionally enable student attendance as well.",
      gradient: "from-purple-400 via-purple-500 to-indigo-600",
    },
    {
      icon: ShoppingBag,
      title: "Retail Chains and Shopping Outlets",
      content:
        "Attendance of multiple stores across different cities can be managed easily through cloud software. Whether a store uses a Face Attendance Machine or a Fingerprint Attendance Machine, data syncs instantly to the head office.",
      gradient: "from-pink-400 via-rose-500 to-red-500",
    },
    {
      icon: Truck,
      title: "Logistics, Transport and Warehousing",
      content:
        "Logistics companies benefit from mobile attendance, GPS tracking and biometric punching for night shifts. Devices can be installed at entry gates and inside warehouses for accurate monitoring.",
      gradient: "from-amber-400 via-yellow-500 to-orange-500",
    },
  ];
  const faqs = [
    {
      question:
        "What is the most reliable biometric attendance machine in India",
      answer:
        "Face based systems are currently the most accurate and user friendly attendance machines for Indian offices and commercial spaces.",
    },
    {
      question: "Does face attendance work with masks",
      answer:
        "Yes. TimeWatch Face Attendance Machines use AI to identify users even with masks or glasses.",
    },
    {
      question: "Can attendance be monitored for multiple branches",
      answer:
        "Yes. TimeWatch cloud software syncs attendance from all branches in India and displays it on one unified dashboard.",
    },
    {
      question: "Does the system integrate with payroll",
      answer:
        "Yes. Attendance, leave, overtime and shift data sync directly with payroll modules.",
    },
    {
      question: "What is the price of biometric attendance machines in India",
      answer:
        "Prices start around six thousand rupees and increase depending on features like face recognition, fingerprint capacity and cloud support.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-secondary to-primary">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pb-40">
          <div className="text-center">
            {/* <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
              <span className="text-white text-sm font-medium">
                Trusted by 10,000+ Organizations
              </span>
            </div> */}

            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Biometric Attendance System
              <br className="hidden md:block" />
              in India
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Accurate, Secure and Contactless Employee Attendance for Indian
              Workplaces
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 md:px-6 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">100% Secure</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 md:px-6 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Lightning Fast</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 md:px-6 py-3 text-white">
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
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-7xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Managing employee attendance in India has always been a challenge.
            With large teams, varied shifts, field staff, remote workers and
            compliance requirements, traditional methods like registers, swipe
            cards or PIN systems fail to provide accuracy and transparency. A
            Biometric Attendance System solves these problems by using unique
            human identifiers such as face, fingerprint, palm or iris to record
            attendance correctly every time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            TimeWatch provides one of the most reliable and advanced Biometric
            Attendance Systems in India. Our solutions are designed specifically
            for Indian workplaces including corporate offices, factories,
            hospitals, schools, logistics hubs, warehouses and retail chains.
            Thousands of businesses across Delhi, Mumbai, Bengaluru, Hyderabad,
            Chennai, Pune, Ahmedabad, Kolkata, Surat and Jaipur trust TimeWatch
            to manage attendance with accuracy and efficiency.
          </p>
        </div>

        {/* Evolution Timeline */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How Biometric Attendance Evolved in India
          </h2>

          <div className="space-y-8">
            {[
              {
                stage: "Stage 1: Introduction of Fingerprint Based Attendance",
                content:
                  "The first major upgrade in India was the adoption of the Fingerprint Attendance Machine. Businesses shifted from paper registers to biometric verification to eliminate buddy punching and attendance manipulation. The Fingerprint Attendance Machine became popular in factories and SMEs because of its affordability and reliability.",
              },
              {
                stage: "Stage 2: Card and Fingerprint Combined Systems",
                content:
                  "To provide flexibility, many workplaces upgraded to devices that offered both fingerprint and RFID card punching. This made the system more effective and allowed organizations to manage visitors and contract workers easily.",
              },
              {
                stage: "Stage 3: AI Powered Face Attendance",
                content:
                  "The introduction of AI based Face Attendance Machines transformed Indian attendance practices. These devices offer touchless punching, high accuracy and fast recognition even in low light. The Face Attendance Machine became widely used in IT parks, schools, hospitals, co working spaces and corporate offices.",
              },
              {
                stage: "Stage 4: Multi Biometric Attendance Devices",
                content:
                  "Modern organizations started adopting multi modal biometric devices that support face, fingerprint, palm, card and PIN in a single terminal. These systems give employees multiple ways to punch depending on their comfort and work environment.",
              },
              {
                stage:
                  "Stage 5: Cloud Based Attendance and Payroll Integration",
                content:
                  "Today, the Biometric Attendance System in India has become fully cloud enabled. Attendance data syncs in real time with payroll, leave management, overtime rules, shift rosters and HRMS. This saves HR time, reduces errors and allows centralized control for multi branch companies.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l-4 border-secondary"
              >
                <div className="absolute left-0 top-0 -translate-x-[52%] w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.stage}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Types */}
        <div className="container mx-auto mb-20 px-0">
          <h2 className="text-3xl md:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Popular Types of Biometric Attendance Systems in India
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

        {/* Industry Applications */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl md:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Industry Wise Applications in India
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, idx) => (
              <div key={idx} className="group relative">
                {/* Floating Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br  rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Main Card */}
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300">
                  {/* Icon Container with Gradient */}
                  <div className="flex items-center gap-6 mb-4">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <industry.icon
                        className="w-8 h-8 text-white"
                        strokeWidth={2.5}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg leading-[22px] md:leading-[28px] md:text-2xl font-bold text-gray-900 mb-0 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                        {industry.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed ml-0">
                    {industry.content}
                  </p>

                  {/* Decorative Bottom Border */}
                  <div
                    className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-white  to-primary  rounded-full transition-all duration-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why TimeWatch */}
        <div className="max-w-7xl mx-auto mb-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-4 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why TimeWatch is a Trusted Brand Across India
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "More than two decades of experience in biometric and attendance technology",
              "Used by over ten thousand organizations across India",
              "Face Attendance Machines with highly accurate AI recognition",
              "Fingerprint Attendance Machines that perform well in tough environments",
              "Cloud and on premise attendance options",
              "Designed for Indian heat, dust and high usage conditions",
              "Direct integration with payroll and HRMS",
              "India wide service and technical support",
              "Quick installation and easy onboarding for all industries",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        {/* <div className="max-w-7xl mx-auto mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Availability Across Major Indian Cities
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            TimeWatch provides biometric attendance solutions in
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Delhi NCR",
              "Mumbai",
              "Bengaluru",
              "Hyderabad",
              "Chennai",
              "Pune",
              "Ahmedabad",
              "Kolkata",
              "Surat",
              "Jaipur",
            ].map((city, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                {city}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Each city will have its own SEO optimized landing page which links
            back to this main India page for stronger ranking power.
          </p>
        </div> */}

        {/* Dedicated Keyword Section */}
        <div className="max-w-7xl mx-auto mb-20 bg-gradient-to-br from-gray-500 to-primary rounded-3xl p-4 md:p-10 text-white">
          <h2 className="text-3xl font-bold mb-8">
            Availability Across Major Indian Cities
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white">
                TimeWatch provides biometric attendance solutions in Delhi NCR,
                Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Ahmedabad, Kolkata,
                Surat and Jaipur. Each city will have its own SEO optimized
                landing page which links back to this main India page for
                stronger ranking power.
              </p>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <section>
          <div className="container mx-auto mt-20">
            <h2 class="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
              Related Products
            </h2>
            <ProductCatCard categorySlug="time-attendance-and-access-control" />
          </div>
        </section>

        {/* Related Pages */}
        <section>
          <div className="container mx-auto px-0 mt-14">
            <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-secondary">
              Pan India Presence
            </h2>
            <BioCards />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="container mx-auto py-12 px-0 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="" id="bio1seFAQ">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isFirst={index === 0}
              />
            ))}
          </div>
        </section>

        {/* CONTACT FORM SECTION */}
        <section
          className="container mx-auto py-12 px-0 sm:px-6 lg:px-8"
          id="contact"
        >
          <h2 className="text-center mb-8 text-3xl lg:text-4xl font-extrabold text-secondary">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center  mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* Contact Form */}
            <div className="flex-1 p-4 md:p-8 bg-white">
              <HomePageForm />
            </div>

            {/* Contact Info */}
            <div className="flex-1 p-8 bg-[#d63438] text-white flex flex-col items-center justify-center space-y-6">
              <h2 className="text-xl md:text-4xl font-bold mb-4">
                Request a Demo Today
              </h2>
              <div className="space-y-3 text-center">
                <p className="md:text-xl font-semibold">
                  Call:&nbsp;
                  <span> +91 95999 53923</span>
                </p>
                <p className="md:text-xl font-semibold">
                  Email:&nbsp;
                  <span> sales@timewatchindia.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the most reliable biometric attendance machine in India",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Face recognition based biometric attendance machines are the most reliable choice for Indian workplaces because they are fast, accurate and touchless.",
                },
              },
              {
                "@type": "Question",
                name: "Does face attendance work with masks",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. TimeWatch face recognition devices can identify users correctly even when they are wearing masks.",
                },
              },
              {
                "@type": "Question",
                name: "Can attendance be monitored for multiple branches",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. TimeWatch cloud attendance software provides real time sync for all branch locations across India.",
                },
              },
              {
                "@type": "Question",
                name: "Does biometric attendance integrate with payroll",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Biometric attendance data syncs automatically with payroll, leave, overtime and shift calculations.",
                },
              },
              {
                "@type": "Question",
                name: "What is the price of biometric attendance machines in India",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Biometric attendance devices start around six thousand rupees and the final price depends on features such as face recognition, fingerprint mode and cloud integration.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
