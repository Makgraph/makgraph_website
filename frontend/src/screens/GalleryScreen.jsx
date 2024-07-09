import React from "react";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer";
import { selectProductList } from "../redux/products/productsSlice";
import { useSelector } from "react-redux";

const GalleryScreen = () => {
  const { products, loading, error, page, pages } =
    useSelector(selectProductList);

  return (
    <div>
      <Header />
      <div className="p-screen pt-20 md:pt-24">
        <div className="md:flex hidden justify-center py-4 md:py-8 ">
          <h2>
            <b>Travaux de Makgraph</b>
          </h2>
        </div>
        <div className="md:hidden flex justify-center py-4 md:py-8 ">
          <h4>
            <b>Travaux de Makgraph</b>
          </h4>
        </div>
        <div>
          <div className=" py-1 gap-5 md:gap-5 items-center justify-center grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2">
            {products.map((product) => (
              <div className="rounded w-auto h-auto flex flex-col transition ease-in-out delay-150  hover:-translate-y-1 md:hover:scale-125  duration-300 cursor-pointer ">
                <img src={product.image} className="w-auto rounded " />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryScreen;
