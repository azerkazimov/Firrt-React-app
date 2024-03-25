import React, { useState, useEffect } from "react";
import Header from "./Header";
import fetchUser from "./FetchUser";


export const Head = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId, setUser);
  }, [userId]);

  return (
    <div className="page">
      <Header user={user} />
    </div>
  );
};





