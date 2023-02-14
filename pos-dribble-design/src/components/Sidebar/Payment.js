import React, { useState } from "react";
import classes from "./Payment.module.css";
import {
  UilCreditCard,
  UilMoneyBill,
  UilPlusCircle,
} from "@iconscout/react-unicons";

function Payment() {
  const [active, setActive] = useState(false);

  const subtotal = 199;
  const tax = +(subtotal * 0.2).toFixed(2);
  const total = subtotal + tax;

  const clickHandler = (id) => {};

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
        <button className={classes.active} id={Math.random()}>
          <span>
            <UilCreditCard size="30" />
          </span>
          <span>Debit card</span>
        </button>
        <button id={Math.random()}>
          <span>
            <UilMoneyBill size="30" />
          </span>
          <span>Cash</span>
        </button>
        <button id={Math.random()}>
          <span>
            <UilPlusCircle size="30" />
          </span>
          <span>Other</span>
        </button>
      </div>
      <button className={classes.payment_button}>
        Pay now <span>${total}</span>
      </button>
    </div>
  );
}

export default Payment;
