"use client";

import { useBlogStore } from "@/features/blog/store/useBlogStore";
import React, { useEffect } from "react";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";
import Link from "next/link";

const BlogList = () => {
  const { getAllBlog, blogs } = useBlogStore();

  useEffect(() => {
    getAllBlog(); 
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs?.length > 0 &&
        blogs.map((blog) => (
          <article
            key={blog._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="h-48 bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 relative">
            {
              console.log("blog.featuredImage", blog.featuredImage)
            }
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#d63438] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {blog.mainCategory}
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              {/* META */}
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>2 min read</span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-[#6d6f72] mb-3 line-clamp-2">
                {blog.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.description}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Admin</span>
                </div>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-[#d63438] hover:text-[#b82c30] font-medium flex items-center"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
};

export default BlogList;
