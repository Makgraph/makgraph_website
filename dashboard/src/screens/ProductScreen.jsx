import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainProducts from "../components/Products/MainProducts";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  // Récupération des paramètres depuis l'URL
  const params = useParams();
  const keyword = params.keyword; // Accès au paramètre spécifique "keyword"
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainProducts keyword={keyword} />
      </main>
    </div>
  );
};

export default ProductScreen;
