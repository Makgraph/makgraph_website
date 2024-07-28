import React, { useEffect, useRef } from "react";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";
import {
  clearProducts,
  fetchProducts,
  selectProductList,
} from "../redux/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Message from "../components/loadingError/errorMessage";
import LoadingSpinner from "../components/loadingError/loading";
import Pagination from "../components/shopComponent/Pagination";

const GalleryScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = searchParams.get("pageNumber") || 1;

  const { products, loading, error, page, pages } =
    useSelector(selectProductList);
  console.log(products);

  useEffect(() => {
    // Fetch products when component mounts or pageNumber changes
    dispatch(fetchProducts(pageNumber));

    // Clear products on component unmount
    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch, pageNumber]);

  if (error) {
    return (
      <Message variant="bg-danger dark:bg-danger-dark text-white">
        {error}
      </Message>
    );
  }
  return (
    <div>
      <Header />
      <div className="p-screen pt-20 md:pt-24">
        {/* <div className="md:flex hidden justify-center py-4 md:py-8 ">
          <h2>
            <b>Ma Galerie</b>
          </h2>
        </div>
        <div className="md:hidden flex justify-center py-4 md:py-8 ">
          <h4>
            <b>Ma Galerie</b>
          </h4>
        </div> */}
        <div className="w-[100%]  flex justify-center items-center py-2 md:py-5">
          <div className="flex justify-center">
            <div>
              <h2 className="text-[20px]  font-serif font-medium md:text-[28px]">
                Ma Galerie
              </h2>
            </div>
          </div>
        </div>
        {/* <LoadingSpinner /> */}
        {loading ? (
          <div className="flex p-[138.2px] justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">
              {products.map((product) => (
                <img
                  key={product._id}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              ))}
            </div>
            {/* <div className=" py-1 gap-5 md:gap-5 items-center justify-center grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2">
            {products.map((product) => (
              <div className="rounded w-auto h-auto flex flex-col transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-125  duration-300 cursor-pointer ">
                <img src={product.image} className="w-auto rounded " />
              </div>
            ))}
          </div> */}
          </div>
        )}
        <Pagination pages={pages} page={page} basePath="/galerie" />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryScreen;
