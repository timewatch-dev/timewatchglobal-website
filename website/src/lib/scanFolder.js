// utils/scanFolder.js
import fs from "fs";
import path from "path";

/**
 * Recursively scans any folder and returns URLs for folders
 * containing a Next.js page file.
 *
 * @param {string} baseDir - Starting folder
 * @param {string} baseUrl - Base URL prefix to generate sitemap links
 * @param {string} prefix - URL prefix (ex: "solutions")
 */
export function scanFolder(baseDir, baseUrl, prefix = "") {
  if (!fs.existsSync(baseDir)) return [];

  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  let urls = [];

  for (const entry of entries) {
    const entryPath = path.join(baseDir, entry.name);
    const slugPath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      const hasPage =
        fs.existsSync(path.join(entryPath, "page.js")) ||
        fs.existsSync(path.join(entryPath, "page.jsx"));

      if (hasPage) {
        urls.push({
          url: `${baseUrl}/${slugPath.replace(/\\/g, "/")}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.82,
        });
      }

      // Recurse deeper
      urls.push(...scanFolder(entryPath, baseUrl, slugPath));
    }
  }

  return urls;
}
