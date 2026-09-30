import axiosInstance from "@/lib/axiosInstance";

export const categoriesAPI = {
  getAll: async () => {
    const res = await axiosInstance.get("/category");
    return res.data?.categories || [];
  },

  create: async (categoryName) => {
    const res = await axiosInstance.post("/category", { categoryName });
    return res.data;
  },

  addSubCategory: async ({ categoryId, subCategoryName }) => {
    const res = await axiosInstance.post(`/category/${categoryId}/subcategory`, {
      subCategoryName,
    });
    return res.data;
  },

  deleteCategory: async (categoryId) => {
    const res = await axiosInstance.delete(`/category/${categoryId}`);
    return res.data;
  },

  deleteSubCategory: async ({ categoryId, subCategoryId }) => {
    const res = await axiosInstance.delete(
      `/category/${categoryId}/subcategory/${subCategoryId}`
    );
    return res.data;
  },
};
