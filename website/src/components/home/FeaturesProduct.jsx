"use client";
import React from "react";
import ProductCard from "../ProductCard";
import { motion } from "framer-motion";

const FeaturesProduct = ({ publishedProducts }) => {
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1, // delay between children
      },
    },
  };

  // Define child variant
  const childVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 }, // same transition for all children
    },
  };

  return (
    <section className="pt-16 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className="text-center mb-12"
          // variants={parentVariant}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
        >
          <div
            className="flex items-center justify-center space-x-4 mb-2"
            // variants={childVariant}
          >
            <span className="h-0.5 w-10 bg-primary"></span>
            <span className="text-primary font-semibold">Best Products</span>
            <span className="h-0.5 w-10 bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2"
          //  variants={childVariant}
           >
            Featured Products
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" 
          // variants={childVariant}
          >
          Enhance Your Security with Cutting-Edge Technology
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 1, delay: 0.6 }}
        >
          {publishedProducts?.length > 0 ? (
            publishedProducts
              ?.slice(0, 4)
              .map((item) => (
                <ProductCard
                  key={item?._id}
                  name={item?.productName || "Product Title"}
                  price="129.99"
                  originalPrice="199.99"
                  image={item?.productImage}
                  rating={4.5}
                  reviewCount={128}
                  badge="Best Seller"
                  description={
                    item?.description || "Product description goes here."
                  }
                  categoryName={item?.categoryName || "Category"}
                  subCategoryName={item?.subCategoryName || "Subcategory"}
                />
              ))
          ) : (
            <p className="text-gray-500 text-center col-span-12">
              Products in draft or not found
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesProduct;
