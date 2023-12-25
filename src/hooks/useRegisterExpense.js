// Register expense - setup react query
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import registerExpense from "../firebase/apiRegisterExpense";
import { useNavigate } from "react-router-dom";

export function useRegisterExpense() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: registerNewExpense, isLoading: isRegistering } = useMutation({
    mutationFn: registerExpense,
    onSuccess: () => {
      toast.success("New expense successfully added!");
      navigate("/app");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isRegistering, registerNewExpense };
}
