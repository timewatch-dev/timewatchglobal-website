import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title:
    "Access Control Systems & Biometric Terminals in India & UAE | TimeWatch Infocom",
  description:
    "Secure workplaces with TimeWatch Access Control Systems. Biometric face, fingerprint & RFID terminals integrated with HRMS. Trusted in India, Dubai & GCC.",
  alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/security-screening-solutions/access-control-system-terminals",
  },
};

export default function AccessControlSystemTerminals() {
  const faqs = [
    {
      question: "What is an access control system?",
      answer:
        "An access control system is a security solution that manages and monitors who can enter or exit a facility or specific zone using biometric or RFID authentication.",
    },
    {
      question: "Can access control integrate with attendance and payroll?",
      answer:
        "Yes, all TimeWatch devices integrate with HRMS and payroll systems, ensuring attendance data flows directly into salary processing.",
    },
    {
      question: "Do these devices work in India and UAE?",
      answer:
        "Yes, our devices are designed for Indian workplaces (Delhi, Mumbai, Bengaluru, Hyderabad, etc.) and are widely deployed in UAE, Qatar, Oman, and Saudi Arabia.",
    },
    {
      question: "What happens if there is a power cut?",
      answer:
        "Most terminals come with built-in battery backup to ensure uninterrupted access control during outages.",
    },
    {
      question: "Can I manage multiple locations with one system?",
      answer:
        "Yes, our cloud-based system allows you to control and monitor access across multiple branches from a single dashboard.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (not shown on page)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an access control system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An access control system is a security solution that manages and monitors who can enter or exit a facility or specific zone using biometric or RFID authentication.",
        },
      },
      {
        "@type": "Question",
        name: "Can access control integrate with attendance and payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all TimeWatch devices integrate with HRMS and payroll systems, ensuring attendance data flows directly into salary processing.",
        },
      },
      {
        "@type": "Question",
        name: "Do these devices work in India and UAE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our devices are designed for Indian workplaces including Delhi, Mumbai, Bengaluru, and Hyderabad, and are widely deployed in UAE, Qatar, Oman, and Saudi Arabia.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if there is a power cut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most terminals come with built-in battery backup to ensure uninterrupted access control during outages.",
        },
      },
      {
        "@type": "Question",
        name: "Can I manage multiple locations with one system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our cloud-based system allows you to control and monitor access across multiple branches from a single dashboard.",
        },
      },
    ],
  };

  return (
    <div className="solutions-pages">
      {/* Meta Info & Schema FAQ */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />
      </Head>
      <div className="">
        {/* Hero Section */}

        <section className="bg-gray-50 relative overflow-hidden h-[400px] md:h-[550px]">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <div className="relative z-10 w-full h-[400px] md:h-[550px]">
              <Image
                src="/images/solutions/access-control.png"
                alt="Consulting Hero"
                fill
                sizes="100"
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay on top of image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />
            </div>
          </div>

          <div className="relative z-20 container flex justify-center h-full flex-col xl:pr-[400px] text-white banner">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Access Control Systems & Terminals for Smart Security
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              Managing who enters your premises is no longer about just locking
              doors. In today’s fast-moving world, organizations need smart
              access control systems that combine security, convenience, and
              scalability.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/access-control.jpg"
                  alt="Consulting Hero"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2>Smarter Access Control for Secure Workplaces</h2>
              <p className="mb-4">
                Managing who enters your premises is no longer about just
                locking doors. In today’s fast-moving world, organizations need
                smart access control systems that combine security, convenience,
                and scalability.
              </p>

              <p>
                At TimeWatch, we provide a wide range of biometric access
                control terminals — including face recognition, fingerprint,
                RFID, palm vein, and password-based solutions — designed for
                businesses of all sizes. Whether you’re running a corporate
                office in Delhi NCR, a manufacturing plant in Bengaluru, or
                managing government facilities in Dubai or Abu Dhabi, our access
                control solutions ensure only the right people enter the right
                zones.
              </p>

              <h2>Why Choose TimeWatch Access Control Systems?</h2>
              {/* <p>
                <strong>
                  Our solutions go beyond just granting entry — they create a
                  complete security ecosystem:
                </strong>
              </p> */}
              <ol className="!pl-4">
                <li>
                  <strong>Multi-Authentication Options</strong>
                  <br />
                  Face, fingerprint, palm recognition, RFID card, and password —
                  choose the method best suited for your workforce and facility.
                </li>
                <li>
                  <strong>Real-Time Monitoring</strong>
                  <br />
                  Admins can track entries and exits across locations from a
                  single dashboard, reducing manual security checks.
                </li>
                <li>
                  <strong>Scalable for Multi-Location Enterprises</strong>
                  <br />
                  From Mumbai to Dubai, you can manage multiple offices and
                  factories under one integrated system.
                </li>
                <li>
                  <strong>Seamless HRMS & Payroll Integration</strong>
                  <br />
                  Attendance data from terminals syncs directly with TimeWatch
                  HRMS, simplifying payroll and compliance.
                </li>
                <li>
                  <strong>Role-Based Access Control</strong>
                  <br />
                  Define who can access server rooms, R&D labs, or restricted
                  areas. Perfect for IT parks, data centers, hospitals, and
                  government offices.
                </li>
                <li>
                  <strong>Cloud & Mobile Connectivity</strong>
                  <br />
                  Monitor and manage access from anywhere — whether you’re in
                  Qatar, Saudi Arabia, or back in Delhi.
                </li>
              </ol>

              <h2>Applications of Access Control Systems</h2>

              <ul>
                <li>
                  <strong>Corporate Offices & IT Parks</strong> – Secure entry
                  for employees and manage visitor access.
                </li>
                <li>
                  <strong>Factories & Manufacturing Units</strong> – Restrict
                  access to high-risk areas like machinery floors.
                </li>
                <li>
                  <strong>Healthcare & Laboratories</strong> – Ensure only
                  authorized staff enter sensitive areas like labs, ICUs, and
                  pharma zones.
                </li>
                <li>
                  <strong>Government & Defense Buildings</strong> – Enhanced
                  security with multi-layer authentication.
                </li>
                <li>
                  <strong>Educational Institutions</strong> – Controlled access
                  to hostels, libraries, and labs.
                </li>
                <li>
                  <strong>Airports & Transport Hubs</strong> – Secure staff
                  entry at gates, terminals, and logistics zones.
                </li>
              </ul>
              <h2>Explore Our Access Terminals</h2>
              <p>
                <strong>
                  We offer a wide range of biometric and card-based terminals to
                  suit every requirement:
                </strong>
              </p>
              <ul>
                <li>BIO-1SE Face Recognition Terminal</li>
                <li>ATF-305SE Multi-Modal Biometric Device</li>
                <li>TrueFace Series (2000, 6000, 50)</li>
                <li>AI-Face4G Handheld Device</li>
              </ul>
              <p>
                Each terminal is built with Indian workplaces in mind, while
                also catering to UAE and GCC businesses that demand fast,
                reliable, and compliant access systems.
              </p>
            </section>

            {/* FAQ Section */}
            <SolutionsFaq faqs={faqs} />
          </div>
          {/* sidebar */}
          <div className="xl:w-[300px] sticky top-20">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
