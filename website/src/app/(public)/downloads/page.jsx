import React from "react";
import {
  Download,
  Monitor,
  Smartphone,
  Shield,
  Clock,
  Users,
  Database,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "TimeWatch Infocom | Downloads",
  description:
    "Download BiometricPro software solutions for time attendance, access control, and workforce management systems.",
      alternates: {
    canonical: "https://www.timewatchindia.com/downloads",
      }
};


const downloadPage = () => {
  const downloadData = [
    {
      title: "iDMS",
      icon: "/images/google-drive.png",
      url: "https://drive.google.com/file/d/10dIRiBqN37NcWN55AXAfm_WzTI1vePpk/view",
    },
    {
      title: "iAS",
      icon: "/images/google-drive.png",
      url: "https://drive.google.com/file/d/1OCLCQtvVzGjX52hVaXsTsh6CnSyFmCTa/view",
    },
    {
      title: "TimeWatch Access Control",
      icon: "/images/google-drive.png",
      url: "https://drive.google.com/file/d/12d-6KEwjnd-_vQJu-kgnXJ0iujodZA1j/view",
    },
    {
      title: "TimeWatch Access Contol SDK",
      icon: "/images/google-drive.png",
      url: "https://drive.google.com/file/d/1sjntsUBbB2mVTcRZWDkpY6Ziw_niCbaa/view",
    },
    {
      title: "TrueFace SDK",
      icon: "/images/google-drive.png",
      url: "https://drive.google.com/file/d/1sjntsUBbB2mVTcRZWDkpY6Ziw_niCbaa/view?usp=sharing",
    },
    {
      title: "Tams9.5",
      icon: "/images/google-drive.png",
      url: "https://drive.google.com/file/d/1Kcuqm9mMSI_XvLN1ZBcrNQZ81QG1fsFo/view",
    },
    {
      title: "TimeWatch Catalogue",
      icon: "/images/google-drive.png",
      url: "https://timewatch.co.in/docs/TimeWatchCatalogue.pdf",
    },
  ];

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Download Software
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Download the latest software to support and manage your business operations.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                {/* <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Free Trial Available
                </div> */}
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  24/7 Support
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Regular Updates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloadData.map((download, downloadIndex) => (
              <div
                key={downloadIndex}
                className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#d63438]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center gap-10"
              >
                <Image
                  src={download.icon}
                  width={50}
                  height={50}
                  alt="time watch software"
                  title="time watch software"
                />
                <h3 className="font-bold text-xl">{download?.title}</h3>

                <Button asChild>
                  <Link href={download?.url} className={"flex items-center"}>
                    <Download className="w-5 h-5" />
                    <span>Download Now</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 rounded-3xl p-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <Users className="w-16 h-16 text-[#d63438] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">
                Need Help Getting Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our technical support team is ready to assist you with
                installation, configuration, and any questions you may have
                about our software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="" asChild>
                 <Link href={'/contact'}>
                     Contact Support
                 </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default downloadPage;
