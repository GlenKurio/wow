import { apiGetTransactionDetails } from "../firebase/apiGetTransactionDetails";
import { useQuery } from "@tanstack/react-query";
export function useGetTransactionDetails(id) {
  const {
    isLoading,
    error,
    data: transactionData,
  } = useQuery({
    queryKey: ["transaction-data", id],
    queryFn: () => apiGetTransactionDetails(id),
    retry: false,
  });
  return { isLoading, transactionData, error };
}
