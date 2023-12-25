// Register expense - setup react query
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import registerTransfer from "../firebase/apiRegisterTransfer";
import { useNavigate } from "react-router-dom";

export function useRegisterTransfer() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: registerNewTransfer, isLoading: isRegistering } = useMutation(
    {
      mutationFn: registerTransfer,
      onSuccess: () => {
        toast.success("Transfer successfully sent!");
        navigate("/app");
        queryClient.invalidateQueries({ queryKey: ["transfers"] });
      },
      onError: (err) => toast.error(err.message),
    }
  );
  return { isRegistering, registerNewTransfer };
}
