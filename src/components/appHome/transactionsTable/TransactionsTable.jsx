import AvatarGroup from "./AvatarGroup";

const transactions = [
  {
    user: "Oleh Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    type: "transfer",
    img: "/public/avatars/polina.png",
    participants: ["Polina Shaban", "Vita Minko"],
  },

  {
    user: "Vita Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "expense",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Polina Shaban",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "transfer",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Oleh Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    type: "transfer",
    participants: ["Polina Shaban", "Vita Minko"],
    img: null,
  },

  {
    user: "Vita Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "expense",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Polina Shaban",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "transfer",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Oleh Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    type: "transfer",
    participants: ["Polina Shaban", "Vita Minko"],

    img: null,
  },

  {
    user: "Vita Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "expense",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Vita Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "expense",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Vita Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "expense",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Vita Minko",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "expense",
    participants: ["Polina Shaban", "Vita Minko"],
  },
  {
    user: "Polina Shaban",
    title: "Car Insurance",
    description: "Monthly payment for car insurance to MPI",
    total: 145,
    img: null,
    type: "transfer",
    participants: ["", ""],
  },
];

function TransactionsTable({ users }) {
  const transactionTypes = {
    transfer: "text-success ",
    expense: "text-error",
  };
  function getUserInfo(transaction) {
    const currentTransactionUser = users.find(
      (user) => user.fullName === transaction.user
    );

    if (currentTransactionUser) {
      return {
        avatar: currentTransactionUser.avatar,
        fullName: currentTransactionUser.fullName,
      };
    }

    return {
      avatar: "",
    };
  }

  return (
    <div className="overflow-x-auto">
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
          {transactions.map((transaction) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="rounded-full w-12 h-12">
                      <img
                        src={getUserInfo(transaction).avatar}
                        alt={`image of ${transaction.user}`}
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
                <button className="btn btn-ghost btn-xs text-accent">
                  details
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default TransactionsTable;
