import React from "react";
import Number from "./Numbers";
import PropTypes from "prop-types";

import { useState, useEffect, useMemo } from "react";

export const Update = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let intervalId;

    if (number < 10) {
      intervalId = setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [number]);

  const EvenNum = useMemo(() => {
    return number % 2 === 0 ? (
      <Number title="Even numbers" number={number} />
    ) : null;
  }, [number]);

  return (
    <>
      {EvenNum}
      <Number title="Numbers" number={number} />
    </>
  );
};

Update.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};
