import React, { useState } from "react";
import classes from "./ArticleCard.module.css";

function ArticleCard({ article }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  const mouseEnterHandler = () => {
    setMouseEnter(true);
  };

  // const mouseLeaveHandler = () => {
  //   setMouseEnter(false);
  // };
  //      onMouseLeave={mouseLeaveHandler}

  return (
    <>
      <div className={classes.Card} onMouseEnter={mouseEnterHandler}>
        <article className={classes.upperBody}>
          <img src={article.imgUrl} />
        </article>
        <span className={classes.lowerBody}>{article.name}</span>
        {mouseEnter ? (
          <div className={classes.on_enter}>
            <span>{article.price}</span>
            <button>Add to cart</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ArticleCard;
