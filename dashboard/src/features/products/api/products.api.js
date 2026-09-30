import axiosInstance from "@/lib/axiosInstance";

export const productsAPI = {
  getAll: async () => {
    const res = await axiosInstance.get("/product");
    return res.data?.products || [];
  },

  getById: async (id) => {
    const res = await axiosInstance.get(`/product/id/${id}`);
    return res.data?.product;
  },

  create: async (formData) => {
    const res = await axiosInstance.post("/product/create", formData);
    return res.data;
  },

  update: async (id, formData) => {
    const res = await axiosInstance.put(`/product/update/${id}`, formData);
    return res.data;
  },

  // Single-field toggle for the product list's "Popular" column. Uses its own
  // endpoint so it can't touch any other field on the document.
  setPopular: async (id, isPopular) => {
    const res = await axiosInstance.patch(`/product/${id}/popular`, {
      isPopular: !!isPopular,
    });
    return res.data;
  },

  delete: async (id) => {
    const res = await axiosInstance.delete(`/product/${id}`);
    return res.data;
  },

  duplicate: async (id) => {
    const res = await axiosInstance.post(`/product/duplicate/${id}`);
    return res.data;
  },

  reorder: async ({ subCategoryName, orderedIds }) => {
    const res = await axiosInstance.put("/product/reorder", { subCategoryName, orderedIds });
    return res.data;
  },

  // Full documents — getAll uses a projection that omits features/FAQ/keywords,
  // which an export must not lose.
  exportAll: async () => {
    const res = await axiosInstance.get("/product/export-json");
    return res.data?.products || [];
  },
};
