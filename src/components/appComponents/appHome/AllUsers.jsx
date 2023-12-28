import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import CopyInvitationLink from "./CopyInvitationLink";
import InviteUser from "./InviteUser";
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
        <p className="px-4 text-xl font-bold">
          There is no one in here yet. Invite someone!
        </p>
      )}
      <div className=" p-4">
        <div className="flex flex-col  p-2 gap-2">
          <CopyInvitationLink roomId={room} />
          <InviteUser roomId={room} />
        </div>
      </div>
    </section>
  );
}

export default AllUsers;
