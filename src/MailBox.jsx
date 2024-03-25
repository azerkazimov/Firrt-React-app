import React, { Component } from "react";

class MailBox extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="main mail__message">
        <div className="mail__text">Messages </div>
        {messages.length > 0 && (
          <div className="mail__count">{messages.length}</div>
        )}
      </div>
    );
  }
}
export default MailBox;
