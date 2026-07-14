import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Car,
  MapPin,
  Lock,
  Clock,
  ChevronRight,
  Dumbbell,
  Users,
  ShieldCheck,
  DoorClosed,
  Fingerprint,
} from "lucide-react";

export const menuItems = [
  {
    label: "Home",
    href: "/",
    type: "link",
  },
  // {
  //   label: "Solutions",
  //   type: "tabs",
  //   tabs: [
  //     {
  //       value: "attendance-management",
  //       label: "Attendance Management",
  //       icon: Clock,
  //       links: [
  //         {
  //           label: "Office & Field Attendance",
  //           href: "/solutions/attendance-management/office-&-field-attendance",
  //         },
  //         {
  //           label: "Mobile App with Geo-fencing",
  //           href: "/attendance-management/mobile-app-geo-fencing",
  //         },
  //         {
  //           label: "Shift & Payroll Integration",
  //           href: "/attendance-management/shift-payroll-integration",
  //         },
  //       ],
  //     },
  //     {
  //       value: "visitor-parking-management",
  //       label: "Visitor & Parking Management",
  //       icon: Car,
  //       links: [
  //         {
  //           label: "QR Code Based Visitor Access",
  //           href: "/visitor-parking/qr-code-visitor-access",
  //         },
  //         {
  //           label: "Vehicle Entry Logs",
  //           href: "/visitor-parking/vehicle-entry-logs",
  //         },
  //         {
  //           label: "Contractor / Vendor Management",
  //           href: "/visitor-parking/contractor-vendor-management",
  //         },
  //       ],
  //     },
  //     {
  //       value: "gym-facility-access",
  //       label: "Gym & Facility Access",
  //       icon: Dumbbell,
  //       links: [
  //         {
  //           label: "Member Check-in Integration",
  //           href: "/gym-facility/member-check-in",
  //         },
  //         {
  //           label: "Biometric Gate Control",
  //           href: "/gym-facility/biometric-gate-control",
  //         },
  //       ],
  //     },
  //     {
  //       value: "workforce-hrms",
  //       label: "Workforce HRMS",
  //       icon: Users,
  //       links: [
  //         {
  //           label: "Cloud HRMS Platform",
  //           href: "/hrms/cloud-platform",
  //         },
  //         {
  //           label: "Leave & Payroll Management",
  //           href: "/hrms/leave-payroll",
  //         },
  //         {
  //           label: "Timesheet & Appraisals",
  //           href: "/hrms/timesheet-appraisals",
  //         },
  //       ],
  //     },
  //     {
  //       value: "security-management",
  //       label: "Security Management",
  //       icon: ShieldCheck,
  //       links: [
  //         {
  //           label: "DFMD (Door Frame Metal Detectors)",
  //           href: "/security/dfmd",
  //         },
  //         {
  //           label: "Handheld Metal Detectors",
  //           href: "/security/handheld-metal-detectors",
  //         },
  //         {
  //           label: "X-Ray Baggage Scanners",
  //           href: "/security/xray-baggage-scanners",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    label: "Products",
    type: "tabs",
    tabs: [
      {
        value: "biometric-attendance-devices",
        label: "Biometric Attendance Devices",
        icon: Fingerprint,
        links: [
          {
            label: "Face Recognition Devices",
            href: "face-recognition-devices",
          },
          {
            label: "Fingerprint Devices",
            href: "fingerprint-devices",
          },
          {
            label: "IRIS Devices",
            href: "iris-devices",
          },
          {
            label: "Palm Recognition Devices",
            href: "palm-recognition-devices",
          },
        ],
      },
      {
        value: "entrance-control",
        label: "ENTRANCE CONTROL",
        icon: DoorClosed,
        links: [
          {
            label: "QR Code Based Visitor Access",
            href: "/visitor-parking/qr-code-visitor-access",
          },
          {
            label: "Vehicle Entry Logs",
            href: "/visitor-parking/vehicle-entry-logs",
          },
          {
            label: "Contractor / Vendor Management",
            href: "/visitor-parking/contractor-vendor-management",
          },
        ],
      },
      {
        value: "gym-facility-access",
        label: "Gym & Facility Access",
        icon: Dumbbell,
        links: [
          {
            label: "Member Check-in Integration",
            href: "/gym-facility/member-check-in",
          },
          {
            label: "Biometric Gate Control",
            href: "/gym-facility/biometric-gate-control",
          },
        ],
      },
      {
        value: "workforce-hrms",
        label: "Workforce HRMS",
        icon: Users,
        links: [
          {
            label: "Cloud HRMS Platform",
            href: "/hrms/cloud-platform",
          },
          {
            label: "Leave & Payroll Management",
            href: "/hrms/leave-payroll",
          },
          {
            label: "Timesheet & Appraisals",
            href: "/hrms/timesheet-appraisals",
          },
        ],
      },
      {
        value: "security-management",
        label: "Security Management",
        icon: ShieldCheck,
        links: [
          {
            label: "DFMD (Door Frame Metal Detectors)",
            href: "/security/dfmd",
          },
          {
            label: "Handheld Metal Detectors",
            href: "/security/handheld-metal-detectors",
          },
          {
            label: "X-Ray Baggage Scanners",
            href: "/security/xray-baggage-scanners",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    type: "link",
  },
  {
    label: "Downloads",
    href: "/downloads",
    type: "link",
  },
  // {
  //   label: "Blogs",
  //   href: "/blog",
  //   type: "link",
  // },
  {
    label: "Contact",
    href: "/contact",
    type: "link",
  },
  {
    label: "CEO's DESK",
    href: "/ceo-desk",
    type: "link",
  },
];

export const solutions = [
  {
    category: "Workforce & HR Solutions",
    categoryUrl: "workforce-hr-solutions",
    subCategories: [
      {
        subCategory: "Cloud Attendance & Payroll Software",
        subCategoryUrl: "cloud-attendance-payroll-software",
        subCategoryImage: "/images/solutions/sub/update-software.jpg"
      },
      {
        subCategory: "geo-fencing-mobile-punch",
        subCategoryUrl: "geo-fencing-mobile-punch",
        subCategoryImage: "/images/solutions/sub/for-geo-fencing.jpg"


      },
      {
        subCategory: "Field Staff Tracking Solution",
        subCategoryUrl: "field-staff-tracking-solution",
        subCategoryImage: "/images/solutions/sub/live-tracking.jpg"

      },
    ],
  },
   {
    category: "Security Screening Solutions",
    categoryUrl: "security-screening-solutions",
    subCategories: [
      {
        subCategory: "Access Control System Terminals",
        subCategoryUrl: "access-control-system-terminals",
        subCategoryImage: "/images/solutions/access-control.png"
      }

    ],
  },
  {
    category: "Facility & Membership Management",
    categoryUrl: "facility-membership-management",
    subCategories: [
      {
        subCategory: "Canteen Management System",
        subCategoryUrl: "canteen-management-system",
        subCategoryImage: "/images/solutions/sub/canteen-management.jpg"

      },
      {
        subCategory: "Gym Management Solution",
        subCategoryUrl: "gym-management-solution",
        subCategoryImage: "/images/solutions/Gym-Management-Solution.png"

      }
    ],
  },
    {
    category: "Visitor & Access Management",
    categoryUrl: "visitor-access-management",
    subCategories: [
      {
        subCategory: "Crowd Management Solutions  Turnstile Gates & Flap Barriers",
        subCategoryUrl: "crowd-management-solutions-turnstile-gates-flap-barriers",
        subCategoryImage: "/images/solutions/crowd.png"
      },
      {
        subCategory: "What Is a Visitor Management System",
        subCategoryUrl: "what-is-a-visitor-management-system",
         subCategoryImage: "/images/solutions/visitor-management-system.png"
      },
    ],
  },
  {
    category: "Inspection Detection Solutions",
    categoryUrl: "inspection-detection-solutions",
    subCategories: [
      {
        subCategory: "Hand Held Metal Detector TW-HH100",
        subCategoryUrl: "hand-held-metal-detector-tw-hh100",
        subCategoryImage: "/images/solutions/Hand-Held-Metal-Detector.png"

      },
      {
        subCategory: "Walk Through Metal Detector",
        subCategoryUrl: "walk-through-metal-detector",
         subCategoryImage: "/images/solutions/Walk-Through-Metal-Detector.png"
      },
      
      {
        subCategory: "Advanced X-Ray Baggage Screening",
        subCategoryUrl: "advanced-x-ray-baggage-screening",
        subCategoryImage: "/images/solutions/baggage-scanner2.png"
      },
      // {
      //   subCategory: "DFMD (Door Frame Metal Detectors)",
      //   subCategoryUrl: "dfmd-door-frame-metal-detectors",
      //   subCategoryImage: "/images/solutions/dfmd.png"
      // },
      {
        subCategory: "Explosive & Narcotics Detector",
        subCategoryUrl: "explosive-narcotics-detector",
        subCategoryImage: "/images/solutions/sub/narcotics-breaf.jpg"
       
      },
      {
        subCategory: "TimeScan Cargo & Vehicle Inspection System",
        subCategoryUrl: "timescan-cargo-vehicle-inspection-system",
        subCategoryImage: "/images/solutions/sub/cargo-canner.jpg"
      
      },
      {
        subCategory: "Under Vehicle Surveillance System (UVSS) – TW3300",
        subCategoryUrl: "under-vehicle-surveillance-system-uvss-tw3300",
          subCategoryImage: "/images/solutions/sub/uvss.jpg"
         
      },
    ],
  },
 

];