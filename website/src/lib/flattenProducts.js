import  seoFriendlySlug from "./seoFriendlySlug"; // or wherever it's defined

export function flattenProducts(products) {
  if (!products || !Array.isArray(products)) return [];

  return products.flatMap((cat) =>
    cat?.subCategories?.flatMap((subCat) =>
      subCat?.products?.map((p) => ({
        ...p,
        productName: seoFriendlySlug(p?.productName),
        categoryName: seoFriendlySlug(cat?.categoryName),
        subCategoryName: seoFriendlySlug(subCat?.subCategoryName),
      }))
    )
  );
}
