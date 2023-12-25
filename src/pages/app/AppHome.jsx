import ActionButton from "../../components/appComponents/appHome/ActionButton";
import AllUsers from "../../components/appComponents/appHome/AllUsers";
import TransactionsTable from "../../components/appComponents/appHome/transactionsTable/TransactionsTable";
const users = [
  {
    uid: 1,
    fullName: "Oleh Minko",
    avatar: "/avatars/portrait-ole.png",
    balanceWithCurrentUser: 0,
    balanceWithPolina: 0,
    balanceWithVita: 100,
    transactions: 10,
  },
  {
    uid: 2,
    fullName: "Polina Shaban",
    avatar: "/avatars/polina.png",
    balanceWithCurrentUser: -200,
    balanceWithOleh: 0,
    balanceWithVita: -300,
    transactions: 10,
  },
  {
    uid: 3,
    fullName: "Vita Minko",
    avatar: "/avatars/vita.png",
    balanceWithCurrentUser: 200,
    balanceWithOleh: -100,
    balanceWithPolina: 300,
    transactions: 10,
  },
];
function AppHome() {
  return (
    <main className="relative pb-16">
      <ActionButton />

      <h2 className="px-6 text-2xl font-bold  uppercase tracking-[1px]  mt-8 mb-4">
        Your balances:
      </h2>
      <AllUsers users={users} />
      <h2 className="px-6 text-2xl font-bold  uppercase tracking-[1px] mt-16 mb-4">
        Transactions:
      </h2>
      <TransactionsTable users={users} />
    </main>
  );
}

export default AppHome;
