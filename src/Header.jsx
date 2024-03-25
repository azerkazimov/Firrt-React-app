import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Link, Routes, and Route
import UserAvatar from "./UserAva";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";

const Header = ({ user }) => {
  return (
    <header className="header">
      <BrowserRouter>
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
        <Routes>
          <Route exact path="/" element={<Main user={user}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <UserAvatar user={user} />
    </header>
  );
};

export default Header;
