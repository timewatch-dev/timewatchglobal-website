import React from "react";
import { Users, Award, Globe, TrendingUp, Shield, CheckCircle } from "lucide-react";

// Note: In Next.js, replace this with: import Image from "next/image";
const Image = ({ src, alt, className, width, height }) => (
  <img src={src} alt={alt} className={className} width={width} height={height} />
);

const ClientsPage = () => {
  // Generate array of 60 client images
  const clients = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    image: `/images/clients/corporate-client/${i + 1}.jpg`,
    alt: `Corporate Client ${i + 1}`
  }));

  const stats = [
    { icon: Users, value: "10,000+", label: "Satisfied Clients" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "9+", label: "Years Experience" },
    { icon: TrendingUp, value: "99%", label: "Client Retention" }
  ];

  const sectors = [
    { name: "Corporate & IT Parks", count: "2,500+" },
    { name: "Healthcare & Hospitals", count: "1,800+" },
    { name: "Educational Institutions", count: "1,200+" },
    { name: "Government & PSUs", count: "900+" },
    { name: "Manufacturing & Warehouses", count: "1,500+" },
    { name: "Retail & Commercial", count: "2,100+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500/10 to-gray-600/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6">
            Our Clients
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by Leading Organizations Across Industries and Geographies
          </p>
        </div>
      </section>






      {/* Corporate Clients Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
              Our Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud to serve industry leaders and innovators
            </p>
          </div> */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-500/20"
              >
                <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={client.image}
                    alt={client.alt}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-500/10 to-gray-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            Join Our Growing Family
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience world-class biometric and security solutions trusted by thousands of organizations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl">
              Request a Demo
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200 hover:border-red-500">
              Contact Sales
            </button>
          </div>
          <div className="mt-8 text-gray-600">
            <p className="font-medium">📞 +91 95999 53923</p>
            <p>✉️ sales@timewatchindia.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;