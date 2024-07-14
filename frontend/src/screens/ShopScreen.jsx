import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductList,
} from "../redux/products/productsSlice";
import { useLocation } from "react-router-dom";
import NavBarShop from "../components/shopComponent/NavBarShop.jsx";
import ShopItems from "../components/shopComponent/ShopItems.jsx";
import Header from "../components/headerComponent/Header.jsx";
import Footer from "../components/Footer.jsx";

const ShopScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = searchParams.get("pageNumber") || 1;

  useEffect(() => {
    dispatch(fetchProducts(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div>
      <Header />
      <div className="pt-20 md:pt-24">
        <NavBarShop />
        <ShopItems />
        <Footer />
      </div>
    </div>
  );
};

export default ShopScreen;
