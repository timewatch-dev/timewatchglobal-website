import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title: "Under Vehicle Surveillance System (UVSS) in India | TimeWatch Infocom",
  description:
    "Secure your premises with TW3300 UVSS by TimeWatch. High-resolution under-vehicle scanning, ALPR integration, and real-time monitoring for airports, metro, government buildings, and events.",
  alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/inspection-detection-solutions/under-vehicle-surveillance-system-uvss-tw3300",
  },
};

export default function WalkThroughMetalDetectorTWND800() {
  const faqs = [
    {
      question: "What is an Under Vehicle Surveillance System (UVSS)?",
      answer:
        "A UVSS is a security solution that scans and captures images of a vehicle’s underside to detect threats, contraband, or illegal modifications.",
    },
    {
      question: "Where can TW3300 UVSS be used?",
      answer:
        "It is ideal for government buildings, airports, metro stations, stadiums, corporate campuses, customs, and event venues.",
    },
    {
      question:
        "How does TW3300 improve security compared to manual inspection?",
      answer:
        "TW3300 delivers high-resolution, real-time imaging that is faster, more accurate, and more reliable than traditional inspection mirrors.",
    },
    {
      question: "Does TW3300 work in outdoor conditions?",
      answer:
        "Yes, the IP68-rated weatherproof design ensures it works in rain, dust, fog, and extreme Indian climates.",
    },
    {
      question: "Can TW3300 be integrated with license plate recognition?",
      answer:
        "Yes, it supports optional ALPR integration for automated vehicle identification.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (not shown on page)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an Under Vehicle Surveillance System (UVSS)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An Under Vehicle Surveillance System (UVSS) is a security solution that scans and captures high-resolution images of a vehicle’s underside to detect threats, contraband, or illegal modifications. The TimeWatch TW3300 UVSS provides real-time imaging with advanced CCD technology for faster and more accurate inspections.",
        },
      },
      {
        "@type": "Question",
        name: "Where can TW3300 UVSS be used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TW3300 UVSS is ideal for government buildings, airports, metro and railway stations, stadiums, customs checkpoints, corporate campuses, and large event venues across India, the Middle East, and global markets.",
        },
      },
      {
        "@type": "Question",
        name: "How does TW3300 improve security compared to manual inspection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TW3300 delivers high-resolution, real-time imaging that is faster, more accurate, and more reliable than manual inspection mirrors. It helps security personnel detect hidden threats, contraband, or modifications without slowing down vehicle entry.",
        },
      },
      {
        "@type": "Question",
        name: "Does TW3300 work in outdoor conditions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TW3300 is IP68-rated, weatherproof, and dustproof, making it suitable for harsh outdoor conditions including rain, fog, and extreme temperatures often seen across India and the Middle East.",
        },
      },
      {
        "@type": "Question",
        name: "Can TW3300 be integrated with license plate recognition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the TW3300 supports optional ALPR (Automatic License Plate Recognition) integration, enabling seamless vehicle identity verification and storage of inspection records for audits or compliance.",
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
                src="/images/solutions/UVSS.png"
                alt="timescan-cargo-vehicle-inspection-system"
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
              Under Vehicle Surveillance System – TW3300
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              The TimeWatch TW3300 Under Vehicle Surveillance System (UVSS) is
              designed for high-security premises that require reliable and
              rapid under-vehicle inspection. Unlike traditional handheld
              mirrors, TW3300 delivers high-resolution color images of a
              vehicle’s underside in real time, ensuring faster, more accurate
              detection of hidden threats, contraband, or illegal modifications.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/uvss.jpg"
                  alt="Walk-Through-Metal-Detector-TWND"
                  title="Walk-Through-Metal-Detector-TWND"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">
                Under Vehicle Surveillance System (UVSS) – TW3300
              </h2>

              <p className="mb-4">
                This makes TW3300 a preferred solution for government buildings,
                metro and railway stations, airports, border checkpoints,
                customs, large event venues, and corporate facilities across
                India, UAE, and other global markets.
              </p>

              <h2>Key Features of TW3300 UVSS</h2>
              <ul>
                <li>
                  <strong>High-Resolution Imaging</strong> – Uses advanced CCD
                  scanning technology to deliver clear images of the vehicle
                  underside, ensuring nothing is missed.
                </li>
                <li>
                  <strong>Real-Time Monitoring</strong> – Automatically scans
                  and displays undercarriage images as vehicles pass at speeds
                  of up to 65 km/h.
                </li>
                <li>
                  <strong>Weatherproof Design (IP68)</strong> – Rugged,
                  waterproof, and dustproof, ideal for outdoor installations in
                  extreme Indian climates.
                </li>
                <li>
                  <strong>Advanced Lighting</strong> – Equipped with LED
                  lighting to ensure accurate imaging, even in low-light or
                  foggy environments.
                </li>
                <li>
                  <strong>Image Storage & Retrieval</strong> – Save up to
                  10,000+ images with automatic deletion of old data; retrieve
                  records by date, time, or license plate number.
                </li>
                <li>
                  <strong>ALPR Integration (Optional)</strong> – Automated
                  License Plate Recognition for seamless vehicle identity
                  verification.
                </li>
                <li>
                  <strong>Scalable & Flexible</strong> – Can be deployed at
                  parking lots, checkpoints, or integrated with access control
                  systems for multi-layered security.
                </li>
              </ul>

              <h3>How TW3300 UVSS Works</h3>
              <ul>
                <li>
                  <strong>Vehicle Enters Checkpoint</strong> – As the vehicle
                  passes over the scanning unit, high-resolution cameras capture
                  continuous images.
                </li>
                <li>
                  <strong>Image Processing</strong> – The system instantly
                  processes and displays the underside of the vehicle on the
                  operator’s monitor.
                </li>
                <li>
                  <strong>License Plate Recognition</strong> – With ALPR
                  integration, vehicle details are automatically recorded and
                  matched with access permissions.
                </li>
                <li>
                  <strong>Operator Review</strong> – Security personnel can
                  zoom, adjust contrast, or enhance images for a closer
                  inspection.
                </li>
                <li>
                  <strong>Data Storage</strong> – Images and vehicle logs are
                  saved for compliance, audits, and investigations.
                </li>
              </ul>

              <h2>Applications of TW3300</h2>
              <ul>
                <li>
                  <strong>Government Buildings</strong> – Prevent unauthorized
                  entry of vehicles carrying hidden contraband or explosives.
                </li>
                <li>
                  <strong>Metro & Railway Stations</strong> – Enhance passenger
                  safety with rapid under-vehicle inspections during peak hours.
                </li>
                <li>
                  <strong>Airports</strong> – Ensure secure and efficient
                  vehicle movement at restricted areas and parking zones.
                </li>
                <li>
                  <strong>Stadiums & Event Venues</strong> – Manage high traffic
                  securely during cricket, football, or large cultural events.
                </li>
                <li>
                  <strong>Corporate Campuses & IT Parks</strong> – Protect
                  infrastructure and personnel with automated vehicle checks.
                </li>
                <li>
                  <strong>Customs & Border Control</strong> – Detect illegal
                  trafficking or hidden compartments at checkpoints.
                </li>
              </ul>

              <h2>Benefits of Choosing TW3300</h2>

              <ul>
                <li>Faster and more accurate than manual inspection methods</li>
                <li>Reduces manpower requirements and operational delays</li>
                <li>Prevents smuggling, terrorism, and unauthorized entry</li>
                <li>Provides long-term digital evidence for security audits</li>
                <li>
                  Easy to install, relocate, and integrate with other systems
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
