import { create } from "zustand";
import { productCatAPI } from "../api/productCat.api";

export const useProductCatStore = create((set, get) => ({
    categories: [],
    subCategories: [],
    productsByCategory: [],   // stores the API response
    loading: false,
    error: null,
    fetched: false,

    // ✅ FETCH SUBCATEGORIES + 1 PRODUCT PER SUBCATEGORY
    getProductsByCategorySlug: async (categorySlug) => {
        set({ loading: true, error: null });

        try {
            const res = await productCatAPI.getByCategorySlug(categorySlug);

            set({
                loading: false,
                productsByCategory: res?.data?.data || [],  // storing results
                fetched: true
            });

            return res?.data;
        } catch (error) {
            set({
                loading: false,
                error:
                    error?.response?.data?.message ||
                    error.message ||
                    "Failed to load products by category",
            });

            throw error;
        }
    },



    clearCache: () => set({ fetched: false }),
}));
