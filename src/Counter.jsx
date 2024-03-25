import React, { useEffect, useState } from "react";

const Counter = ({ start, end, interval }) => {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter < end) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(intervalId);
      }
    }, interval);
    return () => clearInterval(intervalId);
  }, [counter, end, interval]);

  return <div className="counter main"> {counter}</div>;
};

export default Counter;
