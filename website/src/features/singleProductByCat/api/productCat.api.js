import axiosInstance from "@/lib/axiosInstance";

export const productCatAPI = {
  // ✔ Get 1 product from each subcategory under a main category
  getByCategorySlug: (categorySlug) =>
    axiosInstance.get(`/product/by-category/${categorySlug}`),
};
