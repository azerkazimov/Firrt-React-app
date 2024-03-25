import React, { Component } from "react";

export class Dimention extends Component {
  state = {
    width: null,
    height: null,
  };

  setDimention = (width, height) => {
    this.setState({
      width,
      height,
    });
  };

  onResize = (event) => {
    const { innerWidth, innerHeight } = event.target;
    this.setDimention(innerWidth, innerHeight);
  };

  componentDidMount() {
    const { innerWidth, innerHeight } = window;
    window.addEventListener("resize", this.onResize);
    this.setDimention(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return (
      <div className="main">
        {`Window width: ${this.state.width}px x height: ${this.state.height}`}
      </div>
    );
  }
}
