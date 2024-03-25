import Clock from "./Clock";
import React from "react";
import { useState } from "react";

export const ClockApp = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className="btn" onClick={toggle}>
        Toggle Clock
      </button>
      <div>{visible && <Clock />}</div>
    </>
  );
};
