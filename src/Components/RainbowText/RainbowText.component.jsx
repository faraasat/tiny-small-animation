import React from "react";
import "./RainbowText.style.css";

export default function RainbowText({ children }) {
  return (
    <div>
      <div id="shadowBox">
        <span
          style={{
            fontFamily: "Heebo, sans-serif",
            fontWeight: "500",
            fontSize: 19,
            textShadow: "1.2px 1.2px 5px rgba(255, 255, 255, 0.1) ",
          }}
          className="text_animated"
        >
          {children}
        </span>
      </div>
    </div>
  );
}
