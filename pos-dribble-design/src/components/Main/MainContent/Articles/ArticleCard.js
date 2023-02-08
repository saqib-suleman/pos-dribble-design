import React, { useState } from "react";
import classes from "./ArticleCard.module.css";

function ArticleCard({ article }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  const mouseEnterHandler = () => {
    setMouseEnter(true);
  };

  const mouseLeaveHandler = () => {
    setMouseEnter(false);
  };

  return (
    <div
      className={classes.Card}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <article className={classes.upperBody}>
        <img src={article.imgUrl} />
      </article>
      <span className={classes.lowerBody}>{article.name}</span>
      {mouseEnter && (
        <div className={classes.on_enter}>
          {article.inStock === 0 ? (
            <div className={classes.on_enter_body}>
              <p>Out of stock</p>
              <button className={classes.disabled_button}>Add to cart</button>
            </div>
          ) : (
            <div className={classes.on_enter_body}>
              <span>{article.price}</span>
              <button>Add to cart</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
