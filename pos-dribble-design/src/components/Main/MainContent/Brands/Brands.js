import React from "react";
import CardsWrapper from "../../../UI/CardsWrapper";
import BrandCard from "./BrandCard";
import { BRANDS_DATA } from "../../../../seeds/INVENTORY";

function Brands() {
  return (
    <CardsWrapper>
      {BRANDS_DATA.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </CardsWrapper>
  );
}

export default Brands;
