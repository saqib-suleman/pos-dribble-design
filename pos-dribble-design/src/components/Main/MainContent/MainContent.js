import React, { useEffect, useState } from "react";
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
  const filtered_NIKE_ARTICLES_DATA = NIKE_ARTICLES_DATA.filter((article) =>
    article.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={classes.mainContent}>
      <Brands />
      <Routes>
        <Route
          path="/nike"
          element={<Articles articles={filtered_NIKE_ARTICLES_DATA} />}
        />
        <Route
          path="/adidas"
          element={<Articles articles={ADIDAS_ARTICLES_DATA} />}
        />
        <Route
          path="/reebok"
          element={<Articles articles={REEBOK_ARTICLES_DATA} />}
        />
        <Route
          path="/puma"
          element={<Articles articles={PUMA_ARTICLES_DATA} />}
        />
        <Route
          path="/vans"
          element={<Articles articles={VANS_ARTICLES_DATA} />}
        />
        <Route
          path="/"
          element={<Articles articles={filtered_NIKE_ARTICLES_DATA} />}
        />
      </Routes>
    </div>
  );
}

export default MainContent;
