"use client";
import React, { useEffect, useState } from "react";
import { Search, ChevronRightIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const down = (e) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // 🔎 Call API when query changes
  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      try {
        const res = await axiosInstance.get(`/product/search?title=${encodeURIComponent(query)}`
        );
        // console.log("(res?.data?.products", res?.data?.products)
        setResults(res?.data?.products || []);
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    const debounce = setTimeout(fetchResults, 300); // debounce search
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (product) => {
    const url = `/products/${seoFriendlySlug(product.categoryName)}/${seoFriendlySlug(product.subCategoryName)}/${seoFriendlySlug(product.productSlug)}`;
    router.push(url);
    setOpen(false);
  };

  console.log("results", results)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-between gap-2 px-3 py-2 border. rounded-sm w-full text-sm hover:bg-muted transition"
      >
        <div className="flex items-center gap-x-2">
          <Search className="w-6 h-6 text-primary cursor-pointer" />
          {/* Search Products... */}
        </div>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen} className={'h-[20rem]'}>
        <CommandInput
          placeholder="Search products..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Products">
            {results?.map((p) => (
              <CommandItem
                key={p._id}
                 value={p.productName}
                onSelect={() => handleSelect(p)}
                className="cursor-pointer"
              >
                <ChevronRightIcon className="mr-2 h-4 w-4" />
                {console.log(p.productName)}
                {p.productName}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
