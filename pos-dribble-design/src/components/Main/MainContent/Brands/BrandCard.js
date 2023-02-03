import React from "react";
import classes from "./BrandCard.module.css";

function BrandCard() {
  return (
    <div className={classes.Card}>
      <article className={classes.upperBody}>
        <h3 className={classes.brandName}>Nike</h3>
        <span className={classes.articles}>12 articles</span>
      </article>
      <span className={classes.lowerBody}>Nike</span>
    </div>
  );
}

export default BrandCard;
