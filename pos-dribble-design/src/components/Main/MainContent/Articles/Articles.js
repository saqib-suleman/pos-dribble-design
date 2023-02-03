import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import ArticleCard from "./ArticleCard";
import { NIKE_ARTICLES_DATA } from "../../../../seeds/INVENTORY";

function Articles() {
  return (
    <CardsWrapper>
      {NIKE_ARTICLES_DATA.map((article) => (
        <ArticleCard key={Math.random()} article={article} />
      ))}
    </CardsWrapper>
  );
}

export default Articles;
