import React from "react";
import { useState } from "react";
import Dialog from "./Dialog";

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
