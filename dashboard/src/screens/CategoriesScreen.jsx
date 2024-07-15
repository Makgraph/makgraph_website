import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainAddProduct from "../components/Products/MainAddProduct";
import MainCategories from "../components/Categories/MainCategories";

const CategoriesScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainCategories />
      </main>
    </div>
  );
};

export default CategoriesScreen;
