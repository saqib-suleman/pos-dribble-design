import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import ArticleCard from "./ArticleCard";
import { REEBOK_ARTICLES_DATA } from "../../../../seeds/INVENTORY";

function ReebokArticles() {
  return (
    <CardsWrapper>
      {REEBOK_ARTICLES_DATA.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </CardsWrapper>
  );
}

export default ReebokArticles;
