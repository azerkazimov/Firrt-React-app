import React from "react";
import { UserGit } from "./UserGit";
import Button from "./Button";
import Score from "./Score";
import Color from "./Color";
import UserList from "./UserList";
import { users } from "./userr";
import Demo from "./Demo";
import Search from "./Search";
import { PopUp } from "./PopUp";
import { CounterApp } from "./CounterApp";
import { ClockApp } from "./ClockApp";



const Main = (user) => {

  return (
    <div className="page">
      <UserGit user={user} />
      <Search />
      <ClockApp />
      <PopUp />
      <Button />
      <Demo />
      <CounterApp />
      <Score />
      <Color />
      <UserList users={users} />
    </div>
  );
};

export default Main;
