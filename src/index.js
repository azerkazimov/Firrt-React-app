import { createRoot } from "react-dom/client";
import "./index.css";
import { Head } from "./App";
import { BrowserRouter } from "react-router-dom";

const rootDiv = document.querySelector(".root");

const root = createRoot(rootDiv);

root.render(
  <BrowserRouter>
    <Head userId="facebook" />
  </BrowserRouter>
);
