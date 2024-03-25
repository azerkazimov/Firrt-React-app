import Counter from "./Counter";
import React from "react";



export const CounterApp = () => {
    return (
      <>
        <Counter start={0} end={15} interval={100} />
        <Counter start={0} end={250} interval={1} />
      </>
    );
  };