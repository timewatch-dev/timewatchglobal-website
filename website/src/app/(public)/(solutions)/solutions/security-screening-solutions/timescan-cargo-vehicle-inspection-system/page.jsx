import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title: "TimeScan Vehicle & Cargo Inspection System | TimeWatch Infocom",
  description: "TimeScan Vehicle & Cargo Inspection System | TimeWatch Infocom",
  alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/security-screening-solutions/timescan-cargo-vehicle-inspection-system",
  },
};

export default function ExplosiveNarcoticsDetector() {
  const faqs = [
    {
      question: "Is TimeScan safe for drivers and passengers?",
      answer:
        "Yes, the driver and passengers exit the vehicle during scanning, ensuring zero radiation exposure.",
    },
    {
      question: "What type of vehicles can TimeScan inspect?",
      answer:
        "Cars, buses, vans, and cargo box vehicles can all be scanned effectively.",
    },
    {
      question: "Can TimeScan detect drugs or explosives?",
      answer:
        "Yes, its dual-energy imaging technology helps identify organic, inorganic, and metallic substances, including explosives and narcotics.",
    },
    {
      question: "Can the system integrate with license plate recognition?",
      answer:
        "Yes, TimeScan supports ALPR integration for automatic vehicle identification.",
    },
    {
      question: "Is it suitable for temporary event sites?",
      answer:
        "Yes, its small footprint and mobile design make it easy to deploy at stadiums, fairs, and temporary checkpoints.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (JS object)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is TimeScan safe for drivers and passengers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the driver and passengers exit the vehicle during scanning, ensuring zero radiation exposure.",
        },
      },
      {
        "@type": "Question",
        name: "What type of vehicles can TimeScan inspect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cars, buses, vans, and cargo box vehicles can all be scanned effectively.",
        },
      },
      {
        "@type": "Question",
        name: "Can TimeScan detect drugs or explosives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, its dual-energy imaging technology helps identify organic, inorganic, and metallic substances, including explosives and narcotics.",
        },
      },
      {
        "@type": "Question",
        name: "Can the system integrate with license plate recognition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, TimeScan supports ALPR integration for automatic vehicle identification.",
        },
      },
      {
        "@type": "Question",
        name: "Is it suitable for temporary event sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, its small footprint and mobile design make it easy to deploy at stadiums, fairs, and temporary checkpoints.",
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
                src="/images/solutions/timescan-cargo-vehicle-inspection-system.png"
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
              TimeScan Cargo & Vehicle Inspection System
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              The TimeScan Cargo & Vehicle Inspection System is designed to
              deliver fast, reliable, and secure screening of cars, buses, and
              commercial vehicles. Built with advanced X-ray imaging technology,
              it helps detect hidden threats such as weapons, explosives, drugs,
              and contraband without interrupting traffic flow.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/cargo-canner.jpg"
                  alt="Consulting Hero"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">
                Advanced Vehicle Security Screening for Safer Premises
              </h2>

              <p>
                This system ensures{" "}
                <strong>
                  drivers and passengers remain outside the vehicle during
                  scanning
                </strong>
                , making the process completely safe from radiation exposure.
                With its powerful 200KV or optional 320KV X-ray generator and
                high-resolution L-shaped detectors, TimeScan provides unmatched
                penetration and crystal-clear imaging.
              </p>

              <p>
                Whether installed at{" "}
                <strong>
                  government buildings, metro and railway checkpoints, airports,
                  customs, or event venues
                </strong>
                , TimeScan enhances security and prevents unauthorized items
                from slipping through.
              </p>

              <h2>Key Features of TimeScan</h2>
              <ul>
                <li>
                  <strong>Mobile Scanning System</strong> – The X-ray scanner
                  moves automatically on rails, so vehicles don’t need to drive
                  through, saving time and effort.
                </li>
                <li>
                  <strong>Small Footprint Design</strong> – Requires minimal
                  space with no heavy construction, making installation quick
                  and cost-effective.
                </li>
                <li>
                  <strong>Dual-Energy Imaging</strong> – Accurately
                  differentiates between organic, inorganic, and metallic items,
                  giving operators greater visibility.
                </li>
                <li>
                  <strong>High Penetration Power</strong> – Detects up to 50 mm
                  steel (200KV) or 70 mm steel (320KV), ensuring even dense
                  materials can be scanned.
                </li>
                <li>
                  <strong>Automatic License Plate Recognition (ALPR)</strong> –
                  Seamlessly integrates with vehicle identification for
                  high-traffic facilities.
                </li>
                <li>
                  <strong>Powerful Imaging Functions</strong> – Zoom, reverse
                  colors, strip organic/inorganic matter, brighten/darken, and
                  local image enhancement to spot concealed threats.
                </li>
                <li>
                  <strong>Safe & Compliant</strong> – Meets GB15208.0-2005
                  safety standards with minimal X-ray leakage and film safety
                  guarantee.
                </li>
              </ul>

              <h2>Applications of TimeScan</h2>

              <ul>
                <li>
                  <strong>Government Buildings</strong> – Prevent unauthorized
                  or dangerous goods from entering sensitive premises.
                </li>
                <li>
                  <strong>Airports & Metro Stations</strong> – Secure entry
                  points by scanning taxis, buses, and delivery vehicles.
                </li>
                <li>
                  <strong>Customs & Border Checkpoints</strong> – Detect
                  smuggling and contraband at state and international borders.
                </li>
                <li>
                  <strong>Military Bases</strong> – Protect high-security
                  facilities by identifying hidden weapons and explosives.
                </li>
                <li>
                  <strong>Event Venues & Stadiums</strong> – Manage large crowds
                  while keeping vehicles free from security risks.
                </li>
                <li>
                  <strong>Corporate Campuses & SEZs</strong> – Monitor logistics
                  and delivery vehicles entering workplace premises.
                </li>
              </ul>
              <h2>Technical Specifications</h2>
              <ul>
                <li>
                  <strong>Tunnel Size</strong>: 3m (W) x 3m (H) – customizable
                </li>
                <li>
                  <strong>Scanning Speed</strong>: 0.2 m/s
                </li>
                <li>
                  <strong>Steel Penetration</strong>: 50mm (200KV), 70mm (320KV)
                </li>
                <li>
                  <strong>Resolution</strong>: Vertical 2mm / Horizontal 1.3mm
                </li>
                <li>
                  <strong>Monitor</strong>: 24-inch HD LCD with lockable console
                </li>
                <li>
                  <strong>Noise Level</strong>: &lt;65 dB
                </li>
                <li>
                  <strong>Operating Temp</strong>: 5°C–45°C
                </li>
                <li>
                  <strong>Power</strong>: Max 4KVA
                </li>
              </ul>
              <h2>Why Choose TimeWatch TimeScan?</h2>
              <ul>
                <li>
                  Trusted by organizations across Delhi, Mumbai, Bangalore,
                  Chennai, Kolkata, Hyderabad, and Ahmedabad.
                </li>
                <li>
                  Deployed at critical sites in the UAE, Qatar, Saudi Arabia,
                  and Africa.
                </li>
                <li>
                  24x7 support and nationwide presence for hassle-free
                  operations.
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
