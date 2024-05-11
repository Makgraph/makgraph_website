import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";

const ShopScreen = () => {
  return (
    <div>
      <div className=" p-screen  py-4 md:py-5 gap-10 md:gap-20  items-center justify-center sm:grid sm:grid-cols-3 grid grid-cols-2">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopScreen;
