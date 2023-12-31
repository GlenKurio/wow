import CopyInvitationLink from "./CopyInvitationLink";
import InviteUser from "./InviteUser";

import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
function InviteUserCard() {
  const { isLoading, currentUserData } = useCurrentUserData();

  const room = currentUserData.roomId;
  return (
    <article className="flex flex-col gap-2 p-1 ">
      <h1 className="text-center font-bold text-2xl text-accent">
        Invite someone:
      </h1>
      <h2 className="text-center font-bold text-lg -mb-2">
        Here is your invite link:
      </h2>
      <CopyInvitationLink roomId={room} />
      <InviteUser roomId={room} />
    </article>
  );
}

export default InviteUserCard;
