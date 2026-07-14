"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import ProductFilter from "@/components/ProductFilter";
import { productCategories } from "@/data/products";
import FilterContent from "@/components/FilterContent";
import axiosInstance from "@/lib/axiosInstance";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Funnel, X } from "lucide-react";

// --- Presentation Component: ProductSkeleton (Client or Server) ---
// Kept in the same file for simplicity as it's small, but could be a separate file.
const ProductSkeleton = () => {
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

// --- Presentation Component: SearchBar (Client Component) ---
const SearchBar = ({ searchQuery, setSearchQuery, phoneFilter, setPhoneFilter }) => (
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
);


// --- Main Client Component: CatLayout ---
export default function CatLayout({ children }) {
  const [filterProd, setFilterProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [phoneFilter, setPhoneFilter] = useState(false);

  // Unused state variables removed for simplicity/cleanliness
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const sidebarRef = useRef(null);
  const { cat, subCat, slug } = useParams();

  // Unified function to fetch products based on URL parameters
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    let url = "/product"; // default → all products

    if (cat && subCat && !slug) {
      url = `/product/${cat}/${subCat}`; // category/subcategory listing
    } else if (cat && !slug) {
      url = `/product/${cat}`; // category listing
    }

    try {
      const res = await axiosInstance.get(url);
      console.log("resresres url", res)
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
  }, [cat, subCat, slug]);

  // Unified function for search
  const runSearch = useCallback(async () => {
    if (searchQuery.length === 0) {
      // If search query is cleared, re-fetch products based on current category
      fetchProducts();
      return;
    }

    setLoading(true);
    try {
      const searchRes = await axiosInstance.get(
        `/product/search?title=${searchQuery}`
      );
      // Filter published products from search results
      const searchProds = searchRes?.data?.products || [];
      setFilterProd(searchProds.filter((p) => p.status === "published"));
    } catch (error) {
      console.error("Error fetching products:", error.message);
      setFilterProd([]);
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  }, [searchQuery, fetchProducts]); // Dependency on fetchProducts for fallback

  // 1. Initial/Category/Subcategory Fetch Effect
  useEffect(() => {
    if (!slug && searchQuery.length === 0) {
      fetchProducts();
    }
  }, [slug, searchQuery.length, fetchProducts]);

  // 2. Search Effect
  useEffect(() => {
    if (searchQuery.length > 0) {
      // Use a timeout for debouncing if desired, but running on every change for now
      runSearch();
    }
    // The previous useEffect handles the searchQuery.length === 0 case
  }, [searchQuery, runSearch]);

  // 3. UI/Sidebar Effects
  useEffect(() => {
    // Close sidebar on route change
    setPhoneFilter(false);
  }, [cat, subCat]);

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

  // If slug is present, render detail page content (Children)
  if (slug) {
    return <div className="">{children}</div>;
  }

  // Main list/grid layout
  return (
    <div className="pt-10 bg-gray-50/50">
      <div className="container">
        {/* Search bar (extracted into its own component for modularity) */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          phoneFilter={phoneFilter}
          setPhoneFilter={setPhoneFilter}
        />

        <div className="xl:flex gap-8">
          {/* Left Sidebar (Filter Navigation) */}
          <div
            ref={sidebarRef}
            className={`fixed top-[68px] left-0 z-20 lg:block transform transition-transform xl:sticky xl:top-[6.2rem] xl:translate-x-0 duration-700 ease-in-out h-[calc(100vh-68px)] bg-white
            ${phoneFilter ? "translate-x-0" : "-translate-x-[101%]"}`}
          >
            <ProductFilter
              productCategories={productCategories}
              cat={cat}
              subCat={subCat}
              // These state setters are not currently used in a meaningful way
              // by ProductFilter but kept for API consistency if needed later.
              setCat={setCategory}
              setSubCat={setSubCategory}
            />
          </div>

          {/* Product Content Area */}
          <div className="flex-1 space-y-4">
            {loading ? (
              // Display Skeleton while loading
              <ProductSkeleton />
            ) : filterProd.length > 0 ? (
              // Display FilterContent with products
              <div className="transition-opacity duration-500 opacity-100">
                <FilterContent filterProducts={filterProd} />
              </div>
            ) : (
              // Display 'No Products Found' or handle empty state (Currently still showing skeleton)
              // This should ideally be a 'No Products Found' message.
              <div className="py-10 text-center text-gray-500">
                No products found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}