import React from "react";
import "./App.css";
import { TopBar } from "./listing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <TopBar />
      <ToastContainer />
    </div>
  );
}

export default App;
