import React from "react";
import Brands from "./Brands/Brands";
import classes from "./MainContent.module.css";
import { Route, Routes } from "react-router-dom";
import Articles from "./Articles/Articles";
import {
  NIKE_ARTICLES_DATA,
  ADIDAS_ARTICLES_DATA,
  REEBOK_ARTICLES_DATA,
  PUMA_ARTICLES_DATA,
  VANS_ARTICLES_DATA,
} from "../../../seeds/INVENTORY";

function MainContent({ searchTerm }) {
  const filterBySearchTerm = (articles, term = searchTerm) => {
    return articles.filter((article) =>
      article.name.toLowerCase().includes(term)
    );
  };

  const filtered_NIKE_ARTICLES_DATA = filterBySearchTerm(NIKE_ARTICLES_DATA);
  const filtered_ADIDAS_ARTICLES_DATA =
    filterBySearchTerm(ADIDAS_ARTICLES_DATA);
  const filtered_REEBOK_ARTICLES_DATA =
    filterBySearchTerm(REEBOK_ARTICLES_DATA);
  const filtered_PUMA_ARTICLES_DATA = filterBySearchTerm(PUMA_ARTICLES_DATA);
  const filtered_VANS_ARTICLES_DATA = filterBySearchTerm(VANS_ARTICLES_DATA);

  const routes = [
    { path: "/nike", articles: filtered_NIKE_ARTICLES_DATA },
    { path: "/adidas", articles: filtered_ADIDAS_ARTICLES_DATA },
    { path: "/reebok", articles: filtered_REEBOK_ARTICLES_DATA },
    { path: "/puma", articles: filtered_PUMA_ARTICLES_DATA },
    { path: "/vans", articles: filtered_VANS_ARTICLES_DATA },
    { path: "/", articles: filtered_NIKE_ARTICLES_DATA },
  ];

  return (
    <div className={classes.mainContent}>
      <Brands />
      <Routes>
        {routes.map(({ path, articles }) => (
          <Route path={path} element={<Articles articles={articles} />} />
        ))}
      </Routes>
    </div>
  );
}

export default MainContent;
