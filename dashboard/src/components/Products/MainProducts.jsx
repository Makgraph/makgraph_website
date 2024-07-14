import React, { useState } from "react";
import SecondHeader from "./SecondHeader";
import products from "../../data/products";
import Product from "./Product";
import Pagination from "./Pagination";

const MainProducts = () => {
  return (
    <section className="sm:border-x-[1px] p-2 sm:p-4 border-b-secondary sm:flex sm:flex-col sm:py-4">
      <div className="flex justify-between my-4">
        <p className="text-lg sm:text-2xl font-serif font-semibold flex items-center">
          Products
        </p>
        <div>
          <button>
            <span className="font-serif font-semibold rounded-sm text-sm sm:text-base text-onPrimary bg-[#22c55e] p-1 sm:p-2 ">
              Create New
            </span>
          </button>
        </div>
      </div>

      <div>
        <SecondHeader />
      </div>
      <div className="w-full justify-between sm:gap-6 md:gap-8 sm:flex">
        <div className="gap-10 sm:mt-4 items-center justify-center grid md:grid-cols-4 grid-cols-2">
          {/* Products */}
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:justify-end ">
        <Pagination />
      </div>
    </section>
  );
};

export default MainProducts;
