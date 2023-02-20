import React from "react";
import classes from "./Modal.module.css";

function Modal({ text, setShowModal }) {
  return (
    <div onClick={() => setShowModal(false)} className={classes.Modal}>
      <span>{text}</span>
    </div>
  );
}

export default Modal;
