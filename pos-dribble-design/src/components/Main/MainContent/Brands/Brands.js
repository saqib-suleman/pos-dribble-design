import React from "react";
import classes from "./Brands.module.css";
import BrandCard from "./BrandCard";
import { BRANDS_DATA } from "../../../../seeds/INVENTORY";

function Brands() {
  return (
    <div className={classes.Brands}>
      {BRANDS_DATA.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}

export default Brands;
