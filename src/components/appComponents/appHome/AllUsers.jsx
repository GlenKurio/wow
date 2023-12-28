import UserCard from "./UserCard";

function AllUsers({ users }) {
  return (
    <section className="overflow-scroll max-h-[55vh] ">
      {users
        ? users.map((user, idx) => <UserCard user={user} key={idx} />)
        : "There is no one in here yet. Invite someone!"}
    </section>
  );
}

export default AllUsers;
