import React, { useEffect } from "react";
import Rating from "./Rating";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsSlice.js";

const ShopItems = () => {
  // const effectRan = useRef(false);
  const dispatch = useDispatch();

  const { products, pending, error, message } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    // if (effectRan.current === true) {
    dispatch(fetchProducts());
    // }
    // return () => {
    //   effectRan.current = true;
    // };
  }, [dispatch]);

  return (
    <div>
      <div className=" p-screen  py-4 md:py-5 gap-10 md:gap-28  items-center justify-center grid sm:grid-cols-2 md:grid-cols-3 grid-cols-2">
        {products.map((product) => (
          <div
            className="rounded-lg gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer "
            key={product._id}
          >
            <Link to={`/products/${product._id}`}>
              <img src={product.image} className="w-[400px] rounded-lg " />
            </Link>
            <div className="text-start w-[100%]  ">
              <p className="text-sm md:text-base">
                <b>{product.productName}</b>
              </p>
              <p className="text-sm md:text-base">
                <b>$ {product.price}</b>
              </p>

              <Rating
                className="text-"
                value={product.rating}
                text={`${product.numReviews} commentaires`}
              />

              <button
                className="bg-[#fffff] border-2 border-primary hover:bg-primary cursor-pointer min-w-[80px] md:mt-1 px-2 py-1  rounded-[5px]"
                onClick={() => addToCart(id)}
              >
                <h6 className="text-xs md:text-sm  hover:text-white ">
                  Ajouter au panier
                </h6>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ShopItems;
