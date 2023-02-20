import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { v4 as uuid } from "uuid";
// import { atom, useRecoilValue } from "recoil";
// import { cartItemsState } from "../../store/CartState";

// export const cartItemsState = atom({
//   key: "cartItems",
//   default: [{ name: "Sneaker" }],
// });

function Cart() {
  //   const cartItems = useRecoilValue(cartItemsState);
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const hasItems = cartItems.length > 0;
  // const cartItems = [
  //   {
  //     id: uuid(),
  //     name: "Sneaker",
  //     price: "$199",
  //     qty: 1,
  //     size: "42",
  //     color: "Blue",
  //   },
  //   {
  //     id: uuid(),
  //     name: "Sneaker",
  //     price: "$199",
  //     qty: 1,
  //     size: "42",
  //     color: "Blue",
  //   },
  // ];

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, qty: 1 });
  };

  return (
    <div className={classes.cart}>
      {hasItems ? (
        <ul>
          {cartItems.map((item) => (
            <CartItem
              name={item.name}
              price={item.price}
              qty={item.qty}
              key={item.id}
              onAdd={() => addItemHandler(item)}
              onRemove={() => removeItemHandler(item.id)}
            />
          ))}
        </ul>
      ) : (
        <div className={classes.empty_cart}>No items in cart</div>
      )}
    </div>
  );
}

export default Cart;
