import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import ArticleCard from "./ArticleCard";
import { PUMA_ARTICLES_DATA } from "../../../../seeds/INVENTORY";

function PumaArticles() {
  return (
    <CardsWrapper>
      {PUMA_ARTICLES_DATA.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </CardsWrapper>
  );
}

export default PumaArticles;
