import React, { useEffect, useState } from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import Pagination from "../../../UI/Pagination";
import ArticleCard from "./ArticleCard";
import classes from "./Articles.module.css";

function Articles({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [articles]);

  return (
    <div className={classes.Articles}>
      <CardsWrapper>
        {currentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </CardsWrapper>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Articles;
