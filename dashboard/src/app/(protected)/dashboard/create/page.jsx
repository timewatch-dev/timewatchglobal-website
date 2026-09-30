"use client";

import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import StaticBreadcrumb from "@/components/DynamicBreadcrumb";
import ProductForm from "@/features/products/components/ProductForm";
import { useCreateProduct } from "@/features/products/store/products.queries";
import { mapFormValuesToFormData } from "@/features/products/utils/product.utils";

export default function CreateProductPage() {
  const router = useRouter();
  const createMutation = useCreateProduct();

  const initialValues = {
    categoryName: "",
    subCategoryName: "",
    productName: "",
    productSlug: "",
    description: "",
    productImage: "",
    price: "",
    datasheetFile: "",
    connectionDiagramFile: "",
    userManualFile: "",
    productkeywords: "",
    features: [],
    table: [],
    isFeatured: false,
    productFaq: [],
    status: "draft",
    keyFeatures: "",
    // Source URLs for attachments, filled in only by the JSON import flow.
    importUrls: {},
  };

  const handleSubmit = async (values) => {
    try {
      const formData = mapFormValuesToFormData(values, values.productImageFile);

      createMutation.mutate(formData, {
        onSuccess: (data) => {
          toast.success("Product created successfully");
          // Set when an import could not pull one of the source files; the
          // product still saved, that one attachment just needs doing by hand.
          (data?.warnings || []).forEach((warning) =>
            toast(warning, { icon: "⚠️", duration: 8000 })
          );
          router.push("/dashboard");
        },
        onError: (error) => {
          toast.error(error.message || "Failed to create product");
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during form submission");
    }
  };

  return (
    <div className="p-6">
      <StaticBreadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Products", href: "/dashboard" },
          { label: "Create Product" },
        ]}
      />
      <h1 className="font-bold text-2xl text-foreground mb-6">Create Product</h1>
      <ProductForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        isSaving={createMutation.isPending}
        buttonText="Create Product"
        allowImport
      />
    </div>
  );
}

