import React, { useContext } from "react";
import { PRODUCTS } from "../../product.js";
import { ShopContext } from "../../context/ShopContext.jsx";
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

const Cart = () => {
  const { cartItems, getTotalCarAmount } = useContext(ShopContext);
  const totalAmount = getTotalCarAmount();

  const navigate = useNavigate();

  return (
    <div className="">
      <Header />
      <div className="pt-20 md:pt-28 flex mx-7 md:mx-6 lg:mx-[156px] xl:px-[200px] border-t border-primary/20 flex-col justify-center items-center">
        {totalAmount > 0 ? (
          <div className="mt-4">
            <h4 className="text-[16px] md:text-[22px]">
              <b>Articles de votre panier</b>
            </h4>
          </div>
        ) : (
          ""
        )}

        <div className="w-[100%] flex flex-col items-center justify-center">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="caisse">
            <h5 className="ml-[10px]">
              <b>Sous-total: $ {totalAmount}</b>
            </h5>
            <button
              className="mb-8 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 w-[150px] h-[50px] bg-primary rounded-[8px] m-[10px] cursor-pointer "
              onClick={() => navigate("/")}
            >
              <h6 className=" text-onPrimary ">Continuer vos achats</h6>
            </button>
            <button className="mb-8 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 w-[150px] h-[50px] bg-primary rounded-[8px] m-[10px] cursor-pointer ">
              <h6 className=" text-onPrimary ">Caisse</h6>
            </button>
          </div>
        ) : (
          <div className="m-20">
            <h1 className="text-[18px] md:text-[32px]">
              Votre Panier est vide !
            </h1>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
