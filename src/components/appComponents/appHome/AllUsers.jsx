import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import InviteUserCard from "../InviteUserCard";

import UserCard from "./UserCard";
// TODO: get all users in room, add UI to show personal info of user
function AllUsers({ users }) {
  const { isLoading, currentUserData } = useCurrentUserData();
  const room = currentUserData.roomId;
  if (isLoading) return <div>Loading</div>;

  const usersToDisplay = users.filter(
    (user) => user.uid !== currentUserData.uid
  );
  console.log(usersToDisplay);
  return (
    <section className="overflow-scroll max-h-[55vh] ">
      {usersToDisplay ? (
        usersToDisplay.map((user, idx) => <UserCard user={user} key={idx} />)
      ) : (
        <>
          <div className=" p-4">
            <InviteUserCard roomId={room} />
          </div>
        </>
      )}
    </section>
  );
}

export default AllUsers;
