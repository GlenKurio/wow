import { apiGetTransactions } from "../firebase/apiGetTransactions";
import { useQuery } from "@tanstack/react-query";

export function useGetTransactions(roomId) {
  const {
    isLoading: isLoadingTransactions,
    data: transactions,
    error: transactionsError,
  } = useQuery({
    queryKey: ["transactions", roomId],
    queryFn: () => apiGetTransactions({ roomId }),
  });

  return { isLoadingTransactions, transactions, transactionsError };
}
