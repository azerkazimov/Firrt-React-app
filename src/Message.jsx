import React from "react";

const Message = (props) => {
  const { text } = props;
  if (!text) return;
  return <divc className="message main">{text}</divc>;
};

export default Message;
