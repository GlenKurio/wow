import CopyInvitationLink from "./appHome/CopyInvitationLink";
import InviteUser from "./appHome/InviteUser";

function InviteUserCard({ roomId }) {
  return (
    <article className="flex flex-col gap-2 p-1 ">
      <h1 className="text-center font-bold text-2xl text-accent">
        Invite someone:
      </h1>
      <h2 className="text-center font-bold text-lg -mb-2">
        Here is your invite link:
      </h2>
      <CopyInvitationLink roomId={roomId} />
      <InviteUser roomId={roomId} />
    </article>
  );
}

export default InviteUserCard;
