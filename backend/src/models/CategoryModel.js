import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    subCategoryName: { type: String, required: true, trim: true },
    subCategorySlug: { type: String, required: true },
  },
  { _id: true }
);

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true, trim: true, unique: true },
    categorySlug: { type: String, required: true, unique: true },
    subCategories: [subCategorySchema],
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("Category", categorySchema, "productCategories");
export default CategoryModel;
