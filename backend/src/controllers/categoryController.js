import asyncHandler from "express-async-handler";
import CategoryModel from "../models/CategoryModel.js";
import ProductModel from "../models/ProductModel.js";
import slugify from "../utils/slugify.js";

export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await CategoryModel.find({}).sort({ categoryName: 1 }).lean();
  res.json({ success: true, count: categories.length, categories });
});

export const createCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.body;

  if (!categoryName || !categoryName.trim()) {
    return res.status(400).json({ success: false, message: "Category name is required" });
  }

  const categorySlug = slugify(categoryName.trim());

  const existing = await CategoryModel.findOne({
    categoryName: { $regex: `^${categoryName.trim()}$`, $options: "i" },
  });
  if (existing) {
    return res.status(400).json({ success: false, message: "This category already exists" });
  }

  const category = await CategoryModel.create({
    categoryName: categoryName.trim(),
    categorySlug,
    subCategories: [],
  });

  res.status(201).json({ success: true, category });
});

export const addSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { subCategoryName } = req.body;

  if (!subCategoryName || !subCategoryName.trim()) {
    return res.status(400).json({ success: false, message: "Sub-category name is required" });
  }

  const category = await CategoryModel.findById(id);
  if (!category) {
    return res.status(404).json({ success: false, message: "Category not found" });
  }

  const alreadyExists = category.subCategories.some(
    (sub) => sub.subCategoryName.toLowerCase() === subCategoryName.trim().toLowerCase()
  );
  if (alreadyExists) {
    return res
      .status(400)
      .json({ success: false, message: "This sub-category already exists in this category" });
  }

  category.subCategories.push({
    subCategoryName: subCategoryName.trim(),
    subCategorySlug: slugify(subCategoryName.trim()),
  });
  await category.save();

  res.status(201).json({ success: true, category });
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await CategoryModel.findById(id);
  if (!category) {
    return res.status(404).json({ success: false, message: "Category not found" });
  }

  const productCount = await ProductModel.countDocuments({
    categoryName: { $regex: `^${category.categoryName}$`, $options: "i" },
    isDeleted: false,
  });

  if (productCount > 0) {
    return res.status(400).json({
      success: false,
      message: `Cannot delete "${category.categoryName}" — ${productCount} product(s) still use it. Move or delete those products first.`,
    });
  }

  await category.deleteOne();
  res.json({ success: true, message: "Category deleted successfully" });
});

export const deleteSubCategory = asyncHandler(async (req, res) => {
  const { id, subId } = req.params;

  const category = await CategoryModel.findById(id);
  if (!category) {
    return res.status(404).json({ success: false, message: "Category not found" });
  }

  const subCategory = category.subCategories.id(subId);
  if (!subCategory) {
    return res.status(404).json({ success: false, message: "Sub-category not found" });
  }

  const productCount = await ProductModel.countDocuments({
    categoryName: { $regex: `^${category.categoryName}$`, $options: "i" },
    subCategoryName: { $regex: `^${subCategory.subCategoryName}$`, $options: "i" },
    isDeleted: false,
  });

  if (productCount > 0) {
    return res.status(400).json({
      success: false,
      message: `Cannot delete "${subCategory.subCategoryName}" — ${productCount} product(s) still use it. Move or delete those products first.`,
    });
  }

  subCategory.deleteOne();
  await category.save();

  res.json({ success: true, message: "Sub-category deleted successfully" });
});
