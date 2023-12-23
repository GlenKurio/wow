import UserCard from "./UserCard";

function AllUsers({ users }) {
  return (
    <section className="overflow-scroll max-h-[55vh] ">
      {users.map((user, idx) => (
        <UserCard user={user} key={idx} />
      ))}
    </section>
  );
}

export default AllUsers;
