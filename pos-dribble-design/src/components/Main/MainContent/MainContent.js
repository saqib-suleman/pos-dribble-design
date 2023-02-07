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

function MainContent() {
  return (
    <div className={classes.mainContent}>
      <Brands />
      <Routes>
        <Route
          path="/nike"
          element={<Articles articles={NIKE_ARTICLES_DATA} />}
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
        <Route path="/" element={<Articles articles={NIKE_ARTICLES_DATA} />} />
      </Routes>
    </div>
  );
}

export default MainContent;
