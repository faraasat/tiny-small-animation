import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataContextProvider } from "./data/data.context";

const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App hideLoader={hideLoader} showLoader={showLoader} />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
