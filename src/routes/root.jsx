import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./home/home";

export default function root() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
