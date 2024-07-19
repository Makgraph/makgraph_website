import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainEditAddProduct from "../components/Products/MainEditProduct";
import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
  const { id } = useParams(); // Récupérer le paramètre d'URL 'id'
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainEditAddProduct productId={id} />
      </main>
    </div>
  );
};

export default ProductEditScreen;
