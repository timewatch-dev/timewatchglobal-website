"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Funnel, X } from "lucide-react";

const ProductSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-end gap-x-2 mb-3 relative">
      <Input
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:max-w-[260px] h-[38px] pr-10" // add padding for the clear button
      />

      {/* Clear button inside the input */}
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label="Clear search"
        >
          <X />
        </button>
      )}
    </div>
  );
};

export default ProductSearch;
