function InviteUser({ roomId }) {
  // Assuming invitationLink contains the generated link

  const invitationLink = `https://who-owes-whom.netlify.app/auth?room=${roomId}`;
  function sendInvitationByEmail() {
    const subject = encodeURIComponent("Join My Room");
    const body = encodeURIComponent(
      `Hey, join my room using this link: ${invitationLink}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      <button
        className="btn btn-outline btn-accent w-full"
        onClick={() => sendInvitationByEmail()}
      >
        Send Link via Email
      </button>
    </div>
  );
}

export default InviteUser;
