import React, { Component } from "react";
import Live from "./Live";

class Demo extends Component {
  state = {
    number: Math.round(Math.random() * 100),
  };
  show = () => {
    this.setState({
      visible: true,
    });
  };
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  update = () => {
    this.setState({
      number: Math.round(Math.random() * 100),
    });
  };

  render() {
    return (
      <>
        <div>
          <button className="btn" onClick={this.show}>
            Show
          </button>
          <button className="btn" onClick={this.hide}>
            Hide
          </button>
          <button className="btn" onClick={this.update}>
            Update
          </button>
        </div>
        {this.state.visible && <Live number={this.state.number} />}
      </>
    );
  }
}
export default Demo;
