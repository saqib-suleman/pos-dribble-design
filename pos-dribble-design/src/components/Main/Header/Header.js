import React from "react";
import Config from "./Config";
import Search from "./Search";
import classes from "./Header.module.css";

function Header({ searchTermHandler }) {
  return (
    <div className={classes.header}>
      <Search searchTermHandler={searchTermHandler} />
      <Config />
    </div>
  );
}

export default Header;
