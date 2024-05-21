import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";

const ShopScreen = () => {
  return (
    <div>
      <div className=" p-screen  py-4 md:py-5 gap-8 md:gap-28  items-center justify-center grid sm:grid-cols-3 md:grid-cols-4 grid-cols-3">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopScreen;
