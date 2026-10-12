export const SITE_URL = "https://www.timewatchglobal.com";

// The deploy builds without an .env, so this fallback is what runs in
// production. nginx routes /api/ to this site's own backend.
const apiBase = process.env.NEXT_PUBLIC_API_URL || `${SITE_URL}/api`;

// /product returns a projection without slugs; /product/formated-product
// returns them, grouped category > subCategory > products, already filtered
// to published items.
// Shared by sitemap.js and the llms.txt routes so they always list the same URLs.
export async function fetchProductTree() {
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
