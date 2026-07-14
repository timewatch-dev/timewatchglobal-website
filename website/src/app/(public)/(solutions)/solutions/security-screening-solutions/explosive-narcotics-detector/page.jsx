import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title:
    "TW-NE200 Explosive & Narcotics Detector | Portable Trace & Vapour Scanner | TimeWatch Infocom",
  description:
    "The TW-NE200 portable detector identifies explosives and narcotics using ion mobility spectrometry. Fast, accurate, and lightweight, it delivers results within 3 seconds for airports, customs, and border security.",
  alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/security-screening-solutions/explosive-narcotics-detector",
  },
};

export default function ExplosiveNarcoticsDetector() {
  const faqs = [
    {
      question: "What substances can TW-NE200 detect?",
      answer:
        "It detects a wide range of explosives such as TNT, RDX, PETN, C4, and Semtex, as well as narcotics including cocaine, heroin, methamphetamine, cannabis, LSD, and more.",
    },
    {
      question: "How fast does it provide results?",
      answer:
        "The TW-NE200 provides results in three seconds or less, making it ideal for high-traffic checkpoints.",
    },
    {
      question: "Is it portable and easy to use?",
      answer:
        "Yes. The device is compact, lightweight, and designed for simple wipe-based sampling without direct contact with threats.",
    },
    {
      question: "What is the accuracy rate of TW-NE200?",
      answer: "The accuracy rate is above 99% with less than 1% false alarms.",
    },
    {
      question: "Can the device store data for records?",
      answer:
        "Yes. It supports real-time storage of over one million results with retrieval and export options.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (JS object)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What substances can TW-NE200 detect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It detects a wide range of explosives such as TNT, RDX, PETN, C4, and Semtex, as well as narcotics including cocaine, heroin, methamphetamine, cannabis, LSD, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How fast does it provide results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The TW-NE200 provides results in three seconds or less, making it ideal for high-traffic checkpoints.",
        },
      },
      {
        "@type": "Question",
        name: "Is it portable and easy to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The device is compact, lightweight, and designed for simple wipe-based sampling without direct contact with threats.",
        },
      },
      {
        "@type": "Question",
        name: "What is the accuracy rate of TW-NE200?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The accuracy rate is above 99% with less than 1% false alarms.",
        },
      },
      {
        "@type": "Question",
        name: "Can the device store data for records?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It supports real-time storage of over one million results with retrieval and export options.",
        },
      },
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
                src="/images/solutions/narcotics.jpg"
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
              TW-NE200 – Portable Explosive & Narcotics Trace & Vapour Detector
            </h1>
            <p className="text-xl text-white mb-8 hidden md:block">
              Security checkpoints today demand fast and accurate detection of
              threats. The TW-NE200 is a high-performance portable trace and
              vapour detector designed to identify a wide range of explosives
              and narcotics with precision.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section className="">
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/narcotics-breaf.jpg"
                  alt="Consulting Hero"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">Key Benefits of TW-NE200</h2>

              <h3>(1) Dual-Mode Detection</h3>
              <p>
                The TW-NE200 combines two modes in one device—explosives and
                narcotics detection—ensuring complete coverage.
              </p>

              <h3>(2) Rapid Results</h3>
              <p>
                Provides test results in three seconds or less, improving
                security screening efficiency.
              </p>

              <h3>(3) High Accuracy and Low False Alarms</h3>
              <p>
                With an accuracy rate above 99% and a false alarm rate of less
                than 1%, it delivers dependable results.
              </p>
              <h3>(4) Safe and Simple Sampling</h3>
              <p>
                Operators can collect trace particles using wipe samples without
                directly handling suspicious materials.
              </p>

              <h3>(5) Portable and Easy to Operate</h3>
              <p>
                Compact dimensions and lightweight build allow for quick
                deployment in the field.
              </p>
              <h3>(6) Smart Functions</h3>
              <p>
                Features include automatic calibration and cleaning, remote
                monitoring, fault diagnosis, and large-capacity data storage.
              </p>

              <h2>Technical Specifications</h2>
              <ul>
                <li>Detection Limit: 50pg (cocaine hydrochloride or TNT)</li>
                <li>Accuracy: ≥99%</li>
                <li>False Alarm Rate: 1%</li>
                <li>Analysis Time: ≤3 seconds</li>
                <li>Warm-Up Time: {"<"}5 minutes</li>
                <li>Recovery Time: {"<"}15 seconds</li>
                <li>
                  Battery: Lithium battery pack, 14.8V/6700mAh, continuous
                  operation ≥3 hours
                </li>
                <li>Display: 5.6-inch full-color TFT touch screen</li>
                <li>Storage Capacity: Over 1 million records</li>
                <li>Dimensions: 290mm × 170mm × 145mm</li>
              </ul>

              <h2>Applications of TW-NE200</h2>
              <ul>
                <li>
                  Border Crossings and Customs – Prevent trafficking of drugs
                  and illegal substances.
                </li>
                <li>
                  Public Venues – Strengthen safety in stadiums, event grounds,
                  and transport hubs.
                </li>
                <li>
                  Law Enforcement – Aid in suspect screening and evidence
                  collection.
                </li>
                <li>
                  Military and Defense – Support field operations for rapid
                  threat detection.
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
