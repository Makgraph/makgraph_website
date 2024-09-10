import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import MainEditAddCategorie from "../components/Categories/MainEditCategorie";

const CategorieEditScreen = () => {
  const { id } = useParams(); // Récupérer le paramètre d'URL 'id'
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainEditAddCategorie categoryId={id} />
      </main>
    </div>
  );
};

export default CategorieEditScreen;
