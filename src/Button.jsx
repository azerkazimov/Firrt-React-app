import React from "react";
const Button = () => {
  const clickFunc = (e) => {
    alert("hi");
  };

  return (
    <button className="btn main" onClick={clickFunc}>
      Click Me
    </button>
  );
};

export default Button;
