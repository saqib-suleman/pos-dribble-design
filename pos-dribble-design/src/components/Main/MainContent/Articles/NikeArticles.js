import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import ArticleCard from "./ArticleCard";
import { NIKE_ARTICLES_DATA } from "../../../../seeds/INVENTORY";

function NikeArticles() {
  return (
    <CardsWrapper>
      {NIKE_ARTICLES_DATA.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </CardsWrapper>
  );
}

export default NikeArticles;
