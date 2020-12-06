import React, { useEffect } from "react";
import "./App.css";
import { TopBar } from "./listing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StartAlert from "./Utils/StartAlert";

function App() {
  useEffect(() => {
    setTimeout(() => {
      StartAlert();
    }, 7000);
  }, []);

  return (
    <div>
      <TopBar />
      <ToastContainer />
    </div>
  );
}

export default App;
