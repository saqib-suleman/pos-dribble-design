import React from "react";
import "./CardsWrapper.css";

function CardsWrapper(props) {
  return <div className="CardsWrapper">{props.children}</div>;
}

export default CardsWrapper;
