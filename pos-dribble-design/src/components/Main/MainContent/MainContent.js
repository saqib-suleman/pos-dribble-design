import React from "react";
import Brands from "./Brands/Brands";
import classes from "./MainContent.module.css";
import { Route, Routes } from "react-router-dom";
import NikeArticles from "./Articles/NikeArticles";
import AdidasArticles from "./Articles/AdidasArticles";
import ReebokArticles from "./Articles/ReebokArticles";
import PumaArticles from "./Articles/PumaArticles";
import VansArticles from "./Articles/VansArticles";

function MainContent() {
  return (
    <div className={classes.mainContent}>
      <Brands />
      <Routes>
        <Route path="/nike" element={<NikeArticles />} />
        <Route path="/adidas" element={<AdidasArticles />} />
        <Route path="/reebok" element={<ReebokArticles />} />
        <Route path="/puma" element={<PumaArticles />} />
        <Route path="/vans" element={<VansArticles />} />
        <Route path="/" element={<NikeArticles />} />
      </Routes>
    </div>
  );
}

export default MainContent;
