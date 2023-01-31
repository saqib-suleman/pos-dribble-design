import React from "react";
import Config from "./Config";
import Search from "./Search";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <Search />
      <Config />
    </div>
  );
}

export default Header;
