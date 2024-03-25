import React, { useState } from "react";
import Greeting from "./Greeting";

const Auth = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleLogin = () => {
    setIsloggedIn(true);
  };

  const handleLogout = () => {
    setIsloggedIn(false);
  };

  const button = isLoggedIn ? (
    <button onClick={handleLogout} className="main">
      Logout
    </button>
  ) : (
    <button onClick={handleLogin} className="main">
      Login
    </button>
  );

  return (
    <div className="panel main">
      <Greeting isLoggedIn={isLoggedIn} />
      <div>{button}</div>
    </div>
  );
};

export default Auth;
