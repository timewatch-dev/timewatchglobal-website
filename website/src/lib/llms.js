import { SITE_URL, fetchProductTree } from "@/lib/productTree";

// Builds /llms.txt and /llms-full.txt. Every URL here is a canonical URL that is
// also listed in sitemap.xml. Product URLs come from the same API call as the
// sitemap, so the three never drift apart.
//
// Not listed on purpose (noindex or India-targeted copies on this site): the 20
// pages under /solutions/<category>/, the India city pages
// (/biometric-attendance-system-in-*), /biometric-attendance-system-in-india,
// /biometric-attendance-system-bio-1se-india and
// /access-control-security-gate-manufacturer-in-India.

const KEY_PAGES = [
  ["Home", "/", "Overview of TimeWatch and its product ranges."],
  ["About Us", "/about", "About TimeWatch."],
  ["Products", "/products", "Full product catalogue by category."],
  ["Solutions", "/solutions", "Industry and use-case solutions."],
  ["Downloads", "/downloads", "Software downloads."],
  ["Blogs", "/blogs", "Articles on biometric systems, time attendance, access control and security technology."],
  ["Contact", "/contact", "Product enquiries, support and partnership requests."],
  ["FAQ", "/faq", "Frequently asked questions."],
  ["Our Clients", "/clients", "Organisations using TimeWatch products."],
  ["Partner Network", "/partner", "Join the TimeWatch partner network."],
  ["Careers", "/careers", "Join the team."],
  ["CEO's Desk", "/ceo-desk", "Message from the CEO."],
];

const OVERVIEW_PAGES = [
  ["Biometric Attendance & Access Control Systems", "/biometric-attendance-access-control-system", "Overview of the biometric attendance and access control range."],
  ["Entrance Control Systems", "/entrance-control-systems-secure-intelligent-pedestrian", "Overview of turnstiles, flap barriers, swing barriers and gates."],
  ["AI-Face-T7HD", "/ai-face-t7hd", "Portable AI face attendance device."],
];

const REGIONAL_SITES = [
  ["TimeWatch India", "https://www.timewatchindia.com", "Website for India."],
  ["TimeWatch UAE", "https://www.timewatchuae.com", "Website for the UAE."],
  ["TimeWatch Arabia", "https://www.timewatcharabia.com", "Website for Saudi Arabia."],
];

const ACRONYMS = { ul: "UL", em: "EM", anpr: "ANPR", uvss: "UVSS" };
const SMALL_WORDS = new Set(["and", "of", "the"]);

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((w, i) =>
      ACRONYMS[w] ||
      (i > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1))
    )
    .join(" ");
}

// The API stores some names in capitals ("ACCESSORIES"); rebuild those from the slug.
function displayName(name, slug) {
  if (!name || name === name.toUpperCase()) return titleFromSlug(slug);
  return name;
}

const url = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;
const link = ([label, path, note]) =>
  `- [${label}](${url(path)})${note ? `: ${note}` : ""}`;
const externalLink = ([label, href, note]) =>
  `- [${label}](${href})${note ? `: ${note}` : ""}`;

const HEADER = [
  "# TimeWatch",
  "",
  "> TimeWatch supplies biometric attendance and time attendance systems, access control, entrance control (turnstiles, flap barriers), baggage scanners and metal detectors, parking and traffic control, UL listed EM locks and related software, from Dubai, UAE, to customers in the UAE, Saudi Arabia, India and international markets. This is the global website; TimeWatch India, TimeWatch UAE and TimeWatch Arabia run regional sites. Official website: " +
    SITE_URL,
  "",
];

export async function buildLlmsTxt() {
  const tree = await fetchProductTree();
  const lines = [...HEADER];

  lines.push("## Key Pages", "", ...KEY_PAGES.map(link), "");
  lines.push("## Overview Pages", "", ...OVERVIEW_PAGES.map(link), "");

  if (tree.length) {
    lines.push("## Product Categories", "");
    for (const cat of tree) {
      if (!cat?.categorySlug) continue;
      const subs = (cat.subCategories || [])
        .filter((s) => s?.subCategorySlug)
        .map((s) => displayName(s.subCategoryName, s.subCategorySlug));
      lines.push(
        link([
          displayName(cat.categoryName, cat.categorySlug),
          `/products/${cat.categorySlug}`,
          subs.join(", "),
        ])
      );
    }
    lines.push("");
  }

  lines.push(
    "## Optional",
    "",
    `- [Full product index](${url("/llms-full.txt")}): Every published product, grouped by category and sub-category.`,
    `- [Sitemap](${url("/sitemap.xml")}): All indexable URLs.`,
    ...REGIONAL_SITES.map(externalLink),
    ""
  );
  return lines.join("\n");
}

export async function buildLlmsFullTxt() {
  const tree = await fetchProductTree();
  const lines = [...HEADER];

  lines.push(
    "## About this file",
    "",
    `- Every URL below is the canonical URL of its page on ${SITE_URL} and is also listed in the sitemap: ${url("/sitemap.xml")}`,
    `- Short version: ${url("/llms.txt")}`,
    "- Only published products are listed. Product names are as shown on the website.",
    ""
  );

  lines.push("## Key Pages", "", ...KEY_PAGES.map(link), "");
  lines.push("## Overview Pages", "", ...OVERVIEW_PAGES.map(link), "");

  let total = 0;
  for (const cat of tree) {
    for (const sub of cat?.subCategories || [])
      total += (sub?.products || []).filter((p) => p?.productSlug).length;
  }

  lines.push(`## Product Catalogue (${total} published products)`, "");
  for (const cat of tree) {
    if (!cat?.categorySlug) continue;
    lines.push(
      `### [${displayName(cat.categoryName, cat.categorySlug)}](${url(`/products/${cat.categorySlug}`)})`,
      ""
    );
    for (const sub of cat.subCategories || []) {
      if (!sub?.subCategorySlug) continue;
      lines.push(
        `#### [${displayName(sub.subCategoryName, sub.subCategorySlug)}](${url(`/products/${cat.categorySlug}/${sub.subCategorySlug}`)})`,
        ""
      );
      for (const p of sub.products || []) {
        if (!p?.productSlug) continue;
        lines.push(
          `- [${p.productName || p.productSlug}](${url(`/products/${cat.categorySlug}/${sub.subCategorySlug}/${p.productSlug}`)})`
        );
      }
      lines.push("");
    }
  }

  lines.push(
    "## Contact",
    "",
    `- [Contact TimeWatch](${url("/contact")}): Dubai, UAE. Product enquiries, support and partnership requests.`,
    "",
    "## Regional websites",
    "",
    ...REGIONAL_SITES.map(externalLink),
    ""
  );
  return lines.join("\n");
}
