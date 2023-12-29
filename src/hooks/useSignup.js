import { useQueryClient, useMutation } from "@tanstack/react-query";

import { signUpWithEmailAndPassword } from "../firebase/apiSignup";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password, roomId }) =>
      signUpWithEmailAndPassword({ fullName, email, password, roomId }),
    onSuccess: (userDoc) => {
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
