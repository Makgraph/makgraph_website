import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainOrders from "../components/Orders/MainOrders";
import MainUsers from "../components/Users/MainUsers";

const UsersScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <MainUsers />
      </main>
    </div>
  );
};

export default UsersScreen;
