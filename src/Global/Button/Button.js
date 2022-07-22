import React from "react";
import "./Button.css";

function Button({ text, onClicking, disabled }) {
  return (
    <button className="global_button" disabled ={disabled} onClick={onClicking}>
      {text}
    </button>
  );
}

export default Button;
