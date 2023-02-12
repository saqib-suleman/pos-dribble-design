import React from "react";
import Customer from "./Customer";
import Cart from "./Cart";
import Payment from "./Payment";
import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Customer />
      <Cart />
      <Payment />
    </div>
  );
}

export default Sidebar;
