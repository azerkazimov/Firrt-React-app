import React from "react";

const root = document.querySelector(".root");
const green = "rgba(163, 242, 195, 0.5)";
const blue = "rgba(163, 191, 242, 0.5)";
const red = "rgba(242, 163, 171, 0.5)";


const Color = () =>  {
  const setBodyColor = (color) => {
    root.style.backgroundColor = color;
  };

    return (
      <div className="colors">
        <button
          className="btn main"
          style={{ backgroudColor: green }}
          onClick={setBodyColor.bind(this, green)}
        >
          Green
        </button>
        <button
          className="btn main"
          style={{ backgroundColor: red }}
          onClick={() => setBodyColor(red)}
        >
          Red
        </button>
        <button
          className="btn main"
          style={{ backgroundColor: blue }}
          onClick={() => setBodyColor(blue)}
        >
          Blue
        </button>
      </div>
    );
  
}

export default Color;
