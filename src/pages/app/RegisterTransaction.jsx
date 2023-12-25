import { useState } from "react";
import Expense from "../../components/appComponents/appNewTransaction/Expense";
import Transfer from "../../components/appComponents/appNewTransaction/Transfer";
import MoveBackButton from "../../components/MoveBackButton";

function RegisterTransaction() {
  const [isExpense, setIsExpense] = useState(true);

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
      {isExpense ? <Expense /> : <Transfer />}
    </main>
  );
}

export default RegisterTransaction;
