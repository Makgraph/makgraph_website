import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainAddCategorie from "../components/Categories/CreateCategory";

const AddCategorieScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainAddCategorie />
      </main>
    </div>
  );
};

export default AddCategorieScreen;
