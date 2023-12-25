// Register expense - setup react query
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import registerExpense from "../firebase/apiRegisterExpense";

export function useRegisterExpense() {
  const queryClient = useQueryClient();

  const { mutate: registerNewExpense, isLoading: isRegistering } = useMutation({
    mutationFn: registerExpense,
    onSuccess: () => {
      toast.success("New expense successfully added!");
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isRegistering, registerNewExpense };
}
