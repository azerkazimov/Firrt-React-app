import React from "react";

const UserAvatar = ({ user }) => {
  if (!user) return <div>Loading...</div>;
  return (
    <div className="menu">
      <span className="menu__name">{user.name}</span>
      <img src={user.avatar_url} alt="" className="menu__avatar" />
    </div>
  );
};

export default UserAvatar;
