import React from "react";
import { UserGit } from "./User";
import Button from "./Button";
import Score from "./Score";
import Color from "./Color";
import UserList from "./UserList";
import { users } from "./userr";
import Demo from "./Demo";
import Search from "./Search";
import { CounterApp, ClockApp, PopUp } from "./App";


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
