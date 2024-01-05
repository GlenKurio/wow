export function getTotalTransactionsSumThisMonth(transactions) {
  // Get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  // Filter transactions for the current month
  const transactionsThisMonth = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.createdAt);
    return transactionDate.getMonth() === currentMonth;
  });
  const totalTransactionsSum = transactionsThisMonth.reduce((acc, t) => {
    return acc + t.total;
  }, 0);

  return totalTransactionsSum.toFixed(2);
}
