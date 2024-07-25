import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainOrderDetail from "../components/Orders/MainOrderDetail";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const OrderDetailScreen = () => {
  const { id } = useParams();

  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainOrderDetail orderId={id} />
      </main>
    </div>
  );
};

export default OrderDetailScreen;
