//TODO: Show Stats of current user

import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import { getTransactionsPercent } from "../../../utils/getTransactionsPercent";
import { getTransactionsTotalPercent } from "../../../utils/getTransactionsTotalPercent";

function CurrentUserStats({ transactions }) {
  const { currentUserData } = useCurrentUserData();
  const allUserTransactions = transactions.filter((transaction) => {
    return transaction.author == currentUserData.uid;
  });
  const percent = getTransactionsPercent(allUserTransactions);
  const percentTotal = getTransactionsTotalPercent(allUserTransactions);
  return (
    <article>
      Current User Stats <span>{percent}%</span>
      Current User Stats <span>{percentTotal}% TOTAL</span>
    </article>
  );
}

export default CurrentUserStats;
