import path from "path";
import { scanFolder } from "@/lib/scanFolder";
import { SITE_URL as baseUrl, fetchProductTree } from "@/lib/productTree";

export default async function sitemap() {
  const categories = await fetchProductTree();

  // -------- STATIC PAGES --------
  const staticPages = [
    "",
    "about",
    "ai-face-t7hd",
    "biometric-attendance-access-control-system",
    "biometric-attendance-system-bio-1se-india",
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
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  // The India city pages and the 20 pages under /solutions/<category>/ are noindex
  // on the global site (copies of timewatchindia.com), so they are not listed here.
  // Only the /solutions hub itself is, via staticPages above.

  // -------- (guides) PAGES (Nested Folder Scan) --------
  const howItWorksDir = path.join(
    process.cwd(),
    "src",
    "app",
    "(public)",
    "(guides)"
  );
  const howItWorksUrls = scanFolder(howItWorksDir, baseUrl);

  // -------- PRODUCT URLs --------
  const categoryUrls = [];
  const subcategoryUrls = [];
  const productUrls = [];

  for (const category of categories) {
    const cat = category?.categorySlug;
    if (!cat) continue;

    categoryUrls.push({
      url: `${baseUrl}/products/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const subCategory of category.subCategories || []) {
      const sub = subCategory?.subCategorySlug;
      if (!sub) continue;

      subcategoryUrls.push({
        url: `${baseUrl}/products/${cat}/${sub}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });

      for (const product of subCategory.products || []) {
        const slug = product?.productSlug;
        if (!slug) continue;

        productUrls.push({
          url: `${baseUrl}/products/${cat}/${sub}/${slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }

  // -------- FINAL RETURN --------
  return [
    ...staticUrls,
    ...howItWorksUrls,
    ...categoryUrls,
    ...subcategoryUrls,
    ...productUrls,
  ];
}
