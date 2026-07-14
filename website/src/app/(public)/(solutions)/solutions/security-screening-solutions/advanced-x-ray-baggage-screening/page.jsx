import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title: "X-Ray Baggage Scanner India & UAE | Enhance Security & Efficiency | TimeWatch Infocom",
  description:
    "Secure high-traffic facilities with TimeWatch’s advanced X-Ray baggage scanners. Deploy AI-enhanced screening at airports, metro stations, stadiums, and more across India and the Gulf.",
      alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/security-screening-solutions/advanced-x-ray-baggage-screening",
  },
};

export default function AdvancedRayBaggageScreening() {
const faqs = [
  {
    question: "Can the scanner detect liquids and metallic threats accurately?",
    answer:
      "Yes, it automatically flags items like lighters, bottles, knives, and more using AI-enhanced image analysis and alerts.",
  },
  {
    question: "Are the images and logs retrievable?",
    answer:
      "Absolutely. Recorded imagery and video logs can be searched by item type or time, and exported for audit or review.",
  },
  {
    question: "Is the scanner suitable for mobile or remote deployment?",
    answer:
      "Yes, its software supports remote management, live video feeds, and flexible replay features, making it ideal for both fixed and temporary checkpoints.",
  },
  {
    question: "Is it compliant with international safety norms?",
    answer:
      "Yes, it features low X-ray leakage rates (≤0.9 μSv/h), energy-efficient modes, and follows global safety standards.",
  },
  {
    question: "Can it integrate with existing surveillance systems?",
    answer:
      "Yes, it supports PoE cameras, on-screen alerts, and seamless interface with security platforms.",
  },
];


// 🔒 Hidden SEO Schema FAQ (not shown on page)
const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can the scanner detect liquids and metallic threats accurately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it automatically flags items like lighters, bottles, knives, and more using AI-enhanced image analysis and alerts.",
      },
    },
    {
      "@type": "Question",
      name: "Are the images and logs retrievable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, recorded imagery and video logs can be searched by item type or time, and exported for audit or review.",
      },
    },
    {
      "@type": "Question",
      name: "Is the scanner suitable for mobile or remote deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, its software supports remote management, live video feeds, and replay features, making it ideal for both fixed and temporary checkpoints.",
      },
    },
    {
      "@type": "Question",
      name: "Is it compliant with international safety norms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it features low X-ray leakage rates, energy-efficient modes, and follows global safety standards.",
      },
    },
    {
      "@type": "Question",
      name: "Can it integrate with existing surveillance systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it supports PoE cameras and seamless interface with existing security platforms.",
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
                src="/images/solutions/baggage-scanner.png"
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
              Advanced X-Ray Baggage Screening Systems for Airports, Metro
              Stations & Security Facilities
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              Ensuring safe and secure baggage screening is essential at busy
              hubs like airports in Delhi, railways in Mumbai, and airports in
              the Gulf. The TimeWatch X-Ray Baggage Scanner (TW100100) solution
              offers reliable, high-performance inspection for items ranging
              from standard luggage to palletized cargo—enhancing detection
              while maintaining fast throughput.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/baggage-scanner.jpg"
                  alt="Consulting Hero"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">Key Features & Benefits</h2>

              <h3>(1) High-Definition X-Ray Imaging with AI Overlays</h3>

              <p className="mb-4">
                Utilizing advanced algorithms, the system enhances images using
                multiple filters—such as edge, density, and color
                enhancements—for clear visibility. Dangerous items are
                automatically flagged with AI overlay boxes that track movement
                across the image.
              </p>

              <h3>(2) Enhanced Threat Detection with Smart Alarm System</h3>
              <p>
                The scanner identifies hazardous items like knives, lighters,
                liquids, and electronics, and triggers alarms via voice, light,
                and belt stoppage. Each threat is logged and categorized for
                later review.
              </p>

              <h3>(3) Dual Camera Monitoring & Robust Storage</h3>
              <p>
                Equipped with entrance and exit cameras plus optional PoE/IP
                cameras for live surveillance and playback. Enables recording
                patient-package insights and stores up to millions of images,
                supported by RAID-based backup.
              </p>

              <h3>(4) Flexible Display Modes & Image Manipulation</h3>
              <p>
                Operates in security or surveillance modes. Supports image
                enhancements such as inversion, pseudo-color, organic stripping,
                and high-energy contrast—all to improve object visibility and
                accuracy.
              </p>

              <h3>(5) User-Friendly Interface & Reliable Diagnostics</h3>
              <p>
                Operates on embedded Linux with intuitive GUIs and web access.
                Includes self-diagnostics, error logs, user management, and
                seamless remote updates.
              </p>
              <h3>(6) Comprehensive Scene Applications</h3>
              <p>
                Ideal for high-security or high-volume environments including
                airports, metro stations, government buildings, large event
                venues, and logistics hubs.
              </p>

              <h3>(7) Application Scenarios</h3>
              <ul>
                <li>
                  Airports, for securing check-in counters and cargo lanes
                </li>
                <li>
                  Metro & Railway Stations, to ensure commuter and vendor safety
                </li>
                <li>
                  Stadiums & Event Venues, for instant screening during major
                  events
                </li>
                <li>
                  Government Facilities & Sensitive Buildings, for personnel and
                  container checks
                </li>
                <li>
                  Exhibition Halls & Large Public Spaces, to strengthen security
                  with minimal delay
                </li>
              </ul>
              <h3>(8) Benefits at a Glance</h3>
              <ul>
                <li>Improved Security with AI-assisted threat detection</li>
                <li>
                  Fast Throughput, thanks to high-resolution scans and conveyor
                  automation
                </li>
                <li>
                  Operational Efficiency, reducing manual checks and human error
                </li>
                <li>
                  Comprehensive Oversight, with image logging and multi-camera
                  recording
                </li>
                <li>
                  Scalability, adaptable from airports to large event venues
                  across India and the Gulf
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
