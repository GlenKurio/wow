import { useSearchParams } from "react-router-dom";

export function useFilter(transactions) {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("filter");
  const chosenFilter =
    !filterValue || filterValue === "all"
      ? null
      : filterValue === "expense" || filterValue === "transfer"
      ? { field: "type", value: filterValue }
      : { field: "author", value: filterValue };
  let filteredTransactions = transactions;
  if (chosenFilter !== null) {
    filteredTransactions = transactions.filter((t) => {
      return t[chosenFilter.field] === chosenFilter.value;
    });
  }

  return filteredTransactions;
}
