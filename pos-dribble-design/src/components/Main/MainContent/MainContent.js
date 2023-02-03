import React from "react";
import Articles from "./Articles/Articles";
import Brands from "./Brands/Brands";
import classes from "./MainContent.module.css";

function MainContent() {
  return (
    <div className={classes.mainContent}>
      <Brands />
      <Articles />
    </div>
  );
}

export default MainContent;
