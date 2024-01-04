import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import { useGetTransactions } from "../../../hooks/useGetTransactions";
import InviteUserCard from "../inviteUser/InviteUserCard";

import UserCard from "./UserCard";
// TODO: make real info to display ; REDESIGN the stats

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
