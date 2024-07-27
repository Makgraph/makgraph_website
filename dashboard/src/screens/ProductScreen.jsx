import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainProducts from "../components/Products/MainProducts";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  // Récupération des paramètres depuis l'URL
  const params = useParams();
  const keyword = params.keyword; // Accès au paramètre spécifique "keyword"
  const pageNumber = params.pageNumber; // Accès au paramètre spécifique "pageNumber"

  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainProducts keyword={keyword} pageNumber={pageNumber} />
      </main>
    </div>
  );
};

export default ProductScreen;
