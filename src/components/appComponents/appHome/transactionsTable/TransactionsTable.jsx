import { Link } from "react-router-dom";
import AvatarGroup from "./AvatarGroup";

function TransactionsTable({ users, transactions }) {
  const transactionTypes = {
    transfer: "text-[#A288E3] ",
    expense: "text-[#4472CA]",
  };

  // get user info for transaction
  function getUserInfo(transaction) {
    const currentTransactionUser = users.find(
      (user) => user.uid === transaction.author
    );

    if (currentTransactionUser) {
      return {
        avatar: currentTransactionUser.profilePicURL,
        fullName: currentTransactionUser.fullName,
      };
    }

    return {
      avatar: "",
    };
  }

  return (
    <>
      {transactions.length > 0 && users ? (
        <div>
          <div className="overflow-x-auto mb-2">
            <table className="table table-sm table-pin-rows table-pin-cols">
              {/* head */}
              <thead>
                <tr>
                  <th>User</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Total</th>
                  <th>With Whom</th>
                  <th>Image</th>
                  <th>More Info</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="rounded-full w-12 h-12">
                            <img
                              src={getUserInfo(transaction).avatar}
                              alt={`image of ${
                                getUserInfo(transaction).fullName
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {getUserInfo(transaction).fullName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{transaction.title}</td>
                    <td className={` ${transactionTypes[transaction.type]}`}>
                      {transaction.type}
                    </td>
                    <td>${transaction.total}</td>
                    <td>
                      <AvatarGroup transaction={transaction} users={users} />
                    </td>
                    <td>
                      {transaction.img ? (
                        <span className="text-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-error">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                    <th>
                      <Link
                        to={`transaction-details/${transaction.id}`}
                        className="btn btn-ghost btn-xs text-accent"
                      >
                        details
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>

              <tfoot></tfoot>
            </table>
          </div>
          <div className="flex justify-center">
            <div className="join mx-auto mb-4 text-xl">
              <button className="join-item btn text-xl bg-accent/25 hover:bg-accent/35">
                «
              </button>
              <button className="join-item btn text-xl bg-accent/25 hover:bg-accent/35">
                Page 1
              </button>
              <button className="join-item btn text-xl bg-accent/25 hover:bg-accent/35">
                »
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto mb-2">
          <table className="table table-sm table-pin-rows table-pin-cols">
            {/* head */}
            <thead>
              <tr>
                <th>User</th>
                <th>Title</th>
                <th>Type</th>
                <th>Total</th>
                <th>With Whom</th>
                <th>Image</th>
                <th>More Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6}>
                  <p className="text-center font-bold text-xl">
                    No transactions to show yet
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default TransactionsTable;
