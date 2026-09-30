"use client";

import React, { useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";
import StaticBreadcrumb from "@/components/DynamicBreadcrumb";
import ProductForm from "@/features/products/components/ProductForm";
import { useProduct, useUpdateProduct } from "@/features/products/store/products.queries";
import { Skeleton } from "@/components/ui/skeleton";
import { mapProductToInitialValues, mapFormValuesToFormData } from "@/features/products/utils/product.utils";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();

  const { data: product, isLoading, error } = useProduct(id);
  const updateMutation = useUpdateProduct();

  const initialValues = useMemo(() => {
    return mapProductToInitialValues(product);
  }, [product]);

  const handleSubmit = async (values) => {
    try {
      const formData = mapFormValuesToFormData(values, values.productImageFile);

      updateMutation.mutate(
        { id, formData },
        {
          onSuccess: () => {
            toast.success("Product updated successfully");
            router.push("/dashboard");
          },
          onError: (err) => {
            toast.error(err.message || "Failed to update product");
          },
        }
      );
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during form submission");
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-10 w-1/3" />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 space-y-4">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
          <Skeleton className="col-span-1 h-80 w-full" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="p-6">
        <div className="bg-destructive/10 border border-destructive/30 text-destructive p-4 rounded-md">
          {error?.message || "Failed to load product details. Product not found."}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <StaticBreadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Products", href: "/dashboard" },
          { label: "Edit Product" },
        ]}
      />
      <h1 className="font-bold text-2xl text-foreground mb-6">Edit Product: {product.productName}</h1>
      <ProductForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        isSaving={updateMutation.isPending}
        buttonText="Update Product"
      />
    </div>
  );
}

