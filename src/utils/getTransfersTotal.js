export function getTransfersTotal(transactions) {
  // Get the current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  // Filter transactions for the current month
  const transactionsThisMonth = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.createdAt);
    return (
      transactionDate.getMonth() === currentMonth &&
      transaction.type === "transfer"
    );
  });
  const transfersCount = transactionsThisMonth.length;
  const transfersTotal = transactionsThisMonth.reduce((acc, t) => {
    return acc + t.total;
  }, 0);
  const formatTransfersTotal = transfersTotal.toFixed(2);
  return { formatTransfersTotal, transfersCount };
}
