import ActionButton from "../../components/appComponents/appHome/ActionButton";
import AllUsers from "../../components/appComponents/appHome/AllUsers";
import TransactionsTable from "../../components/appComponents/appHome/transactionsTable/TransactionsTable";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useOutletContext } from "react-router-dom";

function AppHome() {
  const currentUserData = useOutletContext();
  const roomId = currentUserData.roomId;
  console.log(roomId);
  const { isLoading, error, users } = useGetUsers(roomId);
  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );
  }
  console.log(users);
  //TODO: Get transactions for transactions table with pagination
  return (
    <main className="relative pb-16">
      <ActionButton />

      <h2 className="px-6 text-2xl text-accent font-bold  capitalize tracking-[1px]  mt-8 mb-4">
        Your balances
      </h2>
      <AllUsers users={users} />
      <h2 className="px-6 text-2xl text-accent font-bold  capitalize tracking-[1px] mt-16 mb-4">
        Transactions
      </h2>

      <TransactionsTable />
    </main>
  );
}

export default AppHome;
