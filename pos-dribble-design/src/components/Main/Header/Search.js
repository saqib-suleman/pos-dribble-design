import React from "react";
import classes from "./Search.module.css";
import { UilQrcodeScan } from "@iconscout/react-unicons";

function Search({ searchTermHandler }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    searchTermHandler(e.target.value);
  };

  return (
    <div className={classes.search}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          onChange={handleSearchChange}
          placeholder="Search by product name, category, ..."
        />
        <button className={classes.button}>
          <UilQrcodeScan size="20" style={{ marginRight: "1rem" }} />
          Scan
        </button>
      </form>
    </div>
  );
}

export default Search;
