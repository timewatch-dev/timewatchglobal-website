import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productsAPI } from "../api/products.api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsAPI.getAll,
    select: (products) => 
      [...products].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0)),
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => productsAPI.getById(id),
    enabled: !!id,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productsAPI.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, formData }) => productsAPI.update(id, formData),
    onSuccess: (data, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["products", id] });
    },
  });
};

// Toggles the "Popular" flag straight from the product list. Optimistic: the
// checkbox flips immediately and rolls back if the request fails.
export const useSetProductPopular = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, isPopular }) => productsAPI.setPopular(id, isPopular),
    onMutate: async ({ id, isPopular }) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });
      const previous = queryClient.getQueryData(["products"]);
      queryClient.setQueryData(["products"], (old) =>
        Array.isArray(old)
          ? old.map((p) => (p._id === id ? { ...p, isPopular } : p))
          : old
      );
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["products"], context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productsAPI.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useDuplicateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productsAPI.duplicate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export const useReorderProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productsAPI.reorder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
