import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";

const ShopScreen = () => {
  return (
    <div>
      <div className=" p-screen items-center justify-center grid grid-cols-3">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopScreen;
