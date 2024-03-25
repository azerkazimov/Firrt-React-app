import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import Auth from "./Auth";

export default function Contact() {
  return (
    <div className="main">
      <div className="contact">
        <h1>Contact page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          sunt non ex facilis, dolor optio dolorum enim id, quis nesciunt quidem
          sit consectetur fugiat nostrum, doloremque perferendis perspiciatis
          cumque! Alias!
        </p>
        <Link to="/">Main</Link>

        <Auth />
        <UserForm />
      </div>
    </div>
  );
}
