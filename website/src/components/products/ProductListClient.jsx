// ProductListClient.jsx (Must have "use client"; at the top)
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ProductFilter from "@/components/ProductFilter";
import { productCategories } from "@/data/products";
import FilterContent from "@/components/FilterContent";
import axiosInstance from "@/lib/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Funnel, X } from "lucide-react";

// --- Presentation Component: ProductSkeleton ---
const ProductSkeleton = () => {
  // ... (Your existing ProductSkeleton code)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border. bg-white p-4 shadow-sm space-y-3"
        >
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default function ProductListClient({ cat, subCat, children }) {
  const [filterProd, setFilterProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [phoneFilter, setPhoneFilter] = useState(false);

  const sidebarRef = useRef(null);

  // Unused state variables removed (category, subCategory) as they come from props
  // const [category, setCategory] = useState(cat); // Can initialize from props if needed
  // const [subCategory, setSubCategory] = useState(subCat);

  // Unified function to fetch products based on URL parameters (from Server Component props)
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    let url = "/product";

    if (cat && subCat) {
      url = `/product/${cat}/${subCat}`;
    } else if (cat) {
      url = `/product/${cat}`;
    }

    try {
      const res = await axiosInstance.get(url);
      const prod = Array.isArray(res.data)
        ? res.data
        : res.data?.products || [];
      setFilterProd(prod.filter((p) => p.status === "published"));
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setFilterProd([]);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  }, [cat, subCat]); // Dependencies are the URL params passed from the Server Component

  // Unified function for search
  const runSearch = useCallback(async () => {
    if (searchQuery.length === 0) {
      fetchProducts(); // Fallback to category fetch if search is cleared
      return;
    }

    setLoading(true);
    try {
      const searchRes = await axiosInstance.get(
        `/product/search?title=${searchQuery}`
      );
      const searchProds = searchRes?.data?.products || [];
      setFilterProd(searchProds.filter((p) => p.status === "published"));
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setFilterProd([]);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  }, [searchQuery, fetchProducts]);

  // 1. Initial/Category/Subcategory Fetch Effect
  useEffect(() => {
    if (searchQuery.length === 0) {
      fetchProducts();
    }
  }, [searchQuery.length, fetchProducts]);

  // 2. Search Effect
  useEffect(() => {
    if (searchQuery.length > 0) {
      runSearch();
    }
  }, [searchQuery, runSearch]);

  // 3. UI/Sidebar Effects
  useEffect(() => {
    // Close sidebar on category change (which re-renders this component via URL change)
    setPhoneFilter(false);
  }, [cat, subCat]); // Use the props for dependencies

  useEffect(() => {
    // Handle outside click for sidebar
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setPhoneFilter(false);
      }
    }

    if (phoneFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [phoneFilter]);

  return (
    <>
      {/* Search Bar and Mobile Filter Toggle */}
      <div className="flex justify-end gap-x-2 mb-3 relative">
        <div className="relative w-full md:max-w-[260px] h-[38px]">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:max-w-[260px] h-[38px] pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter toggle button for mobile/tablet */}
        <div className="flex justify-end xl:hidden">
          <button
            onClick={() => setPhoneFilter(!phoneFilter)}
            className="p-2 rounded-sm border shadow-sm hover:bg-gray-100 active:scale-95 transition h-[38px]"
            aria-label="Toggle Filter"
          >
            <Funnel className="w-5 h-5 text-secondary" />
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="xl:flex gap-8">
        {/* Left Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-[68px] left-0 z-20 lg:block transform transition-transform xl:sticky xl:top-[6.2rem] xl:translate-x-0 duration-700 ease-in-out h-[calc(100vh-68px)] bg-white
            ${phoneFilter ? "translate-x-0" : "-translate-x-[101%]"}`}
        >
          {/* ProductFilter is rendered here, passing the category/subcategory from Server props */}
          <ProductFilter
            productCategories={productCategories}
            cat={cat}
            subCat={subCat}
            // Passing dummy setters as they're not needed for routing logic in this client component
            setCat={() => {}}
            setSubCat={() => {}}
          />
        </div>

        {/* Product Content Area */}
        <div className="flex-1 space-y-4">
          {loading ? (
            <ProductSkeleton />
          ) : filterProd.length > 0 ? (
            <div className="transition-opacity duration-500 opacity-100">
              <FilterContent filterProducts={filterProd} />
            </div>
          ) : (
            <div className="py-10 text-center text-gray-500">
              No products found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </>
  );
}