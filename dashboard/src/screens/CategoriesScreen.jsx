import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainCategories from "../components/Categories/MainCategories";
import { useParams } from "react-router-dom";

const CategoriesScreen = () => {
  // Récupération des paramètres depuis l'URL
  const params = useParams();
  const keyword = params.keyword || ""; // Accès au paramètre spécifique "keyword"
  const pageNumber = params.pageNumber || 1; // Accès au paramètre spécifique "pageNumber"
  const category = params.category || ""; // Ajout de la catégorie

  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainCategories
          keyword={keyword}
          pageNumber={pageNumber}
          category={category}
        />
      </main>
    </div>
  );
};

export default CategoriesScreen;
