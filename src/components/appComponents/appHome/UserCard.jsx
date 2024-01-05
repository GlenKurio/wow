import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import { useGetTransactions } from "../../../hooks/useGetTransactions";
import { getTotalTransactionsSumThisMonth } from "../../../utils/getTotalTransactionSumThisMonth";
import { getTransactionsPercent } from "../../../utils/getTransactionsPercent";
import { getTransactionsTotalPercent } from "../../../utils/getTransactionsTotalPercent";

function UserCard({ user }) {
  //TODO: show balance with currentUser
  const { currentUserData } = useCurrentUserData();
  const currentUserUid = currentUserData.uid;
  const { transactions } = useGetTransactions(currentUserData.roomId);

  const balance = user[currentUserUid];
  const firstName = user.fullName.split(" ")[0];

  const allUserTransactions = transactions.filter((transaction) => {
    return transaction.author == user.uid;
  });

  const percent = getTransactionsPercent(allUserTransactions);
  const percentTotal = getTransactionsTotalPercent(allUserTransactions);
  const totalTransactionsSum =
    getTotalTransactionsSumThisMonth(allUserTransactions);
  function balanceStatus(balance) {
    let status;
    if (balance == 0) return (status = "even");
    if (balance > 0) return (status = "owes");
    if (balance < 0) return (status = "owe");

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
      <div className="stats shadow">
        <div className="stat">
          <div className="avatar ">
            <div className="w-16 h-16 rounded-full">
              <img src={user.profilePicURL || "/avatar-placeholder.png"} />
            </div>
          </div>
        </div>
        <div className="stat min-w-[275px]">
          <div className="stat-title">
            Balance with <span className="font-semibold">{user.fullName}</span>
          </div>
          <div className={`stat-value ${balanceStatusVariants[status]}`}>
            {balance.toFixed(2)} <span>$</span>
          </div>
          <div className={`stat-desc ${balanceStatusVariants[status]}`}>
            {status === "even"
              ? `You and ${firstName} are even`
              : status === "owe"
              ? `You owe ${firstName} ${balance.toFixed(2)} CAD`
              : status === "owes"
              ? ` ${firstName} owes you ${balance.toFixed(2)} CAD`
              : null}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Transactions</div>
          <div className="stat-value text-primary">
            {user.totalTransactions}
          </div>
          <div className="stat-desc text-primary">
            {percent}% more than last month
          </div>
        </div>
        <div className="stat">
          <div className="stat-title ">Total Transactions Amount</div>
          <div className="stat-value ">{totalTransactionsSum} $</div>
          <div className="stat-desc">{percentTotal}% more than last month</div>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
