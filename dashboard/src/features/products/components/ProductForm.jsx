"use client";

import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import DropzoneUploader from "@/components/DropzoneUploader";
import { useCategories } from "@/features/categories/store/categories.queries";
import { productSchema } from "../validations/product.schema";
import { getImageUrl } from "@/lib/getImageUrl";
import { generateDescriptionFromImage } from "../utils/extractWithAI";
import { Sparkles } from "lucide-react";

import FileField from "./FileField";
import FeaturesSection from "./FeaturesSection";
import SpecsSection from "./SpecsSection";
import FaqSection from "./FaqSection";
import ImportProductSheet from "./ImportProductSheet";
import toast from "react-hot-toast";

export default function ProductForm({
  initialValues,
  onSubmit,
  isSaving = false,
  buttonText = "Save Product",
  allowImport = false,
}) {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [aiDescLoading, setAiDescLoading] = useState(false);
  const descImageInputRef = useRef(null);
  const [selectCategory, setSelectCategory] = useState(initialValues.categoryName || "");
  const { data: categories = [] } = useCategories();

  useEffect(() => {
    if (initialValues.categoryName) {
      setSelectCategory(initialValues.categoryName);
    }
    if (initialValues.productImage) {
      setPreview(initialValues.productImage);
    }
  }, [initialValues]);

  const handleFormSubmit = async (values, helpers) => {
    await onSubmit({ ...values, productImageFile: file }, helpers);
  };

  const handleDescImageSelected = async (e, setFieldValue) => {
    const imageFile = e.target.files?.[0];
    e.target.value = "";
    if (!imageFile) return;

    const result = await generateDescriptionFromImage(imageFile, setAiDescLoading);
    if (result) {
      setFieldValue("description", result.description);
      if (result.keyFeatures.length) {
        setFieldValue("keyFeatures", result.keyFeatures.join("\n"));
      }
    }
  };

  // Drops a product parsed from a JSON file into this form. Attachments are not
  // downloaded here — their source URLs travel in values.importUrls and the
  // backend fetches its own copy when the product is saved.
  const applyImportedProduct = ({ values: imported, notes }, setFieldValue) => {
    Object.entries(imported).forEach(([field, value]) => setFieldValue(field, value));

    setSelectCategory(imported.categoryName || "");
    setPreview(imported.productImage || null);
    setFile(null);

    toast.success(`Imported "${imported.productName}" — review it, then save.`);

    // The category dropdown is fed by this site's own category list, so an
    // imported name that isn't in it would silently render as an empty select.
    const categoryIsKnown = categories.some(
      (cat) =>
        cat?.categoryName?.trim().toLowerCase() ===
        (imported.categoryName || "").trim().toLowerCase()
    );
    if (imported.categoryName && !categoryIsKnown) {
      notes.push(
        `Category "${imported.categoryName}" is not in this site's category list. It will still save correctly, but add it under Categories for the dropdown to show it.`
      );
    }

    notes.forEach((note) => toast(note, { icon: "⚠️", duration: 8000 }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={productSchema}
      onSubmit={handleFormSubmit}
      enableReinitialize
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className="md:grid grid-cols-4 gap-4">
          {allowImport && (
            <div className="col-span-4 mb-2 flex flex-wrap items-center justify-between gap-3 rounded-sm border border-dashed border-border bg-muted/50 p-3">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Already have this product on another Timewatch site?
                </p>
                <p className="text-xs text-muted-foreground">
                  Import its JSON to fill this form instead of retyping everything.
                </p>
              </div>
              <ImportProductSheet
                onImport={(result) => applyImportedProduct(result, setFieldValue)}
              />
            </div>
          )}
          
          {/* Main Form Fields */}
          <div className="flex flex-col md:grid grid-cols-3 gap-4 col-span-3 bg-muted p-4 rounded-sm">
            
            {/* Product Name */}
            <div className="col-span-3 md:col-span-2 lg:col-span-1">
              <Label>Product Name</Label>
              <Input
                name="productName"
                value={values.productName}
                onChange={handleChange}
              />
              <ErrorMessage
                name="productName"
                component="div"
                className="text-destructive text-sm mt-1"
              />
            </div>

            {/* Category */}
            <div>
              <Label>Category Name</Label>
              <Select
                value={values.categoryName}
                onValueChange={(val) => {
                  setFieldValue("categoryName", val);
                  setFieldValue("subCategoryName", "");
                  setSelectCategory(val);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((cat) => (
                    <SelectItem
                      value={cat?.categoryName}
                      key={cat?._id}
                    >
                      {cat?.categoryName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorMessage
                name="categoryName"
                component="div"
                className="text-destructive text-sm mt-1"
              />
            </div>

            {/* Sub-category */}
            <div>
              <Label>Sub-category Name</Label>
              <Select
                value={values.subCategoryName}
                onValueChange={(val) => setFieldValue("subCategoryName", val)}
              >
                <SelectTrigger
                  className="w-full"
                  disabled={!selectCategory}
                >
                  <SelectValue placeholder="Select Sub Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories
                    ?.filter((cat) => cat?.categoryName === selectCategory)
                    .map((cat) =>
                      cat?.subCategories?.map((subCat) => (
                        <SelectItem value={subCat.subCategoryName} key={subCat._id}>
                          {subCat.subCategoryName}
                        </SelectItem>
                      ))
                    )}
                </SelectContent>
              </Select>
              <ErrorMessage
                name="subCategoryName"
                component="div"
                className="text-destructive text-sm mt-1"
              />
            </div>

            {/* Description */}
            <div className="col-span-3">
              <div className="flex items-center justify-between mb-2">
                <Label>Description</Label>
                <input
                  type="file"
                  accept="image/*"
                  ref={descImageInputRef}
                  className="hidden"
                  onChange={(e) => handleDescImageSelected(e, setFieldValue)}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={aiDescLoading}
                  onClick={() => descImageInputRef.current?.click()}
                >
                  <Sparkles className="mr-1 h-4 w-4" />
                  {aiDescLoading ? "Analyzing image..." : "Generate description from image"}
                </Button>
              </div>
              <Textarea
                name="description"
                value={values.description}
                onChange={handleChange}
                className="min-h-[120px]"
              />
            </div>

            {/* Key Features */}
            <div className="col-span-3">
              <Label>Key Features (one per line)</Label>
              <Textarea
                name="keyFeatures"
                value={values.keyFeatures || ""}
                onChange={(e) => setFieldValue("keyFeatures", e.target.value)}
                placeholder="Enter each key feature on a new line"
                className="min-h-[120px]"
              />
            </div>

            {/* Product Keywords */}
            <div className="col-span-2">
              <Label>Product Keywords</Label>
              <Input
                name="productkeywords"
                value={values.productkeywords}
                onChange={handleChange}
                placeholder="keyword, separate, by, comma"
              />
            </div>

            {/* Product Slug */}
            <div className="col-span-1">
              <Label>Product Slug</Label>
              <Input
                name="productSlug"
                value={values.productSlug}
                onChange={handleChange}
                placeholder="auto-generated if empty"
              />
            </div>

            {/* Price */}
            <div className="col-span-1">
              <Label>Price (MRP)</Label>
              <Input
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
              />
            </div>

            {/* File Attachments */}
            <FileField
              label="Datasheet File"
              fieldName="datasheetFile"
              value={values.datasheetFile}
              setFieldValue={setFieldValue}
            />

            <FileField
              label="Connection Diagram File"
              fieldName="connectionDiagramFile"
              value={values.connectionDiagramFile}
              setFieldValue={setFieldValue}
            />

            <FileField
              label="User Manual File"
              fieldName="userManualFile"
              value={values.userManualFile}
              setFieldValue={setFieldValue}
            />

            {/* Drag & Drop Sections */}
            <FeaturesSection
              features={values.features}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />

            <SpecsSection
              table={values.table}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />

            <FaqSection
              productFaq={values.productFaq}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />

          </div>

          {/* Right Sidebar Details */}
          <div className="col-span-1 bg-muted p-4 rounded-sm flex flex-col gap-4">
            
            {/* Product Image */}
            <div>
              <Label className="font-semibold block mb-2">Product Image</Label>
              <DropzoneUploader
                preview={preview}
                setPreview={setPreview}
                setFile={setFile}
                initalFile={initialValues.productImage ? getImageUrl(initialValues.productImage) : null}
              />
            </div>

            {/* Status Selector */}
            <div>
              <Label className="font-semibold block mb-2">Status</Label>
              <Select
                value={values.status}
                onValueChange={(val) => setFieldValue("status", val)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="isFeatured"
                name="isFeatured"
                checked={values.isFeatured}
                onChange={(e) => setFieldValue("isFeatured", e.target.checked)}
                className="h-4 w-4 rounded border-input text-red-600 focus:ring-red-500 cursor-pointer"
              />
              <Label htmlFor="isFeatured" className="font-semibold cursor-pointer">
                Featured Product
              </Label>
            </div>

            {/* Popular Checkbox — pins the product to the top of the All Products list */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="isPopular"
                name="isPopular"
                checked={values.isPopular}
                onChange={(e) => setFieldValue("isPopular", e.target.checked)}
                className="h-4 w-4 rounded border-input text-red-600 focus:ring-red-500 cursor-pointer"
              />
              <Label htmlFor="isPopular" className="font-semibold cursor-pointer">
                Popular Product (show on top)
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSaving}
              className="mt-4 w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold"
            >
              {isSaving ? "Saving..." : buttonText}
            </Button>

          </div>
        </Form>
      )}
    </Formik>
  );
}
