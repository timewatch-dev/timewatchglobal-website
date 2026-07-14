import Image from "next/image";
import ServiceSidebar from "@/components/ServiceSidebar";
import SolutionsFaq from "@/components/SolutionsFaq";
import Head from "next/head";

export const metadata = {
  title: "Field Staff Tracking & Verified Attendance | Mobile GPS Attendance | TimeWatch Infocom",
  description:
    "Track your field staff in real time with TimeWatch. GPS-based live tracking, task verification with photos, and automated reports for payroll & compliance.",
  alternates: {
    canonical:
      "https://www.timewatchindia.com/solutions/workforce-hr-solutions/field-staff-tracking-solution",
  },
};

export default function ConsultingLandingPage() {
  // ✅ FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does live field staff tracking work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Live tracking uses GPS to share real-time staff location updates at set intervals, visible to managers on the dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "Can I track task completion along with attendance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every site check-in is verified with GPS, timestamp, and photo, ensuring tasks are completed at the right place and time.",
        },
      },
      {
        "@type": "Question",
        name: "How does this improve payroll accuracy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Verified attendance and task logs reduce payroll errors, ensuring accurate payouts and compliance.",
        },
      },
      {
        "@type": "Question",
        name: "Is this solution useful for delivery, sales, or inspection teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It is designed for distributed teams like sales, logistics, delivery, and service staff.",
        },
      },
      {
        "@type": "Question",
        name: "Can reports be generated automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, monthly attendance & task completion reports can be downloaded in Excel or PDF.",
        },
      },
    ],
  };

  const faqs = [
    {
      question: "How does live field staff tracking work?",
      answer:
        "Live tracking uses GPS to share real-time staff location updates at set intervals, visible to managers on the dashboard.",
    },
    {
      question: "Can I track task completion along with attendance?",
      answer:
        "Yes, every site check-in is verified with GPS, timestamp, and photo, ensuring tasks are completed at the right place and time.",
    },
    {
      question: "How does this improve payroll accuracy?",
      answer:
        "Verified attendance and task logs reduce payroll errors, ensuring accurate payouts and compliance.",
    },
    {
      question:
        "Is this solution useful for delivery, sales, or inspection teams?",
      answer:
        "Absolutely. It is designed for distributed teams like sales, logistics, delivery, and service staff.",
    },
    {
      question: "Can reports be generated automatically?",
      answer:
        "Yes, monthly attendance & task completion reports can be downloaded in Excel or PDF.",
    },
  ];

  return (
    <div className="solutions-pages">
      {/* ✅ Meta SEO + FAQ Schema */}
      <Head>
        <title>
          Field Staff Tracking & Verified Attendance | Mobile GPS Attendance
        </title>
        <meta
          name="description"
          content="Track your field staff in real time with TimeWatch. GPS-based live tracking, task verification with photos, and automated reports for payroll & compliance."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div>
        {/* Hero Section */}

        <section className="bg-gray-50 relative overflow-hidden h-[400px] md:h-[550px]">
          <div className="absolute inset-0 left-0 top-0 w-full h-full">
            <div className="relative z-10 w-full h-[400px] md:h-[550px]">
              <Image
                src="/images/solutions/Field-Staff-Tracking.png"
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
            <h1>
              Field Staff Tracking & Verified Attendance Solution | TimeWatch
            </h1>
            <p>
              Live tracking empowers managers to monitor the exact location of
              field staff in real time, creating greater transparency and
              oversight for distributed teams. This feature is especially
              valuable for businesses with employees working outside the
              office—such as sales representatives, service technicians,
              delivery personnel, or property inspectors.
            </p>
          </div>
        </section>

        <div className="xl:flex container gap-8 mt-10">
          {/* main content */}
          <div className="flex-1">
            <section>
              <div className="relative z-10 w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                <Image
                  src="/images/solutions/sub/live-tracking.jpg"
                  alt="Consulting Hero"
                  fill
                  sizes="100"
                  className="object-cover w-full h-full"
                />
              </div>

              <h2 className="!mt-2">Live Tracking</h2>

              <ul>
                <li>
                  <strong>How It Works:</strong>Once an employee logs into the
                  mobile app and grants location permission, their device begins
                  sharing location data with the management dashboard
                  automatically. This happens at set intervals, like every 10 or
                  25 minutes, ensuring managers receive timely updates on each
                  staff member’s whereabouts throughout the workday.
                </li>
                <li>
                  <strong>Real-Life Example:</strong>Imagine a logistics company
                  with several delivery drivers responsible for different routes
                  across the city. With live tracking enabled, dispatch managers
                  can view each driver's location on a map at any given moment.
                  If a high-priority delivery request comes in, the manager
                  immediately knows which driver is nearby and can assign the
                  task efficiently. This reduces delays, improves service
                  response, and optimizes delivery routes—ultimately benefiting
                  both company performance and customer satisfaction.
                </li>
              </ul>

              <h2>Key Features and Benefits:</h2>
              <ul>
                <li>
                  Automatic Location Sharing: No manual check-ins required;
                  location updates are sent in the background without disrupting
                  employee workflow.
                </li>
                <li>
                  Customizable Intervals: Managers can set the frequency of
                  location updates (e.g., every 10, 15, or 25 minutes) based on
                  operational needs.
                </li>
                <li>
                  Enhanced Safety: Helps ensure employees are on their
                  designated routes or sites, and can be quickly located if an
                  emergency arises.
                </li>
                <li>
                  Operational Efficiency: Enables resource allocation and
                  coordination in real time, reducing idle time and improving
                  productivity.
                </li>
                <li>
                  Accountability: Deters time theft and unauthorized breaks,
                  fostering a culture of trust and responsibility among field
                  workers.
                </li>
                <li>
                  Historical Location Data: Stores route history and site visits
                  for future analysis, dispute resolution, and operational
                  planning.
                </li>
              </ul>
              <p className="text-secondary mt-4">
                Historical Location Data: Stores route history and site visits
                for future analysis, dispute resolution, and operational
                planning.
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-5 mb-2">
                Task-Based Field Staff Tracking with Verified Attendance
              </h2>
              <p>
                <strong>
                  Imagine a logistics company with several delivery drivers
                  responsible for different routes across the city. With live
                  tracking enabled, dispatch managers can view each driver's
                  location on a map at any given moment. If a high-priority
                  delivery request comes in, the manager immediately knows which
                  driver is nearby and can assign the task efficiently. This
                  reduces delays, improves service response, and optimizes
                  delivery routes—ultimately benefiting both company performance
                  and customer satisfaction.
                </strong>
              </p>

              <h3>(1) How It Works:</h3>
              <p>
                Managers assign specific tasks or site visits—such as visiting
                locations A, B, and C—to their field employees through a
                centralized platform. When the employee arrives at each
                designated location, they use the mobile application to mark
                their attendance. This attendance punch is verified with three
                key data points: the exact GPS location, the time of check-in,
                and a photo taken onsite as proof of presence.
              </p>
              <h3>(2) Real-Life Scenario:</h3>
              <p>
                Imagine a property inspection company that requires its
                inspectors to visit multiple client sites each day. Upon
                reaching each site (for example, Location A, B, and C), the
                inspector opens the mobile app and punches in. The app
                automatically captures the precise location via GPS, logs the
                timestamp, and prompts the inspector to take a photo of the
                property or work completed. This process ensures that the
                attendance record accurately confirms the inspector’s visit and
                presence.
              </p>

              <h3>(3) Benefits and Key Features:</h3>
              <ul>
                <li>
                  Accurate Location and Time Tracking: Each attendance mark is
                  tied to exact GPS coordinates and an accurate timestamp to
                  prevent any possibility of false check-ins from unauthorized
                  locations
                </li>
                <li>
                  Photo Authentication: Capturing a photo during punch-in adds
                  an additional layer of security and authenticity, deterring
                  fraudulent attendance claims.
                </li>
                <li>
                  Task Completion Visibility: Managers can easily track whether
                  assigned tasks or site visits have been completed at the
                  specified locations, ensuring accountability.
                </li>
                <li>
                  Comprehensive Monthly Reports: At month-end, detailed and
                  easy-to-understand reports provide insights into attendance
                  patterns, task completion rates, total hours worked, and
                  locations visited. These reports include automated
                  calculations that simplify payroll processing and performance
                  assessment.
                </li>
                <li>
                  Improved Workforce Productivity: With clear evidence of task
                  completion and attendance, organizations can identify
                  productivity trends, optimize field operations, and address
                  any inefficiencies promptly.
                </li>
                <li>
                  Streamlined Payroll and Compliance: Verified attendance and
                  work reports reduce payroll errors and ensure compliance with
                  labor regulations, enhancing organizational transparency.
                </li>
              </ul>
              <p>
                By integrating precise location tracking, task management, and
                photographic evidence, this feature revolutionizes how
                businesses manage their dispersed field workforce—driving
                accountability, improving operational efficiency, and enabling
                data-driven decision-making.
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
