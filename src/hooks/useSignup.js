import { useQueryClient, useMutation } from "@tanstack/react-query";

import { signUpWithEmailAndPassword } from "../firebase/apiSignUp";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signUpWithEmailAndPassword({ fullName, email, password }),
    onSuccess: ({ userDoc }) => {
      queryClient.setQueryData(["user-data"], userDoc);
      navigate("/app", { replace: true });
    },

    onError: (err) => {
      console.log(err);
      toast.error("Can`t create account right now");
    },
  });

  return { isLoading, signup };
}
