import React from "react";
import {
  Award,
  Users,
  Target,
  Eye,
  Fingerprint,
  Shield,
  Globe,
  BarChart3,
  Clock,
  Lock,
  Car,
  LaptopMinimalCheck,
  Power,
  DoorClosed,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  title:
    "About TimeWatch | Smart Access Control & Biometric Systems in India & GCC",
  description:
    "Discover TimeWatch | a leader in Time & Attendance, Access Control, and Security Automation. Serving businesses across India and the Gulf with AI-powered solutions.",
  alternates: {
    canonical: "https://www.timewatchindia.com/about",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What products does TimeWatch offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TimeWatch offers biometric attendance systems, access control solutions, entrance control devices, parking & traffic management systems, inspection control equipment (like X-ray baggage scanners), software applications, UL-listed EM locks, and related accessories.",
      },
    },
    {
      "@type": "Question",
      name: "Which regions does TimeWatch serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TimeWatch operates across India (Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, Ahmedabad, Pune), the UAE, Saudi Arabia, Oman, Qatar, and parts of Europe.",
      },
    },
    {
      "@type": "Question",
      name: "Does TimeWatch provide biometric attendance solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, TimeWatch specializes in AI-powered biometric attendance systems with face, fingerprint, palm, RFID, and password authentication for secure and contactless workforce management.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does TimeWatch serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TimeWatch serves IT parks, government offices, hospitals, schools, factories, airports, public transport, retail, and commercial buildings.",
      },
    },
    {
      "@type": "Question",
      name: "Is TimeWatch software compatible with HR and payroll systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, TimeWatch's software suite integrates with HRMS, payroll, visitor management, canteen, gym, and traffic systems for seamless automation and reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a demo or consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! You can request a free demo by contacting the TimeWatch team via phone at +91 95999 53923 or emailing sales@timewatchindia.com.",
      },
    },
  ],
};

const aboutPage = () => {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className="">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With You Towards A Safer, Smarter Tomorrow
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#6d6f72] mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  TimeWatch is an active technology developer specializing in
                  Biometric Attendance, Time & Attendance, Access Control, and
                  Workplace Automation. With a keen interest in security and
                  employee productivity, we manufacture Time and Attendance
                  solutions for companies in India, the UAE, the Middle East,
                  and Europe.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey is still ongoing, beginning with a dream to
                  transform how enterprises deal with time, people, and
                  security. Now, we embed AI, Machine Learning, and Cloud
                  Technologies are being integrated into our devices and
                  software, creating advanced, multi-layered security systems
                  for businesses of all scopes.
                </p>
                <p className="text-gray-600 mb-6">
                  We are not a single product vendor. We shadow our clients to
                  support their long-term technology requirements.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">9+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10k+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-4 text-center">
                  {/* <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#6d6f72] mb-2">
                  Our Team
                </h3>
                <p className="text-gray-600">
                  A diverse group of experts dedicated to pushing the boundaries
                  of biometric technology and delivering exceptional customer
                  experiences.
                </p> */}
                  <Image
                    src={"/images/about-us.png"}
                    alt="About Us"
                    width={500}
                    height={300}
                    className="rounded-lg mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* who we are */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our extensive product range is engineered for seamless
                integration and scalable deployment across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Time Attendance & Biometric Access Control Systems",
                  description:
                    "Face, fingerprint, RFID, and palm-based recognition with HRMS-ready software",
                  color: "from-primary to-[#b82c30]",
                  icon: Fingerprint,
                },
                {
                  title: "Entrance Control Solutions",
                  description:
                    "Flap barriers, speed gates, turnstiles, and automated door access",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                  icon: Shield,
                },
                {
                  title: "Parking & Traffic Control Systems",
                  description:
                    "Boom barriers, ANPR cameras, traffic signal integration, and parking sensors",
                  color: "from-primary to-[#b82c30]",
                  icon: Car,
                },
                {
                  title: "Inspection Control Systems",
                  description:
                    "X-Ray baggage scanner, metal detectors, UVSS (Under Vehicle Surveillance Systems)",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                  icon: DoorClosed,
                },
                {
                  title: "Software & Applications",
                  description:
                    "Attendance, payroll, visitor management, parking, canteen, and gym access software",
                  color: "from-primary to-[#b82c30]",
                  icon: LaptopMinimalCheck,
                },
                {
                  title: "UL Listed EM Locks",
                  description:
                    "High-grade electromagnetic locks for secure environments",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                  icon: Lock,
                },
                {
                  title: "Accessories",
                  description:
                    "Exit buttons, push switches, door closers, and power backup units",
                  color: "from-primary to-[#b82c30]",
                  icon: Power,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To design and develop world-class smart security and
                  automation products under one roof, helping clients across{" "}
                  <strong>industries secure, manage,</strong> and automate their
                  premises effectively.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#6d6f72] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To become one of the top five global leaders in{" "}
                  <strong>
                    {" "}
                    Biometric Attendance, Time & Attendance, Access Control,
                    Entrance Control, Traffic & Parking, and Inspection Control
                    Systems,
                  </strong>{" "}
                  known for quality innovation and customer satisfaction.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  <strong>IIBSS</strong> – Identify | Innovate | Build | Supply
                  | Support
                  <br />
                  These principles guide every step of our process, from
                  research and development to post-installation service and
                  client care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Software Suite Card */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Our Software Suite Includes
                  </h3>
                </div>
                <ul className="p-6 space-y-4 text-gray-700">
                  {[
                    "Time & Attendance Management",
                    "Visitor Management System (VMS)",
                    "Payroll & Leave Management",
                    "Canteen & Gym Management",
                    "Parking & Traffic Management",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries Served Card */}
              <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8 overflow-hidden">
                <div className="text-primary rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-[#6d6f72]/20">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Industries We Serve
                  </h3>
                </div>
                <ul className="p-6 space-y-4 text-gray-700">
                  {[
                    "IT Parks & Co-Working Spaces",
                    "Hospitals & Diagnostic Labs",
                    "Educational Institutions",
                    "Government & Municipal Buildings",
                    "Warehouses & Manufacturing Plants",
                    "Airports, Metros & Public Transit",
                    "Retail Chains & Commercial Complexes",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#6d6f72] mb-4">
              Strong Presence in Major Country
            </h2>
            <p className="text-gray-700 mb-6">
              We are actively serving customers in <strong>the UAE</strong> and{" "}
              <strong>India</strong>, extending our presence to support
              customers across other countries.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default aboutPage;
