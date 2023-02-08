import React, { useState } from "react";
import classes from "./Brands.module.css";
import BrandCard from "./BrandCard";
import { BRANDS_DATA } from "../../../../seeds/INVENTORY";

function Brands() {
  const [isActiveId, setActiveId] = useState();

  const setActiveIdHandler = (id) => setActiveId(id);

  return (
    <div className={classes.Brands}>
      {BRANDS_DATA.map((brand) => (
        <BrandCard
          key={brand.id}
          brand={brand}
          isActive={isActiveId === brand.id}
          setActiveIdHandler={setActiveIdHandler}
        />
      ))}
    </div>
  );
}

export default Brands;
