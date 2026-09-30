import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, getAllFormatProducts, getProductBySlug, getTrashedProducts, restoreProduct, searchProducts, showProductByCat, trashProduct, updateProduct, getAllFeaturedProducts, reorderProducts, getCategorySubcatsWithOneProduct, getUaeAllFormatProducts, duplicateProduct, setProductPopular, exportProducts, } from "../controllers/productController.js";
import multer from "multer";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/id/:id", getProductById);
router.get("/search", searchProducts);          // e.g., /product/id/64a...
router.get("/slug/:slug", getProductBySlug);     // e.g., /product/slug/my-product
router.get("/trashed", protect, getTrashedProducts);
router.get("/", getAllProducts);

// ✅ Always put specific/static routes first
router.get("/featured-products", getAllFeaturedProducts);

// Full (unprojected) product documents, for the dashboard's "Export JSON" action.
router.get("/export-json", protect, exportProducts);




// Admin-only writes (were open to anyone before 2026-09-22)
router.post("/create", protect, upload.any(), createProduct);
router.put("/update/:id", protect, upload.any(), updateProduct);
router.post("/duplicate/:id", protect, duplicateProduct);
router.patch("/:id/popular", protect, setProductPopular);
router.put("/trashed/:id", protect, trashProduct);
router.post("/restore/:id", protect, restoreProduct);
router.delete("/:id", protect, deleteProduct);
router.get("/formated-product", getAllFormatProducts);
router.get("/uae-formated-product", getUaeAllFormatProducts);
// ✅ More specific dynamic route before less specific
router.get("/by-category/:categorySlug", getCategorySubcatsWithOneProduct);
router.get("/:cat/:subCat", showProductByCat);

// ✅ Catch-all category last
router.get("/:cat", showProductByCat);

router.put("/reorder", protect, reorderProducts);





export default router;
