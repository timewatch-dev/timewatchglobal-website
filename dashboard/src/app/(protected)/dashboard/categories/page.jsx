"use client";

import React from "react";
import StaticBreadcrumb from "@/components/DynamicBreadcrumb";
import CategoryManager from "@/features/categories/components/CategoryManager";
import CategoryTable from "@/features/categories/components/CategoryTable";

export default function CategoriesPage() {
  return (
    <div className="p-6">
      <StaticBreadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Categories" },
        ]}
      />
      <h1 className="font-bold text-2xl text-foreground mt-2 mb-6">
        Manage Categories
      </h1>
      <CategoryManager />

      <h2 className="font-bold text-lg text-foreground mt-8 mb-3">All Categories</h2>
      <CategoryTable />
    </div>
  );
}
