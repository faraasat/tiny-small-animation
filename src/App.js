import React from "react";
import "./App.css";
import { TopBar } from "./listing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StartAlert from "./Utils/StartAlert";

function App() {
  setTimeout(() => {
    StartAlert();
  }, 7000);

  return (
    <div>
      <TopBar />
      <ToastContainer />
      {/* <StartAlert /> */}
    </div>
  );
}

export default App;
