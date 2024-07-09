import React, { useEffect, useRef } from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  clearProducts,
  fetchProducts,
  selectProductList,
} from "../../redux/products/productsSlice";
import LoadingSpinner from "../loadingError/loading";
import Message from "../loadingError/errorMessage";
import Pagination from "./Pagination";

const ShopItems = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = searchParams.get("pageNumber") || 1;
  const logTimeout = useRef(null);

  const { products, loading, error, page, pages } =
    useSelector(selectProductList);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!isInitialMount.current) {
      // Fetch products when `pageNumber` changes
      dispatch(fetchProducts(pageNumber));
    } else {
      isInitialMount.current = false;
    }

    return () => {
      // Clear products when component unmounts or before fetching new products
      dispatch(clearProducts());
    };
  }, [dispatch, pageNumber]);

  useEffect(() => {
    if (!isInitialMount.current) {
      // Log products after a delay, adjust timeout as needed
      if (logTimeout.current) {
        clearTimeout(logTimeout.current);
      }
      logTimeout.current = setTimeout(() => {
        // console.log(products);
      }, 500);
    }
  }, [dispatch, products]);

  if (error) {
    return (
      <Message variant="bg-danger dark:bg-danger-dark text-white">
        {error}
      </Message>
    );
  }

  return (
    <div>
      <div className="p-screen py-4 md:py-0 gap-10 md:gap-28 items-center justify-center grid  md:grid-cols-3 grid-cols-2">
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          products.map((product) => (
            <div
              className="rounded-lg gap-2 w-auto h-auto flex flex-col transition hover:transition-[0.3s] hover:ease-in cursor-pointer"
              key={product._id}
            >
              <Link to={`/products/${product._id}`}>
                <img
                  src={product.image}
                  className="w-full rounded-lg"
                  alt={product.name}
                />
              </Link>
              <div className="text-start w-[100%]">
                <p className="font-semibold font-serif text-sm md:text-normal">
                  {product.name}
                </p>
                <p className="font-semibold font-serif  text-base md:text-xl">
                  <b>$ {product.price}</b>
                </p>
                <p className="font-medium font-serif">
                  <Rating
                    className="text-"
                    value={product.rating}
                    text={`${product.numReviews} commentaires`}
                  />
                </p>

                <button
                  className="bg-[#3b82f6] hover:bg-[#1d4ed8] w-full text-white text-xs md:text-base font-bold py-2 md:py-2 px-1 md:px-4 rounded mt-2"
                  onClick={() => addToCartHandler(product)}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Pagination pages={pages} page={page} />
    </div>
  );
};

export default ShopItems;
