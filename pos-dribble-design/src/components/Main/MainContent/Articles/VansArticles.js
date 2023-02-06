import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import ArticleCard from "./ArticleCard";
import { VANS_ARTICLES_DATA } from "../../../../seeds/INVENTORY";

function VansArticles() {
  return (
    <CardsWrapper>
      {VANS_ARTICLES_DATA.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </CardsWrapper>
  );
}

export default VansArticles;
