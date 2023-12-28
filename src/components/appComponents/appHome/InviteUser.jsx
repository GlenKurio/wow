function InviteUser() {
  // Assuming invitationLink contains the generated link
  const roomId = "12412casf";
  const invitationLink = ``;
  function sendInvitationByEmail() {
    const subject = encodeURIComponent("Join My Room");
    const body = encodeURIComponent(
      `Hey, join my room using this link: ${invitationLink}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return <div></div>;
}

export default InviteUser;
