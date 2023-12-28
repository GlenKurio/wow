import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import CopyInvitationLink from "./CopyInvitationLink";
import InviteUser from "./InviteUser";
import UserCard from "./UserCard";

function AllUsers({ users }) {
  const { isLoading, currentUserData } = useCurrentUserData();

  if (isLoading) return <div>Loading</div>;

  const room = currentUserData.roomId;
  return (
    <section className="overflow-scroll max-h-[55vh] ">
      {users ? (
        users.map((user, idx) => <UserCard user={user} key={idx} />)
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
