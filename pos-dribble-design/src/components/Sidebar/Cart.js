import React from "react";
import classes from "./Cart.module.css";
// import { atom, useRecoilValue } from "recoil";
// import { cartItemsState } from "../../store/CartState";

// export const cartItemsState = atom({
//   key: "cartItems",
//   default: [{ name: "Sneaker" }],
// });

function Cart() {
  //   const cartItems = useRecoilValue(cartItemsState);
  const cartItems = [
    { name: "Sneaker", price: "$199", qty: 1, size: "42", color: "Blue" },
    { name: "Sneaker", price: "$199", qty: 1, size: "42", color: "Blue" },
  ];
  return (
    <div className={classes.cart}>
      <ul>
        {cartItems.map((item) => (
          <li>
            <div className={classes.item_info}>
              <h3>{item.name}</h3>
              <div className={classes.item_info_details}>
                <button>{item.size}</button>
                <button>{item.color}</button>
              </div>
            </div>
            <div className={classes.item_price_qty}>
              <span className={classes.item_price}>{item.price}</span>
              <span className={classes.item_qty}>Qty: {item.qty}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
