import React, { useEffect, useState } from "react";
import products from "../data/products.js";
// import { ShopContext } from "../context/ShopContext.jsx";
// import CartItem from "../components/shopComponent/CartItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Star, StarHalf, UserCircle } from "phosphor-react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Header from "../components/headerComponent/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  updateCartQuantity,
} from "../redux/Cart/cartSlice.js";
// import {
//   removeItemFromCart,
//   clearCart,
//   fetchProductById,
// } from "../redux/Cart/cartSlice.js";

import {
  ArrowArcLeft,
  ArrowCircleDownLeft,
  ArrowCircleLeft,
} from "phosphor-react";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const { productId } = useParams();

  // Calculate total quantity and total price
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // const qty = location ? Number(location.search.split("=")[1]) : 1;
  // const location = useLocation();
  // const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const handleQuantityChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateCartQuantity({ productId, quantity: newQuantity }));
  };

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout...");
    // Implement redirect to checkout page or any further action
  };

  return (
    <div className="">
      <Header />
      <div className="pt-20 md:pt-28 flex mx-7 md:mx-6 lg:mx-[156px] xl:px-[200px] border-t border-primary/20 flex-col justify-center items-center">
        <div className="absolute top-24 left-6 cursor-pointer">
          <Link to="/shop">
            <ArrowCircleLeft size={24} />
          </Link>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center"></div>
        {cartItems.length === 0 ? (
          <div className="m-20">
            <h1 className="text-[18px] md:text-[32px]">
              Votre Panier est vide !
            </h1>
          </div>
        ) : (
          <>
            <div className="bg-primary/40 px-4 py-1 w-[100%]">
              <div className="font-normal flex justify-center text-[10px] md:text-[20px]">
                Total produit dans le panier ({cartItems.length})
              </div>
            </div>
            <ul className="w-[100%]">
              {cartItems.map((item) => (
                <div className=" w-[100%]  h-[100%] md:h-[150px] shadow-[0_3px_15px_rgba(0,0,0,0.3)] rounded-[10px] px-6 py-2 my-4">
                  <div className="absolute md:left-[150px] md:top-40">
                    <button
                      onClick={() => handleRemoveFromCart(item.product._id)}
                      className="bg-error h-[18px] w-[18px] md:h-5 md:w-5 rounded-[50%]  "
                    >
                      <span className="text-white text-[10px] md:text-[11px] md:pb-2 flex justify-center items-center">
                        {/* <X size={32} color="#fcfcfc" weight="bold" /> */}
                        {/* <FontAwesomeIcon
                          icon="fa-sharp fa-solid fa-xmark"
                          size="sm"
                        /> */}
                        *
                      </span>
                    </button>
                  </div>
                  <li
                    className="h-[100%] w-[100%] flex justify-between items-center"
                    key={item.product._id}
                  >
                    <div>
                      <img
                        src={item.product.image}
                        className="w-[105px] rounded-[20px]"
                      />
                    </div>
                    <Link to={`/products/${productId}`}>
                      <h5 className="">
                        <b>{item.product.name}</b>
                      </h5>
                    </Link>

                    <div className="">
                      <div>
                        <h6>QUANTITÉ</h6>
                      </div>
                      <select
                        className="bg-[#cbd5e1] w-28 h-8"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.product._id, e)
                        }
                      >
                        {[...Array(item.product.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div className="">
                      <div>
                        <h6>PRIX</h6>
                      </div>
                      <div>
                        <b>$ {item.product.price}</b>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </>
        )}
      </div>
      {cartItems.length === 0 ? (
        ""
      ) : (
        <>
          <div className="p-screen flex justify-end mx-6">
            {/* <p>
                Total Quantité: <b>{totalQuantity} </b>
              </p> */}
            <div className="">
              TOTAL : <b>${totalPrice.toFixed(2)} </b>
            </div>
          </div>
          <div className="p-screen flex justify-between my-4 mx-40 border-t-[1px] border-primary hover:text-primary">
            <span className="my-2 bg-secondary rounded-md flex justify-center focus:bg-[#22c55e]  cursor-pointertransition hover:bg-onPrimary  text-white hover:text-primary">
              <button
                className="px-16 py-1 transition focus:bg-[#22c55e] focus:rounded-md focus:text-onPrimary"
                onClick={handleContinueShopping}
              >
                Continuer vos achats
              </button>
            </span>
            <span className="my-2 bg-primary rounded-md flex justify-center focus:bg-[#22c55e]  cursor-pointertransition hover:bg-onPrimary  text-white hover:text-primary">
              <button
                className="px-16 py-1 transition focus:bg-[#22c55e] focus:rounded-md focus:text-onPrimary"
                onClick={handleCheckout}
              >
                Passer à la caisse
              </button>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
