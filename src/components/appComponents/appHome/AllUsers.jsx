import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import InviteUserCard from "../inviteUser/InviteUserCard";

import UserCard from "./UserCard";
// TODO: get all users in room, add UI to show personal info of user

function AllUsers({ users }) {
  const { currentUserData } = useCurrentUserData();

  const usersToDisplay = users.filter(
    (user) => user.uid !== currentUserData.uid
  );

  return (
    <section className="overflow-scroll max-h-[55vh] ">
      {usersToDisplay ? (
        usersToDisplay.map((user, idx) => <UserCard user={user} key={idx} />)
      ) : (
        <>
          <div className=" p-4">
            <InviteUserCard />
          </div>
        </>
      )}
    </section>
  );
}

export default AllUsers;
