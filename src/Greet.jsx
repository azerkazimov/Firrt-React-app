import React from "react";


export const GreetMe = ({ name, tech }) => {
  return (
    <div className="wrapper">
      <div className="greeting main">
        <div className="greeting__title">
          <h1>{`Hello, ${name}`}</h1>
        </div>
        <div className="greeting__content">
          <h4>{`You Learn ${tech}`}</h4>
        </div>
      </div>

    </div>
  );
};
