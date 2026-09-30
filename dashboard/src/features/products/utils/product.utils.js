export const mapProductToInitialValues = (product) => {
  if (!product) return null;
  return {
    categoryName: product.categoryName || "",
    subCategoryName: product.subCategoryName || "",
    productName: product.productName || "",
    productSlug: product.productSlug || "",
    description: product.description || "",
    productImage: product.productImage || "",
    price: product.price ?? "",
    datasheetFile: product.datasheetFile || "",
    connectionDiagramFile: product.connectionDiagramFile || "",
    userManualFile: product.userManualFile || "",
    productkeywords: product.productkeywords || "",
    features: product.features?.length ? product.features : [],
    table: product.table?.length ? product.table : [],
    productFaq: product.productFaq?.length ? product.productFaq : [],
    isFeatured: product.isFeatured || false,
    isPopular: product.isPopular || false,
    keyFeatures: product.keyFeatures?.length ? product.keyFeatures.join("\n") : "",
    status: product.status || "draft",
  };
};

export const mapFormValuesToFormData = (values, productImageFile) => {
  const formData = new FormData();

  // Convert keyFeatures string to array (split by newline, trim empty)
  const keyFeaturesArray =
    typeof values.keyFeatures === "string"
      ? values.keyFeatures
          .split("\n")
          .map((f) => f.trim())
          .filter((f) => f !== "")
      : [];

  // Append standard fields
  formData.append("categoryName", values.categoryName || "");
  formData.append("subCategoryName", values.subCategoryName || "");
  formData.append("productName", values.productName || "");
  formData.append("productSlug", values.productSlug || "");
  formData.append("description", values.description || "");
  formData.append("productkeywords", values.productkeywords || "");
  formData.append("isFeatured", values.isFeatured ? "true" : "false");
  formData.append("isPopular", values.isPopular ? "true" : "false");
  formData.append("status", values.status || "draft");
  formData.append("price", values.price ?? "");

  // Main Product Image
  if (productImageFile) {
    formData.append("productImage", productImageFile);
  } else if (typeof values.productImage === "string") {
    formData.append("productImage", values.productImage);
  }

  // Attachments (Datasheet, Diagram, User Manual)
  if (values.datasheetFile instanceof File) {
    formData.append("datasheetFile", values.datasheetFile);
  } else {
    formData.append("datasheetFile", values.datasheetFile || "");
  }

  if (values.connectionDiagramFile instanceof File) {
    formData.append("connectionDiagramFile", values.connectionDiagramFile);
  } else {
    formData.append("connectionDiagramFile", values.connectionDiagramFile || "");
  }

  if (values.userManualFile instanceof File) {
    formData.append("userManualFile", values.userManualFile);
  } else {
    formData.append("userManualFile", values.userManualFile || "");
  }

  // Key Features Array
  // "*Touched" sentinels let the backend tell "cleared to zero rows" apart from
  // "field not sent" — multipart form data can't represent an empty array on its own.
  formData.append("keyFeaturesTouched", "true");
  keyFeaturesArray.forEach((feature, index) => {
    formData.append(`keyFeatures[${index}]`, feature);
  });

  // Features List Array
  formData.append("featuresTouched", "true");
  (values.features || []).forEach((feature, index) => {
    formData.append(`features[${index}][title]`, feature.title || "");
    if (feature.image instanceof File) {
      formData.append(`features[${index}][image]`, feature.image);
    } else if (typeof feature.image === "string") {
      formData.append(`features[${index}][image]`, feature.image);
    }
  });

  // Specifications Table Array
  formData.append("tableTouched", "true");
  (values.table || []).forEach((row, index) => {
    formData.append(`table[${index}][column1]`, row.column1 || "");
    formData.append(`table[${index}][column2]`, row.column2 || "");
  });

  // FAQs Array
  formData.append("productFaqTouched", "true");
  (values.productFaq || []).forEach((row, index) => {
    formData.append(`productFaq[${index}][column1]`, row.column1 || "");
    formData.append(`productFaq[${index}][column2]`, row.column2 || "");
  });

  // Imported attachments (JSON import only).
  // `importUrls` is set by the import flow and by nothing else, so an ordinary
  // create/edit submit sends none of these and behaves exactly as before.
  // The backend downloads its own copy of each URL it receives here.
  const importUrls = values.importUrls || {};

  ["productImage", "datasheetFile", "connectionDiagramFile", "userManualFile"].forEach((field) => {
    const sourceUrl = importUrls[field];
    if (!sourceUrl) return;
    // A real upload always wins, so don't ask for a download the backend would ignore.
    if (field === "productImage" && productImageFile) return;
    // Only still valid while the field holds the imported URL — replacing the
    // file (value becomes a File) or clearing it (value becomes "") drops it.
    if (values[field] !== sourceUrl) return;
    formData.append(`${field}Url`, sourceUrl);
  });

  // Matched by value rather than index so reordering features can't misalign them.
  const importedFeatureUrls = new Set(Object.values(importUrls.features || {}));
  (values.features || []).forEach((feature, index) => {
    if (typeof feature.image === "string" && importedFeatureUrls.has(feature.image)) {
      formData.append(`features[${index}][imageUrl]`, feature.image);
    }
  });

  return formData;
};
