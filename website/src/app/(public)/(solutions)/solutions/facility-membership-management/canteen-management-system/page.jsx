import Image from "next/image";
import SolutionShell from "@/components/solutions/SolutionShell";
import { SolutionCard, SolutionMedia } from "@/components/solutions/SolutionBlocks";
import SolutionFaq from "@/components/solutions/SolutionFaq";
import Head from "next/head";

export const metadata = {
  title:
    "Canteen Management System in India | Employee Dining Automation | TimeWatch Infocom",
  description:
    "Automate canteen management with TimeWatch India. Biometric meal access, RFID, cashless dining & real-time reports for corporates, factories, hospitals & universities. Reduce wastage, save costs & improve satisfaction.",
  alternates: {
    canonical:
      "/solutions/facility-membership-management/canteen-management-system",
  },
};

const relatedPages = [
  {
    href: "/solutions/facility-membership-management/gym-management-solution",
    tag: "Solution",
    label: "Gym Management Solution",
  },
  {
    href: "/solutions/workforce-hr-solutions/cloud-attendance-payroll-software",
    tag: "Solution",
    label: "Cloud Attendance & Payroll Software",
  },
  {
    href: "/solutions/workforce-hr-solutions/geo-fencing-mobile-punch",
    tag: "Solution",
    label: "Geo-Fencing Mobile Punch",
  },
  {
    href: "/solutions/workforce-hr-solutions/field-staff-tracking-solution",
    tag: "Solution",
    label: "Field Staff Tracking Solution",
  },
  {
    href: "/how-does-an-attendance-machine-work",
    tag: "Guide",
    label: "How Does an Attendance Machine Work?",
  },
  {
    href: "/products",
    tag: "Product range",
    label: "All Products",
  },
];

export default function CanteenManagementSystem() {
  const faqs = [
    {
      question: "Can the system manage multiple shifts?",
      answer:
        "Yes. The TimeWatch Canteen Management System automatically works with multiple shifts and rosters, so employees on morning, evening, or night duty can access meals fairly and without duplication.",
    },
    {
      question: "Can contractors or visitors use the canteen?",
      answer:
        "Yes. Contractors and visitors can securely use the canteen through prepaid RFID cards or temporary access passes, ensuring transparency and proper billing.",
    },
    {
      question: "Can meal limits be set per employee?",
      answer:
        "Absolutely. You can configure daily or monthly meal limits per employee, which prevents overuse and ensures fair distribution among staff.",
    },
    {
      question: "Does the system help reduce food wastage?",
      answer:
        "Yes. Since it integrates with attendance data, the system predicts meal requirements and avoids over-preparation, helping reduce food wastage and costs.",
    },
    {
      question: "Can the canteen system integrate with payroll?",
      answer:
        "Yes. TimeWatch Canteen Management integrates directly with payroll, making it easy to calculate meal allowances or deductions automatically, saving HR and finance teams valuable time.",
    },
  ];

  // 🔒 Hidden SEO Schema FAQ (not shown on page)
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can the system manage multiple shifts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the TimeWatch Canteen Management System works seamlessly with multiple shifts and rosters, ensuring fair meal distribution for employees across all schedules.",
        },
      },
      {
        "@type": "Question",
        name: "Can contractors or visitors use the canteen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, contractors and visitors can securely use the canteen with prepaid RFID cards or temporary access passes managed by the TimeWatch system.",
        },
      },
      {
        "@type": "Question",
        name: "Can meal limits be set per employee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. The system allows daily or monthly meal limits to be configured per employee to prevent overuse and ensure fair distribution.",
        },
      },
      {
        "@type": "Question",
        name: "Does the system help reduce food wastage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, by linking with attendance data, the system predicts meal requirements and helps avoid over-preparation, reducing food wastage significantly.",
        },
      },
      {
        "@type": "Question",
        name: "Can the canteen system integrate with payroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, TimeWatch Canteen Management integrates with payroll to auto-calculate meal allowances or deductions, simplifying billing and accounting.",
        },
      },
    ],
  };
  return (
    <>
      {/* Meta Info & Schema FAQ */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />
      </Head>

      <SolutionShell
        heroSrc="/images/solutions/canteen-management-system.png"
        heroAlt="Canteen Management System"
        title="Canteen Management System for Corporates, Factories & Institutions in India"
        intro="Managing canteen operations in a growing organization is not easy. Paper coupons, manual registers, and cash counters often lead to long queues, food wastage, and misuse of facilities."
        related={relatedPages}
      >
        <SolutionCard>
          <SolutionMedia className="h-[260px] md:h-[420px]">
            <Image
              src="/images/solutions/sub/canteen-management.jpg"
              alt="Canteen Management"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </SolutionMedia>

          <h2>
            Transform Employee Dining with Smarter Canteen Management
          </h2>

          <p>
            TimeWatch’s <strong>Canteen Management System</strong> is
            designed for{" "}
            <strong>
              Indian corporates, factories, hospitals, and universities,
            </strong>{" "}
            where thousands of meals are served daily.{" "}
            <strong>
              By combining biometric authentication, RFID cards, cashless
              payments, and real-time reporting,
            </strong>{" "}
            we make dining simple, secure, and cost-effective for both
            employees and management.
          </p>

          <p>
            Whether it’s a{" "}
            <strong> factory in Pune with multiple shifts</strong>, a{" "}
            <strong>university in Delhi with thousands of students</strong>,
            or a{" "}
            <strong>
              corporate office in Bangalore with multiple cafeterias
            </strong>
            , our system ensures every meal is tracked, fair, and
            hassle-free.
          </p>
        </SolutionCard>

        <SolutionCard>
          <h2>Key Features & Real-World Use Cases</h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>Touchless & Secure Meal Access:</strong> Employees can
              use face recognition, fingerprint, or RFID cards to collect
              meals without coupons. <em>Example:</em> In an IT park in
              Gurugram, only authorized employees can access the cafeteria,
              reducing misuse and saving costs.
            </li>

            <li>
              <strong>Menu Scheduling & Multi-Shift Support:</strong>{" "}
              Supports 255 menu items and up to 9 meal slots per day
              (breakfast, lunch, dinner, snacks). <em>Example:</em> A
              factory in Chennai running 24x7 can easily manage different
              menus for day and night shifts.
            </li>

            <li>
              <strong>Cashless Transactions with Auto Recharge:</strong>{" "}
              Employees pay via UPI, prepaid wallet, or RFID card, with
              instant auto-recharge. <em>Example:</em> In a Delhi corporate
              office, staff recharge online and skip queues, making lunch
              breaks faster.
            </li>

            <li>
              <strong>Real-Time Tracking & Reports:</strong> Every
              transaction is recorded with user, time, and item details.{" "}
              <em>Example:</em> In a hospital in Hyderabad, HR tracks staff
              consumption separately from visitor meals to ensure
              transparency.
            </li>

            <li>
              <strong>Smart Food Planning & Waste Reduction:</strong> By
              syncing with attendance data, the system predicts the number
              of meals required daily. <em>Example:</em> A Gujarat factory
              reduced food wastage by 20% using attendance-linked
              forecasting.
            </li>

            <li>
              <strong>Integration with Payroll & HRMS:</strong> Meal
              allowances or deductions can be auto-calculated and synced
              with payroll. <em>Example:</em> In a Bangalore SME, contractor
              meals are deducted directly from invoices, saving admin
              effort.
            </li>
          </ul>
        </SolutionCard>

        <SolutionCard>
          <h3>Where Can It Be Used?</h3>
          <ul>
            <li>
              <strong>
                Corporate Offices & IT Parks
              </strong>{" "}
              - Quick, cashless meals without queues.
            </li>
            <li>
              <strong>Factories & Industrial Units</strong> - Handle
              thousands of meals across rotating shifts.
            </li>
            <li>
              <strong>Schools, Colleges & Universities</strong> - Fair and
              hygienic dining for students and staff.
            </li>
            <li>
              <strong>Hospitals & Clinics</strong> - Ensure 24x7 staff
              canteen availability with controlled access.
            </li>
            <li>
              <strong>Airports & Metro Stations</strong> - Simplify meal
              access for staff across large facilities.
            </li>
            <li>
              <strong>Government Buildings</strong> - Monitor subsidized
              canteen benefits with transparency.
            </li>
          </ul>
        </SolutionCard>

        <SolutionCard>
          <h3>Key Benefits</h3>
          <ul>
            <li>
              <strong>Faster Dining</strong> - Cuts
              waiting time by up to 40%
            </li>
            <li>
              <strong>Zero Misuse</strong> - Only authorized employees can
              redeem meals
            </li>
            <li>
              <strong>Accurate Reports</strong> - Prevents disputes with
              canteen contractors
            </li>
            <li>
              <strong>Cost Savings</strong> - Reduces wastage & manual
              errors
            </li>
            <li>
              <strong>Better Employee Satisfaction</strong> - Dining becomes
              smoother, fairer, and more enjoyable
            </li>
          </ul>
        </SolutionCard>

        <SolutionFaq faqs={faqs} />
      </SolutionShell>
    </>
  );
}
