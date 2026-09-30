"use client";

import React, { useEffect, useState } from "react";
import DynamicBreadcrumb from "@/components/shared/DynamicBreadcrumb";
import BlogForm from "@/features/blog/components/BlogForm";
import { useBlogStore } from "@/features/blog/store/useBlogStore";

export default function EditBlogPage({ params }) {
  const { id } = React.use(params); // ✅ FIX HERE
  const [blog, setBlog] = useState(null);

  const { getBlogBySlug } = useBlogStore();

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await getBlogBySlug(id);
        setBlog(data?.blog);
      } catch (err) {
        console.log("Fetch blog error:", err);
      }
    }

    if (id) fetchBlog();
  }, [id, getBlogBySlug]);

  return (
    <div className="p-4">
      <DynamicBreadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Blog", href: "/blog" },
          { label: "Edit" },
        ]}
      />

      <h1 className="mb-3 font-semibold text-lg">Edit Blog</h1>

      {blog ? <BlogForm mode="edit" blog={blog} /> : <p>Loading...</p>}
    </div>
  );
}
