import React from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Link, Routes, and Route
import { Link, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Link, Routes, and Route
import UserAvatar from "./UserAva";
import { Link } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";
// import Main from "./Main";
// import Product from "./Product";

const Header = ({ user }) => {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__item">
          <Link to="/about">About</Link>
        </li>
        <li className="header__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <>
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__item">
            <Link to="/about">About</Link>
          </li>
          <li className="header__item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </>

      <UserAvatar user={user} />
    </header>
  );
};

export default Header;
