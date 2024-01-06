import ActionButton from "../../components/appComponents/appHome/ActionButton";
import AllUsers from "../../components/appComponents/appHome/AllUsers";
import CurrentUserStats from "../../components/appComponents/appHome/CurrentUserStats";
import TimeRangeSelector from "../../components/appComponents/appHome/TimeRangeSelector";
import TransactionsTable from "../../components/appComponents/appHome/transactionsTable/TransactionsTable";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useOutletContext } from "react-router-dom";

function AppHome() {
  const currentUserData = useOutletContext();
  const roomId = currentUserData.roomId;
  const { isLoadingTransactions, transactionsError, transactions } =
    useGetTransactions(roomId);
  const { isLoading, error, users } = useGetUsers(roomId);
  // TODO: display skeleton here
  if (isLoading || isLoadingTransactions) {
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );
  }

  //TODO: Get transactions for transactions table with pagination
  return (
    <main className="relative pb-16 2xl:max-w-[80vw] mx-auto">
      <ActionButton />
      <div className="flex items-center gap-4 m-4">
        <p>Show stats for: </p>
        <TimeRangeSelector />
      </div>
      <CurrentUserStats transactions={transactions} users={users} />
      <h2 className="px-6 text-3xl lg:text-4xl text-accent font-bold  capitalize tracking-[1px]  mt-8 mb-4">
        Balances:
      </h2>
      <AllUsers users={users} />
      <h2 className="px-6 text-3xl lg:text-4xl text-accent font-bold  capitalize tracking-[1px] mt-16 mb-4">
        Transactions history:
      </h2>

      <TransactionsTable transactions={transactions} users={users} />
    </main>
  );
}

export default AppHome;
