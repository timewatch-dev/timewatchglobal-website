// Read/write format for moving a single product between Timewatch sites
// (india <-> arabia). Files carry absolute URLs for every attachment, so the
// receiving backend can pull its own copy instead of hot-linking the source.

export const PRODUCT_JSON_FORMAT = "timewatch-product-json";
export const PRODUCT_JSON_VERSION = 1;

// Attachment fields that hold a single file path/URL, and where an imported
// copy should be stored. Key = form field, value = the "<field>Url" companion
// the backend reads during import.
export const FILE_FIELDS = [
  "productImage",
  "datasheetFile",
  "connectionDiagramFile",
  "userManualFile",
];

const isAbsoluteUrl = (value) => typeof value === "string" && /^https?:\/\//i.test(value.trim());

const cleanRows = (rows) =>
  (Array.isArray(rows) ? rows : [])
    .map((row) => ({ column1: row?.column1 || "", column2: row?.column2 || "" }))
    .filter((row) => row.column1 || row.column2);

// ---------------------------------------------------------------- export ---

// Strips database bookkeeping (_id, timestamps, ordering, soft-delete flags)
// and keeps only what actually describes the product.
export const toExportProduct = (product) => {
  if (!product) return null;

  return {
    productName: product.productName || "",
    productSlug: product.productSlug || "",
    categoryName: product.categoryName || "",
    subCategoryName: product.subCategoryName || "",
    description: product.description || "",
    productkeywords: product.productkeywords || "",
    status: product.status || "draft",
    isFeatured: !!product.isFeatured,
    isPopular: !!product.isPopular,
    price: product.price ?? null,
    keyFeatures: Array.isArray(product.keyFeatures) ? product.keyFeatures.filter(Boolean) : [],
    table: cleanRows(product.table),
    productFaq: cleanRows(product.productFaq),
    features: (Array.isArray(product.features) ? product.features : [])
      .map((feature) => ({ title: feature?.title || "", image: feature?.image || "" }))
      .filter((feature) => feature.title || feature.image),
    productImage: product.productImage || "",
    datasheetFile: product.datasheetFile || "",
    connectionDiagramFile: product.connectionDiagramFile || "",
    userManualFile: product.userManualFile || "",
  };
};

export const buildExportFile = (products, source = "") => {
  const list = (Array.isArray(products) ? products : [products]).map(toExportProduct).filter(Boolean);

  return {
    _meta: {
      format: PRODUCT_JSON_FORMAT,
      version: PRODUCT_JSON_VERSION,
      source,
      exportedAt: new Date().toISOString(),
      count: list.length,
    },
    products: list,
  };
};

export const downloadJson = (filename, data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Revoked on the next tick so the click has definitely been handled.
  setTimeout(() => URL.revokeObjectURL(url), 0);
};

// ---------------------------------------------------------------- import ---

// Accepts anything that plausibly holds products: our own export wrapper, a raw
// API response ({ success, products } or { success, product }), a bare array, or
// a single product object. Throws a message meant to be shown to the user.
export const parseProductJson = (text) => {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("That is not valid JSON. Check the file and try again.");
  }

  let list;
  if (Array.isArray(data)) list = data;
  else if (Array.isArray(data?.products)) list = data.products;
  else if (data?.product) list = [data.product];
  else if (data && typeof data === "object") list = [data];
  else list = [];

  const products = list.filter((item) => item && typeof item === "object" && item.productName);

  if (!products.length) {
    throw new Error("No products found in that file — every entry needs a productName.");
  }

  return { products, meta: data?._meta || null };
};

// Backends do not all serialize consistently: timewatchindia.com currently
// returns an absolute productImage but leaves features[].image relative
// ("/uploads/features/x.png"). A relative path is still perfectly importable as
// long as we can tell which host it belongs to, so derive that host from any
// absolute URL on the same product, then from where the export says it came from.
const resolveSourceBase = (product, meta) => {
  const candidates = [
    ...FILE_FIELDS.map((field) => product[field]),
    ...(Array.isArray(product.features) ? product.features.map((feature) => feature?.image) : []),
    meta?.source,
  ];

  for (const candidate of candidates) {
    if (!isAbsoluteUrl(candidate)) continue;
    try {
      return new URL(candidate.trim()).origin;
    } catch {
      // Not a usable URL after all — keep looking.
    }
  }

  return "";
};

// An absolute URL the backend can download, or "" when it can't be worked out.
const toImportableUrl = (value, base) => {
  if (isAbsoluteUrl(value)) return value.trim();

  const path = typeof value === "string" ? value.trim() : "";
  if (base && path.startsWith("/")) return base + path;

  return "";
};

/**
 * Turns one product from a JSON file into Formik values for ProductForm.
 *
 * Attachments are handled in two parts: the plain field keeps the resolved URL
 * so the form can show a preview, and `importUrls` records the same string so
 * mapFormValuesToFormData can ask the backend to download its own copy. Both
 * come from the same value, so they always compare equal.
 */
export const productJsonToFormValues = (product, meta = null) => {
  const importUrls = { features: {} };
  const notes = [];
  const base = resolveSourceBase(product, meta);

  for (const field of FILE_FIELDS) {
    const value = product[field];
    if (!value) continue;

    const url = toImportableUrl(value, base);
    if (url) {
      importUrls[field] = url;
    } else {
      notes.push(
        `${field}: "${value}" is a relative path and the source site could not be worked out — attach that file by hand.`
      );
    }
  }

  const features = (Array.isArray(product.features) ? product.features : [])
    .map((feature, index) => {
      const url = toImportableUrl(feature?.image || "", base);

      if (url) {
        importUrls.features[index] = url;
      } else if (feature?.image) {
        notes.push(
          `Feature "${feature?.title || index + 1}": image path could not be resolved to a URL — add that image by hand.`
        );
      }

      return { title: feature?.title || "", image: url };
    })
    .filter((feature) => feature.title || feature.image);

  const values = {
    categoryName: product.categoryName || "",
    subCategoryName: product.subCategoryName || "",
    productName: product.productName || "",
    // Left blank so the backend regenerates it from the name; an imported slug
    // that already exists on this site would be rejected as a duplicate.
    productSlug: "",
    description: product.description || "",
    // Taken from importUrls rather than re-derived, so the value the form holds
    // is byte-identical to the one mapFormValuesToFormData checks against.
    productImage: importUrls.productImage || "",
    price: product.price ?? "",
    datasheetFile: importUrls.datasheetFile || "",
    connectionDiagramFile: importUrls.connectionDiagramFile || "",
    userManualFile: importUrls.userManualFile || "",
    productkeywords: product.productkeywords || "",
    features,
    table: cleanRows(product.table),
    productFaq: cleanRows(product.productFaq),
    isFeatured: !!product.isFeatured,
    isPopular: !!product.isPopular,
    status: product.status || "draft",
    keyFeatures: Array.isArray(product.keyFeatures) ? product.keyFeatures.filter(Boolean).join("\n") : "",
    importUrls,
  };

  return { values, importUrls, notes };
};

// Identifies the site a file was exported from, purely as a breadcrumb in _meta.
export const currentSource = () =>
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== "undefined" ? window.location.origin : "");

export const exportFileName = (product) => {
  const base = product?.productSlug || product?.productName || "product";
  return `${String(base).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.json`;
};
