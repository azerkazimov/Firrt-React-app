import React, { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
  state = {
    sorting: null,
  };

  setSorting = () => {
    const newSorting = this.state.sorting === "Up" ? "Down" : "Up";
    this.setState({
      sorting: newSorting,
    });
  };
  render() {
    let { users } = this.props;
    if (this.state.sorting) {
      users = [...users];
      users.sort((a, b) =>
        this.state.sorting === "Up" ? a.age - b.age : b.age - a.age
      );
    }

    return (
      <>
        <button className="btn" onClick={this.setSorting}>
          {this.state.sorting || "Sort"}
        </button>
        <ul className="user__list">
          {users.map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </ul>
      </>
    );
  }
}

export default UserList;
