import React from "react";
import Customer from "./Customer";
import Cart from "./Cart";
import Payment from "./Payment";
import classes from "./Sidebar.module.css";

function Sidebar({ setShowModal }) {
  return (
    <div className={classes.sidebar}>
      <Customer />
      <Cart />
      <Payment setShowModal={setShowModal} />
    </div>
  );
}

export default Sidebar;
