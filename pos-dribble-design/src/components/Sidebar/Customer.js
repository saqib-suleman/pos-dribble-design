import React from "react";
import classes from "./Customer.module.css";
import {
  UilBars,
  UilEllipsisH,
  UilPrint,
  UilUserPlus,
} from "@iconscout/react-unicons";

function Customer() {
  return (
    <>
      <div className={classes.sideHeader}>
        <UilBars size="40" color="#5abe46" />
        <button>On hold</button>
      </div>
      <div className={classes.customer_body}>
        <div className={classes.customer_body_ticket}>
          <UilPrint size="30" color="#999999" />
          <h3>Current ticket</h3>
          <UilEllipsisH size="30" color="#999999" />
        </div>
        <button className={classes.customer_body_button}>
          <UilUserPlus
            style={{ marginRight: "0.5rem" }}
            size="30"
            color="#5abe46"
          />
          Add customer
        </button>
      </div>
    </>
  );
}

export default Customer;
