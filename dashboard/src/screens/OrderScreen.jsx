import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainOrders from "../components/Orders/MainOrders";

const OrderScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainOrders />
      </main>
    </div>
  );
};

export default OrderScreen;
