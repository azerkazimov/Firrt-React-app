import React from "react";
import "./index.css";


// ====================================================
// ====================================================
// ====================================================
export const UserGit = ({ user }) => {
  if(!user) return <div>Loading...</div>

  return (
    <div className="user main">
      <div className="user-info">
        <h3>{`Welcome ${user.name || "User"}, to our course`}</h3>
      </div>
      <img className="user__avatar" src={user.avatar_url} alt="User Avatar" />
    </div>
  );
};

// ====================================================

