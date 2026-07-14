import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title: "Hand Held Metal Detector TW-HH100 | TimeWatch Infocom",
  description:
    "Buy TimeWatch TW-HH100 Hand Held Metal Detector | portable, lightweight, and accurate device for airports, metros, stadiums & corporate offices across India & GCC.",
  alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/inspection-detection-solutions/hand-held-metal-detector-tw-hh100",
  },
};

export default function HandHeldMetalDetectorTWHH100() {
  const faqs = [
    {
      question: "What can the TW-HH100 detect?",
      answer:
        "It can detect metallic weapons, knives, wires, firearms, and other contraband items hidden on individuals or in bags.",
    },
    {
      question:
        "Is it suitable for high-traffic environments like metros or stadiums?",
      answer:
        "Yes, the TW-HH100 is built for continuous use in high-crowd environments without compromising accuracy or speed.",
    },
    {
      question: "Can it work in silent mode?",
      answer:
        "Yes, it has both sound and vibration alarms, allowing discreet detection in sensitive locations like embassies and courts.",
    },
    {
      question: "How long does the battery last?",
      answer:
        "It provides up to 40 hours of operation on a single charge, ideal for long-hour security shifts.",
    },
    {
      question: "Where is it commonly used?",
      answer:
        "Airports, metros, corporate offices, government facilities, schools, malls, stadiums, and event venues.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (not shown on page)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What can the TW-HH100 detect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TW-HH100 Hand Held Metal Detector can detect metallic weapons, knives, wires, firearms, and other contraband items hidden on individuals or in bags.",
        },
      },
      {
        "@type": "Question",
        name: "Is the TW-HH100 suitable for high-traffic environments like metros or stadiums?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the TW-HH100 is built for continuous use in high-crowd environments such as metro stations, airports, and stadiums without compromising accuracy or speed.",
        },
      },
      {
        "@type": "Question",
        name: "Can the TW-HH100 work in silent mode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the TW-HH100 offers both sound and vibration alarms, allowing discreet detection in sensitive locations such as embassies, courts, and government offices.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the TW-HH100 battery last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TW-HH100 provides up to 40 hours of continuous operation on a single charge, making it ideal for long security shifts.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the TW-HH100 commonly used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TW-HH100 is widely used in airports, metro and railway stations, stadiums, schools, shopping malls, corporate offices, and event venues across India and the Gulf region.",
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
                src="/images/solutions/Hand-Held-Metal-Detector.png"
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
              Hand Held Metal Detector – TW-HH100
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              The TW-HH100 Hand Held Metal Detector is a lightweight,
              easy-to-use, and highly accurate security screening tool designed
              for quick detection of concealed metallic objects. Whether used in
              airports, metros, stadiums, schools, or corporate offices, it
              ensures smooth crowd flow while maintaining maximum safety
              standards.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/hhmd.jpg"
                  alt="Hand Held Metal Detector – TW-HH100 | TimeWatch India"
                  title="Hand Held Metal Detector – TW-HH100 | TimeWatch India"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">
                Hand Held Metal Detector – TW-HH100 | TimeWatch India
              </h2>

              <p className="mb-4">
                The <strong>TW-HH100 Hand Held Metal Detector</strong> is a
                lightweight, easy-to-use, and highly accurate security screening
                tool designed for quick detection of concealed metallic objects.
                Whether used in{" "}
                <strong>
                  airports, metros, stadiums, schools, or corporate offices
                </strong>
                , it ensures smooth crowd flow while maintaining maximum safety
                standards.
              </p>

              <p>
                Engineered for <strong>long-hour operations</strong>, the
                TW-HH100 combines{" "}
                <strong>sensitivity, durability, and ergonomic design</strong>,
                making it a preferred choice for security professionals in{" "}
                <strong> India, the Middle East, and the Gulf regions</strong>.
              </p>

              <h2>Key Features of TW-HH100</h2>

              <ul>
                <li>
                  <strong>High Detection Accuracy </strong> – Detects even small
                  metallic objects like knives, wires, firearms, and contraband.
                </li>
                <li>
                  <strong>Dual Alarm Mode </strong> - Sound + Vibration alarm
                  for discreet operations in sensitive areas like embassies,
                  courts, and government offices.
                </li>
                <li>
                  <strong>Lightweight & Ergonomic Design </strong> – Easy to
                  handle for long hours without fatigue.
                </li>
                <li>
                  <strong>Rugged Build Quality </strong> – Designed to withstand
                  continuous use in high-traffic environments.
                </li>
                <li>
                  <strong>Long Battery Life </strong> – Up to 40 hours of
                  operation, ensuring uninterrupted security coverage.
                </li>
                <li>
                  <strong>Adjustable Sensitivity</strong> – Customize detection
                  levels as per requirement.
                </li>
              </ul>

              <h2>Real-World Applications</h2>
              <ul>
                <li>
                  <strong>Metro & Railway Stations</strong> – In cities like
                  Delhi, Bengaluru, and Hyderabad, thousands of passengers move
                  daily. The TW-HH100 ensures smooth entry by detecting metallic
                  threats without causing delays.
                </li>
                <li>
                  <strong>Airports</strong> – At Mumbai, Dubai, and Doha
                  airports, where quick turnaround and high passenger volume are
                  critical, the device provides efficient frisking and baggage
                  screening.
                </li>
                <li>
                  <strong>Stadiums & Sports Arenas</strong> –From cricket
                  stadiums in Chennai to football arenas in Kolkata, the
                  TW-HH100 helps prevent prohibited items from entering,
                  ensuring fan safety during large-scale events.
                </li>
                <li>
                  <strong>Corporate Offices & IT Parks</strong> – In Gurugram,
                  Bengaluru, and Pune, companies rely on hand-held detectors for
                  visitor and contract staff screening, safeguarding sensitive
                  premises like data centers and server rooms.
                </li>
                <li>
                  <strong>Malls, Schools & Event Venues</strong> – Event halls
                  in Abu Dhabi and Qatar, schools in Delhi and Dubai, and
                  shopping malls across India use this device to create safe
                  environments for visitors, staff, and students.
                </li>
              </ul>
              <h2>Why Choose TimeWatch TW-HH100?</h2>
              <ul>
                <li>
                  <strong>Metro & Railway Stations</strong> – In cities like
                  Delhi, Bengaluru, and Hyderabad, thousands of passengers move
                  daily. The TW-HH100 ensures smooth entry by detecting metallic
                  threats without causing delays.
                </li>
                <li>
                  Trusted by{" "}
                  <strong>
                    leading airports, metro authorities, and corporates
                  </strong>{" "}
                  across India & GCC.
                </li>
                <li>
                  Designed for both{" "}
                  <strong>indoor and outdoor security operations</strong>.
                </li>
                <li>
                  Backed by <strong>TimeWatch’s service network</strong> for
                  reliable after-sales support.
                </li>
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
