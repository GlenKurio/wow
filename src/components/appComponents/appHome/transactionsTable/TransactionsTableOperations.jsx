import Filter from "./Filter";
import Sort from "./Sort";

function TransactionsTableOperations({ users }) {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "transfer", label: "Transfer" },
    { value: "expense", label: "Expense" },
  ];
  // add users to the filter options
  const authorOptions = users.map((user) => {
    filterOptions.push({ value: `${user.uid}`, label: `${user.fullName}` });
  });

  return (
    <div className="px-4">
      <Filter filterField="filter" options={filterOptions} />
    </div>
  );
}

export default TransactionsTableOperations;
