import { apiGetTransactions } from "../firebase/apiGetTransactions";
import { useQuery } from "@tanstack/react-query";

export function useGetTransactions(roomId) {
  const {
    isLoading,
    data: transactions,
    error,
  } = useQuery({
    queryKey: ["transactions", roomId],
    queryFn: () => apiGetTransactions({ roomId }),
  });

  return { isLoading, transactions, error };
}
