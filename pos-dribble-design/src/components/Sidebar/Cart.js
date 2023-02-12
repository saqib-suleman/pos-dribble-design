import React from "react";
import classes from "./Cart.module.css";
import { useRecoilValue } from "recoil";
import { cartItemsState } from "../../store/CartState";

function Cart() {
  const cartItems = useRecoilValue(cartItemsState);

  return (
    <div className={classes.cart}>
      <ul>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
