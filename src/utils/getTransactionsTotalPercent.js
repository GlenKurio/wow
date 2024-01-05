export function getTransactionsTotalPercent(transactions) {
  // Get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  // Filter transactions for the current month
  const transactionsThisMonth = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.createdAt);
    return transactionDate.getMonth() === currentMonth;
  });

  // Get the previous month
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  // Filter transactions for the previous month
  const transactionsLastMonth = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.createdAt);
    return transactionDate.getMonth() === previousMonth;
  });

  const totalOfTransactionsThisMonth = transactionsThisMonth.reduce(
    (acc, transaction) => {
      return acc + transaction.total;
    },
    0
  );
  console.log("transactions TOTAL this month:", totalOfTransactionsThisMonth);
  const totalOfTransactionsLastMonth = transactionsLastMonth.reduce(
    (acc, t) => {
      return acc + t.total;
    },
    0
  );

  console.log("transactions TOTAL last month:", totalOfTransactionsLastMonth);
  let percentTotal;
  if (totalOfTransactionsLastMonth > 0) {
    percentTotal =
      ((totalOfTransactionsThisMonth - totalOfTransactionsLastMonth) /
        totalOfTransactionsLastMonth) *
      100;
  } else if (
    totalOfTransactionsLastMonth === 0 &&
    totalOfTransactionsThisMonth > 0
  ) {
    percentTotal = 100;
  } else {
    percentTotal = 0;
  }

  return percentTotal.toFixed(0);
}
