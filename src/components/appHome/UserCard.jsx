function UserCard({ user }) {
  const balance = user.balanceWithCurrentUser;
  const firstName = user.fullName.split(" ")[0];

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
          <div className="avatar">
            <div className="w-20 h-20 rounded">
              <img src={user.avatar} />
            </div>
          </div>
        </div>
        <div className="stat min-w-[275px]">
          <div className="stat-title">
            Balance with <span className="font-semibold">{user.fullName}</span>
          </div>
          <div className={`stat-value ${balanceStatusVariants[status]}`}>
            {user.balanceWithCurrentUser}$
          </div>
          <div className={`stat-desc ${balanceStatusVariants[status]}`}>
            {status === "even"
              ? `You and ${firstName} are even`
              : status === "owe"
              ? `You owe ${firstName} ${user.balanceWithCurrentUser} CAD`
              : status === "owes"
              ? ` ${firstName} owes you ${user.balanceWithCurrentUser} CAD`
              : null}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Transactions This Month</div>
          <div className="stat-value">{user.transactions}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Transactions Amount This Month</div>
          <div className="stat-value">{user.transactions}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
