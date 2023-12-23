import UserCard from "./UserCard";

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
  {
    uid: 3,
    fullName: "Vita Minko",
    avatar: "/avatars/vita.png",
    balanceWithCurrentUser: 200,
    balanceWithOleh: -100,
    balanceWithPolina: 300,
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

function AllUsers() {
  return (
    <section className="overflow-scroll max-h-[55vh] shadow-xl">
      {users.map((user, idx) => (
        <UserCard user={user} key={idx} />
      ))}
    </section>
  );
}

export default AllUsers;
