//TODO: Show Stats of current user

import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import { getTransactionsPercent } from "../../../utils/getTransactionsPercent";

function CurrentUserStats({ transactions }) {
  const { currentUserData } = useCurrentUserData();
  const allUserTransactions = transactions.filter((transaction) => {
    return transaction.author == currentUserData.uid;
  });
  const percent = getTransactionsPercent(allUserTransactions);
  return (
    <article>
      Current User Stats <span>{percent}%</span>
    </article>
  );
}

export default CurrentUserStats;
