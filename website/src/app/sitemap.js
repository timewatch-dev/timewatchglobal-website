const baseUrl = "https://www.timewatchglobal.com";

// The deploy builds without an .env, so this fallback is what runs in
// production. nginx routes /api/ to this site's own backend.
const apiBase = process.env.NEXT_PUBLIC_API_URL || `${baseUrl}/api`;

// /product returns a projection without slugs; /product/formated-product
// returns them, grouped category > subCategory > products, already filtered
// to published items.
async function fetchProductTree() {
  try {
    const res = await fetch(`${apiBase}/product/formated-product`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.products) ? data.products : [];
  } catch {
    // A sitemap missing its product URLs is recoverable; one that 500s on
    // every crawl is not.
    return [];
  }
}

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
    ...categoryUrls,
    ...subcategoryUrls,
    ...productUrls,
  ];
}
