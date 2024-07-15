import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainOrderDetail from "../components/Orders/MainOrderDetail";

const OrderDetailScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainOrderDetail />
      </main>
    </div>
  );
};

export default OrderDetailScreen;
