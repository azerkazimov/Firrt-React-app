import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <li className="user__item">
        <span>{name} </span>
        <span>{age}</span>
      </li>
    );
  }
}

export default UserItem;
