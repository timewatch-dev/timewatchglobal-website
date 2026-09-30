import express from "express";
import {
  getAllCategories,
  createCategory,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
} from "../controllers/categoryController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllCategories);
router.post("/", protect, createCategory);
router.post("/:id/subcategory", protect, addSubCategory);
router.delete("/:id", protect, deleteCategory);
router.delete("/:id/subcategory/:subId", protect, deleteSubCategory);

export default router;
