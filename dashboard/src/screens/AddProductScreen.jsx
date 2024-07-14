import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainAddProduct from "../components/Products/MainAddProduct";

const AddProductScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainAddProduct />
      </main>
    </div>
  );
};

export default AddProductScreen;
