import React, { useEffect, useRef, useState } from "react";
import Rating from "./Rating";
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProducts,
  fetchProducts,
} from "../../redux/products/productsSlice.js";
import { selectProductDetails } from "../../redux/products/productSlice.js";
import LoadingSpinner from "../loadingError/loading.jsx";
import Message from "../loadingError/errorMessage.jsx";
import { addToCart } from "../../redux/Cart/cartSlice.js";

const ShopItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isInitialMount = useRef(true); // Référence useRef pour suivre le premier montage
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    if (isInitialMount.current) {
      // Ne rien faire sur le premier rendu
      isInitialMount.current = false;
    } else {
      // Déclencher fetchProducts() après le premier rendu
      dispatch(fetchProducts());
    }

    // Clean up effect
    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch]);

  const addToCartHandler = (product) => {
    // Dispatch addToCart action from your Redux slice
    dispatch(addToCart({ product, quantity: 1 }));
    // Optionally, you can navigate to the cart page or show a confirmation message
    // navigate("/cart"); // Example: Navigate to the cart page after adding to cart
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className=" p-screen  py-4 md:py-5 gap-10 md:gap-28  items-center justify-center grid sm:grid-cols-2 md:grid-cols-3 grid-cols-2">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Message variant="bg-danger dark:bg-danger-dark text-white">
            {error}
          </Message>
        ) : (
          <>
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
                    className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-bold py-2 px-4 rounded mt-2"
                    onClick={() => addToCartHandler(product)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default ShopItems;
