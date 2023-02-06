import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import ArticleCard from "./ArticleCard";
import { ADIDAS_ARTICLES_DATA } from "../../../../seeds/INVENTORY";

function AdidasArticles() {
  return (
    <CardsWrapper>
      {ADIDAS_ARTICLES_DATA.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </CardsWrapper>
  );
}

export default AdidasArticles;
