import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building,
  Headphones,
  Globe,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HomePageForm from "@/components/HomePageForm";

export const metadata = {
  title: "Contact Us | TimeWatch Infocom",
  description:
    "Get in touch with TimeWatch Infocom for product inquiries, support, or partnership opportunities. We're here to help with secure and smart tech solutions.",
};

// Address data array (you can move this to props or external JSON later)
const addresses = [
  {
    id: 1,
    title: "Bangalore Office",
    name: "Mr. Lalith",
    email: "lalith@timewatchindia.com",
    contact: "+91 95999 74776",

    lines: [
      "No.28, 5thAcross, Marenhalli JP Nagar, 2nd Phase, Bangalore-560078",
    ],
  },
  {
    id: 2,
    title: "Ahmedabad Office",
    contact: "+91 96676 49888",
    name: "Anshika Jain",
    email: " Anshika@timewatchindia.com",
    lines: [
      "Office No. 102, Platinum Plaza, Nr Judges Bungalow Road, Bodakdev, Ahmedabad – 380054",
    ],
  },
  {
    id: 3,
    title: "Mumbai Residence",
    name: "Amit Patel",
    contact: "+91 84484 85472",
    email: "Amit1@timewatchindia.com",
    lines: ["Suburban State: Maharashtra PIN Code: 400069"],
  },
  {
    id: 4,
    title: "Kolkata (Godrej Waterside)",
    name: "Smriti Tiwari",
    contact: "+91 8448485473",
    lines: ["North Twenty Four Parganas, State: West Bengal PIN Code: 700091"],
  },
];


const Globaladdresses = [
   {
    id: 12,
    title: "India (Head Office)",
    name:"Ms. Priyanka",
    email:"sales@timewatcharabia.com",
    contact:"+91-95999 53923",
    
    lines: [
      "D-162, Pocket D, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020, India",
    ],
  },
     {
    id: 12,
    title: "Saudi Arabia",
    name:"Mr. Hibban Mansoor",
    email:"sales@timewatcharabia.com",
    contact:"+966 53 915 7364",
    
    lines: [
      "Building No. 7425, Secondary No. 2188 Al Olaya Street, Al Woroud District, Riyadh – 12253 Kingdom of Saudi Arabia",
    ],
  },
];

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+971-54-777-0685"],
      subtitle: "Support - 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["nitin@timewatchuae.com"],
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Building no. 08R-SH Saih Shuaib2, Plot no.176-0 Dubai"],
      // subtitle: "Main office / Visit Us",
    },
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   details: [
    //     "Monday - Friday: 9:00 AM - 6:00 PM",
    //     "Saturday: 10:00 AM - 4:00 PM",
    //   ],
    //   subtitle: "Sunday: Closed",
    // },
  ];

  const services = [
    {
      icon: Headphones,
      title: "Technical Support",
      description:
        "Get help with installation, configuration, and troubleshooting",
    },
    {
      icon: Building,
      title: "Business Inquiries",
      description: "Partnership opportunities and enterprise solutions",
    },
    {
      icon: Globe,
      title: "Sales Support",
      description: "Product demonstrations and pricing information",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#d63438] rounded-full flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Have questions about our biometric solutions? We're here to help you
            find the perfect solution for your business needs.
          </p>

          {/* Quick Contact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Phone className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">+971-54-777-0685</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Mail className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">nitin@timewatchuae.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <MapPin className="w-12 h-12 text-[#d63438] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                Head Office / Visit Us
              </h3>
              <p className="text-gray-600">
                D-162, Okhla Industrial Area Phase I, New Delhi, 110020
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16" id="contactPageSection">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#d63438] to-[#6d6f72] px-8 py-4 text-center">
                <h2 className="text-[1.5rem] lg:text-3xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-white/90">
                  We'd love to hear from you. Fill out the form below.
                </p>
              </div>

              <div className="p-4 lg:p-8">
                {/* {submitStatus === "success" && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                      <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )} */}

                {/* {submitStatus === "error" && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800">Failed to Send Message</h4>
                      <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )} */}

                {/* <ContactForm /> */}
                <HomePageForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#6d6f72] mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to transform your business with cutting-edge Biometric & Security Solutions ? Our team of experts is here to guide you every step of the way.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col md:grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#d63438] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-gray-500 mt-2">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#6d6f72] mb-8 text-center">
              Our Global Presence
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Globaladdresses.map((addr) => (
              <div
                key={addr.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col"
              >
               
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-[#d63438] mr-2" />
                  <h3 className="text-xl font-semibold text-[#6d6f72]">
                    {addr.title}
                  </h3>
                </div>

               
                <address className="not-italic text-gray-700 mb-4 space-y-1 pl-1">
                  {addr.lines.map((line, i) => (
                    <div key={i} className="flex items-start">
                      <MapPin className="w-4 h-4 text-[#6d6f72] mt-1 mr-2 flex-shrink-0" />
                      <span>{line}</span>
                    </div>
                  ))}
                </address>

                
                <div className="mt-auto space-y-2 text-gray-600">
                  {addr.name && (
                    <p className="flex items-center">
                      <Building className="w-4 h-4 text-[#d63438] mr-2" />
                      <span className="font-bold text-black">
                        Contact Person:&nbsp;
                      </span>{" "}
                      {addr.name}
                    </p>
                  )}
                  {addr.contact && (
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 text-[#d63438] mr-2" />
                      <span className="font-bold text-black">
                        Phone:&nbsp;
                      </span>{" "}
                      {addr.contact}
                    </p>
                  )}
                  {addr.email && (
                    <p className="flex items-center">
                      <Mail className="w-4 h-4 text-[#d63438] mr-2" />
                      <span className="font-bold text-black">
                        Email:&nbsp;
                      </span>{" "}
                      {addr.email}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#6d6f72] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-3">
                What is the typical response time?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent technical support, please call us
                directly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-3">
                Do you provide on-site demonstrations?
              </h3>
              <p className="text-gray-600">
                Yes, we offer on-site product demonstrations for qualified
                prospects. Contact us to schedule a demo at your location.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-3">
                What support do you offer after purchase?
              </h3>
              <p className="text-gray-600">
                We provide comprehensive technical support, training, and
                maintenance services to ensure your biometric systems operate
                smoothly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#6d6f72] mb-3">
                Can you customize solutions for our needs?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in creating tailored biometric
                solutions that meet your specific business requirements and
                integration needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#d63438] to-[#6d6f72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let’s discuss how our access control and security solutions can improve your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#d63438] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +971-54-777-0685

            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#d63438] transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="hidden md:inline">Email: </span>{" "}
              nitin@timewatchuae.com
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
