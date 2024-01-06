import { useSearchParams } from "react-router-dom";
import { apiGetTransactions } from "../firebase/apiGetTransactions";
import { useQuery } from "@tanstack/react-query";

export function useGetTransactions(roomId) {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("filter");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : filterValue === "expense" || filterValue === "transfer"
      ? { field: "type", value: filterValue }
      : { field: "author", value: filterValue };

  const {
    isLoading: isLoadingTransactions,
    data: transactions,
    error: transactionsError,
  } = useQuery({
    queryKey: ["transactions", roomId, filter],
    queryFn: () => apiGetTransactions({ roomId, filter }),
  });

  return { isLoadingTransactions, transactions, transactionsError };
}
