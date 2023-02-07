import React from "react";
import classes from "./Pagination.module.css";

function Pagination({ articlesPerPage, totalArticles, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={classes.Pagination}>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.page_item}>
            <button
              onClick={() => paginate(number)}
              className={classes.page_link}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
