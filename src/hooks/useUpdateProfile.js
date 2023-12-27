import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";

import { updateProfile as apiUpdateProfile } from "../firebase/apiUpdateProfile";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: ({ inputs, selectedFile, currentUserData }) =>
      apiUpdateProfile({ inputs, selectedFile, currentUserData }),
    onSuccess: ({ updatedUser }) => {
      toast.success("Changes succesfully saved!");
      queryClient.setQueryData(["user-data"], updatedUser);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateProfile, isUpdating };
}
