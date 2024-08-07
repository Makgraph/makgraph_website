import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/Home/Main";

const HomeScreen = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="w-full">
        <Header />
        <Main />
      </main>
    </div>
  );
};

export default HomeScreen;
