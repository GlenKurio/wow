import { useEffect, useState } from "react";
import Expense from "../../components/appComponents/transactions/registerTransaction/Expense";
import Transfer from "../../components/appComponents/transactions/registerTransaction/Transfer";
import MoveBackButton from "../../components/MoveBackButton";
import { useOutletContext } from "react-router-dom";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useSearchParams } from "react-router-dom";
function RegisterTransaction() {
  const [isExpense, setIsExpense] = useState(true);
  const currentUserData = useOutletContext();
  const roomId = currentUserData.roomId;
  const [searchParams, setSearchParams] = useSearchParams();
  const transactionType = searchParams.get("type");
  useEffect(() => {
    if (transactionType && transactionType !== "expense") {
      setIsExpense(false);
    } else {
      setIsExpense(true); // Set default value to true if not present or "expense"
    }
  }, [transactionType]);

  const { isLoading, error, users } = useGetUsers(roomId);
  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );
  }

  return (
    <main className="px-4 pb-8">
      <MoveBackButton />
      <div className="join grid grid-cols-2">
        <button
          className={
            isExpense
              ? "join-item btn btn-accent"
              : "join-item btn btn-accent btn-outline"
          }
          onClick={() => setIsExpense(true)}
        >
          Expense
        </button>
        <button
          className={
            isExpense
              ? "join-item btn btn-accent btn-outline"
              : "join-item btn btn-accent "
          }
          onClick={() => setIsExpense(false)}
        >
          Transfer
        </button>
      </div>
      {isExpense ? (
        <Expense users={users} currentUserData={currentUserData} />
      ) : (
        <Transfer users={users} currentUserData={currentUserData} />
      )}
    </main>
  );
}

export default RegisterTransaction;
