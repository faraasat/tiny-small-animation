import React from "react";
import "./RainbowText.style.css";

export default function RainbowText({ children }) {
  return (
    <div>
      <div id="shadowBox">
        <span
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            fontSize: 18,
            textShadow: "1.2px 1.2px 5px rgba(255, 255, 255, 0.1) ",
            preserveAspectRatio: "none",
            top: "26%",
            left: '44%',
            margin: "0 auto",
            position: "absolute",
            letterSpacing: 0
          }}
          className="text_animated"
        >
          {children}
        </span>
      </div>
    </div>
  );
}
