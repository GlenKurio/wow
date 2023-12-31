function AvatarGroup({ transaction, users }) {
  const participants = transaction.participants;
  const recipient = transaction.recipient;

  function getUsersAvatars() {
    let avatars = [];

    if (recipient && !participants) {
      const foundUser = users.find((user) => user.uid === recipient);
      if (foundUser) {
        avatars.push(foundUser.profilePicURL);
      }
    } else if (!recipient && participants) {
      avatars = participants.map((participant) => {
        const foundUser = users.find((user) => user.uid === participant);
        return foundUser ? foundUser.profilePicURL : null;
      });
    }

    return avatars;
  }

  const avatars = getUsersAvatars();

  return (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      {avatars.map((avatar, idx) => (
        <div className="avatar " key={idx}>
          <div className=" w-8">
            <img src={avatar || "/avatar-placeholder.png"} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AvatarGroup;
