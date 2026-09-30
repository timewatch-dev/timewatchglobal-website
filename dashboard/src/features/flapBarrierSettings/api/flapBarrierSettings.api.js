import axiosInstance from "@/lib/axiosInstance";

export const flapBarrierSettingsAPI = {
  get: async () => {
    const res = await axiosInstance.get("/flap-barrier-config");
    return res.data?.config;
  },

  update: async ({ wideLaneMinWidth, wideLaneMaxWidth }) => {
    const res = await axiosInstance.put("/flap-barrier-config", {
      wideLaneMinWidth,
      wideLaneMaxWidth,
    });
    return res.data?.config;
  },
};
