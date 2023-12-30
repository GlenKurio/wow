import { toast } from "react-hot-toast";

import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyInvitationLink({ roomId }) {
  const invitationLink = `https://who-owes-whom.netlify.app/auth?room=${roomId}`;
  return (
    <div className="">
      <CopyToClipboard
        text={invitationLink}
        onCopy={() => toast.success("Copied")}
      >
        <div className="flex flex-col gap-2">
          <span className="w-full italic text-center">{invitationLink}</span>
          <button className="btn btn-outline btn-accent">
            Copy to clipboard
          </button>
        </div>
      </CopyToClipboard>
    </div>
  );
}

export default CopyInvitationLink;
