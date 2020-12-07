import React from "react";
import "./CustomButton.style.css";

export default function CustomButton({
  onClick,
  style,
  children,
  btnColor1,
  btnColor2,
}) {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          ...style,
          backgroundImage: `linear-gradient(to top, ${btnColor1} , ${btnColor2})`,
        }}
        className="myCustomButton"
      >
        {children}
      </button>
    </div>
  );
}
