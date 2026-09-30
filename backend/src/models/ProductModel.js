import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    status: String,
    categoryName: String,
    categorySlug: String,
    subCategoryName: String,
    subCategorySlug: String,
    productName: String,
    productSlug: String,
    description: String,
    datasheetFile: String,
    connectionDiagramFile: String,
    userManualFile: String,
    productImage: String,
    productkeywords: String,
    isFeatured: Boolean,
    // Pins a product to the top of the full "All products" listing. Independent
    // of isFeatured (which drives the homepage), so toggling one never affects
    // the other.
    isPopular: { type: Boolean, default: false },

    // New fields for ordering
    position: { type: Number, default: 0 }, // product order inside subcategory
    subCategoryPosition: { type: Number, default: 0 }, // subcategory order in category
    display_order: { type: Number, default: 0 }, // ✅ new field for ordering

    productFaq: [{ column1: String, column2: String }],

    features: [{ title: String, image: String }],

    table: [{ column1: String, column2: String }],

    // ✅ New field: key features (optional)
    keyFeatures: [{ type: String }],

    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    markets: {
      type: [String],
      enum: ["india", "uae"],
      default: null,
    },
    showUaeMenu:{
      type:Boolean,
      default:false
    }
  },

  { timestamps: true }
);

// For product detail page
productSchema.index({ productSlug: 1, isDeleted: 1 });

// For category/subcategory listing
productSchema.index({
  categorySlug: 1,
  subCategorySlug: 1,
  isDeleted: 1,
  display_order: 1,
});

// For homepage / product lists
productSchema.index({ isDeleted: 1, createdAt: -1 });

// For filtering
productSchema.index({ status: 1 });
productSchema.index({ categorySlug: 1, status: 1 });
productSchema.index({ subCategorySlug: 1, status: 1 });

const ProductModel = mongoose.model("products", productSchema);
export default ProductModel;
