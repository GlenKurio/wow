//TODO: Show Stats of current user

import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import { getExpensesTotal } from "../../../utils/getExpensesTotal";
import { getTotalTransactionsSumThisMonth } from "../../../utils/getTotalTransactionSumThisMonth";
import { getTransactionsPercent } from "../../../utils/getTransactionsPercent";
import { getTransactionsTotalPercent } from "../../../utils/getTransactionsTotalPercent";
import { getTransfersTotal } from "../../../utils/getTransfersTotal";

function CurrentUserStats({ transactions, users }) {
  const { currentUserData } = useCurrentUserData();
  const allUserTransactions = transactions.filter((transaction) => {
    return transaction.author == currentUserData.uid;
  });
  const percent = getTransactionsPercent(allUserTransactions);
  const percentTotal = getTransactionsTotalPercent(allUserTransactions);
  const totalTransactionsSum =
    getTotalTransactionsSumThisMonth(allUserTransactions);
  const { formatExpenseTotal, expensesCount } =
    getExpensesTotal(allUserTransactions);
  const { formatTransfersTotal, transfersCount } =
    getTransfersTotal(allUserTransactions);

  let balance = 0;

  if (users.length > 1) {
    //find group members
    const otherUsers = users.filter((user) => {
      return user.uid !== currentUserData.uid;
    });
    //find balances with them
    const balances = [];
    otherUsers.map((user) => {
      return balances.push(currentUserData[user.uid]);
    });
    // make one balance with group
    balance = balances.reduce((acc, b) => {
      return acc + b;
    });
  }

  function balanceStatus(balance) {
    let status;
    if (balance == 0) return (status = "even");
    if (balance < 0) return (status = "owes");
    if (balance > 0) return (status = "owe");

    return status;
  }

  const status = balanceStatus(balance);
  const balanceStatusVariants = {
    even: "",
    owe: "text-error",
    owes: "text-success",
  };

  return (
    <article className="flex ">
      <div className="stats shadow py-2">
        <div className="stat">
          <div className="avatar ">
            <div className="w-16 h-16 rounded-full">
              <img
                src={currentUserData.profilePicURL || "/avatar-placeholder.png"}
              />
            </div>
          </div>
        </div>
        <div className="stat ">
          <div className="stat-title">
            <span className="font-semibold">{currentUserData.fullName}</span>
          </div>
          <div className={`stat-value ${balanceStatusVariants[status]}`}>
            {Math.abs(balance.toFixed(2))} <span>$</span>
          </div>
          <div className={`stat-desc ${balanceStatusVariants[status]}`}>
            {status === "even"
              ? `You and group are even`
              : status === "owe"
              ? `You owe group ${Math.abs(balance.toFixed(2))} CAD`
              : status === "owes"
              ? ` Group owes you ${Math.abs(balance.toFixed(2))} CAD`
              : null}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Transactions this month</div>
          <div className="stat-value ">{currentUserData.totalTransactions}</div>
          <div className="stat-desc ">
            {` ${Math.abs(percent)}% ${
              percent >= 0 ? "more" : "less"
            } than last month `}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title ">
            <span className="text-[#4472CA]">Expenses</span> Total this month
          </div>
          <div className="stat-value">{formatExpenseTotal} $</div>
          <div className="stat-desc ">
            From {expensesCount} registered{" "}
            {expensesCount == 1 ? "expense" : "expenses"}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title ">
            <span className="text-[#A288E3]">Transfers</span> Total this month
          </div>
          <div className="stat-value ">{formatTransfersTotal} $</div>
          <div className="stat-desc">
            From {transfersCount} registered{" "}
            {transfersCount == 1 ? "transfer" : "transfers"}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title ">Transactions Total this month</div>
          <div className="stat-value text-base-content">
            {totalTransactionsSum} $
          </div>
          <div className="stat-desc">{` ${Math.abs(percentTotal)}% ${
            percentTotal >= 0 ? "more" : "less"
          } than last month `}</div>
        </div>
      </div>
    </article>
  );
}

export default CurrentUserStats;
