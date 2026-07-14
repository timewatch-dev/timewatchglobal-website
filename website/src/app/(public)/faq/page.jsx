"use client"
import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search,
  Fingerprint,
  Shield,
  Cloud,
  Lock,
  Car,
  Camera,
  Monitor,
  FileCheck,
  Globe,
  Users
} from 'lucide-react';



const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const faqCategories = [
    {
      category: "Software and Cloud Solutions",
      icon: Cloud,
      color: "from-primary to-[#b82c30]",
      questions: [
        {
          q: "What software solutions does TimeWatch offer?",
          a: "TimeWatch provides a complete suite of automation software that includes Visitor Management, Parking Management, Canteen Management, Cloud Attendance, Payroll, and Access Control. All systems are cloud-ready and integrate easily with our biometric and security devices."
        },
        {
          q: "What is the Cloud Attendance System?",
          a: "The Cloud Attendance System connects biometric devices like Face, Fingerprint, Iris, and Palm to a centralized dashboard. It enables real-time attendance tracking, reporting, and analytics that can be accessed anytime and from anywhere."
        },
        {
          q: "Does TimeWatch include Payroll Integration?",
          a: "Yes. TimeWatch Cloud Attendance Software is integrated with payroll so you can automate attendance, overtime, and salary calculations for your workforce."
        },
        {
          q: "What is Permission-Based Access Control?",
          a: "Permission-Based Access Control allows you to set access rights by department, role, or schedule. Only authorized individuals can access specific zones or doors, ensuring better security and control."
        },
        {
          q: "Can TimeWatch software integrate with HRMS or ERP platforms?",
          a: "Yes. TimeWatch supports integration with HRMS and ERP systems such as SAP, Oracle, Zoho, and Tally to simplify HR and payroll workflows."
        }
      ]
    },
    {
      category: "Biometric Attendance Devices",
      icon: Fingerprint,
      color: "from-[#6d6f72] to-[#5a5c5f]",
      questions: [
        {
          q: "What types of biometric attendance devices does TimeWatch offer?",
          a: "TimeWatch offers a wide range of biometric devices including Face, Fingerprint, Iris, and Palm Recognition Attendance Systems. These devices are compatible with our cloud platform and can be used for both attendance and access control."
        },
        {
          q: "What is Palm Recognition Attendance?",
          a: "Palm Recognition Attendance identifies users using palm vein and surface texture. It is completely contactless, hygienic, and highly accurate."
        },
        {
          q: "What are the benefits of Face, Fingerprint, Iris, and Palm Devices?",
          a: "Each technology offers unique advantages:\n• Face Recognition: Fast, touch-free, and AI-driven\n• Fingerprint Recognition: Reliable and cost-effective\n• Iris Recognition: Extremely precise for secure environments\n• Palm Recognition: Fully contactless and hygienic"
        },
        {
          q: "Are these devices portable?",
          a: "Yes. TimeWatch offers Android-based portable biometric attendance devices with 4G SIM, Wi-Fi, and long battery life. They are ideal for schools, construction sites, and field operations."
        },
        {
          q: "Do TimeWatch devices support real-time cloud monitoring?",
          a: "Yes. All biometric devices connect to TimeWatch Cloud Software, allowing real-time attendance and performance tracking from web or mobile."
        }
      ]
    },
    {
      category: "Access Control and Security Solutions",
      icon: Shield,
      color: "from-primary to-[#b82c30]",
      questions: [
        {
          q: "What is an Access Control System?",
          a: "Access Control Systems manage and verify entry or exit through biometric authentication, RFID cards, or PINs, ensuring secure and controlled access."
        },
        {
          q: "What are Permission-Based Access Controls?",
          a: "Permission-based controls allow administrators to define who can access which zone and at what time. This ensures proper movement tracking and enhanced workplace security."
        },
        {
          q: "What types of access control hardware does TimeWatch provide?",
          a: "TimeWatch provides door controllers, EM locks, push buttons, readers, and complete door access systems integrated with attendance software."
        }
      ]
    },
    {
      category: "Parking, Boom Barriers and Vehicle Automation",
      icon: Car,
      color: "from-[#6d6f72] to-[#5a5c5f]",
      questions: [
        {
          q: "What is the Parking Management System?",
          a: "The Parking Management System automates vehicle entry and exit using RFID cards, ANPR Cameras, and Boom Barriers."
        },
        {
          q: "What is an ANPR Camera?",
          a: "ANPR stands for Automatic Number Plate Recognition. It detects and records vehicle license plates automatically for secure and contactless parking entry."
        },
        {
          q: "Can the Parking System integrate with Access Control and Attendance?",
          a: "Yes. TimeWatch Parking, Access Control, and Attendance Systems can work together on a single platform for centralized monitoring."
        },
        {
          q: "Does TimeWatch offer Boom Barriers and P-Gates?",
          a: "Yes. TimeWatch provides Boom Barriers, Swing Gates, Flap Barriers, Turnstiles, and P-Gates designed for reliable access automation and integrated security."
        }
      ]
    },
    {
      category: "Security Screening and Detection",
      icon: Camera,
      color: "from-primary to-[#b82c30]",
      questions: [
        {
          q: "What is a DFMD and X-Ray Baggage Scanner?",
          a: "A DFMD (Door Frame Metal Detector) and X-Ray Baggage Scanner detect metal objects and hidden items in luggage for enhanced security screening."
        },
        {
          q: "Where are these security systems used?",
          a: "They are commonly used in airports, offices, schools, factories, metro stations, and government buildings."
        }
      ]
    },
    {
      category: "Certifications and Compliance",
      icon: FileCheck,
      color: "from-[#6d6f72] to-[#5a5c5f]",
      questions: [
        {
          q: "Are TimeWatch security products certified?",
          a: "Yes. All TimeWatch solutions, including Time Attendance and Access Control, Entrance Control, and Software and Applications, are having all required certifications from respective authorities to meet performance and safety standards. Each product is tested for reliability, durability, and compliance to ensure long-term operational excellence."
        }
      ]
    },
    {
      category: "General Information",
      icon: Globe,
      color: "from-primary to-[#b82c30]",
      questions: [
        // {
        //   q: "Is TimeWatch available across India?",
        //   a: "Yes, TimeWatch provides biometric attendance, access control, and security solutions across all Indian states and major cities. We serve organizations in IT, manufacturing, education, healthcare, logistics, retail, and government sectors."
        // },
        {
          q: "Which regions does TimeWatch serve?",
          a: "TimeWatch operates across India (Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, Ahmedabad, Pune), the UAE, Saudi Arabia, Oman, Qatar, and parts of Europe."
        },
        {
          q: "Which industries does TimeWatch serve?",
          a: "TimeWatch serves IT parks, government offices, hospitals, schools, factories, airports, public transport, retail, and commercial buildings."
        },
        {
          q: "How can I get TimeWatch devices or request a demo?",
          a: "You can contact TimeWatch through our official websites www.timewatchindia.com or www.timewatchuae.com to request a demo, product quotation, or consultation for your organization's security, attendance, or access control requirements. You can also reach us at +91 95999 53923 or email sales@timewatchindia.com."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item =>
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers about TimeWatch biometric attendance, access control, parking management, and security solutions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none text-gray-700 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#6d6f72]">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <div
                        key={questionIndex}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-[#6d6f72] pr-4">
                            {item.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                No results found for "{searchTerm}". Try different keywords.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#6d6f72] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you find the perfect solution for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971547770685"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-[#b82c30] transition-colors shadow-lg"
            >
              Call +971-54-777-0685
            </a>
            <a
              href="mailto:nitin@timewatchuae.com"
              className="px-8 py-4 bg-[#6d6f72] text-white font-semibold rounded-lg hover:bg-[#5a5c5f] transition-colors shadow-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;