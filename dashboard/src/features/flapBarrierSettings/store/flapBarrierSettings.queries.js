import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { flapBarrierSettingsAPI } from "../api/flapBarrierSettings.api";

export const useFlapBarrierSettings = () => {
  return useQuery({
    queryKey: ["flapBarrierSettings"],
    queryFn: flapBarrierSettingsAPI.get,
  });
};

export const useUpdateFlapBarrierSettings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: flapBarrierSettingsAPI.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["flapBarrierSettings"] });
    },
  });
};
