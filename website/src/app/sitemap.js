import path from "path";
import { scanFolder } from "@/lib/scanFolder";

export default async function sitemap() {
  const baseUrl = "https://www.timewatchglobal.com";

  // -------- FETCH PRODUCTS --------
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
    cache: "no-store",
  });
  const data = await res.json();
  const products = data.products || [];

  // -------- STATIC PAGES --------
  const staticPages = [
    "",
    "about",
    "access-control-security-gate-manufacturer-in-India",
    "ai-face-t7hd",
    "biometric-attendance-access-control-system",
    "biometric-attendance-system-bio-1se-india",
    "biometric-attendance-system-in-india",
    "blogs",
    "careers",
    "ceo-desk",
    "clients",
    "disclaimer",
    "e-waste",
    "entrance-control-systems-secure-intelligent-pedestrian",
    "faq",
    "partner",
    "contact",
    "products",
    "downloads",
    "solutions",
    "product-catalouge",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  // -------- SOLUTION PAGES (Nested Folder Scan) --------
  const solutionsDir = path.join(
    process.cwd(),
    "src",
    "app",
    "(public)",
    "(solutions)",
    "solutions"
  );
  // -------- (biometrics-controll-system) PAGES (Nested Folder Scan) --------
  const biosDir = path.join(
    process.cwd(),
    "src",
    "app",
    "(public)",
    "(biometrics-controll-system)"
  );

  const solutionUrls = scanFolder(solutionsDir, `${baseUrl}/solutions`);
  const bioUrls = scanFolder(biosDir, `${baseUrl}`);

  // -------- CATEGORY URLs --------
  const categorySet = new Set(products.map((p) => p.categorySlug));

  const categoryUrls = [...categorySet].map((cat) => ({
    url: `${baseUrl}/products/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // -------- SUBCATEGORY URLs --------
  const subcategorySet = new Set(
    products.map((p) => `${p.categorySlug}/${p.subCategorySlug}`)
  );

  const subcategoryUrls = [...subcategorySet].map((path) => ({
    url: `${baseUrl}/products/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // -------- INDIVIDUAL PRODUCT URLs --------
  const productUrls = products.map((p) => ({
    url: `${baseUrl}/products/${p.categorySlug}/${p.subCategorySlug}/${p.productSlug}`,
    lastModified: p.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));
  console.log(":len", [
    ...staticUrls,
    ...solutionUrls,
    ...bioUrls,
    ...categoryUrls,
    ...subcategoryUrls,
    ...productUrls,
  ].length)

  // -------- FINAL RETURN --------
  return [
    ...staticUrls,
    ...solutionUrls,
    ...bioUrls,
    ...categoryUrls,
    ...subcategoryUrls,
    ...productUrls,
  ];
}

