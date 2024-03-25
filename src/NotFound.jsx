import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="main">
      <h1>404 Not Found</h1>
      
      <Link to="/">To Main</Link>
    </div>
  );
}
