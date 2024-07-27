import React, { useEffect, useState } from "react";
import SecondHeader from "./SecondHeader";
import Product from "./Product";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsSlice";
import LoadingSpinner from "../Loadingerror/loading";
import Message from "../Loadingerror/errorMessage";
import { Link } from "react-router-dom";
import { resetDeleteSuccess } from "../../redux/products/deleteProductSlice";

const MainProducts = (props) => {
  const { keyword, pageNumber } = props;
  const dispatch = useDispatch();

  const { products, loading, error, page, pages } = useSelector(
    (state) => state.productsList
  );
  const { error: errorDelete, success: successDelete } = useSelector(
    (state) => state.productDelete
  );

  useEffect(() => {
    dispatch(fetchProducts({ keyword, pageNumber }));
  }, [dispatch, keyword, pageNumber]);

  // Fonctions pour naviguer entre les pages
  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(fetchProducts({ keyword, pageNumber: page - 1 }));
    }
  };

  const handleNextPage = () => {
    if (page < pages) {
      dispatch(fetchProducts({ keyword, pageNumber: page + 1 }));
    }
  };

  // Réinitialisation successDelete après traitement
  useEffect(() => {
    if (successDelete) {
      dispatch(resetDeleteSuccess());
    }
  }, [successDelete, dispatch]);

  return (
    <section className="sm:border-x-[1px] p-2 sm:p-4 border-b-secondary sm:flex sm:flex-col sm:py-4">
      <div className="flex justify-between my-4">
        <p className="text-lg sm:text-2xl font-serif font-semibold flex items-center">
          Products
        </p>
        <Link to="/addProduct">
          <button>
            <span className="font-serif font-semibold rounded-sm text-sm sm:text-base text-onPrimary bg-[#22c55e] hover:bg-[#30a95c] p-1 sm:p-2 ">
              Create New
            </span>
          </button>
        </Link>
      </div>

      <div>
        <SecondHeader />
      </div>
      <div className="w-full justify-between sm:gap-6 md:gap-8 sm:flex">
        {errorDelete && (
          <Message>
            <div className=" m-4 p-4">
              <Message variant="bg-[#fee2e2] text-[#991b1b]">
                {errorDelete}
              </Message>
            </div>
          </Message>
        )}
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <Message>
            <div className=" m-4 p-4">
              <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
            </div>
          </Message>
        ) : (
          <>
            <div className="gap-10 sm:mt-4 items-center justify-center grid md:grid-cols-4 grid-cols-2">
              {/* Products */}
              {products.map((product) => (
                <Product product={product} key={product._id} />
              ))}{" "}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center  sm:justify-end ">
        <Pagination
          pages={pages}
          page={page}
          keyword={keyword ? keyword : ""}
        />
      </div>
    </section>
  );
};

export default MainProducts;
