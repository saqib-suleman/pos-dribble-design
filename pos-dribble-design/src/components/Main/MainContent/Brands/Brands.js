import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import BrandCard from "./BrandCard";
import { BRANDS_DATA } from "../../../../seeds/INVENTORY";

function Brands() {
  return (
    <CardsWrapper>
      {BRANDS_DATA.map((brand) => (
        <BrandCard key={Math.random()} brand={brand} />
      ))}
    </CardsWrapper>
  );
}

export default Brands;
