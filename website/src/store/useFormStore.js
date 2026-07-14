import { create } from "zustand";
import axiosInstance from "@/lib/axiosInstance";

export const useFormStore = create((set, get) => ({
    customers: [],
    createdCustomer: {},
    successFlag: true,
    loading: false,
    isProcessing: false,
    error: null,
    fetched: false,
    fetchedTrashed: false,

    createCustomer: async (values) => {
        set({ isProcessing: true });
        try {
            const newCustomer = await axiosInstance.post(`/form/customer`, values);
            set({
                isProcessing: false,
                successFlag: true,
                createdCustomer: newCustomer?.data?.data,
            });
        } catch (err) {
            set({ isProcessing: false, error: err });
        }
    },

    resetSuccessFlag: () => set({ successFlag: false }),  // 👈 added
    clearCache: () => set({ fetched: false }),
}));
