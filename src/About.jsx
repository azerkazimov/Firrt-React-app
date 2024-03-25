import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { GreetMe } from "./Greet";
import Select from "./Page";
import MailBox from "./MailBox";
import { Update } from "./Update";
import { Dimention } from "./Dimention";

export default function About() {
  return (
    <div className="main">
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab
        distinctio facilis quod dolorem nesciunt beatae laudantium commodi quia
        quibusdam iste sed temporibus, hic natus cupiditate ducimus cumque eum
        sunt?
      </p>
      <Link to="/contact">To Contact</Link>
      <ul className="header__list">
        <li className="header__item">
          <Link to="/about/event">Event</Link>
        </li>
        <li className="header__item">
          <Link to="/about/public">Public</Link>
        </li>
      </ul>

      <GreetMe name="Azer" tech="React" />
      <MailBox messages={["hi", "how are you"]} />
      <Dimention />

      <Select />
      <Update />
    </div>
  );
}
