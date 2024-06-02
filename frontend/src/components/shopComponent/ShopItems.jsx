import React from "react";
import { PRODUCTS } from "../../data/product";
import Rating from "./Rating";
import Pagination from "./Pagination";

const ShopItems = () => {
  return (
    <div>
      <div className=" p-screen  py-4 md:py-5 gap-10 md:gap-28  items-center justify-center grid sm:grid-cols-2 md:grid-cols-3 grid-cols-2">
        {PRODUCTS.map((product) => (
          <div
            className="rounded-lg gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer "
            key={product.id}
          >
            <img src={product.productImage} className="w-[400px] rounded-lg " />
            <div className="text-start w-[100%]  ">
              <p className="text-sm md:text-base">
                <b>{product.productName}</b>
              </p>
              <p className="text-sm md:text-base">$ {product.price}</p>
              <p>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} commentaires`}
                />
              </p>
              <button
                className="bg-[#fffff] border-2 border-primary hover:bg-primary cursor-pointer min-w-[80px] md:mt-1 px-2 py-1  rounded-[5px]"
                onClick={() => addToCart(id)}
              >
                <h6 className="text-xs md:text-sm  hover:text-white ">
                  Ajouter au panier
                  {/* Ajouter au panier {cartItemsAmount > 0 && <>({cartItemsAmount})</>} */}
                </h6>
              </button>
            </div>
          </div>

          // <Product data={product} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ShopItems;
