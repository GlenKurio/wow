import AllUsers from "../../components/appHome/AllUsers";

function AppHome() {
  return (
    <main className="">
      <h2 className="px-6 text-lg font-bold  uppercase tracking-[1px]  mt-8 mb-4">
        Your balances:
      </h2>
      <AllUsers />
      <h2 className="px-6 text-lg font-bold  uppercase tracking-[1px] mt-8 mb-4">
        Transactions:
      </h2>
    </main>
  );
}

export default AppHome;
