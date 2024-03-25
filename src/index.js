import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.querySelector(".root");

ReactDOM.render(
  <BrowserRouter>
    <App userId="facebook" />
  </BrowserRouter>,
  root
);
