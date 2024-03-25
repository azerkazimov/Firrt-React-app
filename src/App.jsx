import React, { useState, useEffect, useMemo } from "react";
import Header from "./Header";
import fetchUser from "./FetchUser";


import Counter from "./Counter";
import Clock from "./Clock";
import Number from "./Numbers";
import PropTypes from "prop-types";
import Dialog from "./Dialog";

export const Head = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId, setUser);
  }, [userId]);

  return (
    <div className="page">
      <Header user={user} />
    </div>
  );
};


export const CounterApp = () => {
  return (
    <>
      <Counter start={0} end={15} interval={100} />
      <Counter start={0} end={250} interval={1} />
    </>
  );
};


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

export const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hideDialog = () => {
    setIsOpen(false);
  };

  const showDialog = () => {
    setIsOpen(true);
  };

  const title = <p>Some Title</p>;
  const content = <p>Lorem ipsum dolor sit adipisci!</p>;
  return (
    <div className="main">
      <button className="main" onClick={showDialog}>
        Show
      </button>
      <Dialog title={title} isOpen={isOpen} onClose={hideDialog}>
        {content}
      </Dialog>
    </div>
  );
};
