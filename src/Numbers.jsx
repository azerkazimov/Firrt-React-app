import React from "react";

const Number = (props) => {
  return (
    <div className="main">
      <span>{props.title} </span>
      <span className="value">{props.number}</span>
    </div>
  );
};

export default Number;
