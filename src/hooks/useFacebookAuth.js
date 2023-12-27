import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authWithFacebook as apiAuthWithFacebook } from "../firebase/apiFacebookAuth";

export function useFacebookAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: authWithFacebook, isLoading } = useMutation({
    mutationFn: () => apiAuthWithFacebook(),
    onSuccess: (userDoc) => {
      queryClient.setQueryData(["user-data"], userDoc);
      toast.success("Welcome!");
      navigate("/app");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { authWithFacebook, isLoading };
}
