import React from "react";
import Header from "./Header/Header";
import classes from "./Main.module.css";
import MainContent from "./MainContent/MainContent";

function Main() {
  return (
    <div className={classes.main}>
      <Header />
      <MainContent />
    </div>
  );
}

export default Main;
