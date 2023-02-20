import React from "react";
import classes from "./Config.module.css";
import { UilBell, UilSetting } from "@iconscout/react-unicons";

function Config() {
  return (
    <div className={classes.config}>
      <div className={classes.buttonsWrapper}>
        <button className={classes.button}>
          <UilBell />
        </button>
        <button>
          <UilSetting />
        </button>
      </div>
    </div>
  );
}

export default Config;
