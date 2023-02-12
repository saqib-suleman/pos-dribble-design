import React from "react";
import classes from "./Customer.module.css";
import { UilBars, UilEllipsisH, UilPrint } from "@iconscout/react-unicons";

function Customer() {
  return (
    <>
      <div className={classes.sideHeader}>
        <UilBars size="40" color="#5abe46" />
        <button>On hold</button>
      </div>
      <div className={classes.customer_body}>Customer</div>
    </>
  );
}

export default Customer;
