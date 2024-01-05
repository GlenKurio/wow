export function getExpensesTotal(transactions) {
  // Get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  // Filter transactions for the current month
  const transactionsThisMonth = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.createdAt);
    return (
      transactionDate.getMonth() === currentMonth &&
      transaction.type === "expense"
    );
  });
  const expensesCount = transactionsThisMonth.length;
  const expensesTotal = transactionsThisMonth.reduce((acc, t) => {
    return acc + t.total;
  }, 0);
  const formatExpenseTotal = expensesTotal.toFixed(2);
  return { formatExpenseTotal, expensesCount };
}
