import React, { useState } from "react";
import Header from "./Header/Header";
import classes from "./Main.module.css";
import MainContent from "./MainContent/MainContent";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (term) => setSearchTerm(term);

  return (
    <div className={classes.main}>
      <Header searchTermHandler={searchTermHandler} />
      <MainContent searchTerm={searchTerm} />
    </div>
  );
}

export default Main;
