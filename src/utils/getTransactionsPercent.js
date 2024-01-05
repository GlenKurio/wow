export function getTransactionsPercent(transactions) {
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

  const numberOfTransactionsThisMonth = transactionsThisMonth.length;
  const numberOfTransactionsLastMonth = transactionsLastMonth.length;

  let percent;
  if (numberOfTransactionsLastMonth > 0) {
    percent =
      ((numberOfTransactionsThisMonth - numberOfTransactionsLastMonth) /
        numberOfTransactionsLastMonth) *
      100;
  } else if (
    numberOfTransactionsLastMonth === 0 &&
    numberOfTransactionsThisMonth > 0
  ) {
    percent = 100;
  } else {
    percent = 0;
  }

  return percent;
}
