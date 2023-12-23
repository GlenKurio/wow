function AvatarGroup({ transaction, users }) {
  const participants = transaction.participants;
  console.log(participants);
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
  console.log(avatars);
  return (
    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
      {avatars.map((avatar) => (
        <div className="avatar ">
          <div className=" w-8">
            <img src={avatar || "/avatar-placeholder.png"} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AvatarGroup;
