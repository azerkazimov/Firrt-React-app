import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

const root = document.querySelector(".root");

ReactDOM.render(
  <>
    <App userId="facebook" />
  </>,
  root
);
