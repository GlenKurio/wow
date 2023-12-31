import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteTransaction } from "../firebase/apiDeleteTransaction";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useDeleteTransaction() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isDeleting, mutate: deleteTransaction } = useMutation({
    mutationFn: apiDeleteTransaction,
    onSuccess: () => {
      toast.success("Transaction Successfully deleted");
      navigate("/app");
      queryClient.invalidateQueries({
        queryKey: ["trnsactions"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTransaction };
}
