import React, { useState, useEffect } from "react";
import Header from "./Header";
import fetchUser from "./FetchUser";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";

// importing components

import SomeComponent from "./components/SomeComponent"; // don't need to add "/index.jsx"
import SecondComponent from "./components/SecondCompoent";

export const Head = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId, setUser);
  }, [userId]);

  return (
    <div className="page">
      <Header user={user} />

      <Routes>
        <Route exact path="/" element={<Main user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
