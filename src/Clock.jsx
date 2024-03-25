import React, { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  // Not Correct WAY
  // setInterval(() => {
  //     this.setState({
  //         date: new Date()
  //     })
  // }, 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return <div className="main">{date.toLocaleTimeString()}</div>;
};

export default Clock;
