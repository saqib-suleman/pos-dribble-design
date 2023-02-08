import React, { useState } from "react";
import classes from "./BrandCard.module.css";
import { Link } from "react-router-dom";

function BrandCard({ brand, isActive, setActiveIdHandler }) {
  let CardColor;
  let NotchColor;
  switch (brand.name) {
    case "Nike":
      CardColor = {
        backgroundColor: "#208bff",
      };
      NotchColor = {
        backgroundColor: "#1b78d7",
      };
      break;
    case "Adidas":
      CardColor = {
        backgroundColor: "#fe6347",
      };
      NotchColor = {
        backgroundColor: "#bf5e4e",
      };
      break;
    case "Reebok":
      CardColor = {
        backgroundColor: "#f2ba43",
      };
      NotchColor = {
        backgroundColor: "#c29e52",
      };
      break;
    case "Puma":
      CardColor = {
        backgroundColor: "#f44f60",
      };
      NotchColor = {
        backgroundColor: "#ce4554",
      };
      break;
    case "Vans":
      CardColor = {
        backgroundColor: "#6768dc",
      };
      NotchColor = {
        backgroundColor: "#5959b9",
      };
      break;
  }

  return (
    <Link
      to={`/${brand.name}`}
      style={{ textDecoration: "none", color: "black" }}
      className={`${classes.Card} ${isActive && classes.card_active}`}
      onClick={() => setActiveIdHandler(brand.id)}
    >
      <div className={classes.Notch} style={NotchColor}></div>
      <article className={classes.upperBody} style={CardColor}>
        <h3 className={classes.brandName}>{brand.name}</h3>
        <span className={classes.articles}>{brand.articles} articles</span>
      </article>
      <span className={classes.lowerBody}>{brand.name}</span>
    </Link>
  );
}

export default BrandCard;
