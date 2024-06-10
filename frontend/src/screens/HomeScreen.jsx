import React from "react";
// import black_Tshirt_2 from "../../assets/black_t-shirt_2.png";
// import whiteTshirt from "../../assets/white_t-shirt_2.png";
// import blueTshirt from "../../assets/blue_t-shirt_1.jpg";
// // import Header from "../Header.jsx";

// import heroBg from "../../assets/hero_bg.png";
// import Cart from "../../routes/shop/Cart.jsx";
// import Shop from "../../routes/shop/Shop.jsx";
import Header from "../components/headerComponent/Header";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/homeComponent/HeroSection";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}
