import React from "react";
import classes from "./Button.module.css";

function Button({ button, clickHandler, isActive }) {
  return (
    <button
      className={`${classes.button} ${isActive && classes.active}`}
      onClick={() => clickHandler(button.id)}
    >
      <span>{button.icon}</span>
      <span>{button.text}</span>
    </button>
  );
}

export default Button;
