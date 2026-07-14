import React from "react";
import { ChevronRight, Clock, Calendar, User } from "lucide-react";
import BlogList from "@/features/blog/components/BlogList";


export const metadata = {
  title: "Blog | TimeWatch Infocom",
  description:
    "Explore expert articles from TimeWatch Infocom on biometric systems, time attendance, access control, and security technology trends.",
};

const blogListPage = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and innovations in
            biometric technology
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
           
            <BlogList/>
          
        </div>
      </section>
    </div>
  );
};

export default blogListPage;
