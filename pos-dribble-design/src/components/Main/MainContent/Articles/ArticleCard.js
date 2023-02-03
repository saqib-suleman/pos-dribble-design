import React from "react";
import classes from "./ArticleCard.module.css";

function ArticleCard({ article }) {
  return (
    <div className={classes.Card}>
      <article className={classes.upperBody}>
        <img src={article.imgUrl} />
      </article>
      <span className={classes.lowerBody}>{article.name}</span>
    </div>
  );
}

export default ArticleCard;
