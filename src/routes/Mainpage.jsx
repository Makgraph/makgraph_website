import React from "react";
import Home from "./home/home";
import Gallery from "./Gallery";
import Shop from "./shop/Shop";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";

export default function mainPage() {
  return (
    <div>
      <Header />
      <Home />
      <Gallery />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
