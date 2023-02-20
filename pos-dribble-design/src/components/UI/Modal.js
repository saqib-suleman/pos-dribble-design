import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Modal.module.css";

function Modal({ text, setShowModal }) {
  const cartCtx = useContext(CartContext);

  const onClickHandler = () => {
    cartCtx.clearCart();
    setShowModal(false);
  };

  return (
    <div onClick={onClickHandler} className={classes.Modal}>
      <span>{text}</span>
    </div>
  );
}

export default Modal;
