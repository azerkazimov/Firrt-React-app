import React, { Component } from "react";

class Live extends Component {
  
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    return nextProps.number % 2 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
  }
  render() {
    return <div className="main">{this.props.number}</div>;
  }
}
export default Live; 
