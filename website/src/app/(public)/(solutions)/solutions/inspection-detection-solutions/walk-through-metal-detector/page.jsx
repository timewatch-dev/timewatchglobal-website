import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title: "Walk-Through Metal Detector | Multi-Zone Entry Screening  | TimeWatch Infocom",
  description:
    "Ensure secure entry at airports, metro stations, stadiums & offices with TimeWatch Walk-Through Metal Detector. 8-zone detection, audio-visual alerts & high throughput.",
      alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/inspection-detection-solutions/walk-through-metal-detector",
  },
};

export default function HandHeldMetalDetectorTWHH100() {
  const faqs = [
    {
      question:
        "Can the scanner detect liquids and metallic threats accurately?",
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
      name: "How many zones does the Walk-Through Metal Detector support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Walk-Through Metal Detector features an 8-zone detection system, allowing security staff to identify the exact location of metallic objects on the body for quicker screening.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Walk-Through Metal Detector suitable for airports and metro stations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is widely used in high-traffic areas such as airports, metro and railway stations, stadiums, and government buildings, offering reliable and fast screening.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Walk-Through Metal Detector offer adjustable sensitivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it comes with adjustable sensitivity levels, enabling operators to detect small metallic objects while avoiding false alarms from harmless items.",
      },
    },
    {
      "@type": "Question",
      name: "What types of alerts does the Walk-Through Metal Detector provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It provides both audio and visual LED indicators, making it easier for security teams to quickly identify suspicious items.",
      },
    },
    {
      "@type": "Question",
      name: "Where can the Walk-Through Metal Detector be installed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can be installed at airports, metro stations, stadiums, corporate offices, schools, shopping malls, and government institutions for advanced entry screening.",
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
                src="/images/solutions/Walk-Through-Metal-Detector.png"
                alt="Walk-Through-Metal-Detector"
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
              Walk-Through Metal Detector
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
                  src="/images/solutions/sub/DFMD.jpg"
                  alt="DFMD"
                  title="DFMD"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">
                Advanced Multi-Zone Security Screening for High-Traffic Areas
              </h2>

              <p className="mb-4">
                Security is non-negotiable in today’s world, especially in
                high-traffic locations like airports, metro stations, stadiums,
                government offices, schools, and malls. The Walk-Through Metal
                Detector from TimeWatch is designed to provide fast, reliable,
                and precise entry screening that enhances safety while ensuring
                a smooth flow of people.
              </p>

              <h2>Key Features of the Walk-Through Metal Detector</h2>

              <ul>
                <li>
                  <strong>8-Zone Detection System:</strong> The device is
                  equipped with 8 detection zones, allowing security personnel
                  to pinpoint the exact location of metallic objects on the body
                  (head, torso, arms, or legs). This ensures quicker inspections
                  and reduces delays.
                </li>
                <li>
                  <strong>Adjustable Sensitivity Levels:</strong> Operators can
                  fine-tune sensitivity to detect even small metallic objects
                  like blades or concealed weapons, while minimizing false
                  alarms from harmless items such as keys or belts.
                </li>
                <li>
                  <strong>Audio & Visual Alerts:</strong> The system provides
                  clear sound alarms and LED indicators, making it easy for
                  staff to identify and respond quickly to threats without
                  disrupting passenger flow.
                </li>
                <li>
                  <strong>High Throughput Screening:</strong> Built to handle
                  heavy traffic, the detector ensures that thousands of people
                  can be screened efficiently each day without compromising
                  accuracy.
                </li>
                <li>
                  <strong>User-Friendly Operation:</strong> With its simple
                  interface, plug-and-play installation, and reliable
                  performance, security staff can operate the system without
                  extensive training.
                </li>
              </ul>

              <h2>Applications</h2>
              <ul>
                <li>
                  <strong>Metro & Railway Stations:</strong> Handle peak-hour
                  rush and minimize ticket fraud with faster entry checks.
                </li>
                <li>
                  <strong>Airports:</strong> Improve passenger screening at
                  security gates and boarding zones.
                </li>
                <li>
                  <strong>Stadiums & Sports Arenas:</strong> Manage large crowds
                  during cricket, football, and other sporting events safely.
                </li>
                <li>
                  <strong>Schools, Colleges & Universities:</strong> Ensure the
                  safety of students and staff by preventing unauthorized items
                  from entering campuses.
                </li>
                <li>
                  <strong>Government Buildings & Corporate Offices:</strong> Add
                  an extra layer of security for sensitive areas.
                </li>
                <li>
                  <strong>Malls & Events:</strong> Manage festive or sales rush
                  by preventing unauthorized access and ensuring safe shopping
                  experiences.
                </li>
              </ul>

              <h2>Benefits of Choosing TimeWatch</h2>
              <ul>
                <li>Precise detection with 8-zone identification</li>
                <li>Smooth people movement with a high-throughput design</li>
                <li>Flexible installation for indoor and outdoor premises</li>
                <li>Cost-effective and long-lasting security investment</li>
                <li>
                  Backed by TimeWatch’s service support in India, UAE, and the
                  Middle East
                </li>
              </ul>

              <h2>Why Businesses Trust TimeWatch</h2>

              <p className="mb-4">
                TimeWatch has been a leader in access control and security
                solutions across India, the UAE, and the Middle East. With years
                of expertise, our walk-through metal detectors are built to
                handle the toughest security challenges while providing a
                seamless user experience.
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
