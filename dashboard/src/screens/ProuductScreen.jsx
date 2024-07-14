import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainProducts from "../components/Products/MainProducts";

const ProductScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainProducts />
      </main>
    </div>
  );
};

export default ProductScreen;
