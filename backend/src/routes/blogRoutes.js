import express from "express";
import multer from "multer";
import { createBlog, blogBySlug, updateBlog, getAllBlog, deleteBlog } from "../controllers/blogController.js";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", getAllBlog);
router.get("/slug/:slug", blogBySlug);     // e.g., /product/slug/my-product
// Admin-only writes (were open to anyone before 2026-09-22)
router.post("/create", protect, upload.any(), createBlog);
router.put("/update/:id", protect, upload.any(), updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;
