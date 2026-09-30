import * as Yup from "yup";

export const productSchema = Yup.object({
  productName: Yup.string().required("Product name is required"),
  categoryName: Yup.string().required("Category is required"),
  subCategoryName: Yup.string().required("Subcategory is required"),
  description: Yup.string().optional(),
  price: Yup.number().optional().nullable(),
  productkeywords: Yup.string().optional(),
  status: Yup.string().oneOf(["draft", "published"]).default("draft"),
  isFeatured: Yup.boolean().default(false),
  isPopular: Yup.boolean().default(false),
});
