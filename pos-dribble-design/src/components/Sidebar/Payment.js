import React, { useState, useContext } from "react";
import classes from "./Payment.module.css";
import CartContext from "../../store/cart-context";
import { v4 as uuid } from "uuid";
import {
  UilCreditCard,
  UilMoneyBill,
  UilPlusCircle,
} from "@iconscout/react-unicons";
import Button from "../UI/Button";

const buttons = [
  { id: uuid(), icon: <UilCreditCard size="30" />, text: "Debit card" },
  { id: uuid(), icon: <UilMoneyBill size="30" />, text: "Cash" },
  { id: uuid(), icon: <UilPlusCircle size="30" />, text: "Other" },
];

function Payment() {
  const [activeId, setActiveId] = useState();
  const cartCtx = useContext(CartContext);

  const subtotal = cartCtx.totalAmount;
  const tax = +(subtotal * 0.2).toFixed(2);
  const total = subtotal + tax;

  const clickHandler = (id) => {
    setActiveId(id);
  };

  return (
    <div className={classes.payment}>
      <div className={classes.calc}>
        <div className={classes.subtotal}>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className={classes.tax}>
          <span>Tax (20%)</span>
          <span>${tax}</span>
        </div>
        <div className={classes.total}>
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
      <div className={classes.payment_options}>
        {buttons.map((button) => (
          <Button
            key={button.id}
            button={button}
            isActive={activeId === button.id}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <button className={classes.payment_button}>
        Pay now <span>${total}</span>
      </button>
    </div>
  );
}

export default Payment;
