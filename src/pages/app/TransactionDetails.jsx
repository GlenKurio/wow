import MoveBackButton from "../../components/MoveBackButton";
import { Link, useParams } from "react-router-dom";
import { useGetTransactionDetails } from "../../hooks/useGetTransactionDetails";
import { useCurrentUserData } from "../../hooks/useGetCurrentUserData";
import { useGetUsers } from "../../hooks/useGetUsers";
import AvatarGroup from "../../components/appComponents/appHome/transactionsTable/AvatarGroup";
import { useDeleteTransaction } from "../../hooks/useDeleteTransaction";

//TODO: get transactions from query cache, as well as users info. Get current auth user. If uathor-uid of transaction == current-auth-user uid - allow edit.
function TransactionDetails() {
  const { isDeleting, deleteTransaction } = useDeleteTransaction();
  const { id } = useParams();
  const { currentUserData } = useCurrentUserData();
  const { users } = useGetUsers(currentUserData.roomId);
  const { isLoading, transactionData } = useGetTransactionDetails(id);
  if (isLoading)
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );

  const currentTransactionAuthor = users.find(
    (user) => user.uid === transactionData.author
  );

  function getUsersNames() {
    let usersTo = [];
    const participants = transactionData.participants;
    const recipient = transactionData.recipient;
    if (recipient && !participants) {
      const foundUser = users.find((user) => user.uid === recipient);
      if (foundUser) {
        usersTo.push(foundUser);
      }
    } else if (!recipient && participants) {
      usersTo = participants.map((participant) => {
        const foundUser = users.find((user) => user.uid === participant);
        return foundUser ? foundUser : null;
      });
    }

    return usersTo;
  }

  const usersTo = getUsersNames();
  return (
    <main className="min-h-screen px-4 pb-28 lg:max-w-[60vw] mx-auto">
      {currentUserData.uid === transactionData.author ? (
        <div className="px-4 fixed bottom-2 left-0 w-full z-20 flex flex-col gap-2 lg:max-w-[60vw] lg:left-[50%] lg:translate-x-[-50%]">
          <button
            onClick={() => deleteTransaction({ id, transactionData })}
            className="btn btn-error w-full flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Delete transaction
          </button>
        </div>
      ) : null}
      <MoveBackButton />
      <h1 className="text-2xl font-bold mb-8 capitalize text-accent">
        Transaction Details
      </h1>
      <section className="flex flex-col text-xl gap-8">
        <div className="text-xl font-semibold flex  flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-2 items-center py-2 border-b-[1px] border-secondary/50 justify-between">
            <span className="text-secondary">Transaction id:</span>
            <span>{id}</span>
          </div>
          <div className="flex  gap-2 py-2 border-b-[1px] border-secondary/50 items-center md:justify-between flex-col md:flex-row ">
            <span className="text-secondary">Transaction type: </span>
            <span
              className={
                transactionData.type === "transfer"
                  ? " bg-[#A288E3] px-4 py-1 rounded-full text-sm max-w-[150px] "
                  : "  bg-[#4472CA] px-4 py-1 rounded-full text-sm max-w-[150px]  "
              }
            >
              {transactionData.type}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-b-[1px] border-secondary/50 flex-col md:flex-row">
          <p className=" text-secondary  font-bold capitalize ">
            Transaction author:
          </p>
          <div className="py-2">
            <figure className="flex items-center gap-2 ">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      currentTransactionAuthor.profilePicURL ||
                      "/avatar-placeholder.png"
                    }
                  />
                </div>
              </div>
              <figcaption className="text-xl ">
                {" "}
                {currentTransactionAuthor.fullName}
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="flex items-center md:justify-between flex-col md:flex-row border-b-[1px] border-secondary/50 py-2">
          <p className=" text-secondary  font-bold capitalize ">
            Transaction title:
          </p>
          <div className="">
            <p className="text-2xl ">{transactionData.title}</p>
          </div>
        </div>
        <div className="flex items-center md:justify-between flex-col md:flex-row  border-b-[1px] border-secondary/50">
          <p className="text-secondary font-bold capitalize ">
            Transaction Total:
          </p>
          <div className=" py-2">
            <p className="text-2xl ">${transactionData.total}</p>
          </div>
        </div>
        {/* TODO: get participants fullName & Avataars */}
        <div className="border-b-[1px] border-secondary/50 flex items-center md:justify-between flex-col md:flex-row">
          {transactionData.type === "transfer" ? (
            <p className="text-secondary font-bold capitalize">Transfer to:</p>
          ) : (
            <p className="text-secondary p-1 font-bold capitalize">
              Split with:
            </p>
          )}
          <div className="py-2 flex gap-4">
            {usersTo.map((user) => (
              <div
                className="tooltip  tooltip-accent "
                data-tip={user.fullName}
              >
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.profilePicURL || "/avatar-placeholder.png"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center md:justify-between flex-col md:flex-row border-b-[1px] border-secondary/50 py-2 ">
          <p className="text-secondary font-bold capitalize">
            Transaction Description:
          </p>
          <div className="">
            <p className="text-xl">
              {transactionData.description ? (
                transactionData.description
              ) : (
                <span className="text-sm font-bold italic text-secondary/50">
                  No description for this transaction
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center md:justify-between flex-col md:items-start  w-full border-b-[1px] border-secondary/50 py-2">
          <p className="text-secondary font-bold capitalize">Image</p>
          <div className="">
            {transactionData.img ? (
              <figure className="w-full">
                <img
                  className="w-[100%]"
                  src={transactionData.img}
                  alt="Image which show details or a proof of a transaction"
                />
              </figure>
            ) : (
              <span className="text-sm font-bold italic text-secondary/50">
                No image for this transaction
              </span>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TransactionDetails;
