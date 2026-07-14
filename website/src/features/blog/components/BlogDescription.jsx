import React from "react";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import axiosInstance from "@/lib/axiosInstance";

// ---------- Server-side Data Fetch -----------
async function getBlog(slug) {
  try {
    const res = await axiosInstance.get(`/blog/slug/${slug}`, {
      headers: { "Cache-Control": "no-store" },
    });
    return res.data;
  } catch (err) {
    return null;
  }
}

async function getLatestBlogs() {
  try {
    const res = await axiosInstance.get(`/blog`, {
      headers: { "Cache-Control": "no-store" },
    });
    return res.data;
  } catch (err) {
    return [];
  }
}

// ---------- SEO META (SSR) ----------
export async function generateMetadata({ params }) {
  const blog = await getBlog(params.slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.featuredImage }],
    },
  };
}

// ---------- PAGE COMPONENT ----------
const BlogPage = async ({ params }) => {
  const blog = await getBlog(params.slug);
  const latestBlogs = await getLatestBlogs();

  if (!blog) {
    return (
      <div className="container py-24">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-[#d63438] hover:text-[#b82c30] font-medium flex items-center mb-6"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-[#d63438] text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
              {blog.mainCategory}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6 max-w-4xl">
            {blog.title}
          </h1>

          <div className="flex items-center text-gray-600 mb-8">
            <User className="w-5 h-5 mr-2" />
            <span className="mr-4">Admin</span>

            <Calendar className="w-5 h-5 mr-2" />
            <span className="mr-4">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>

            <Clock className="w-5 h-5 mr-2" />
            <span>2 min read</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-12 gap-x-10">
          {/* Content */}
          <div className="col-span-9">
            <div className="prose prose-lg max-w-none">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div
                className="text-gray-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* Sidebar Latest Posts */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-red-100 sticky top-28">
              <h3 className="text-xl font-bold text-[#6d6f72] mb-6">
                Latest Posts
              </h3>

              <div className="space-y-4">
                {latestBlogs.slice(0, 4).map((item) => (
                  <Link
                    key={item._id}
                    href={`/blog/${item.slug}`}
                    className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0"
                  >
                    <img
                      src={item.featuredImage}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />

                    <div className="flex-1">
                      <h4 className="font-medium text-[#6d6f72] text-sm leading-tight mb-1 hover:text-[#d63438] cursor-pointer">
                        {item.title}
                      </h4>

                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
