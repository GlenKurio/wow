import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authWithGoogle as apiAuthWithGoogle } from "../firebase/apiGoogleAuth";

export function useGoogleAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: authWithGoogle, isLoading } = useMutation({
    mutationFn: () => apiAuthWithGoogle(),
    onSuccess: (userDoc) => {
      queryClient.setQueryData(["user-data"], userDoc);
      toast.success("Welcome!");
      navigate("/app");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { authWithGoogle, isLoading };
}
