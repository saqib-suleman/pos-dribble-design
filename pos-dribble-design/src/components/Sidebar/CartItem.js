import React from "react";
import classes from "./CartItem.module.css";

function CartItem({ name, price, qty, onAdd, onRemove }) {
  return (
    <>
      <li>
        <div className={classes.item_info}>
          <h3>{name}</h3>
          <div className={classes.item_info_details}>
            <button>42</button>
            <button>Blue</button>
          </div>
        </div>
        <div className={classes.item_price_qty_delete}>
          <div className={classes.item_price_qty}>
            <span className={classes.item_price}>${price}</span>
            <span className={classes.item_qty}>Qty: {qty}</span>
          </div>
          <button className={classes.remove_button} onClick={onRemove}>
            X
          </button>
        </div>
      </li>
    </>
  );
}

export default CartItem;
