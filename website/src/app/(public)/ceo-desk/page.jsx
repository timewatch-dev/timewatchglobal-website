import React from "react";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Shield,
  Globe,
  TrendingUp,
  Building2,
  Heart,
  Leaf,
  Phone,
  Mail,
  Quote,
  Eye,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title:
    "TimeWatch Infocom | Mr. Virendra Kumar Founder & CEO",
  description:
    "At TimeWatch, our mission is to simplify security through innovation – powered by technology and built on trust. We are committed to developing intelligent, efficient, and reliable solutions that redefine how organizations protect, manage, and connect",
     alternates: {
    canonical: "https://www.timewatchindia.com/ceo-desk",
  },
};

const CEODesk = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            From the CEO's Desk
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Legacy of Innovation & Excellence
          </p>
        </div>
      </section>

      {/* CEO Portrait & Quote */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Quote className="w-12 h-12 text-primary mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                "At TimeWatch, our mission is to simplify security through
                innovation – powered by technology and built on trust. We are
                committed to developing intelligent, efficient, and reliable
                solutions that redefine how organizations protect, manage, and
                connect."
              </blockquote>
              <div className="border-t-2 border-gray-200 pt-6">
                <h3 className="text-2xl font-bold text-[#6d6f72] mb-1">
                  Mr. Virendra Kumar
                </h3>
                <p className="text-primary font-semibold text-lg">
                  Founder & CEO
                </p>
                <p className="text-gray-600 mt-1">TimeWatch Infocom</p>
              </div>
            </div>
            <div className="rounded-full overflow-hidden">
              <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-8 border-gray-200">
                <Image
                  src={"/images/owner.jpg"}
                  fill
                  title="owner"
                  alt="owner"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO's Story - Message & Company Journey */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              Message from the CEO
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Message */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                It is an honor to address you as the CEO of TimeWatch. Since our
                founding in <span className="font-bold text-primary">2015</span>
                , TimeWatch Infocom has grown into a leading manufacturer and
                solutions provider in Security, Workforce Management, and HR
                Automation.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From our early beginnings, we set out to make workplaces
                smarter, safer, and more efficient through the power of
                technology. Today, our diverse portfolio includes solutions
                designed to meet the evolving needs of modern organizations.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Driven by innovation and excellence, our team continues to
                explore emerging technologies like{" "}
                <span className="font-semibold text-primary">
                  AI, IoT, and Vision Intelligence
                </span>
                , ensuring every TimeWatch solution delivers unmatched
                reliability, speed, and user experience.
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-gray-700 leading-relaxed font-medium">
                  At TimeWatch, we believe technology should not just secure
                  spaces but also{" "}
                  <span className="text-primary font-semibold">
                    empower people
                  </span>
                  . Our integrated HR and access solutions bridge the gap
                  between physical security and workforce efficiency, enabling
                  businesses to manage attendance, payroll, and compliance
                  seamlessly under one ecosystem.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                As we move forward, our focus remains steadfast: to transform
                complexity into simplicity and continue building trust through
                technology.
              </p>

              <p className="text-gray-700 font-semibold italic text-lg">
                Thank you for being part of the TimeWatch journey. Together, we
                will continue to shape the future of intelligent security and HR
                automation.
              </p>
            </div>

            {/* Right Column - Product Portfolio */}
            <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl md:p-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#6d6f72] mb-6">
                  Our Diverse Portfolio
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Inspection Systems", icon: Eye },
                    { name: "Entrance Control", icon: Shield },
                    { name: "Traffic & Parking Management", icon: Target },
                    { name: "Attendance & Access Control", icon: CheckCircle2 },
                    { name: "HR & Payroll Management", icon: Users },
                    { name: "Custom Software Solutions", icon: Cpu },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#b82c30] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-700 font-medium">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Statement */}
      {/* <section className="py-16 bg-gradient-to-br from-primary/10 to-[#6d6f72]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-4 border-primary">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#6d6f72]">
                Visionary Statement
              </h2>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed italic">
              "True innovation is not just about technology – it's about empowering businesses and people for a safer, smarter future."
            </blockquote>
            <p className="text-lg text-gray-600 mt-6 font-semibold">
              — Mr. Virendra Kumar
            </p>
          </div>
        </div>
      </section> */}

      {/* Looking Ahead - The Road Forward */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              The Road Forward
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-3xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                As we continue pioneering new solutions, our dedication to excellence and customer-centric innovation drives every milestone. We invite you—our clients, partners, and community—to be part of this journey as we shape the next generation of intelligent security and workforce management.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    icon: Shield,
                    title: "Innovation",
                    desc: "Leading with cutting-edge technology",
                  },
                  {
                    icon: Heart,
                    title: "Trust",
                    desc: "Building lasting partnerships",
                  },
                  {
                    icon: Globe,
                    title: "Excellence",
                    desc: "Delivering world-class solutions",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#b82c30] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-[#6d6f72] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#6d6f72] mb-6">
            Get in Touch with Us Today
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Connect with us to explore how TimeWatch can transform your
            organization's security and workforce management.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+971547770685"
              className="flex items-center space-x-2 bg-gradient-to-r from-primary to-[#b82c30] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>+971-54-777-0685</span>
            </a>
            <a
              href="mailto:nitin@timewatchuae.com"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#6d6f72] to-[#5a5c5f] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEODesk;
