import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title:
    "Door Frame Metal Detector in India & UAE | Multi-Zone DFMD | TimeWatch Infocom",
  description:
    "Discover TimeWatch Door Frame Metal Detectors with 6, 12, and 24-zone detection. Perfect for airports, metros, stadiums, schools, malls, and corporate offices across India, the UAE, and the GCC.",
  alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/security-screening-solutions/dfmd-door-frame-metal-detectors",
  },
};

export default function DfmdDoorFrameMetalDetectors() {
  const faqs = [
    {
      question: "How many DFMD models does TimeWatch offer?",
      answer:
        "We provide 6-zone, 12-zone, and 24-zone DFMDs, allowing customers to select the right one based on security and footfall.",
    },
    {
      question: "Are these detectors safe for everyone?",
      answer:
        "Yes. They are completely safe for pregnant women, people with pacemakers, and school children, with no harmful radiation.",
    },
    {
      question: "Can sensitivity be adjusted for different places?",
      answer:
        "Yes, each zone can be adjusted from 0 to 100 sensitivity levels, which means you can fine-tune detection for different environments like schools, malls, or airports.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Most DFMDs can be set up in under 20 minutes, making them easy to deploy even for temporary events.",
    },
    {
      question: "Do they provide entry data for reporting?",
      answer:
        "Yes, all models include traffic counters to track the number of people passing through and the number of alarms triggered.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (not shown on page)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many DFMD models does TimeWatch offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TimeWatch offers 6-zone, 12-zone, and 24-zone door frame metal detectors for different environments like schools, malls, airports, and stadiums.",
        },
      },
      {
        "@type": "Question",
        name: "Are these detectors safe for everyone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, TimeWatch DFMDs are safe for pregnant women, pacemakers, and electronic devices. They use safe detection methods without harmful radiation.",
        },
      },
      {
        "@type": "Question",
        name: "Can sensitivity be adjusted for different places?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, each detection zone can be adjusted from 0 to 100 sensitivity levels, allowing different settings for schools, airports, malls, and high-security areas.",
        },
      },
      {
        "@type": "Question",
        name: "How long does installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most TimeWatch DFMD models can be assembled and operational in less than 20 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Do they provide entry data for reporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all TimeWatch DFMDs come with traffic counters that track the number of people passing through and the number of alarms triggered.",
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
                src="/images/solutions/dfmd.png"
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
              Door Frame Metal Detector | TimeWatch India
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              In today’s world, managing security at busy entry points like
              airports, metro stations, stadiums, schools, and corporate offices
              is a growing challenge. TimeWatch brings a reliable, accurate, and
              easy-to-use solution with its Door Frame Metal Detectors (DFMDs).
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions-banner.jpg"
                  alt="Consulting Hero"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">Smarter Security for Every Entry Point</h2>

              <p className="mb-4">
                In today’s world, managing security at busy entry points like
                airports, metro stations, stadiums, schools, and corporate
                offices is a growing challenge. TimeWatch brings a reliable,
                accurate, and easy-to-use solution with its Door Frame Metal
                Detectors (DFMDs).
              </p>

              <p>
                Unlike older detectors that only give a generic alert, TimeWatch
                DFMDs use multi-zone technology to pinpoint the exact body
                location of a concealed metal object. This not only increases
                detection accuracy but also reduces screening delays, making it
                easier for security staff to handle high footfall without
                compromising on safety.
              </p>

              <p>
                Whether you’re in Delhi, Mumbai, Bengaluru, Hyderabad, Dubai,
                Doha, or Riyadh, our DFMDs are trusted for seamless entry
                control in both public and private spaces.
              </p>

              <h2>Key Features of TimeWatch DFMDs</h2>
              <h3>(1) Multi-Zone Precision</h3>
              <p>
                <strong>
                  TimeWatch DFMDs are available in 6-zone, 12-zone, and 24-zone
                  models, ensuring every site has the right fit.
                </strong>
              </p>
              <ul>
                <li>
                  6-Zone DFMD – Best for schools, colleges, small offices, and
                  clinics.
                </li>
                <li>
                  6-Zone DFMD – Best for schools, colleges, small offices, and
                  clinics.
                </li>
                <li>
                  24-Zone DFMD – Designed for high-security facilities like
                  airports, metro stations, embassies, corporate data centers,
                  and stadiums where precision is critical.
                </li>
              </ul>
              <p>
                Every zone’s sensitivity can be customized. For example,
                airports in Mumbai or Dubai can set a high sensitivity level to
                detect even small knives, while a school in Lucknow or Chennai
                may choose a moderate level to avoid unnecessary alarms from
                coins or belt buckles.
              </p>

              <h3>(2) Rapid Setup & Easy Operation</h3>
              <p>
                Security teams don’t need advanced training. Most models can be
                installed in less than 20 minutes, with a user-friendly LCD
                display that shows footfall, alerts, and alarm zones in
                real-time.
              </p>
              <h3>(3) Visual & Audio Indicators</h3>
              <p>
                The LED indicators on the sides show the exact body part where
                metal is detected, while buzzers and alarms immediately notify
                guards. This helps speed up checks, especially in high-traffic
                areas like metro stations and sports stadiums.
              </p>

              <h3>(4) Built-In Traffic Counters</h3>
              <p>
                Each unit records how many people have walked through and how
                many alarms were triggered. This is particularly useful in audit
                reports, event planning, and crowd management.
              </p>
              <h3>(5) Safe for Everyone</h3>
              <p>
                Our DFMDs are completely safe for pregnant women, people with
                pacemakers, and electronic devices, making them suitable for
                hospitals, schools, and universities.
              </p>
              <h3>(6) Real-World Applications</h3>
              <ul>
                <li>
                  Airports & Metro Stations (Delhi, Bengaluru, Dubai, Doha):
                  Manage thousands of passengers daily with accurate screening,
                  reducing delays while improving safety.
                </li>
                <li>
                  Stadiums & Sports Arenas (Cricket, Football, Kabaddi): Prevent
                  entry of prohibited items during high-footfall events while
                  ensuring crowd safety.
                </li>
                <li>
                  Schools, Colleges & Universities (India’s Tier-1 & Tier-2
                  cities): Create a safer learning environment by keeping
                  unauthorized objects out.
                </li>
                <li>
                  Corporate Offices & IT Parks (Gurgaon, Pune, Hyderabad):
                  Secure restricted zones like server rooms, R&D labs, or HR
                  cabins.
                </li>
                <li>
                  Shopping Malls & Public Events: Manage festival rushes, sales,
                  and cultural events without overcrowding or missed security
                  threats.
                </li>
                <li>
                  Government Buildings & Embassies: Enhance protection with
                  multi-zone screening in highly sensitive facilities
                </li>
              </ul>

              <h3>(7) Why Choose TimeWatch DFMDs?</h3>
              <ul>
                <li>Multi-zone models (6, 12, 24) for tailored needs</li>
                <li>Adjustable sensitivity for accurate results</li>
                <li>Quick installation and easy operation</li>
                <li>Real-time counters for audits and planning</li>
                <li>
                  Trusted across India, UAE, Saudi Arabia, Oman, and Qatar
                </li>
                <li>Backed by TimeWatch’s after-sales support and training</li>
              </ul>
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
