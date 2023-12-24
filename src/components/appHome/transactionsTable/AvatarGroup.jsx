function AvatarGroup({ transaction, users }) {
  const participants = transaction.participants;

  function getUsersAvatars() {
    if (
      !participants ||
      participants.length === 0 ||
      !users ||
      users.length === 0
    ) {
      return [];
    }

    const avatars = participants.map((participant) => {
      const foundUser = users.find((user) => user.fullName === participant);
      return foundUser ? foundUser.avatar : null;
    });

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
