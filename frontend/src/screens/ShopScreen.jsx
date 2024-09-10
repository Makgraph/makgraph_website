import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductList,
} from "../redux/products/productsSlice";
import { useLocation, useParams } from "react-router-dom";
import NavBarShop from "../components/shopComponent/NavBarShop.jsx";
import ShopItems from "../components/shopComponent/ShopItems.jsx";
import Header from "../components/headerComponent/Header.jsx";
import Footer from "../components/Footer.jsx";

const ShopScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const keyword = params.keyword; // Accès au paramètre spécifique "keyword"
  const pageNumber = params.pageNumber; // Accès au paramètre spécifique "pageNumber"

  useEffect(() => {
    dispatch(fetchProducts({ keyword, pageNumber }));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <Header keyword={keyword} />
      <div className="p-screen pt-16 sm:pt-20 md:pt-28">
        <NavBarShop />
        <ShopItems keyword={keyword} pageNumber={pageNumber} />
      </div>
      <Footer />
    </div>
  );
};

export default ShopScreen;
