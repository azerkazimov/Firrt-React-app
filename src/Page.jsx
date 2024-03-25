import React from "react";
import Message from "./Message";
import { useState } from "react";

const textOne = "Hello, World!";
const textTWo = "Another exciting text";

const Select = () => {
  const [text, setText] = useState(null);

  return (
    <div className="page">
      <Message text={text} />
      <div className="actions">
        <div className="btn" onClick={() => setText(textOne)}>
          first
        </div>
        <div className="btn" onClick={() => setText(textTWo)}>
          second
        </div>
        <div className="btn" onClick={() => setText(null)}>
          clear
        </div>
      </div>
    </div>
  );
};
export default Select;
