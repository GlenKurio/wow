import { useQueryClient, useMutation } from "@tanstack/react-query";

import { apiLogin } from "../firebase/apiLogin";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),
    onSuccess: (userData) => {
      queryClient.setQueryData(["user-data"], userData);
      navigate("/app", { replace: true });
    },
    onError: (err) => {
      toast.error("User with provided credentials not found");
    },
  });

  return { login, isLoading };
}
