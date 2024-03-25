import React, { Component } from "react";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.decrement = this.decrement.bind(this);
  }
  //   Must bind() this in constructor
  decrement() {
    this.setState({
      score: this.state.score - 1,
    });
  }
  //   Automatically bind
  increment = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };
  reset = () => {
    this.setState({
      score: 0,
    });
  };
  render() {
    return (
      <div className="score">
        <button className="score__button main" onClick={this.decrement}>
          -
        </button>
        <button className="score__value main" onClick={() => this.reset()}>
          {this.state.score}
        </button>
        <button className="score__button main" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Score;
